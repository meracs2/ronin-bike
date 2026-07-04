"use client";
import { useState } from 'react';
import Image from 'next/image';
import { Search, Menu, X } from 'lucide-react';
import { useCart } from '../context/CartContext';
import CartSidebar from './CartSidebar';

export default function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { cart } = useCart();

  // Links actualizados: Agregamos INICIO al principio
  const links = [
    { name: 'INICIO', href: '/' },
    { name: 'PRODUCTOS', href: '/productos' },
    { name: 'ARMA TU BICI', href: '/arma-tu-bici' },
    { name: 'CONTACTO', href: '/contacto' },
  ];

  return (
    <>
      <nav className="w-full border-b border-[#b8a68d]" style={{ backgroundColor: '#dccab0' }}>
        <div className="flex flex-col md:flex-row items-center justify-between px-4 md:px-8 py-4 max-w-7xl mx-auto gap-4">
          <div className="flex items-center justify-between w-full md:w-auto">
            <button className="md:hidden p-2 text-[#2d2621]" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
            <div className="flex items-center gap-3">
              <span className="font-black text-xl tracking-tighter text-[#2d2621] hidden md:block">RONIN-BIKE</span>
              <Image src="/ronin-logo-propio.png" alt="Logo" width={50} height={50} className="object-contain" />
              <span className="font-black text-xl tracking-tighter text-[#2d2621] md:hidden">RONIN-BIKE</span>
            </div>
            <div className="md:hidden w-10"></div> 
          </div>
          
          <div className="relative flex items-center w-full md:max-w-xs">
            <input 
              type="text" 
              className="pl-4 pr-10 py-2 rounded-full w-full border border-[#b8a68d] placeholder-[#5e5345] focus:outline-none" 
              style={{ backgroundColor: '#ffffff' }} 
              placeholder="Buscar productos..." 
            />
            <Search className="absolute right-3 w-4 h-4 text-[#5e5345]" />
          </div>
        </div>

        {/* FRANJA DE NAVEGACIÓN */}
        <div 
          className={`text-white py-4 ${isMenuOpen ? 'block' : 'hidden md:block'}`}
          style={{ 
            backgroundColor: '#5e5345', 
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.12'/%3E%3C/svg%3E")`
          }}
        >
          <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
            
            <div className="flex flex-col md:flex-row gap-3 w-full md:w-auto">
              {links.map((link) => (
                <a 
                  key={link.name}
                  href={link.href} 
                  className="px-5 py-2 rounded-full border border-[#dccab0] text-white hover:bg-[#dccab0] hover:text-[#111111] transition-all duration-300 font-bold text-xs tracking-widest text-center"
                >
                  {link.name}
                </a>
              ))}
            </div>
            
            <button 
              onClick={() => setIsSidebarOpen(true)} 
              className="px-6 py-2 rounded-full border border-[#dccab0] text-white hover:bg-[#dccab0] hover:text-[#111111] transition-all duration-300 font-bold text-xs tracking-widest uppercase"
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