export default function ContactoPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 md:px-8 py-12">
      <h1 className="text-4xl font-black tracking-tighter text-[#2d2621] mb-8 uppercase">
        Consultas
      </h1>
      <form className="space-y-6 bg-white p-8 md:p-10 rounded-3xl border border-[#dccab0] shadow-xl">
        <input type="text" placeholder="Tu Nombre" className="w-full p-4 border border-[#dccab0] rounded-xl" />
        <input type="email" placeholder="Tu Email" className="w-full p-4 border border-[#dccab0] rounded-xl" />
        <textarea placeholder="¿En qué podemos ayudarte?" rows={5} className="w-full p-4 border border-[#dccab0] rounded-xl"></textarea>
        <button type="submit" className="w-full px-8 py-4 bg-[#5e5345] text-white font-bold rounded-full hover:bg-[#2d2621] transition-all">
          ENVIAR MENSAJE
        </button>
      </form>
    </main>
  );
}