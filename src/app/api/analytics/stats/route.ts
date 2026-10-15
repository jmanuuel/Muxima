import { NextRequest, NextResponse } from 'next/server';
import { getAnalyticsSummary } from '@/lib/analytics/service';
import { getServerEventsCount } from '@/lib/analytics/collector';
import type { PeriodType } from '@/lib/analytics/types';

export const dynamic = 'force-dynamic';

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const period = (searchParams.get('period') || '30d') as PeriodType;
    const from = searchParams.get('from') || undefined;
    const to = searchParams.get('to') || undefined;

    const realCount = getServerEventsCount();
    const data = getAnalyticsSummary(period, from && to ? { from, to } : undefined, realCount);
    return NextResponse.json(data);
  } catch {
    return NextResponse.json(
      { error: 'Erro ao carregar estatísticas do Santuário' },
      { status: 500 }
    );
  }
}
