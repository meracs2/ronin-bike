"use client";
import React from 'react';
import { ShoppingCart } from 'lucide-react';
import { useCart } from '../context/CartContext';

interface ProductCardProps {
  nombre: string;
  desc: string;
  precio: number;
  slug: string;
  cantidadFotos: number;
}

export default function ProductCard({ nombre, desc, precio, slug }: ProductCardProps) {
  const cartContext = useCart();

  if (!cartContext) return null;

  const { addToCart } = cartContext;

  return (
    <div className="group flex flex-col justify-between overflow-hidden rounded-xl border border-neutral-200/60 bg-white p-3 hover:shadow-md transition-all duration-300 text-neutral-950">
      <div>
        {/* Contenedor de Imagen de Producto Estilo Gorila */}
        <div className="relative overflow-hidden rounded-lg mb-3 bg-neutral-50 h-52 flex items-center justify-center border border-neutral-100">
          <span className="text-neutral-300 font-black text-[10px] tracking-widest uppercase">Ronin Bike Equipment</span>
          {/* Tag de disponibilidad rápida */}
          <div className="absolute bottom-2 left-2 bg-[#5e5345] text-white text-[9px] font-bold px-2 py-0.5 rounded uppercase tracking-wider">
            Disponible 24-48 hs
          </div>
        </div>

        {/* Info Técnica corta */}
        <div className="px-0.5">
          <h4 className="text-xs font-black uppercase text-neutral-900 tracking-tight line-clamp-2 min-h-[32px] group-hover:text-[#5e5345] transition-colors leading-tight">
            {nombre}
          </h4>
          <p className="text-[11px] text-neutral-400 mt-0.5 line-clamp-1">{desc}</p>
        </div>
      </div>

      {/* Precio y CTA */}
      <div className="mt-3 pt-2 border-t border-neutral-100">
        <p className="text-lg font-black text-neutral-900 tracking-tight">
          ${precio ? precio.toLocaleString('es-AR') : '0'}
        </p>
        <button 
          onClick={() => addToCart({ nombre, desc, precio, slug })}
          className="mt-2 w-full bg-neutral-950 text-white py-2 px-3 rounded-lg font-bold text-[10px] tracking-wider uppercase flex items-center justify-center gap-1.5 hover:bg-[#5e5345] transition-all"
        >
          <ShoppingCart size={12} />
          Agregar
        </button>
      </div>
    </div>
  );
}