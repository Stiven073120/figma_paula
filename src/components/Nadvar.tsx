import Link from "next/link";

export default function Nadvar() {
  return (
    <div className=" w-full ">
      <div className="border-2 border-gray-300 rounded-full p-5 flex justify-between items-center gap-2.5">
        <Link href="/tiendas">Tiendas</Link>

        <div className="flex items-center gap-1.25">
          <input
            type="text"
            name="query"
            placeholder="Buscar tu planta favorita..."
            className="p-3.75 rounded-full border border-gray-300 w-[500px]"
          />
          <button type="submit" className="px-2.5 py-2.5 cursor-pointer">
            Buscar
          </button>
        </div>
      </div>
    </div>
  );
}
