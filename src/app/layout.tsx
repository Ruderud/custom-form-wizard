import { TopBar } from '@/components/client/TopBar';
import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const runtime = 'edge';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>Form Wizard Samples</title>
        <meta property="og:title" content="Form Wizard Samples" />
        <meta property="og:description" content="Rud's Form Wizard samples" />
        <meta property="og:url" content="https://form-wizard.rudbeckiaz.com" />
        <meta property="og:image" content="https://form-wizard.rudbeckiaz.com/images/meta-image.png" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
