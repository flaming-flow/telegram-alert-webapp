import { NextRequest, NextResponse } from 'next/server';
import { Api } from 'telegram';
import { getSession, deleteSession } from '@/lib/sessions';

export async function POST(request: NextRequest) {
  try {
    const { sessionId, code } = await request.json();

    if (!sessionId || !code) {
      return NextResponse.json({ error: 'Session ID and code are required' }, { status: 400 });
    }

    const authSession = getSession(sessionId);
    if (!authSession) {
      return NextResponse.json({ error: 'Session expired. Please start again.' }, { status: 400 });
    }

    const { client, phone, phoneCodeHash } = authSession;

    try {
      await client.invoke(
        new Api.auth.SignIn({
          phoneNumber: phone,
          phoneCodeHash: phoneCodeHash,
          phoneCode: code,
        })
      );

      // Success - get session string
      const sessionString = client.session.save() as unknown as string;
      deleteSession(sessionId);

      return NextResponse.json({ session: sessionString });
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Unknown error';

      // Need 2FA password
      if (errorMessage.includes('SESSION_PASSWORD_NEEDED')) {
        return NextResponse.json({ needs2FA: true });
      }

      if (errorMessage.includes('PHONE_CODE_INVALID')) {
        return NextResponse.json({ error: 'Invalid code. Please try again.' }, { status: 400 });
      }
      if (errorMessage.includes('PHONE_CODE_EXPIRED')) {
        deleteSession(sessionId);
        return NextResponse.json({ error: 'Code expired. Please start again.' }, { status: 400 });
      }

      throw error;
    }
  } catch (error) {
    console.error('Code verification error:', error);
    return NextResponse.json({ error: 'Verification failed. Please try again.' }, { status: 500 });
  }
}
