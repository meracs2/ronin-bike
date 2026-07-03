import { MapPin, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#5e5345] text-[#e6dec8] py-12 px-6 border-t border-[#4a4237]">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        
        {/* Bloque 1: Marca */}
        <div>
          <h3 className="text-white font-bold text-xl mb-4">RONIN-BIKE</h3>
          <p className="text-sm leading-relaxed opacity-90">
            Especialistas en ciclismo. Calidad, servicio y asesoramiento 
            técnico para que tu bici siempre esté al máximo nivel.
          </p>
        </div>

        {/* Bloque 2: Sucursales y contacto */}
        <div>
          <h4 className="text-white font-semibold mb-4 text-sm tracking-widest uppercase">Sucursales</h4>
          <ul className="space-y-4 text-sm">
            <li>
              <a 
                href="https://www.google.com/maps/search/?api=1&query=Calle+123+Córdoba+Capital" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-start gap-2 group hover:text-white transition"
              >
                <MapPin size={16} className="text-orange-400 mt-1 shrink-0" />
                <div>
                  <p className="text-white group-hover:text-orange-300 transition">Sucursal Centro</p>
                  <p className="opacity-80">Calle 123, Córdoba Capital</p>
                </div>
              </a>
            </li>
            <li>
              <a 
                href="https://www.google.com/maps/search/?api=1&query=Calle+321+Córdoba+Capital" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-start gap-2 group hover:text-white transition"
              >
                <MapPin size={16} className="text-orange-400 mt-1 shrink-0" />
                <div>
                  <p className="text-white group-hover:text-orange-300 transition">Sucursal Norte</p>
                  <p className="opacity-80">Calle 321, Córdoba Capital</p>
                </div>
              </a>
            </li>
            <li className="mt-4">
              <a 
                href="https://wa.me/5493510000000" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-orange-300 transition"
              >
                <Phone size={16} className="text-orange-400" /> 
                <span>1234567890</span>
              </a>
            </li>
          </ul>
        </div>

        {/* Bloque 3: Navegación */}
        <div>
          <h4 className="text-white font-semibold mb-4 text-sm tracking-widest uppercase">Servicio</h4>
          <ul className="space-y-2 text-sm opacity-90">
            <li><a href="#" className="hover:text-orange-300 transition">Taller especializado</a></li>
            <li><a href="#" className="hover:text-orange-300 transition">Marcas aliadas</a></li>
            <li>
              <a 
                href="https://wa.me/5493510000000" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-orange-300 transition"
              >
                Consultas por WhatsApp
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="max-w-6xl mx-auto mt-12 pt-8 border-t border-[#4a4237] text-center text-xs opacity-60">
        © {new Date().getFullYear()} Ronin Bike. Todos los derechos reservados.
      </div>
    </footer>
  );
}