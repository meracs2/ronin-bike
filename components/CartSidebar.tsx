"use client";
import { useCart } from '../context/CartContext';
import type { CartItem } from '../context/CartContext';
import { Trash2 } from 'lucide-react';

export default function CartSidebar({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) {
  const cartContext = useCart();

  if (!cartContext) return null;

  const { cart, removeFromCart } = cartContext;

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex justify-end">
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />
      <div className="relative w-full max-w-sm bg-neutral-900 text-white p-6 shadow-2xl flex flex-col h-full">
        <h2 className="text-xl font-bold mb-6">Tu Pedido</h2>
        
        <div className="flex-1 overflow-y-auto space-y-4">
          {cart.length === 0 ? (
            <p className="text-neutral-400">Tu orden está vacía.</p>
          ) : (
            cart.map((item: CartItem) => {
              const handleRemove = () => {
                if (typeof item.uniqueId === 'number') {
                  removeFromCart(item.uniqueId);
                }
              };

              return (
                <div key={item.uniqueId} className="flex justify-between items-center border-b border-neutral-700 pb-2">
                  <span>{item.nombre}</span>
                  <button 
                    onClick={handleRemove} 
                    className="text-red-500 hover:text-red-400 p-2 cursor-pointer"
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
              );
            })
          )}
        </div>

        <button onClick={onClose} className="mt-4 text-neutral-400">Cerrar</button>
        <a href="/checkout" className="mt-4 w-full bg-red-600 text-center py-3 rounded font-bold">
          IR A FINALIZAR
        </a>
      </div>
    </div>
  );
}