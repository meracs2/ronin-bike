"use client";

import React, { useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import ProductCard from './ProductCard';

// Estos datos deberían venir de tu base de datos o archivo de productos
const productosDestacados = [
  { id: 1, nombre: "Bicicleta MTB Pro", categoria: "Montaña", precio: 1200000, slug: "mtb-pro" },
  { id: 2, nombre: "Casco Aero Race", categoria: "Accesorios", precio: 85000, slug: "casco-aero" },
  { id: 3, nombre: "Kit Reparación", categoria: "Taller", precio: 45000, slug: "kit-reparacion" },
];

export default function ProductCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start', dragFree: true });

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  return (
    <section className="py-16" style={{ backgroundColor: '#dccab0' }}>
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* ENCABEZADO */}
        <div className="flex items-end justify-between mb-10">
          <h2 className="text-3xl font-bold uppercase tracking-tighter text-[#2d2621]">
            Productos Destacados
          </h2>
          <div className="flex gap-2">
            <button onClick={scrollPrev} className="w-10 h-10 flex items-center justify-center border-2 border-[#2d2621] bg-white hover:bg-[#2d2621] hover:text-white transition-all font-bold shadow-sm">
              &lt;
            </button>
            <button onClick={scrollNext} className="w-10 h-10 flex items-center justify-center border-2 border-[#2d2621] bg-white hover:bg-[#2d2621] hover:text-white transition-all font-bold shadow-sm">
              &gt;
            </button>
          </div>
        </div>

        {/* CARRUSEL DE PRODUCTOS */}
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-6 pb-8">
            {productosDestacados.map((prod) => (
              <div key={prod.id} className="flex-[0_0_280px] md:flex-[0_0_300px]">
                {/* Usamos el mismo ProductCard para mantener consistencia */}
                <ProductCard 
                  nombre={prod.nombre} 
                  desc={prod.categoria} 
                  precio={prod.precio} 
                  slug={prod.slug} 
                  cantidadFotos={2} 
                />
              </div>
            ))}
          </div>
        </div>

        {/* PRODUCTOS SELECCIONADOS */}
        <h2 className="text-3xl font-bold uppercase tracking-tighter text-[#2d2621] mt-16 mb-12">
          Productos Seleccionados
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          <ProductCard nombre="Shimano XT M8100" desc="Precisión y durabilidad." precio={450000} slug="shimano-xt" cantidadFotos={3} />
          <ProductCard nombre="Venzo Raptor 2026" desc="Geometría moderna." precio={850000} slug="venzo-raptor" cantidadFotos={3} />
          <ProductCard nombre="Giro Aether MIPS" desc="Protección profesional." precio={220000} slug="giro-aether" cantidadFotos={4} />
        </div>
      </div>
    </section>
  );
}