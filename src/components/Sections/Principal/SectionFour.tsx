import Link from "next/link";
import {
  FaPhoneAlt,
  FaInstagram,
  FaEnvelope,
  FaFacebookF,
} from "react-icons/fa";
import { CardSectionFour } from "../../UI/Principal/CardSectionFour";

export default function SectionFour() {
  return (
    <div className="flex flex-row justify-start items-start w-full bg-[#AABBAC] m-2 p-10 gap-10">
      <div className="flex flex-col justify-evenly items-center w-full">
        <div className="flex flex-row justify-evenly items-center gap-10 w-full border-t-2 border-b-2 border-black">
          <p className="text-[20px] text-center text-black mb-2 mt-2">
            Acerca de
          </p>
          <p className="text-[20px] text-center text-black mb-2 mt-2">
            Contáctanos
          </p>
          <p className="text-[20px] text-center text-black mb-2 mt-2">
            Conéctate
          </p>
        </div>

        <div className="flex flex-row justify-start items-start mt-2 w-full gap-10">
          <div className="flex flex-col justify-start items-start w-full gap-3">
            <Link
              href="/nosotros"
              className="p-3 hover:scale-90 transition duration-200"
            >
              Nosotros
            </Link>
            <Link
              href="/blog"
              className="p-3 hover:scale-90 transition duration-200"
            >
              Blog
            </Link>
            <Link
              href="/legal"
              className="p-3 hover:scale-90 transition duration-200"
            >
              Legal
            </Link>
            <Link
              href="/equipo"
              className="p-3 hover:scale-90 transition duration-200"
            >
              Únete al equipo
            </Link>
          </div>

          <div className="flex flex-col justify-start items-start w-full mt-2 gap-3">
            <CardSectionFour Icon={FaPhoneAlt} description="+57 123 4567890" />
            <CardSectionFour
              Icon={FaEnvelope}
              description="contacto@verdehogar.com"
            />
          </div>

          <div className="flex flex-col justify-start items-start w-full mt-2 gap-3">
            <CardSectionFour Icon={FaFacebookF} description="Verde Hogar" />
            <CardSectionFour Icon={FaInstagram} description="verde.hogar" />
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-start items-start w-full">
        <h2 className="text-[25px] text-black">
          Suscríbete a nuestro boletín para recibir novedades y consejos
          exclusivos sobre el cuidado de plantas
        </h2>

        <div className="flex flex-col items-start gap-3 w-full mt-4">
          <input
            type="text"
            name="query"
            placeholder="E-mail"
            className="w-full p-4 border-2 border-[#48663B] "
          />

          <button
            type="submit"
            className="w-1/4 px-4 py-2 text-white bg-green-600 bg-[#48663B] hover:bg-[#7BA269] cursor-pointer"
          >
            Suscríbete
          </button>
        </div>
      </div>
    </div>
  );
}
