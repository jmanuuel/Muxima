'use client';

import { useEffect, useRef } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

export default function AnalyticsTracker() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const lastPathRef = useRef<string>('');
  const entryTimeRef = useRef<number>(Date.now());

  useEffect(() => {
    // Não rastrear navegações dentro da área de administração
    if (!pathname || pathname.startsWith('/admin')) {
      return;
    }

    // Respeitar cabeçalho Do Not Track se o visitante o configurou expressamente
    if (typeof window !== 'undefined' && navigator.doNotTrack === '1') {
      return;
    }

    const fullPath = searchParams && searchParams.toString() ? `${pathname}?${searchParams.toString()}` : pathname;
    if (fullPath === lastPathRef.current) return;
    lastPathRef.current = fullPath;

    // Gerar ou recuperar identificador anónimo de sessão (apenas temporário no browser)
    let sessionId = '';
    try {
      sessionId = sessionStorage.getItem('muxima_sid') || '';
      if (!sessionId) {
        sessionId = `sess_${Date.now()}_${Math.random().toString(36).substring(2, 8)}`;
        sessionStorage.setItem('muxima_sid', sessionId);
      }
    } catch {
      sessionId = 'sess_temp';
    }

    const payload = {
      path: fullPath,
      referrer: typeof document !== 'undefined' ? document.referrer : '',
      userAgent: typeof navigator !== 'undefined' ? navigator.userAgent : '',
      sessionId,
      timestamp: Date.now(),
    };

    // Envio não bloqueante via sendBeacon ou fetch assíncrono em idle
    const sendData = () => {
      try {
        if (typeof navigator !== 'undefined' && 'sendBeacon' in navigator) {
          const blob = new Blob([JSON.stringify(payload)], { type: 'application/json' });
          navigator.sendBeacon('/api/analytics/track', blob);
        } else {
          fetch('/api/analytics/track', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload),
            keepalive: true,
          }).catch(() => {});
        }
      } catch {
        // Silêncio em caso de erro de rede para não impactar o peregrino
      }
    };

    if (typeof window !== 'undefined' && 'requestIdleCallback' in window) {
      window.requestIdleCallback(sendData);
    } else {
      setTimeout(sendData, 300);
    }

    entryTimeRef.current = Date.now();
  }, [pathname, searchParams]);

  return null;
}
