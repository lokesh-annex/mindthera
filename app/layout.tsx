import './globals.css';
import type { Metadata } from 'next';
import { Jost } from 'next/font/google';
import Header from "@/components/Header";
import Footer from '@/components/Footer';
import CookieConsent from '@/components/CookieConsent';
import { getHomePageMetadata } from '@/lib/metadata';

const jost = Jost({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700', '800'],
  style: ['normal', 'italic'],
  display: 'swap',
});

export async function generateMetadata(): Promise<Metadata> {
  const metadata = await getHomePageMetadata();
  
  return {
    title: metadata.title,
    description: metadata.description,
   
  };
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de" translate="no">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Allison&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Crimson+Pro:ital,wght@0,200..900;1,200..900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={jost.className}>
        <Header />
        {children}
        <Footer />
        <CookieConsent />
      </body>
    </html>
  );
}
