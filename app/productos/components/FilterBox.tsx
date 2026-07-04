interface FilterBoxProps {
  titulo: string;
  children: React.ReactNode;
}

export default function FilterBox({ titulo, children }: FilterBoxProps) {
  return (
    <div className="border border-[#dccab0] rounded-xl bg-[#f9f7f2] p-4 mb-6">
      <h3 className="font-black text-[#2d2621] mb-3 uppercase tracking-wider text-sm">
        {titulo}
      </h3>
      <div className="flex flex-col gap-2">
        {children}
      </div>
    </div>
  );
}