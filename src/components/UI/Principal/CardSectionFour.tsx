import React from "react";

interface CardSectionFourProps {
  description: string;
  Icon: React.ElementType;
}

export function CardSectionFour({ description, Icon }: CardSectionFourProps) {
  return (
    <div className="flex flex-row items-center gap-4 w-full">
      <Icon className="text-[15px] text-black mb-2 mt-2" />
      <p className="text-left text-black text-[15px] font-normal mb-2 mt-2">
        {description}
      </p>
    </div>
  );
}
