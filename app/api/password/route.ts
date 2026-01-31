import { NextRequest, NextResponse } from 'next/server';
import { Api } from 'telegram';
import { computeCheck } from 'telegram/Password';
import { getSession, deleteSession } from '@/lib/sessions';

export async function POST(request: NextRequest) {
  try {
    const { sessionId, password } = await request.json();

    if (!sessionId || !password) {
      return NextResponse.json({ error: 'Session ID and password are required' }, { status: 400 });
    }

    const authSession = getSession(sessionId);
    if (!authSession) {
      return NextResponse.json({ error: 'Session expired. Please start again.' }, { status: 400 });
    }

    const { client } = authSession;

    try {
      // Get password info
      const passwordInfo = await client.invoke(new Api.account.GetPassword());

      // Compute password check
      const passwordCheck = await computeCheck(passwordInfo, password);

      // Check password
      await client.invoke(
        new Api.auth.CheckPassword({
          password: passwordCheck,
        })
      );

      // Success - get session string
      const sessionString = client.session.save() as unknown as string;
      deleteSession(sessionId);

      return NextResponse.json({ session: sessionString });
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Unknown error';

      if (errorMessage.includes('PASSWORD_HASH_INVALID')) {
        return NextResponse.json({ error: 'Invalid password. Please try again.' }, { status: 400 });
      }

      throw error;
    }
  } catch (error) {
    console.error('Password verification error:', error);
    return NextResponse.json({ error: 'Password verification failed. Please try again.' }, { status: 500 });
  }
}
