import { NextRequest, NextResponse } from 'next/server';
import { Api } from 'telegram';
import { createTelegramClient, createSession, generateSessionId } from '@/lib/sessions';

export async function POST(request: NextRequest) {
  try {
    const { phone } = await request.json();

    if (!phone || typeof phone !== 'string') {
      return NextResponse.json({ error: 'Phone number is required' }, { status: 400 });
    }

    const client = await createTelegramClient();

    const result = await client.invoke(
      new Api.auth.SendCode({
        phoneNumber: phone,
        apiId: parseInt(process.env.TELEGRAM_API_ID || '0'),
        apiHash: process.env.TELEGRAM_API_HASH || '',
        settings: new Api.CodeSettings({
          allowFlashcall: false,
          currentNumber: false,
          allowAppHash: false,
        }),
      })
    );

    // Type guard for SentCode vs SentCodeSuccess
    if (!('phoneCodeHash' in result)) {
      return NextResponse.json({ error: 'Unexpected response from Telegram' }, { status: 500 });
    }

    const sessionId = generateSessionId();
    createSession(sessionId, client, phone, result.phoneCodeHash);

    return NextResponse.json({ sessionId });
  } catch (error) {
    console.error('Init error:', error);

    const errorMessage = error instanceof Error ? error.message : 'Unknown error';

    if (errorMessage.includes('PHONE_NUMBER_INVALID')) {
      return NextResponse.json({ error: 'Invalid phone number format' }, { status: 400 });
    }
    if (errorMessage.includes('PHONE_NUMBER_BANNED')) {
      return NextResponse.json({ error: 'This phone number is banned' }, { status: 400 });
    }
    if (errorMessage.includes('FLOOD')) {
      return NextResponse.json({ error: 'Too many attempts. Please try again later.' }, { status: 429 });
    }

    return NextResponse.json({ error: 'Failed to send code. Please try again.' }, { status: 500 });
  }
}
