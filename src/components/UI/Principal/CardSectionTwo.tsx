interface CardSectionTwoProps {
  description: string;
  imageUrl: string;
}

export function CardSectionTwo({ description, imageUrl }: CardSectionTwoProps) {
  return (
    <div className="flex flex-col items-center w-[300px] h-[400px] gap-1 ">
      <img
        src={imageUrl}
        alt="Descripción de la imagen"
        className="w-full h-[70%] object-cover"
      />

      <p className="text-left text-black mt-3 text-[20px] font-normal">
        {description}
      </p>
    </div>
  );
}
