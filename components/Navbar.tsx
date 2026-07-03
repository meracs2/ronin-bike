import Image from 'next/image';
import { Search } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="w-full bg-white border-b border-neutral-200">
      {/* FILA 1: Logo y Buscador */}
      <div className="flex items-center justify-between px-8 py-4 max-w-7xl mx-auto gap-8">
        
        {/* LOGO */}
        <div className="flex items-center gap-3">
          <Image 
            src="/ronin-logo-propio.png" 
            alt="Logo Ronin Bike" 
            width={60} 
            height={60} 
            className="object-contain"
          />
          <span className="font-black text-xl tracking-tighter text-neutral-950">RONIN-BIKE</span>
        </div>
        
        {/* BUSCADOR CON LUPA A LA DERECHA */}
        <div className="relative flex items-center w-full max-w-xs">
          <input 
            type="text"
            className="bg-neutral-100 pl-4 pr-10 py-2 rounded-full w-full border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-neutral-900"
            placeholder="Buscar productos..."
          />
          {/* Lupa a la derecha */}
          <Search className="absolute right-3 w-4 h-4 text-neutral-400" />
        </div>
      </div>

      {/* FILA 2: Menú */}
      <div className="bg-neutral-900 text-white">
        <div className="max-w-7xl mx-auto px-8 py-3 flex gap-8 font-medium text-sm tracking-wide">
          <a href="/productos" className="hover:text-red-500 transition-colors">PRODUCTOS</a>
          <a href="/taller" className="hover:text-red-500 transition-colors">TALLER</a>
          <a href="/nosotros" className="hover:text-red-500 transition-colors">NOSOTROS</a>
          <a href="/contacto" className="hover:text-red-500 transition-colors">CONTACTO</a>
        </div>
      </div>
    </nav>
  );
}