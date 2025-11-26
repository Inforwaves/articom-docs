import { RootProvider } from 'fumadocs-ui/provider/next';
import './global.css';
import { Inter } from 'next/font/google';
import type { ReactNode } from 'react';
import type { Metadata } from 'next';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: {
    default: 'Articom - Intelligent Conversational Experiences',
    template: '%s | Articom',
  },
  description: 'Build intelligent conversational experiences with AI-powered agents and automation. Connect with customers across WhatsApp, Instagram, Slack, and more.',
  metadataBase: new URL(process.env.NEXT_PUBLIC_URL ?? 'https://docs.articom.ai'),
  openGraph: {
    title: 'Articom Documentation',
    description: 'Build intelligent conversational experiences with AI-powered agents',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Articom Documentation',
    description: 'Build intelligent conversational experiences with AI-powered agents',
  },
};

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen antialiased">
        <RootProvider
          search={{
            enabled: true,
          }}
        >{children}</RootProvider>
      </body>
    </html>
  );
}
