import { projects } from '@/data/projects';

export default function ProjectGrid() {
  return (
    <section className="px-8 md:px-20 py-24 bg-[#fcfbfa] border-t border-neutral-200">
      {/* AGRANDADO: El título de sección ahora se lee de verdad */}
      <h2 className="text-xs uppercase tracking-[0.3em] text-neutral-500 mb-16 font-extrabold">
        Proyectos Seleccionados
      </h2>
      
      <div className="flex flex-col">
        {projects.map((project) => (
          <div 
            key={project.id} 
            className="group border-b border-neutral-200 py-8 flex flex-col md:flex-row md:justify-between md:items-center transition-all duration-300 hover:opacity-60 cursor-pointer"
          >
            {/* ACHICADO Y CORREGIDO: Dejó de ser un bloque tosco y gigante */}
            <h3 className="text-xl md:text-2xl font-bold uppercase tracking-[-0.01em] text-neutral-900">
              {project.title}
            </h3>
            
            {/* AGRANDADO: La categoría ya no requiere lupa para leerse */}
            <span className="text-xs uppercase tracking-[0.15em] font-bold text-neutral-500 mt-2 md:mt-0">
              {project.category}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}