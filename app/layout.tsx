import './globals.css';
import type { Metadata } from 'next';
// ASEGURATE DE QUE ESTA RUTA SEA CORRECTA SEGUN TU CARPETA
import { CartProvider } from '../context/CartContext'; 
import { Toaster } from 'sonner';

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
        <CartProvider>
          {children}
          <Toaster 
            position="bottom-right" 
            toastOptions={{
              style: {
                background: '#171717',
                color: '#ffffff',
                border: '1px solid #333'
              },
            }}
          />
        </CartProvider>
      </body>
    </html>
  );
}