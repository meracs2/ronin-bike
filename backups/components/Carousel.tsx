"use client";
import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

export default function Carousel() {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 5000 })]);

  const banners = [
    { title: "POTENCIA PARA TU SETUP DE CICLISMO", sub: "3 CUATOS SIN INTERÉS EN TODO EL COMPONENTES", color: "from-[#5e5345] to-[#2d2621]" },
    { title: "ARMÁ TU BICI A MEDIDA", sub: "Asesoramiento profesional y cuadros hidroformados", color: "from-[#2d2621] to-[#1a1512]" }
  ];

  return (
    <div className="overflow-hidden w-full rounded-2xl bg-neutral-900 shadow-lg text-white" ref={emblaRef}>
      <div className="flex">
        {banners.map((b, i) => (
          <div key={i} className={`flex-[0_0_100%] min-w-0 h-[320px] md:h-[420px] bg-gradient-to-r ${b.color} flex flex-col justify-center px-8 md:px-16 relative`}>
            {/* Textura de ruido de fondo */}
            <div className="absolute inset-0 opacity-[0.06] pointer-events-none" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.7'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")` }} />
            <span className="text-xs md:text-sm font-black tracking-widest text-[#dccab0] bg-white/10 px-3 py-1 rounded-full w-max uppercase mb-4">{b.sub}</span>
            <h2 className="text-3xl md:text-5xl font-black tracking-tighter uppercase max-w-2xl leading-none">{b.title}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}