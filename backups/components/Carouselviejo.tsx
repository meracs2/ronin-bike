'use client'
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

export default function Carousel() {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 4000 })]);

  // Aquí irían tus imágenes, por ahora dejamos el fondo neutro
  const slides = ["bg-neutral-800", "bg-neutral-700", "bg-neutral-600", "bg-neutral-500", "bg-neutral-400", "bg-neutral-900"];

  return (
    // Quitamos max-w-7xl y los padding (px) para que estire al 100%
    <div className="w-full overflow-hidden" ref={emblaRef}>
      <div className="flex">
        {slides.map((color, index) => (
          <div key={index} className={`flex-[0_0_100%] min-w-0 h-[450px] ${color} flex items-center justify-center`}>
            <span className="text-white font-bold tracking-widest uppercase">Slide {index + 1}</span>
          </div>
        ))}
      </div>
    </div>
  );
}