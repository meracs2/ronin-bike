"use client";
import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { ChevronLeft, ChevronRight, Maximize2, ArrowRight, X, Send } from 'lucide-react';
// Importamos tu componente separado
import InfoBar from '@/components/InfoBar';

type ProductoDestacado = {
  nombre: string;
  precio: number;
  precioViejo: number;
  desc: string;
  tag: string;
  img: string;
};

type CategoriaPremium = {
  titulo: string;
  items: string;
  img: string;
  grid: string;
};

// --- DATOS DE RONIN BIKE ---
const bannersCabecera: Array<{ title: string; sub: string; img: string }> = [
  { 
    title: "POTENCIA PARA TU SETUP DE CICLISMO", 
    sub: "3 CUOTAS SIN INTERÉS EN COMPONENTES", 
    img: "https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=1440" 
  },
  { 
    title: "ARMÁ TU BICI A MEDIDA", 
    sub: "Asesoramiento profesional y cuadros hidroformados", 
    img: "https://images.unsplash.com/photo-1559348349-86f1f65817fe?q=80&w=1440" 
  }
];

const productosDestacados: ProductoDestacado[] = [
  { 
    nombre: "[Combo Transmisión] Grupo Shimano XT M8100 12v + Cadena HG701", 
    precio: 850000, 
    precioViejo: 895000, 
    desc: "5% OFF", 
    tag: "COMBO",
    img: "https://images.unsplash.com/photo-1485965120184-e220f721d03e?q=80&w=300"
  },
  { 
    nombre: "Casco Giro Aether MIPS Matte Black", 
    precio: 240000, 
    precioViejo: 265000, 
    desc: "10% OFF", 
    tag: "",
    img: "https://images.unsplash.com/photo-1595556160831-a2c869a6f934?q=80&w=300"
  },
  { 
    nombre: "[Combo Rodado] Par de Cubiertas Maxxis Ikon 29x2.20 TLR Exo", 
    precio: 170000, 
    precioViejo: 188000, 
    desc: "9% OFF", 
    tag: "COMBO",
    img: "https://images.unsplash.com/photo-1601050690597-df056fb4ce78?q=80&w=300"
  },
  { 
    nombre: "Bicicleta Venzo Raptor EX R29 Hidráulica", 
    precio: 620000, 
    precioViejo: 652000, 
    desc: "5% OFF", 
    tag: "",
    img: "https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?q=80&w=300"
  }
];

const categoriasPremium: CategoriaPremium[] = [
  { titulo: "Bicicletas MTB", items: "Venzo, Scott, Specialized", img: "https://images.unsplash.com/photo-1544192240-4a34feb0104a?q=80&w=600", grid: "md:col-span-2" },
  { titulo: "Componentes", items: "Shimano, SRAM, Fox", img: "https://images.unsplash.com/photo-1507035895480-2b3156c31fc8?q=80&w=600", grid: "md:col-span-1" },
  { titulo: "Accesorios", items: "Cascos, Luces, Indumentaria", img: "https://images.unsplash.com/photo-1511994298241-608e28f14fde?q=80&w=600", grid: "md:col-span-1" },
  { titulo: "Taller & Upgrade", items: "Service oficial y armado", img: "https://images.unsplash.com/photo-1485965120184-e220f721d03e?q=80&w=600", grid: "md:col-span-2" },
];

// --- COMPONENTE: TARJETA DE PRODUCTO HORIZONTAL ---
function LocalProductCard({ nombre, precio, precioViejo, desc, tag, img }: ProductoDestacado) {
  return (
    <div className="group relative flex bg-white border border-neutral-100 rounded p-4 hover:shadow-md transition-shadow duration-200 h-35 text-neutral-950 select-none">
      <button className="absolute top-2 right-2 text-neutral-300 hover:text-neutral-500 transition z-20">
        <Maximize2 size={13} />
      </button>

      <div className="w-24 h-full shrink-0 bg-neutral-50 border border-neutral-100 rounded flex items-center justify-center relative overflow-hidden">
        <Image 
          src={img} 
          alt={nombre} 
          fill
          sizes="(max-width: 768px) 100vw, 25vw"
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      <div className="ml-4 flex flex-col justify-between flex-1 min-w-0">
        <div>
          <h4 className="text-xs font-bold text-neutral-800 line-clamp-2 leading-tight uppercase tracking-tight group-hover:text-[#5e5345] transition-colors">
            {nombre}
          </h4>
          <div className="mt-2 flex items-baseline gap-1.5 flex-wrap">
            <span className="text-sm font-black text-neutral-900">${precio.toLocaleString('es-AR')}</span>
            {precioViejo && <span className="text-[11px] text-neutral-400 line-through font-medium">${precioViejo.toLocaleString('es-AR')}</span>}
          </div>
        </div>
        <div className="flex items-center justify-between mt-1">
          <span className="bg-red-600 text-white font-black text-[9px] px-1.5 py-0.5 rounded">{desc}</span>
          {tag && <span className="bg-neutral-900 text-white font-black text-[8px] px-1.5 py-0.5 rounded tracking-wider">{tag}</span>}
        </div>
      </div>
    </div>
  );
}

