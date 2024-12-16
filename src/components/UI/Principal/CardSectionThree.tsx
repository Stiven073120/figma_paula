interface CardSectionThreeProps {
  imageUrl: string;
}

export function CardSectionThree({ imageUrl }: CardSectionThreeProps) {
  return (
    <div className="flex flex-col items-center w-[300px] h-[400px] gap-1 ">
      <img
        src={imageUrl}
        alt="Imagenes seccion tres"
        className="w-full h-[100%] object-cover rounded-[50px]"
      />
    </div>
  );
}
