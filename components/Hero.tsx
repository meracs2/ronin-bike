import Image from 'next/image';

export default function Hero() {
  return (
    <section className="w-full px-8 md:px-20 py-10 flex flex-col gap-6">
      <div className="w-full h-100 md:h-150 overflow-hidden rounded-2xl bg-neutral-200">
        <Image
          src="https://images.unsplash.com/photo-1571068316344-75bc76f77890?q=80&w=2000"
          alt="Carrusel Prueba"
          width={1600}
          height={900}
          className="h-full w-full object-cover"
          priority
        />
      </div>

      <div className="flex items-center justify-between">
        <div className="text-sm font-bold uppercase tracking-[0.2em] text-neutral-900">
          <span>PROYECTO GAMMA</span>
          <span className="ml-4 text-neutral-400">(MANTENIMIENTO)</span>
        </div>
        <div className="font-bold text-neutral-900">---</div>
      </div>
    </section>
  );
}