// --- COMPONENTE: CARRUSEL DE PRODUCTOS ---
function LocalProductCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start', slidesToScroll: 1 });
  const carouselContainerRef = useRef<HTMLDivElement | null>(null);
  const lastHoverZoneRef = useRef<'left' | 'right' | null>(null);
  const isDraggingRef = useRef(false);

  useEffect(() => {
    const container = carouselContainerRef.current;
    if (!container || !emblaApi) return;

    let hoverTimer: ReturnType<typeof setTimeout> | null = null;

    const handleMove = (event: MouseEvent) => {
      if (isDraggingRef.current || event.movementX === 0) return;

      const rect = container.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const zone = x < rect.width / 2 ? 'left' : 'right';

      if (lastHoverZoneRef.current === zone) return;

      lastHoverZoneRef.current = zone;

      if (hoverTimer) clearTimeout(hoverTimer);

      hoverTimer = setTimeout(() => {
        if (zone === 'left') {
          emblaApi.scrollPrev();
        } else {
          emblaApi.scrollNext();
        }
      }, 120);
    };

    const handleMouseDown = (event: MouseEvent) => {
      if (event.button === 0) {
        isDraggingRef.current = true;
      }
    };

    const handleMouseUp = (event: MouseEvent) => {
      if (event.button === 0) {
        isDraggingRef.current = false;
      }
    };

    const resetZone = () => {
      lastHoverZoneRef.current = null;
      isDraggingRef.current = false;
    };

    container.addEventListener('mousemove', handleMove);
    container.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    container.addEventListener('mouseleave', resetZone);

    return () => {
      if (hoverTimer) clearTimeout(hoverTimer);
      container.removeEventListener('mousemove', handleMove);
      container.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      container.removeEventListener('mouseleave', resetZone);
    };
  }, [emblaApi]);

  return (
    <div className="w-full">
      <div className="relative flex items-center justify-between mb-6">
        <div className="flex items-center gap-4 bg-[#fcfbfa] pr-4 z-10">
          <h3 className="text-lg font-black tracking-tighter text-neutral-800 uppercase">¡Nuevos Ingresos!</h3>
        </div>
        <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-0.5 bg-neutral-200 z-0" />
        <div className="flex items-center gap-1 bg-[#fcfbfa] pl-4 z-10">
          <button onClick={() => emblaApi?.scrollPrev()} className="p-1 border border-neutral-200 bg-neutral-50 hover:bg-neutral-100 text-neutral-500 rounded transition"><ChevronLeft size={16} /></button>
          <button onClick={() => emblaApi?.scrollNext()} className="p-1 border border-neutral-200 bg-neutral-50 hover:bg-neutral-100 text-neutral-500 rounded transition"><ChevronRight size={16} /></button>
        </div>
      </div>
      <div
        className="overflow-hidden w-full cursor-pointer"
        ref={(node) => {
          carouselContainerRef.current = node;
          emblaRef(node);
        }}
      >
        <div className="flex gap-4">
          {[...productosDestacados, ...productosDestacados].map((prod, i) => (
            <div key={i} className="flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_25%] min-w-0"><LocalProductCard {...prod} /></div>
          ))}
        </div>
      </div>
    </div>
  );
}

