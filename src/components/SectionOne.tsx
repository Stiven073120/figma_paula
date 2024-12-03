import { CardSectionOne } from "./CardSectionOne";
import Nadvar from "./Nadvar";

export default function SectionOne() {
  return (
    <div className="flex flex-col justify-center items-center w-4/5  mx-auto  mt-5 p-5">
      <Nadvar />
      <div>
        <h2>Verde Hogar</h2>
        <p>
          Explora el mundo de las plantas y aprende a cuidar de tu propio oasis
          verde
        </p>
      </div>
      <div className="flex flex-row-reverse gap-5 ">
        <CardSectionOne description="tarjeta numero 3" />
        <CardSectionOne description="tarjeta numero 2" />
        <CardSectionOne description="tarjeta numero 1" />
      </div>
    </div>
  );
}
