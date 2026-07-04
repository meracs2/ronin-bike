import Carousel from '@/components/Carousel';
import ProductCarousel from '@/components/ProductCarousel';

export default function Home() {
  return (
    <main className="bg-[#fcfbfa] text-neutral-950">
      {/* Carrusel de cabecera */}
      <Carousel />
      
      {/* Componente unificado con Destacados y Seleccionados */}
      <ProductCarousel />
    </main>
  );
}