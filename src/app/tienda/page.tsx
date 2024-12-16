import NadvarT from "@/components/UI/Tienda/NadvarT";
import SectionOneT from "@/components/Sections/Tienda/SectionOneT";
import SectionTwoT from "@/components/Sections/Tienda/SectonTwoT";
import SectionFour from "@/components/Sections/Principal/SectionFour";

export default function Tienda() {
  return (
    <>
      <div className="w-4/5 items-center justify-center mx-auto pt-5">
        <NadvarT />
      </div>
      <SectionOneT />
      <SectionTwoT />
      <SectionFour />
    </>
  );
}
