export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#e6dec8]">
      <div className="flex flex-col items-center">
        {/* Spinner */}
        <div className="w-12 h-12 border-4 border-[#5e5345] border-t-transparent rounded-full animate-spin"></div>
        {/* Texto opcional */}
        <p className="mt-4 text-[#5e5345] font-black uppercase tracking-widest text-sm">
          Cargando...
        </p>
      </div>
    </div>
  );
}