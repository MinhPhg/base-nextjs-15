import localFont from 'next/font/local';

export const geistSans = localFont({
  src: './font-files/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
export const geistMono = localFont({
  src: './font-files/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});
