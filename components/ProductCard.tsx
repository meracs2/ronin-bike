"use client";

import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';

// Colores de prueba para el carrusel
const colores = ["bg-red-200", "bg-blue-200", "bg-green-200", "bg-yellow-200", "bg-purple-200"];

export default function ProductCard({ nombre, desc, cantidadFotos }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  return (
    <div className="group block overflow-hidden border border-neutral-100 bg-white p-4 hover:shadow-xl transition-all duration-500">
      {/* Carrusel interno con bloques de colores */}
      <div className="relative overflow-hidden mb-6" ref={emblaRef}>
        <div className="flex">
          {Array.from({ length: cantidadFotos }).map((_, i) => (
            <div key={i} className={`flex-[0_0_100%] h-64 ${colores[i % colores.length]} flex items-center justify-center`}>
              <span className="text-neutral-700 font-bold">FOTO {i + 1}</span>
            </div>
          ))}
        </div>
        
        {/* Flechas de navegación */}
        <button onClick={() => emblaApi?.scrollPrev()} className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 p-2 opacity-0 group-hover:opacity-100 transition-opacity rounded-full shadow-md z-10">←</button>
        <button onClick={() => emblaApi?.scrollNext()} className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 p-2 opacity-0 group-hover:opacity-100 transition-opacity rounded-full shadow-md z-10">→</button>
      </div>

      <a href="#">
        <h3 className="text-lg font-bold uppercase">{nombre}</h3>
        <p className="text-sm text-neutral-600 mt-2">{desc}</p>
      </a>
    </div>
  );
}