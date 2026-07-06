"use client";
import React, { useState, useEffect, useRef } from 'react';
import { MessageSquareCode, X, Send } from 'lucide-react';

export default function WspFloat() {
  const [chatAbierto, setChatAbierto] = useState(false);
  const [mensaje, setMensaje] = useState("");
  const chatRef = useRef<HTMLDivElement>(null);

  // Cerrar el chat si hacen clic en cualquier otra parte de la pantalla
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
    
    // ACÁ CONECTÁS CON TU API DE IA:
    console.log("Mensaje enviado a la IA:", mensaje);
    
    setMensaje(""); // Limpia el input para el próximo mensaje
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end" ref={chatRef}>
      
      {/* CUADRO DE CHAT CON LA IA */}
      {chatAbierto && (
        <div className="mb-4 w-[320px] sm:w-[360px] h-[450px] bg-white rounded-lg border border-neutral-200 shadow-2xl flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-200">
          
          {/* Encabezado del Chat */}
          <div className="p-4 bg-[#5e5345] text-white flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="p-1.5 bg-white/10 rounded-full">
                <MessageSquareCode size={20} />
              </div>
              <div>
                <h3 className="text-xs font-black uppercase tracking-wider">Soporte Inteligente</h3>
                <p className="text-[10px] text-neutral-200">Activo ahora de forma virtual</p>
              </div>
            </div>
            <button 
              onClick={() => setChatAbierto(false)}
              className="text-white/70 hover:text-white transition-colors"
            >
              <X size={18} />
            </button>
          </div>

          {/* Cuerpo del Chat (Mensajes) */}
          <div className="flex-1 bg-neutral-50 p-4 overflow-y-auto text-xs space-y-3">
            <div className="bg-white border border-neutral-200 text-neutral-800 p-3 rounded-lg max-w-[85%] rounded-tl-none shadow-sm leading-relaxed">
              ¡Hola! 👋 Soy tu asistente de Soporte. ¿En qué te puedo ayudar hoy con tu bici o componentes?
            </div>
          </div>

          {/* Input para escribir */}
          <form onSubmit={enviarMensaje} className="p-3 bg-white border-t border-neutral-200 flex gap-2">
            <input
              type="text"
              value={mensaje}
              onChange={(e) => setMensaje(e.target.value)}
              placeholder="Escribí tu consulta..."
              className="flex-1 bg-neutral-50 border border-neutral-200 rounded px-3 py-2 text-xs text-neutral-900 focus:outline-none focus:border-[#5e5345] focus:bg-white transition-colors"
            />
            <button
              type="submit"
              className="p-2 bg-[#5e5345] hover:bg-[#4a4136] text-white rounded transition-colors flex items-center justify-center shrink-0"
            >
              <Send size={14} />
            </button>
          </form>

        </div>
      )}

      {/* GLOBITO FLOTANTE (BOTÓN DISPARADOR) */}
      <button
        onClick={() => setChatAbierto(!chatAbierto)}
        className="flex items-center justify-center p-4 bg-white text-[#5e5345] rounded-full shadow-xl border border-neutral-100 hover:bg-[#5e5345] hover:text-white hover:scale-110 transition-all duration-300 group"
        aria-label="Abrir chat de soporte"
      >
        <MessageSquareCode size={28} />
        
        {!chatAbierto && (
          <span className="absolute right-16 bg-white text-neutral-900 text-xs font-bold px-3 py-1.5 rounded shadow-md border border-neutral-100 opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
            ¿Necesitás ayuda?
          </span>
        )}
      </button>

    </div>
  );
}