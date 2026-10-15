import { NextRequest, NextResponse } from 'next/server';
import { recordServerEvent } from '@/lib/analytics/collector';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { path, referrer, userAgent, sessionId, durationSeconds } = body;

    let canal: 'organica' | 'direto' | 'redes' | 'referencia' | 'campanhas' | 'outros' = 'direto';
    let referrerDomain = '';

    if (referrer) {
      try {
        const refUrl = new URL(referrer);
        referrerDomain = refUrl.hostname.replace('www.', '');

        if (/google|bing|yahoo|duckduckgo|ecosia|yandex/i.test(referrerDomain)) {
          canal = 'organica';
        } else if (/facebook|instagram|twitter|x\.com|youtube|linkedin|whatsapp|t\.me/i.test(referrerDomain)) {
          canal = 'redes';
        } else if (/utm_|campaign/i.test(refUrl.search)) {
          canal = 'campanhas';
        } else {
          canal = 'referencia';
        }
      } catch {
        canal = 'outros';
      }
    }

    const ua = userAgent || req.headers.get('user-agent') || '';
    let device: 'telemovel' | 'desktop' | 'tablet' = 'desktop';
    if (/tablet|ipad/i.test(ua)) {
      device = 'tablet';
    } else if (/mobile|iphone|android/i.test(ua)) {
      device = 'telemovel';
    }

    let os = 'Outros';
    if (/android/i.test(ua)) os = 'Android';
    else if (/iphone|ipad|ipod/i.test(ua)) os = 'iOS';
    else if (/windows/i.test(ua)) os = 'Windows';
    else if (/macintosh|mac os x/i.test(ua)) os = 'macOS';
    else if (/linux/i.test(ua)) os = 'Linux';

    let browser = 'Outros';
    if (/chrome|crios/i.test(ua) && !/edg/i.test(ua)) browser = 'Chrome';
    else if (/safari/i.test(ua) && !/chrome/i.test(ua)) browser = 'Safari';
    else if (/firefox|fxios/i.test(ua)) browser = 'Firefox';
    else if (/edg/i.test(ua)) browser = 'Edge';
    else if (/samsungbrowser/i.test(ua)) browser = 'Samsung Internet';

    const countryCode = req.headers.get('cf-ipcountry') || req.headers.get('x-vercel-ip-country') || 'AO';
    const city = req.headers.get('cf-ipcity') || req.headers.get('x-vercel-ip-city') || 'Luanda';

    recordServerEvent({
      path: path || '/',
      referrer: referrer || '',
      canal,
      referrerDomain,
      device,
      os,
      browser,
      country: countryCode === 'AO' ? 'Angola' : countryCode === 'PT' ? 'Portugal' : countryCode,
      countryCode,
      city,
      sessionId: sessionId || 'anon-session',
      durationSeconds: typeof durationSeconds === 'number' ? durationSeconds : undefined,
    });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false }, { status: 400 });
  }
}
