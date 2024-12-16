import { CardSectionOne } from "../../UI/Principal/CardSectionOne";
import Nadvar from "../../UI/Principal/Nadvar";

export default function SectionOne() {
  return (
    <div
      className="flex flex-col justify-evenly items-center w-4/5 mx-auto mt-5 p-5 bg-cover bg-center rounded-[40px]"
      style={{ backgroundImage: "url(/images/principal/bgSectionOne.png)" }}
    >
      <Nadvar />
      <div>
        <h2 className="text-[100px]  text-center text-white">Verde Hogar</h2>
        <p className="text-white text-[25px] text-center mx-auto max-w-[600px] leading-relaxed mt-2">
          Explora el mundo de las plantas y aprende a cuidar de tu propio oasis
          verde
        </p>
      </div>
      <div className="flex flex-row-reverse gap-20 justify-evenly">
        <CardSectionOne description="Descubre las mejores plantas de interior para decorar y mejorar tus espacios." />
        <CardSectionOne description="Las plantas purifican el aire, reducen el estrés y nos conectan con la naturaleza. ¡Descubre más beneficios!" />
        <CardSectionOne description="Aprende los cuidados esenciales para mantener tus plantas saludables y vibrantes." />
      </div>
    </div>
  );
}
