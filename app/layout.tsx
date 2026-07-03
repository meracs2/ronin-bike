import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ronin Bike',
  description: 'Tu sitio web de ciclismo',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="bg-[#0d0e12] text-white">
        {children}
      </body>
    </html>
  );
}