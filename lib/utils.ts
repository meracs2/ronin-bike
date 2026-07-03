import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Función para combinar clases de Tailwind de forma eficiente.
 * Ayuda a evitar conflictos y permite condicionales de estilos.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}