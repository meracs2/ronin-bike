"use client";
import { useCart } from '../../context/CartContext';

export default function CheckoutPage() {
  const { cart } = useCart();
  const handleConfirm = () => {
    const items = cart.map(i => `• ${i.nombre}`).join('\n');
    window.open(`https://wa.me/5493510000000?text=${encodeURIComponent(`Hola, quiero pedir:\n\n${items}`)}`, '_blank');
  };
  return (
    <main className="max-w-4xl mx-auto p-10 text-white min-h-screen">
      <h1 className="text-3xl font-bold mb-8 border-b border-neutral-800 pb-4">Resumen de tu pedido</h1>
      {cart.length === 0 ? <p>Tu orden está vacía.</p> : (
        <div className="bg-neutral-900 p-6 rounded-lg">
          {cart.map((item, i) => <div key={i} className="border-b border-neutral-700 pb-2 mb-2">{item.nombre}</div>)}
          <button onClick={handleConfirm} className="w-full bg-white text-black py-4 rounded font-bold uppercase mt-4 hover:bg-neutral-200">Finalizar por WhatsApp</button>
        </div>
      )}
    </main>
  );
}