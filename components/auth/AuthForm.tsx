'use client';

import { useState, useEffect } from 'react';

interface AuthDict {
  title: string;
  subtitle: string;
  info: string;
  phone: {
    label: string;
    placeholder: string;
    hint: string;
  };
  code: {
    label: string;
    placeholder: string;
    hint: string;
  };
  password: {
    label: string;
    placeholder: string;
    hint: string;
  };
  buttons: {
    sendCode: string;
    verify: string;
    submit: string;
    back: string;
  };
  success: {
    title: string;
    sessionLabel: string;
    copy: string;
    copied: string;
    sendToBot: string;
    download: string;
  };
  errors: {
    phoneRequired: string;
    phoneFormat: string;
    codeRequired: string;
    passwordRequired: string;
    sessionExpired: string;
  };
}

interface AuthFormProps {
  dict: AuthDict;
}

type Step = 'phone' | 'code' | 'password' | 'success';

export default function AuthForm({ dict }: AuthFormProps) {
  const [step, setStep] = useState<Step>('phone');
  const [phone, setPhone] = useState('');
  const [code, setCode] = useState('');
  const [password, setPassword] = useState('');
  const [sessionId, setSessionId] = useState('');
  const [sessionString, setSessionString] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);
  const [isWebApp, setIsWebApp] = useState(false);

  useEffect(() => {
    // Check if running in Telegram WebApp
    const tg = (window as unknown as { Telegram?: { WebApp?: { initData?: string; expand?: () => void; ready?: () => void } } }).Telegram?.WebApp;
    if (tg?.initData) {
      setIsWebApp(true);
      // Expand to full screen
      tg.expand?.();
      tg.ready?.();
    }

    // Restore state from localStorage (for when user returns after getting code)
    const savedPhone = localStorage.getItem('auth_phone');
    const savedSessionId = localStorage.getItem('auth_sessionId');
    if (savedPhone && savedSessionId) {
      setPhone(savedPhone);
      setSessionId(savedSessionId);
      setStep('code');
    }
  }, []);

  const handlePhoneSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!phone.trim()) {
      setError(dict.errors.phoneRequired);
      return;
    }

    if (!phone.startsWith('+')) {
      setError(dict.errors.phoneFormat);
      return;
    }

    setLoading(true);
    try {
      const res = await fetch('/api/init', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ phone }),
      });
      const data = await res.json();

      if (data.error) {
        setError(data.error);
      } else {
        setSessionId(data.sessionId);
        // Save to localStorage so user can return after getting code
        localStorage.setItem('auth_phone', phone);
        localStorage.setItem('auth_sessionId', data.sessionId);
        setStep('code');
      }
    } catch {
      setError('Network error. Please try again.');
    }
    setLoading(false);
  };

  const handleCodeSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!code.trim()) {
      setError(dict.errors.codeRequired);
      return;
    }

    setLoading(true);
    try {
      const res = await fetch('/api/code', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ sessionId, code }),
      });
      const data = await res.json();

      if (data.error) {
        setError(data.error);
      } else if (data.needs2FA) {
        setStep('password');
      } else {
        setSessionString(data.session);
        // Clear saved state on success
        localStorage.removeItem('auth_phone');
        localStorage.removeItem('auth_sessionId');
        setStep('success');
      }
    } catch {
      setError('Network error. Please try again.');
    }
    setLoading(false);
  };

  const handlePasswordSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!password) {
      setError(dict.errors.passwordRequired);
      return;
    }

    setLoading(true);
    try {
      const res = await fetch('/api/password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ sessionId, password }),
      });
      const data = await res.json();

      if (data.error) {
        setError(data.error);
      } else {
        setSessionString(data.session);
        // Clear saved state on success
        localStorage.removeItem('auth_phone');
        localStorage.removeItem('auth_sessionId');
        setStep('success');
      }
    } catch {
      setError('Network error. Please try again.');
    }
    setLoading(false);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(sessionString);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const downloadSession = () => {
    const blob = new Blob([sessionString], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'telegram-session.txt';
    a.click();
    URL.revokeObjectURL(url);
  };

  const sendToBot = () => {
    const tg = (window as unknown as { Telegram?: { WebApp?: { sendData: (data: string) => void; close: () => void } } }).Telegram?.WebApp;
    if (tg && sessionString) {
      tg.sendData(sessionString);
      tg.close();
    }
  };

  const getStepNumber = () => {
    switch (step) {
      case 'phone': return 1;
      case 'code': return 2;
      case 'password': return 2;
      case 'success': return 3;
    }
  };

  return (
    <div className="card p-6 w-full max-w-sm mx-auto">
      <div className="text-center mb-6">
        <h1 className="text-xl font-semibold text-[var(--text-primary)] mb-1">
          {dict.title}
        </h1>
        <p className="text-sm text-[var(--text-secondary)]">
          {dict.subtitle}
        </p>
      </div>

      {/* Step indicator */}
      <div className="flex justify-center gap-2 mb-6">
        {[1, 2, 3].map((n) => (
          <div
            key={n}
            className={`w-2 h-2 rounded-full transition-colors ${
              n < getStepNumber()
                ? 'bg-green-500'
                : n === getStepNumber()
                ? 'bg-[var(--accent)]'
                : 'bg-[var(--bg-tertiary)]'
            }`}
          />
        ))}
      </div>

      {/* Info box */}
      {step !== 'success' && (
        <div className="info-box mb-5 text-sm">
          {dict.info}
        </div>
      )}

      {/* Error message */}
      {error && (
        <div className="error-box mb-5">
          {error}
        </div>
      )}

      {/* Phone step */}
      {step === 'phone' && (
        <form onSubmit={handlePhoneSubmit}>
          <div className="mb-5">
            <label className="block text-sm font-medium text-[var(--text-secondary)] mb-2">
              {dict.phone.label}
            </label>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder={dict.phone.placeholder}
              autoFocus
            />
            <p className="hint mt-2">{dict.phone.hint}</p>
          </div>
          <button type="submit" className="btn-primary w-full" disabled={loading}>
            {loading ? <span className="spinner" /> : null}
            {dict.buttons.sendCode}
          </button>
        </form>
      )}

      {/* Code step */}
      {step === 'code' && (
        <form onSubmit={handleCodeSubmit}>
          <div className="mb-3 text-center text-sm text-[var(--text-secondary)]">
            {phone}
          </div>
          <div className="mb-5">
            <label className="block text-sm font-medium text-[var(--text-secondary)] mb-2">
              {dict.code.label}
            </label>
            <input
              type="text"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              placeholder={dict.code.placeholder}
              maxLength={5}
              className="text-center text-xl tracking-[0.3em]"
              autoFocus
            />
            <p className="hint mt-2">{dict.code.hint}</p>
          </div>
          <button type="submit" className="btn-primary w-full mb-2" disabled={loading}>
            {loading ? <span className="spinner" /> : null}
            {dict.buttons.verify}
          </button>
          <button
            type="button"
            onClick={() => {
              localStorage.removeItem('auth_phone');
              localStorage.removeItem('auth_sessionId');
              setPhone('');
              setSessionId('');
              setCode('');
              setStep('phone');
            }}
            className="btn-secondary w-full"
          >
            {dict.buttons.back}
          </button>
        </form>
      )}

      {/* Password step */}
      {step === 'password' && (
        <form onSubmit={handlePasswordSubmit}>
          <div className="mb-5">
            <label className="block text-sm font-medium text-[var(--text-secondary)] mb-2">
              {dict.password.label}
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder={dict.password.placeholder}
              autoFocus
            />
            <p className="hint mt-2">{dict.password.hint}</p>
          </div>
          <button type="submit" className="btn-primary w-full" disabled={loading}>
            {loading ? <span className="spinner" /> : null}
            {dict.buttons.submit}
          </button>
        </form>
      )}

      {/* Success step */}
      {step === 'success' && (
        <div>
          <div className="success-box mb-5 text-center">
            {dict.success.title}
          </div>

          <label className="block text-sm font-medium text-[var(--text-secondary)] mb-2">
            {dict.success.sessionLabel}
          </label>
          <div className="bg-[var(--bg-tertiary)] p-3 rounded-lg mb-5 font-mono text-xs break-all max-h-32 overflow-auto text-[var(--text-secondary)]">
            {sessionString}
          </div>

          <div className="space-y-2">
            <button onClick={copyToClipboard} className="btn-primary w-full">
              {copied ? dict.success.copied : dict.success.copy}
            </button>

            {isWebApp && (
              <button
                onClick={sendToBot}
                className="w-full py-3 px-4 rounded-xl font-medium text-sm text-white transition-all hover:opacity-90"
                style={{ background: 'linear-gradient(135deg, #2AABEE 0%, #229ED9 100%)' }}
              >
                {dict.success.sendToBot}
              </button>
            )}

            <button onClick={downloadSession} className="btn-secondary w-full">
              {dict.success.download}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
