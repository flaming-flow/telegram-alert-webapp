import { TelegramClient } from 'telegram';
import { StringSession } from 'telegram/sessions';

interface AuthSession {
  client: TelegramClient;
  phoneCodeHash: string;
  phone: string;
  createdAt: number;
}

// In-memory session storage with TTL
const sessions = new Map<string, AuthSession>();

// Clean up old sessions every 5 minutes
const SESSION_TTL = 10 * 60 * 1000; // 10 minutes

setInterval(() => {
  const now = Date.now();
  for (const [id, session] of sessions.entries()) {
    if (now - session.createdAt > SESSION_TTL) {
      session.client.disconnect().catch(() => {});
      sessions.delete(id);
    }
  }
}, 5 * 60 * 1000);

export function createSession(id: string, client: TelegramClient, phone: string, phoneCodeHash: string): void {
  sessions.set(id, {
    client,
    phoneCodeHash,
    phone,
    createdAt: Date.now(),
  });
}

export function getSession(id: string): AuthSession | undefined {
  return sessions.get(id);
}

export function deleteSession(id: string): void {
  const session = sessions.get(id);
  if (session) {
    session.client.disconnect().catch(() => {});
    sessions.delete(id);
  }
}

export function generateSessionId(): string {
  return Math.random().toString(36).substring(2) + Date.now().toString(36);
}

export async function createTelegramClient(): Promise<TelegramClient> {
  const apiId = parseInt(process.env.TELEGRAM_API_ID || '0');
  const apiHash = process.env.TELEGRAM_API_HASH || '';

  const client = new TelegramClient(
    new StringSession(''),
    apiId,
    apiHash,
    {
      connectionRetries: 5,
      deviceModel: 'Thread Hunter Web',
      systemVersion: 'Web',
      appVersion: '1.0.0',
    }
  );

  await client.connect();
  return client;
}