// --- COMPONENTE: HERO BANNER ---
function LocalHeroCarousel() {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 5000, stopOnInteraction: false })]);
  return (
    <div className="overflow-hidden w-full bg-neutral-950 text-white" ref={emblaRef}>
      <div className="flex">
        {bannersCabecera.map((b, i) => (
          <div key={i} className="flex-[0_0_100%] min-w-0 h-85 md:h-120 relative flex flex-col justify-center px-6 md:px-24">
            <Image 
              src={b.img} 
              alt={b.title} 
              fill
              sizes="100vw"
              className="object-cover opacity-35"
            />
            <div className="absolute inset-0 bg-linear-to-r from-neutral-950 via-neutral-900/60 to-transparent z-10" />
            
            <div className="max-w-360 mx-auto w-full flex flex-col items-start relative z-20">
              <span className="text-xs md:text-sm font-black tracking-widest text-[#5e5345] bg-[#fcfbfa] px-3 py-1 rounded mb-4 uppercase">
                {b.sub}
              </span>
              <h2 className="text-3xl md:text-5xl font-black tracking-tighter uppercase max-w-2xl leading-none">
                {b.title}
              </h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// --- CHAT INTERACTIVO CON LOGO PROPIO ---
function LocalWspFloat() {
  const [chatAbierto, setChatAbierto] = useState(false);
  const [mensaje, setMensaje] = useState("");
  const [mensajes, setMensajes] = useState([
    { id: 1, texto: "¡Hola! ⚔️ Bienvenido a Ronin Bike. Soy tu asistente de soporte. ¿En qué puedo ayudarte hoy?", deUsuario: false }
  ]);
  
  const chatRef = useRef<HTMLDivElement>(null);
  const finMensajesRef = useRef<HTMLDivElement>(null);

  // Auto-scroll hacia el último mensaje
  useEffect(() => {
    finMensajesRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [mensajes]);

  // Cerrar al hacer clic afuera
  useEffect(() => {
    function manejarClicAfuera(evento: MouseEvent) {
      if (chatRef.current && !chatRef.current.contains(evento.target as Node)) {
        setChatAbierto(false);
      }
    }
    document.addEventListener("mousedown", manejarClicAfuera);
    return () => document.removeEventListener("mousedown", manejarClicAfuera);
  }, []);

  const enviarMensaje = (e: React.FormEvent) => {
    e.preventDefault();
    if (!mensaje.trim()) return;
    
    const textoConsulta = mensaje;
    setMensajes(prev => [...prev, { id: Date.now(), texto: textoConsulta, deUsuario: true }]);
    setMensaje(""); 

    // Simulación de respuesta de IA 1 segundo después
    setTimeout(() => {
      setMensajes(prev => [...prev, { 
        id: Date.now() + 1, 
        texto: `Recibí tu consulta: "${textoConsulta}". Muy pronto esta IA va a estar conectada al servidor del bot para responderte en serio. ¡Por ahora soy un simulacro! 🤖🚲`, 
        deUsuario: false 
      }]);
    }, 1000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToBottom = () => {
    window.scrollTo({ top: document.documentElement.scrollHeight, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end" ref={chatRef}>
      {chatAbierto && (
        <div className="mb-4 w-80 sm:w-90 h-112.5 bg-white rounded-lg border border-neutral-200 shadow-2xl flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-200 text-neutral-950">
          
          {/* Cabecera con LOGO INTEGRADO */}
          <div className="p-4 bg-[#5e5345] text-white flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 p-0.5 bg-white/10 rounded-full flex items-center justify-center overflow-hidden">
                {/* === REFERENCIA AL ARCHIVO logo-ronin.jpg === */}
                <Image 
                  src="/logo-ronin.jpg" 
                  alt="Ronin Bike Logo" 
                  fill
                  sizes="48px"
                  className="object-contain"
                />
              </div>
              <div>
                <h3 className="text-xs font-black uppercase tracking-wider">Soporte Ronin</h3>
                <p className="text-[10px] text-neutral-200">Activo ahora virtualmente</p>
              </div>
            </div>
            <button onClick={() => setChatAbierto(false)} className="text-white/70 hover:text-white transition-colors">
              <X size={18} />
            </button>
          </div>

          {/* Historial de Mensajes Estilo WhatsApp */}
          <div className="flex-1 bg-[#efeae2] p-4 overflow-y-auto text-xs space-y-3 flex flex-col" style={{ backgroundImage: 'url("https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png")', backgroundBlendMode: 'overlay' }}>
            {mensajes.map((msg) => (
              <div 
                key={msg.id} 
                className={`p-3 rounded-lg max-w-[85%] leading-relaxed shadow-sm ${
                  msg.deUsuario 
                    ? "bg-[#d9fdd3] text-neutral-900 self-end rounded-tr-none" 
                    : "bg-white text-neutral-800 self-start rounded-tl-none"
                }`}
              >
                {msg.texto}
              </div>
            ))}
            <div ref={finMensajesRef} />
          </div>

          {/* Formulario de Input */}
          <form onSubmit={enviarMensaje} className="p-3 bg-[#f0f2f5] border-t border-neutral-200 flex gap-2 items-center">
            <input
              type="text"
              value={mensaje}
              onChange={(e) => setMensaje(e.target.value)}
              placeholder="Escribí tu consulta..."
              className="flex-1 bg-white border-none rounded-lg px-4 py-2 text-xs text-neutral-900 focus:outline-none focus:ring-1 focus:ring-[#5e5345] transition-colors"
            />
            <button type="submit" className="p-2 bg-[#5e5345] hover:bg-[#4d4439] text-white rounded-full transition-colors flex items-center justify-center shrink-0 shadow-sm">
              <Send size={14} />
            </button>
          </form>
        </div>
      )}

      {!chatAbierto && (
        <div className="mb-2 flex flex-col items-end gap-1.5 opacity-0 transition-opacity duration-300 hover:opacity-100 focus-within:opacity-100">
          <button
            onClick={scrollToTop}
            className="flex h-8 w-8 items-center justify-center rounded-full border border-white/40 bg-[#5e5345]/40 text-white shadow-md backdrop-blur-sm transition hover:scale-105 hover:bg-[#5e5345]/70"
            aria-label="Subir a la parte superior"
          >
            ↑
          </button>
          <button
            onClick={scrollToBottom}
            className="flex h-8 w-8 items-center justify-center rounded-full border border-white/40 bg-[#5e5345]/40 text-white shadow-md backdrop-blur-sm transition hover:scale-105 hover:bg-[#5e5345]/70"
            aria-label="Bajar a la parte inferior"
          >
            ↓
          </button>
        </div>
      )}

      {/* Disparador Flotante con LOGO PROPIO */}
      <button
        onClick={() => setChatAbierto(!chatAbierto)}
        className="relative flex items-center justify-center p-0 w-16 h-16 bg-white rounded-full shadow-xl border border-neutral-100 hover:scale-110 transition-all duration-300 group overflow-hidden"
        aria-label="Abrir chat de soporte"
      >
        {/* === REFERENCIA AL ARCHIVO logo-ronin.jpg === */}
        <Image 
          src="/logo-ronin.jpg" 
          alt="Abrir chat de soporte Ronin Bike" 
          fill
          sizes="64px"
          className="object-contain p-1"
        />
        {!chatAbierto && (
          <span className="absolute right-20 bg-white text-neutral-900 text-xs font-bold px-3 py-1.5 rounded shadow-md border border-neutral-100 opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
            ¿Necesitás ayuda?
          </span>
        )}
      </button>
    </div>
  );
}

// --- PÁGINA PRINCIPAL ---
export default function Home() {
  return (
    <main className="bg-[#fcfbfa] min-h-screen pb-24 text-neutral-950">
      
      <div className="w-full border-b border-neutral-200">
        <LocalHeroCarousel />
      </div>

      {/* BARRA DE INFO INTERACTIVA */}
      <InfoBar />

      <section className="max-w-360 mx-auto px-4 md:px-8 mt-12">
        <LocalProductCarousel />
      </section>

      <section className="max-w-[1440px] mx-auto px-4 md:px-8 mt-20">
        <div className="mb-8">
          <span className="text-xs font-bold text-[#5e5345] uppercase tracking-widest">Catálogo Seleccionado</span>
          <h3 className="text-2xl font-black tracking-tighter text-neutral-900 uppercase">Explorá Categorías</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {categoriasPremium.map((cat, i) => (
            <div key={i} className={`group relative rounded overflow-hidden h-60 bg-neutral-900 ${cat.grid} transition-all duration-300`}>
              <Image src={cat.img} alt={cat.titulo} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover opacity-40 group-hover:opacity-50 group-hover:scale-105 transition-all duration-700" />
              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/10 to-transparent p-6 flex flex-col justify-end">
                <span className="text-[10px] text-[#dccab0] font-bold uppercase tracking-wider mb-1">{cat.items}</span>
                <h4 className="text-xl font-black text-white uppercase tracking-tighter flex items-center gap-2">
                  {cat.titulo}
                  <ArrowRight size={16} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                </h4>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-360uto px-4 md:px-8 mt-20">
        <div className="relative rounded bg-neutral-900 text-white overflow-hidden p-8 md:p-14 flex flex-col md:flex-row items-center justify-between gap-8 border border-neutral-800">
          <div className="max-w-2xl text-center md:text-left">
            <span className="text-[11px] font-black tracking-widest text-[#dccab0] uppercase block mb-2">
              Taller de Armado Personalizado
            </span>
            <h3 className="text-3xl md:text-4xl font-black tracking-tighter uppercase leading-none mb-4">
              Armá tu bicicleta a la carta
            </h3>
            <p className="text-neutral-400 text-xs md:text-sm leading-relaxed">
              Elegí cada componente con el asesoramiento de nuestros mecánicos. Cuadros seleccionados, transmisiones de alta gama y un armado artesanal con control de ajuste digital.
            </p>
          </div>
          <button className="bg-[#fcfbfa] text-neutral-950 hover:bg-[#5e5345] hover:text-white px-6 py-3.5 rounded text-xs font-black uppercase tracking-widest transition-all duration-300 whitespace-nowrap shadow-sm">
            Iniciar Configuración
          </button>
        </div>
      </section>

      {/* GLOBO FLOTANTE INTEGRADO */}
      <LocalWspFloat />

    </main>
  );
}