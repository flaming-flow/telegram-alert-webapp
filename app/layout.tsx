import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Thread Hunter — Telegram Channel Monitoring',
  description: 'Never miss an important message. Monitor Telegram channels by keywords.',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
