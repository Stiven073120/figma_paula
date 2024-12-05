import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

interface CardSectionOneProps {
  description: string;
}

export function CardSectionOne({ description }: CardSectionOneProps) {
  return (
    <div className="flex flex-col flex justify-between items-center w-4/5  mx-auto bg-[#6D9A3AD1] mt-3 p-3 rounded-[15px] gap-4 text-white">
      <p>{description}</p>
      <Link href="/{enlace}" className="border-2 border-gray-200 rounded-full text-black flex justify-center items-center bg-[#D9D9D9] px-3 py-2 w-full max-w-[300px] hover:text-black transition duration-300 hover:scale-90">
      <FaArrowRight/></Link>
        
      
    </div>
  );
}
