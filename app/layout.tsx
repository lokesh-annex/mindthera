import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mindthera - Psychology and Counseling',
  description:
    'Professional psychology and counseling services to help you achieve mental wellness and personal growth',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* ✅ Google Fonts */}
        <link
          href="https://fonts.googleapis.com/css2?family=Allison:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,200;1,300;1,400;1,500;1,600;1,700;1,800&display=swap"
          rel="stylesheet"
        />
        {/* ✅ Separate Jost font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Jost:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,200;1,300;1,400;1,500;1,600;1,700;1,800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
