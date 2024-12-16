import Link from "next/link";
import { FaHome } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";

export default function Nadvar() {
  return (
    <div className=" w-full ">
      <div className="border-2  text-white  border-gray-300 rounded-full p-2 flex justify-between items-center gap-2.5">
        <Link
          href="/"
          className="p-3 hover:scale-90 transition duration-200"
        >
          <FaHome className="text-white h-6 w-6" />
        </Link>

        <Link
          href="/tienda"
          className=" p-3 hover:scale-90 transition duration-200"
        >
          Tiendas
        </Link>
        <Link
          href="/tiposPlantas"
          className="text-white p-3 hover:scale-90 transition duration-200"
        >
          Tipos de Plantas
        </Link>

        <div className="flex items-center gap-3">
          <input
            type="text"
            name="query"
            placeholder="Buscar tu planta favorita..."
            className="p-2 rounded-full border border-gray-200 w-[500px]"
          />
          <button
            type="submit"
            className="px-1 py-1  border-2 rounded-full text-white cursor-pointer"
          >
            <FaSearch className="text-white h-5 w-5 m-1" />
          </button>
        </div>
      </div>
    </div>
  );
}
