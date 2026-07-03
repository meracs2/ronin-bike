export default function Hero() {
  return (
    <section className="w-full px-8 md:px-20 py-10 flex flex-col gap-6">
      
      {/* IMAGEN DEL CARRUSEL DE PRUEBA */}
      <div className="w-full h-[400px] md:h-[600px] bg-neutral-200 overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1571068316344-75bc76f77890?q=80&w=2000" 
          alt="Carrusel Prueba" 
          className="w-full h-full object-cover"
        />
      </div>

      {/* TEXTO Y NAVEGACIÓN */}
      <div className="flex items-center justify-between">
        <div className="text-sm font-bold uppercase tracking-[0.2em] text-neutral-900">
          // PROYECTO GAMMA <span className="text-neutral-400 ml-4">(MANTENIMIENTO)</span>
        </div>
        <div className="text-neutral-900 font-bold">
          ---
        </div>
      </div>
    </section>
  );
}