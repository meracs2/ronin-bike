"use client";
import { useState } from 'react';
import Image from 'next/image';
import { Search, Menu, X, ChevronDown, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';
import CartSidebar from './CartSidebar';

export default function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { cart } = useCart();

  // Lista de categorías que coinciden con tus rutas dinámicas [slug]
  const categoriasMenu = [
    { name: 'Bicicletas Completas', href: '/productos/bicicletas' },
    { name: 'Componentes y Repuestos', href: '/productos/componentes' },
    { name: 'Accesorios', href: '/productos/accesorios' },
    { name: 'Indumentaria', href: '/productos/indumentaria' },
  ];

  return (
    <>
      <nav className="w-full border-b border-[#b8a68d] sticky top-0 z-50 shadow-sm" style={{ backgroundColor: '#dccab0' }}>
        {/* BARRA SUPERIOR PRINCIPAL */}
        <div className="flex flex-col md:flex-row items-center justify-between px-4 md:px-8 py-3 max-w-[1600px] mx-auto gap-4">
          <div className="flex items-center justify-between w-full md:w-auto">
            <button className="md:hidden p-2 text-[#2d2621]" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
            <div className="flex items-center gap-3">
              <Image src="/ronin-logo-propio.png" alt="Logo" width={45} height={45} className="object-contain" />
              <span className="font-black text-2xl tracking-tighter text-[#2d2621]">RONIN-BIKE</span>
            </div>
            {/* Carrito rápido visible solo en Mobile */}
            <button onClick={() => setIsSidebarOpen(true)} className="md:hidden relative p-2 text-[#2d2621]">
              <ShoppingBag size={24} />
              {cart.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-black text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full">
                  {cart.length}
                </span>
              )}
            </button>
          </div>
          
          {/* BARRA DE BÚSQUEDA ELÁSTICA */}
          <div className="relative flex items-center w-full md:max-w-md">
            <input 
              type="text" 
              className="pl-5 pr-12 py-2.5 rounded-full w-full border border-[#b8a68d] placeholder-[#5e5345] text-neutral-900 focus:outline-none focus:ring-2 focus:ring-[#5e5345]/50 text-sm" 
              style={{ backgroundColor: '#ffffff' }} 
              placeholder="Buscar bicicletas, componentes y más..." 
            />
            <Search className="absolute right-4 w-5 h-5 text-[#5e5345]" />
          </div>
        </div>

        {/* FRANJA DE NAVEGACIÓN INFERIOR (Estilo Textura Noise) */}
        <div 
          className={`text-white transition-all duration-300 ${isMenuOpen ? 'block' : 'hidden md:block'}`}
          style={{ 
            backgroundColor: '#5e5345', 
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.12'/%3E%3C/svg%3E")`
          }}
        >
          <div className="max-w-[1600px] mx-auto px-4 md:px-8 flex flex-col md:flex-row justify-between items-center py-2 gap-4">
            <div className="flex flex-col md:flex-row items-center gap-2 w-full md:w-auto">
              
              <a href="/" className="w-full md:w-auto px-5 py-2 rounded-full border border-transparent text-white hover:border-[#dccab0] hover:bg-[#dccab0]/10 transition-all text-xs font-bold tracking-widest text-center">
                INICIO
              </a>

              {/* CONTENEDOR INTERACTIVO CON HOVER (PRODUCTOS) */}
              <div className="relative group w-full md:w-auto">
                <button className="w-full md:w-auto px-5 py-2 rounded-full border border-transparent text-white group-hover:bg-[#dccab0] group-hover:text-[#111111] transition-all text-xs font-bold tracking-widest text-center flex items-center justify-center gap-1.5">
                  PRODUCTOS <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-300" />
                </button>
                
                {/* EL MEGAMENÚ DESPLEGABLE FLOTANTE (Estilo Mercado Libre / Gorila) */}
                <div className="absolute top-full left-0 mt-1 w-full md:w-64 bg-white border border-neutral-200 rounded-2xl shadow-xl p-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 pointer-events-none group-hover:pointer-events-auto z-50 flex flex-col gap-0.5">
                  {categoriasMenu.map((cat) => (
                    <a 
                      key={cat.name} 
                      href={cat.href}
                      className="block px-4 py-2.5 text-sm text-[#2d2621] font-bold hover:bg-[#dccab0]/30 hover:text-black rounded-xl transition-colors"
                    >
                      {cat.name}
                    </a>
                  ))}
                  <div className="border-t border-neutral-100 my-1"></div>
                  <a href="/productos" className="block text-center text-xs font-black text-[#5e5345] hover:underline py-1.5">
                    Ver todo el catálogo →
                  </a>
                </div>
              </div>

              <a href="/arma-tu-bici" className="w-full md:w-auto px-5 py-2 rounded-full border border-transparent text-white hover:border-[#dccab0] hover:bg-[#dccab0]/10 transition-all text-xs font-bold tracking-widest text-center">
                ARMA TU BICI
              </a>
              <a href="/contacto" className="w-full md:w-auto px-5 py-2 rounded-full border border-transparent text-white hover:border-[#dccab0] hover:bg-[#dccab0]/10 transition-all text-xs font-bold tracking-widest text-center">
                CONTACTO
              </a>
            </div>
            
            {/* BOTÓN CARRITO ESCRITORIO */}
            <button 
              onClick={() => setIsSidebarOpen(true)} 
              className="hidden md:flex items-center gap-2 px-6 py-2 rounded-full bg-[#dccab0] text-[#2d2621] hover:bg-white hover:scale-105 transition-all duration-300 font-black text-xs tracking-widest uppercase shadow-sm"
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