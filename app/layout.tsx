import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mindthera - Psychology and Counseling',
  description: 'Professional psychology and counseling services to help you achieve mental wellness and personal growth',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
