export default function LoadingSpinner() {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-[#e6dec8]">
      {/* Círculo de carga con el color oscuro de la marca */}
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-[#5e5345]"></div>
      <p className="mt-6 text-[#5e5345] font-black tracking-[0.2em] uppercase text-sm">
        Cargando Ronin...
      </p>
    </div>
  );
}