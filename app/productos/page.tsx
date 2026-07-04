"use client";
import { useState } from 'react';
import { productos } from '@/data/productos';
import ProductCard from '@/components/ProductCard';
import FilterBox from './components/FilterBox';

export default function ProductosPage() {
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('TODAS');
  
  // Estados para los inputs de precio
  const [precioMin, setPrecioMin] = useState('');
  const [precioMax, setPrecioMax] = useState('');

  // Lógica para obtener categorías únicas automáticamente
  const categoriasUnicas = ['TODAS', ...Array.from(new Set(productos.map(p => p.categoria)))];

  // Lógica combinada: Filtra por categoría Y por rango de precio
  const productosFiltrados = productos.filter(p => {
    const cumpleCategoria = categoriaSeleccionada === 'TODAS' || p.categoria === categoriaSeleccionada;
    
    const min = precioMin === '' ? 0 : Number(precioMin);
    const max = precioMax === '' ? Infinity : Number(precioMax);
    const cumplePrecio = p.precio >= min && p.precio <= max;
    
    return cumpleCategoria && cumplePrecio;
  });

  return (
    <main className="max-w-7xl mx-auto px-4 py-12 flex flex-col md:flex-row gap-10">
      
      {/* SIDEBAR CON FILTROS */}
      <aside className="w-full md:w-64 shrink-0">
        
        {/* FILTRO 1: CATEGORÍAS */}
        <FilterBox titulo="Categorías">
          <div className="h-48 overflow-y-auto custom-scrollbar pr-2 flex flex-col gap-2">
            {categoriasUnicas.map((cat) => (
              <button
                key={cat}
                onClick={() => setCategoriaSeleccionada(cat)}
                className={`w-full text-left px-4 py-2 rounded-lg font-bold transition-all ${
                  categoriaSeleccionada === cat 
                    ? 'bg-[#5e5345] text-white' 
                    : 'text-[#5e5345] hover:bg-[#dccab0]'
                }`}
              >
                {cat.toUpperCase()}
              </button>
            ))}
          </div>
        </FilterBox>

        {/* FILTRO 2: PRECIO MANUAL */}
        <FilterBox titulo="Precio">
          <div className="flex flex-col gap-3">
            <input 
              type="number" 
              placeholder="Desde ($)" 
              className="w-full p-2 rounded-lg border border-[#dccab0] bg-white text-[#5e5345] focus:outline-none focus:ring-2 focus:ring-[#5e5345]"
              onChange={(e) => setPrecioMin(e.target.value)}
            />
            <input 
              type="number" 
              placeholder="Hasta ($)" 
              className="w-full p-2 rounded-lg border border-[#dccab0] bg-white text-[#5e5345] focus:outline-none focus:ring-2 focus:ring-[#5e5345]"
              onChange={(e) => setPrecioMax(e.target.value)}
            />
          </div>
        </FilterBox>

      </aside>

      {/* GRILLA DE PRODUCTOS */}
      <section className="flex-1">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {productosFiltrados.map((prod) => (
            <ProductCard 
              key={prod.id} 
              nombre={prod.nombre} 
              desc={prod.descripcion} // Corrección clave: mapeo de descripcion a desc
              precio={prod.precio}
              slug={prod.slug}
              cantidadFotos={2} 
            />
          ))}
        </div>
      </section>
    </main>
  );
}