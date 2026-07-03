import Navbar from '@/components/Navbar';
import Carousel from '@/components/Carousel';
import ProjectGrid from '@/components/ProjectGrid';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#fcfbfa] text-neutral-950">
      <Navbar />
      
      {/* El carrusel respeta el ancho total */}
      <Carousel />
      
      {/* El resto del contenido centrado */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 py-12">
        <ProjectGrid />
      </section>
      
      <Footer />
    </main>
  );
}