import { FaArrowRight } from "react-icons/fa";

interface CardSectionOneProps {
  description: string;
}

export function CardSectionOne({ description }: CardSectionOneProps) {
  return (
    <div className="flex flex-col justify-center items-center w-4/5  mx-auto bg-green-500 mt-5 p-5 rounded-[15px]">
      <p>{description}</p>
      <button>
        <FaArrowRight />
      </button>
    </div>
  );
}
