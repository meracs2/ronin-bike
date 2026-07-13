"use client";
import { createContext, useContext, useState, useEffect } from 'react';
import { toast } from 'sonner';

export type CartItem = {
  nombre: string;
  precio?: number;
  uniqueId?: number;
  [key: string]: unknown;
};

type CartContextType = {
  cart: CartItem[];
  addToCart: (product: CartItem) => void;
  removeFromCart: (uniqueId: number) => void;
};

const CartContext = createContext<CartContextType | null>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);

  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      try {
        setCart(JSON.parse(savedCart));
      } catch (e) {
        console.error("Error al cargar el carrito", e);
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product: CartItem) => {
    const newProduct = { ...product, uniqueId: Date.now() + Math.random() };
    setCart((prev) => [...prev, newProduct]);
    toast.success(`${product.nombre} agregado al pedido`);
  };

  const removeFromCart = (uniqueId: number) => {
    setCart((prev) => prev.filter((item) => item.uniqueId !== uniqueId));
    toast.error("Producto eliminado del pedido");
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);