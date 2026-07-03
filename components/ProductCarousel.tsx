"use client";

import React, { useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import ProductCard from './ProductCard';

const productosDestacados = [
  { id: 1, nombre: "Bicicleta MTB Pro", categoria: "Montaña", precio: "$1.200.000" },
  { id: 2, nombre: "Casco Aero Race", categoria: "Accesorios", precio: "$85.000" },
  { id: 3, nombre: "Kit Reparación", categoria: "Taller", precio: "$45.000" },
  { id: 4, nombre: "Luces LED USB", categoria: "Accesorios", precio: "$30.000" },
  { id: 5, nombre: "Zapatillas Carbon", categoria: "Indumentaria", precio: "$210.000" },
  { id: 6, nombre: "Inflador Profesional", categoria: "Taller", precio: "$60.000" },
  { id: 7, nombre: "Ciclocomputadora GPS", categoria: "Accesorios", precio: "$150.000" },
  { id: 8, nombre: "Lubricante Cadena", categoria: "Mantenimiento", precio: "$15.000" },
  { id: 9, nombre: "Guantes Invierno", categoria: "Indumentaria", precio: "$40.000" },
  { id: 10, nombre: "Cámara Antipinchazos", categoria: "Repuestos", precio: "$12.000" },
];

export default function ProductCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start' });

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  return (
    <section className="py-16" style={{ backgroundColor: '#dccab0' }}>
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Encabezado */}
        <div className="flex items-end justify-between mb-10">
          <h2 className="text-3xl font-bold uppercase tracking-tighter">Productos Destacados</h2>
          <div className="flex gap-2">
            <button onClick={scrollPrev} className="w-9 h-9 flex items-center justify-center border border-neutral-300 bg-white hover:bg-neutral-900 hover:text-white transition-all font-mono text-sm shadow-sm">
              &lt;
            </button>
            <button onClick={scrollNext} className="w-9 h-9 flex items-center justify-center border border-neutral-300 bg-white hover:bg-neutral-900 hover:text-white transition-all font-mono text-sm shadow-sm">
              &gt;
            </button>
          </div>
        </div>

        {/* Carrusel de Productos */}
        <div className="overflow-hidden mb-24" ref={emblaRef}>
          <div className="flex gap-6">
            {productosDestacados.map((prod) => (
              <div key={prod.id} className="flex-[0_0_280px] group cursor-pointer">
                <div className="bg-white p-2 rounded-lg border border-neutral-100 shadow-md hover:shadow-lg transition-all duration-300">
                  <div className="bg-neutral-100 h-64 mb-4 flex items-center justify-center group-hover:bg-orange-50 transition-colors">
                    <span className="text-neutral-400 font-medium">IMAGEN</span>
                  </div>
                  <div className="px-2 pb-2">
                    <p className="text-[10px] uppercase tracking-widest text-neutral-500">{prod.categoria}</p>
                    <h3 className="text-lg font-bold text-neutral-900 mt-1">{prod.nombre}</h3>
                    <p className="text-sm font-semibold text-orange-600 mt-1">{prod.precio}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Productos Seleccionados - Tamaño y color corregidos */}
        <h2 className="text-3xl font-bold uppercase tracking-tighter text-[#2d2621] mb-12">
          Productos Seleccionados
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          <ProductCard nombre="Shimano XT M8100" desc="La referencia en precisión y durabilidad." cantidadFotos={3} />
          <ProductCard nombre="Venzo Raptor 2026" desc="Geometría moderna para XC, ultra ligero." cantidadFotos={3} />
          <ProductCard nombre="Giro Aether MIPS" desc="Protección de nivel profesional." cantidadFotos={4} />
        </div>
      </div>
    </section>
  );
}