import { CardSectionOne } from "./CardSectionOne";
import Nadvar from "./Nadvar";

export default function SectionOne() {
  return (
    <div className="flex flex-col justify-center items-center w-4/5 mx-auto mt-5 p-5 bg-cover bg-center rounded-[40px]" style={{ backgroundImage: 'url(/images/bgSectionOne.png)' }}>
      <Nadvar />
      <div>
        <h2>Verde Hogar</h2>
        <p>
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
