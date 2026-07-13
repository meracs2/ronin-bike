import './globals.css';
import type { Metadata } from 'next';
import { CartProvider } from '../context/CartContext'; 
import { Toaster } from 'sonner';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Ronin Bike | Ciclismo Profesional',
  description: 'Tu sitio web de ciclismo de confianza en Córdoba',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      {/* Aplicamos el color crema base en el body */}
      <body className="bg-[#e6dec8] text-[#2d2621] min-h-screen flex flex-col">
        <CartProvider>
          {/* Navbar arriba */}
          <Navbar />
          
          {/* Contenido principal */}
          <main className="flex-grow">
            {children}
          </main>
          
          {/* Footer abajo */}
          <Footer />

          <Toaster 
            position="bottom-right" 
            toastOptions={{
              style: {
                background: '#5e5345', // Color marrón Ronin
                color: '#ffffff',
                border: '1px solid #dccab0'
              },
            }}
          />
        </CartProvider>
      </body>
    </html>
  );
}