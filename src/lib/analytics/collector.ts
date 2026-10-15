import fs from 'node:fs';
import path from 'node:path';

export interface RawTrackEvent {
  id: string;
  timestamp: number;
  path: string;
  referrer: string;
  canal: 'organica' | 'direto' | 'redes' | 'referencia' | 'campanhas' | 'outros';
  referrerDomain?: string;
  device: 'telemovel' | 'desktop' | 'tablet';
  os: string;
  browser: string;
  country: string;
  countryCode: string;
  city: string;
  sessionId: string;
  durationSeconds?: number;
}

const DATA_DIR = path.join(process.cwd(), 'data');
const EVENTS_FILE = path.join(DATA_DIR, 'telemetria.json');

let inMemoryEvents: RawTrackEvent[] = [];
let eventsLoaded = false;

function loadPersistedEvents(): void {
  if (eventsLoaded) return;
  try {
    if (fs.existsSync(EVENTS_FILE)) {
      const content = fs.readFileSync(EVENTS_FILE, 'utf-8');
      inMemoryEvents = JSON.parse(content);
    }
  } catch {
    inMemoryEvents = [];
  }
  eventsLoaded = true;
}

function persistEvents(): void {
  try {
    if (!fs.existsSync(DATA_DIR)) {
      fs.mkdirSync(DATA_DIR, { recursive: true });
    }
    const trimmed = inMemoryEvents.slice(-5000);
    fs.writeFileSync(EVENTS_FILE, JSON.stringify(trimmed, null, 2), 'utf-8');
  } catch {
    // Falha silenciosa se não for possível gravar
  }
}

export function recordServerEvent(event: Omit<RawTrackEvent, 'id' | 'timestamp'>): void {
  loadPersistedEvents();
  const fullEvent: RawTrackEvent = {
    ...event,
    id: `${Date.now()}-${Math.random().toString(36).substring(2, 9)}`,
    timestamp: Date.now(),
  };

  inMemoryEvents.push(fullEvent);
  persistEvents();
}

export function getServerEventsCount(): number {
  loadPersistedEvents();
  return inMemoryEvents.length;
}
