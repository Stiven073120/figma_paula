import { CardSectionTwo } from "../../UI/Principal/CardSectionTwo";


export default function SectionTwo() {
  return (
    <div className="flex flex-col items-center w-4/5 mx-auto">
      <h1 className="text-[100px] text-center text-black mb-2 mt-20">Testimonios</h1>
      <div className="flex flex-row justify-evenly items-center w-full bg-[#B4D290DB] m-2 p-10">
        <CardSectionTwo
          description="'Desde que tengo plantas en mi oficina, el ambiente es mucho más agradable y fresco.'-Carla G."
          imageUrl="/images/principal/image1.png"
        />

        <CardSectionTwo
          description="'Mis plantas no solo decoran, también me ayudan a relajarme a final de un día largo.'-Juan M."
          imageUrl="/images/principal/image2.png"
        />

        <CardSectionTwo
          description="'Nunca imaginé que cuidar plantas sería tan terapéutico y satisfactorio.'- Laura S"
          imageUrl="/images/principal/image3.png"
        />
      </div>
    </div>
  );
}

