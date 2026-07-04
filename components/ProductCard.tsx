"use client";
import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { useCart } from '../context/CartContext';

interface ProductCardProps {
  nombre: string;
  desc: string;
  precio: number;        // Agregado
  slug: string;          // Agregado
  cantidadFotos: number;
}

const colores = ["bg-red-200", "bg-blue-200", "bg-green-200", "bg-yellow-200", "bg-purple-200"];

export default function ProductCard({ nombre, desc, precio, slug, cantidadFotos }: ProductCardProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const { addToCart } = useCart();

  return (
    <div className="group block overflow-hidden border border-neutral-100 bg-white p-4 hover:shadow-xl transition-all duration-500 text-neutral-900">
      {/* CARRUSEL DE FOTOS */}
      <div className="relative overflow-hidden mb-6" ref={emblaRef}>
        <div className="flex">
          {Array.from({ length: cantidadFotos }).map((_, i) => (
            <div key={i} className={`flex-[0_0_100%] h-64 ${colores[i % colores.length]} flex items-center justify-center`}>
              <span className="text-neutral-700 font-bold">FOTO {i + 1}</span>
            </div>
          ))}
        </div>
        <button onClick={() => emblaApi?.scrollPrev()} className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 p-2 opacity-0 group-hover:opacity-100 transition-opacity rounded-full shadow-md z-10">←</button>
        <button onClick={() => emblaApi?.scrollNext()} className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 p-2 opacity-0 group-hover:opacity-100 transition-opacity rounded-full shadow-md z-10">→</button>
      </div>

      {/* INFORMACIÓN DEL PRODUCTO */}
      <h3 className="text-lg font-bold uppercase">{nombre}</h3>
      <p className="text-sm text-neutral-600 mt-2">{desc}</p>
      
      {/* PRECIO */}
      <p className="text-xl font-black text-[#5e5345] mt-3">${precio.toLocaleString()}</p>
      
      {/* ACCIÓN */}
      <button 
        onClick={() => addToCart({ nombre, desc, precio, slug })} // Actualizado para incluir precio/slug
        className="mt-4 w-full bg-black text-white py-2 rounded hover:bg-neutral-800 transition"
      >
        Agregar al carrito
      </button>
    </div>
  );
}