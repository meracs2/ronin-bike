"use client";
import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import ProductCard from './ProductCard';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function ProductCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start', slidesToScroll: 1 });

  const productosDestacados = [
    { nombre: "Grupo Shimano XT M8100 12v Competencia", desc: "Transmisión monoplato 1x12", precio: 850000, slug: "shimano-xt", cantidadFotos: 1 },
    { nombre: "Bicicleta Venzo Raptor EX R29 Aluminio", desc: "Frenos hidráulicos, Horquilla c/ bloqueo", precio: 620000, slug: "venzo-raptor", cantidadFotos: 1 },
    { nombre: "Casco Giro Aether MIPS Premium", desc: "Protección esférica de alta gama", precio: 240000, slug: "giro-aether", cantidadFotos: 1 },
    { nombre: "Cubierta Maxxis Ikon 29x2.20 TLR", desc: "Compuesto rápido para Cross Country", precio: 85000, slug: "maxxis-ikon", cantidadFotos: 1 }
  ];

  return (
    <div className="w-full">
      {/* HEADER DE LA SECCIÓN CON CONTROLES INTEGRADOS (IGUAL A GORILA GAMES) */}
      <div className="flex items-center justify-between border-b border-neutral-200 pb-3 mb-6">
        <h3 className="text-xl font-black tracking-tight text-[#2d2621] uppercase flex items-center gap-2">
          Nuevos Ingresos <span className="w-2 h-2 bg-amber-500 rounded-full animate-pulse" />
        </h3>
        
        {/* Controles compactos arriba a la derecha */}
        <div className="flex items-center gap-1">
          <button onClick={() => emblaApi?.scrollPrev()} className="p-1.5 rounded bg-neutral-100 hover:bg-neutral-200 text-neutral-800 transition">
            <ChevronLeft size={16} />
          </button>
          <button onClick={() => emblaApi?.scrollNext()} className="p-1.5 rounded bg-neutral-100 hover:bg-neutral-200 text-neutral-800 transition">
            <ChevronRight size={16} />
          </button>
        </div>
      </div>

      {/* VIEWPORT DEL CAROUSEL */}
      <div className="overflow-hidden w-full" ref={emblaRef}>
        <div className="flex gap-4">
          {productosDestacados.map((prod, index) => (
            <div key={index} className="flex-[0_0_100%] sm:flex-[0_0_50%] md:flex-[0_0_33.333%] lg:flex-[0_0_25%] min-w-0">
              <ProductCard {...prod} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}