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
      <nav className="w-full bg-white border-b border-neutral-200">
        <div className="flex items-center justify-between px-8 py-4 max-w-7xl mx-auto gap-8">
          <div className="flex items-center gap-3">
            <Image src="/ronin-logo-propio.png" alt="Logo Ronin Bike" width={60} height={60} className="object-contain" />
            <span className="font-black text-xl tracking-tighter text-neutral-950">RONIN-BIKE</span>
          </div>
          <div className="relative flex items-center w-full max-w-xs">
            <input type="text" className="bg-neutral-100 pl-4 pr-10 py-2 rounded-full w-full border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-neutral-900" placeholder="Buscar productos..." />
            <Search className="absolute right-3 w-4 h-4 text-neutral-400" />
          </div>
        </div>
        <div className="bg-neutral-900 text-white">
          <div className="max-w-7xl mx-auto px-8 py-3 flex justify-between items-center">
            <div className="flex gap-8 font-medium text-sm tracking-wide">
              <a href="/productos" className="hover:text-red-500 transition-colors">PRODUCTOS</a>
              <a href="/taller" className="hover:text-red-500 transition-colors">TALLER</a>
              <a href="/nosotros" className="hover:text-red-500 transition-colors">NOSOTROS</a>
              <a href="/contacto" className="hover:text-red-500 transition-colors">CONTACTO</a>
            </div>
            <button onClick={() => setIsSidebarOpen(true)} className="bg-red-600 px-4 py-1 rounded-full text-xs font-bold hover:bg-red-700 transition-colors">
              MI PEDIDO {cart.length > 0 ? `(${cart.length})` : ''}
            </button>
          </div>
        </div>
      </nav>
      <CartSidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
    </>
  );
}