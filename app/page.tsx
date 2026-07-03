import Navbar from '@/components/Navbar';
import Carousel from '@/components/Carousel';
import ProductCarousel from '@/components/ProductCarousel';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#fcfbfa] text-neutral-950">
      <Navbar />
      
      {/* Carrusel de cabecera */}
      <Carousel />
      
      {/* Componente unificado con Destacados y Seleccionados */}
      <ProductCarousel />
      
      {/* Borramos la sección ProjectGrid que estaba acá abajo */}
      
      <Footer />
    </main>
  );
}