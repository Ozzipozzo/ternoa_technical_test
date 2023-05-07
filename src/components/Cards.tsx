import { useState } from "react";
import Image from "next/image";
import { CardsProps } from "@/typings/cards";

const Cards: React.FC<CardsProps> = ({ imageUrl, name, attributes }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className={`bg-white shadow-md rounded-lg w-64 h-96 overflow-hidden flex flex-col transform transition-all duration-500 cursor-pointer ${
        isFlipped ? "rotate-y-180" : ""
      } ${isHovered && !isFlipped ? "rotate-1" : ""}`}
      onClick={handleFlip}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {!isFlipped ? (
        <>
          <Image
            className="w-full h-1/2 object-cover"
            src={imageUrl}
            alt={name}
            layout="responsive"
            width={100}
            height={50}
            loading="lazy"
          />
          <div className="p-4 flex flex-col flex-grow">
            <h3 className="font-semibold text-lg">{name}</h3>
            <p className="font-medium text-base mt-auto">Price:</p>
          </div>
        </>
      ) : (
        <div className="p-4 flex flex-col flex-grow">
          <h3 className="font-semibold text-lg">Attributes</h3>
          <ul className="mt-4 space-y-2">
            {attributes.map((attribute, index) => (
              <li key={index}>
                {attribute.trait_type}: {attribute.value}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Cards;
