export interface Project {
  id: number;
  title: string;
  description: string;
  category: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Proyecto Alpha",
    description: "Descripción breve de tu primer proyecto de ciclismo.",
    category: "Desarrollo",
  },
  {
    id: 2,
    title: "Proyecto Beta",
    description: "Detalle sobre este segundo trabajo.",
    category: "Diseño",
  },
  {
    id: 3,
    title: "Proyecto Gamma",
    description: "Información sobre el tercer proyecto destacado.",
    category: "Mantenimiento",
  },
];