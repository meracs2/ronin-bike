import { productos } from '@/data/productos'; // Importamos la data que creamos recién

export default function ProductoDetalle({ params }: { params: { slug: string } }) {
  // Buscamos el producto donde el slug coincida con el de la URL
  const producto = productos.find((p) => p.slug === params.slug);

  // Si no encuentra el producto, mostramos esto
  if (!producto) {
    return <div className="text-center py-20 text-[#5e5345]">Producto no encontrado</div>;
  }

  return (
    <main className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-black text-[#2d2621] uppercase">{producto.nombre}</h1>
      <p className="text-3xl font-bold text-[#5e5345] mt-4">${producto.precio}</p>
      
      <div className="mt-8 p-6 bg-[#e6dec8] rounded-xl">
        <p className="text-[#2d2621] text-lg">{producto.descripcion}</p>
      </div>

      <button className="mt-8 px-8 py-3 bg-[#5e5345] text-white font-bold rounded-full hover:bg-[#2d2621] transition-all">
        AGREGAR AL PEDIDO
      </button>
    </main>
  );
}