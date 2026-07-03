"use client";
import { useState } from 'react';
import Image from 'next/image';
import { Search } from 'lucide-react';
import { useCart } from '../context/CartContext';
import CartSidebar from './CartSidebar';

export default function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { cart } = useCart();

  return (
    <>
      {/* Navbar principal - Fondo Arena Fijo */}
      <nav className="w-full border-b border-[#b8a68d]" style={{ backgroundColor: '#dccab0' }}>
        
        {/* Contenedor Superior */}
        <div className="flex items-center justify-between px-8 py-4 max-w-7xl mx-auto gap-8">
          <div className="flex items-center gap-3">
            <Image src="/ronin-logo-propio.png" alt="Logo" width={60} height={60} className="object-contain" />
            <span className="font-black text-xl tracking-tighter text-[#2d2621]">RONIN-BIKE</span>
          </div>
          
          {/* Buscador - Forzado a color blanco */}
          <div className="relative flex items-center w-full max-w-xs">
            <input 
              type="text" 
              className="pl-4 pr-10 py-2 rounded-full w-full border border-[#b8a68d] placeholder-[#5e5345] focus:outline-none" 
              style={{ backgroundColor: '#ffffff' }} 
              placeholder="Buscar productos..." 
            />
            <Search className="absolute right-3 w-4 h-4 text-[#5e5345]" />
          </div>
        </div>

        {/* Franja de Navegación Negra */}
        <div className="bg-[#111111] text-white">
          <div className="max-w-7xl mx-auto px-8 py-3 flex justify-between items-center">
            <div className="flex gap-8 font-medium text-sm tracking-wide">
              <a href="/productos" className="hover:text-[#dccab0] transition-colors">PRODUCTOS</a>
              <a href="/taller" className="hover:text-[#dccab0] transition-colors">TALLER</a>
              <a href="/nosotros" className="hover:text-[#dccab0] transition-colors">NOSOTROS</a>
              <a href="/contacto" className="hover:text-[#dccab0] transition-colors">CONTACTO</a>
            </div>
            
            <button 
              onClick={() => setIsSidebarOpen(true)} 
              className="bg-white text-black px-4 py-1 rounded-full text-xs font-bold hover:bg-[#dccab0] transition-colors"
            >
              MI PEDIDO {cart.length > 0 ? `(${cart.length})` : ''}
            </button>
          </div>
        </div>
      </nav>
      <CartSidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
    </>
  );
}