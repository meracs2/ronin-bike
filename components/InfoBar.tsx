"use client";
import React, { useState, useEffect, useRef } from 'react';
import { CreditCard, Truck, ShieldCheck, MessageSquareCode, X } from 'lucide-react';

export default function InfoBar() {
  // Estado para saber cuál cuadro está abierto
  const [menuAbierto, setMenuAbierto] = useState<"envios" | "pagos" | "garantia" | null>(null);
  
  // Referencia para detectar clics fuera de los componentes
  const contenedorRef = useRef<HTMLDivElement>(null);

  const toggleMenu = (tipo: "envios" | "pagos" | "garantia") => {
    setMenuAbierto(menuAbierto === tipo ? null : tipo);
  };

  // Efecto para cerrar el cuadro automáticamente si se hace clic afuera
  useEffect(() => {
    function manejarClicAfuera(evento: MouseEvent) {
      if (contenedorRef.current && !contenedorRef.current.contains(evento.target as Node)) {
        setMenuAbierto(null);
      }
    }

    // Escuchamos el clic en todo el documento
    document.addEventListener("mousedown", manejarClicAfuera);
    return () => {
      document.removeEventListener("mousedown", manejarClicAfuera);
    };
  }, []);

  return (
    <section className="bg-white border-y border-neutral-100 my-10" ref={contenedorRef}>
      {/* Grilla: 1 col en celular, 2 en tablet (md) y 4 en escritorio (lg) */}
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 py-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        
        {/* 1. SECCIÓN: ENVÍOS */}
        <div className="relative">
          <button 
            onClick={() => toggleMenu("envios")}
            className="flex items-center gap-4 group cursor-pointer p-2 rounded hover:bg-neutral-50/50 transition-colors text-left w-full"
          >
            <div className="p-3 bg-neutral-50 rounded-full text-[#5e5345] group-hover:bg-[#5e5345] group-hover:text-white transition-all duration-300 shrink-0">
              <Truck size={24} />
            </div>
            <div>
              <h4 className="text-xs font-black uppercase tracking-wider text-neutral-900 group-hover:text-[#5e5345] transition-colors">
                Envíos a Todo el País
              </h4>
              <p className="text-neutral-500 text-xs mt-0.5">Despachos rápidos por transporte</p>
            </div>
          </button>

          {menuAbierto === "envios" && (
            <div className="absolute left-0 mt-2 w-full min-w-[280px] bg-white rounded border border-neutral-200 p-4 shadow-lg z-30 animate-in fade-in slide-in-from-top-2 duration-150">
              <div className="flex justify-between items-start mb-2">
                <h5 className="text-xs font-black uppercase tracking-wider text-neutral-900">Info de Envíos</h5>
                <button onClick={() => setMenuAbierto(null)} className="text-neutral-400 hover:text-neutral-600"><X size={14} /></button>
              </div>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Despachamos a todo el país vía transporte privado o correo. Tarda de 3 a 5 días hábiles.
              </p>
            </div>
          )}
        </div>

        {/* 2. SECCIÓN: PREFERENCIAS DE PAGO */}
        <div className="relative">
          <button 
            onClick={() => toggleMenu("pagos")}
            className="flex items-center gap-4 group cursor-pointer p-2 rounded hover:bg-neutral-50/50 transition-colors text-left w-full"
          >
            <div className="p-3 bg-neutral-50 rounded-full text-[#5e5345] group-hover:bg-[#5e5345] group-hover:text-white transition-all duration-300 shrink-0">
              <CreditCard size={24} />
            </div>
            <div>
              <h4 className="text-xs font-black uppercase tracking-wider text-neutral-900 group-hover:text-[#5e5345] transition-colors">
                3 y 6 Cuotas Fijas
              </h4>
              <p className="text-neutral-500 text-xs mt-0.5">Con tarjetas de crédito bancarias</p>
            </div>
          </button>

          {menuAbierto === "pagos" && (
            <div className="absolute left-0 mt-2 w-full min-w-[280px] bg-white rounded border border-neutral-200 p-4 shadow-lg z-30 animate-in fade-in slide-in-from-top-2 duration-150">
              <div className="flex justify-between items-start mb-2">
                <h5 className="text-xs font-black uppercase tracking-wider text-neutral-900">Planes de Pago</h5>
                <button onClick={() => setMenuAbierto(null)} className="text-neutral-400 hover:text-neutral-600"><X size={14} /></button>
              </div>
              <p className="text-xs text-neutral-600 leading-relaxed">
                3 y 6 cuotas fijas con bancarias. Descuentos especiales pagando por transferencia bancaria directa.
              </p>
            </div>
          )}
        </div>

        {/* 3. SECCIÓN: GARANTÍA */}
        <div className="relative">
          <button 
            onClick={() => toggleMenu("garantia")}
            className="flex items-center gap-4 group cursor-pointer p-2 rounded hover:bg-neutral-50/50 transition-colors text-left w-full"
          >
            <div className="p-3 bg-neutral-50 rounded-full text-[#5e5345] group-hover:bg-[#5e5345] group-hover:text-white transition-all duration-300 shrink-0">
              <ShieldCheck size={24} />
            </div>
            <div>
              <h4 className="text-xs font-black uppercase tracking-wider text-neutral-900 group-hover:text-[#5e5345] transition-colors">
                Garantía Oficial
              </h4>
              <p className="text-neutral-500 text-xs mt-0.5">Opciones y soporte personalizado</p>
            </div>
          </button>

          {menuAbierto === "garantia" && (
            <div className="absolute left-0 mt-2 w-full min-w-[280px] bg-white rounded border border-neutral-200 p-4 shadow-lg z-30 animate-in fade-in slide-in-from-top-2 duration-150">
              <div className="flex justify-between items-start mb-2">
                <h5 className="text-xs font-black uppercase tracking-wider text-neutral-900">Garantía Real</h5>
                <button onClick={() => setMenuAbierto(null)} className="text-neutral-400 hover:text-neutral-600"><X size={14} /></button>
              </div>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Respaldo directo de marcas líderes. Opciones de cobertura a medida para cuadros y transmisiones premium.
              </p>
            </div>
          )}
        </div>

        {/* 4. SECCIÓN: SOPORTE DE WHATSAPP (Unificado con la paleta general) */}
        <div>
          <a 
            href="https://wa.me/TU_NUMERO_DEL_BOT_ACA?text=Hola!%20Quiero%20hacer%20una%20consulta" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center gap-4 group cursor-pointer p-2 rounded hover:bg-neutral-50/50 transition-colors text-left w-full"
          >
            <div className="p-3 bg-neutral-50 rounded-full text-[#5e5345] group-hover:bg-[#5e5345] group-hover:text-white transition-all duration-300 shrink-0">
              <MessageSquareCode size={24} />
            </div>
            <div>
              <h4 className="text-xs font-black uppercase tracking-wider text-neutral-900 group-hover:text-[#5e5345] transition-colors">
                Soporte
              </h4>
              <p className="text-neutral-500 text-xs mt-0.5">Comunicate con nosotros</p>
            </div>
          </a>
        </div>

      </div>
    </section>
  );
}