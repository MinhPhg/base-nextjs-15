import type { Metadata } from 'next';
import '@/styles/global.scss';
import { NextIntlClientProvider } from 'next-intl';
import { getLocale, getMessages } from 'next-intl/server';
import React from 'react';

import ReduxProvider from '@/providers/ReduxProvider';
import { geistMono, geistSans } from '@/styles/fonts';

export const metadata: Metadata = {
  title: 'KLP',
  description: 'FLP description',
};

export default async function RootLayout({
  children,
}: React.PropsWithChildren) {
  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <html lang={'en'}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NextIntlClientProvider messages={messages}>
          <ReduxProvider>{children}</ReduxProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
