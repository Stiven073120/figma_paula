import { CardSectionThree } from "../../UI/Principal/CardSectionThree";
export default function SectionThree() {
  return (
    <div>
      <h2 className="text-[80px]  text-center text-black mt-20">
        ¡LAS PLANTAS TAMBIÉN SON HERMOSAS DECORACIONES!
      </h2>
      <div className="flex flex-row justify-evenly items-center w-full  m-2 p-10  ">
       <CardSectionThree imageUrl="/images/principal/imgsec31.png"/>
       <CardSectionThree imageUrl="/images/principal/imgsec32.png"/>
       <CardSectionThree imageUrl="/images/principal/imgsec33.png"/>
      </div>
    </div>
  );
}
