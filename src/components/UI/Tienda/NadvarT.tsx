import Link from "next/link";
import { FaHome } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";

export default function NadvarT() {
  return (
    <div className=" w-full ">
      <div className="border-2  text-[#1C3F20]  border-[#92B882] rounded-full p-2 mt-5 mb-5 flex justify-between items-center gap-2.5">
        <Link href="/" className="p-3 hover:scale-90 transition duration-200">
          <FaHome className="text-[#1C3F20] h-6 w-6" />
        </Link>

        <Link
          href="/tienda"
          className=" p-3 hover:scale-90 text-[#1C3F20] transition duration-200"
        >
          Tiendas
        </Link>
        <Link
          href="/tiposPlantas"
          className="text-[#1C3F20] p-3 hover:scale-90 transition duration-200"
        >
          Tipos de Plantas
        </Link>

        <div className="flex items-center gap-3">
          <input
            type="text"
            name="query"
            placeholder="Buscar tu planta favorita..."
            className="p-2 rounded-full text-[#1C3F20] bg-[#D1DECC] w-[500px]"
          />
          <button
            type="submit"
            className="px-1 py-1  bg-[#D1DECC] rounded-full text-white cursor-pointer"
          >
            <FaSearch className="text-[#1C3F20] h-5 w-5 m-1" />
          </button>
        </div>
      </div>
    </div>
  );
}
