export default function ArmaTuBiciPage() {
  return (
    <main className="max-w-7xl mx-auto px-4 md:px-8 py-12">
      <h1 className="text-4xl font-black tracking-tighter text-[#2d2621] mb-8 uppercase">
        Arma tu bici ideal
      </h1>
      <div className="bg-white p-8 md:p-12 rounded-3xl border border-[#dccab0] shadow-xl">
        <p className="text-[#5e5345] text-lg mb-8 leading-relaxed">
          Configurá cada detalle de tu futura bicicleta Ronin.
        </p>
        <button className="px-8 py-4 bg-[#5e5345] text-white font-bold rounded-full hover:bg-[#2d2621] transition-all">
          COMENZAR CONFIGURACIÓN
        </button>
      </div>
    </main>
  );
}