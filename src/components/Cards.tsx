import { useEffect, useState } from "react";
import Image from "next/image";
import { CardsProps } from "@/typings/cards";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { useFavorites } from "@/context/FavoritesContext";

const Cards: React.FC<CardsProps> = ({ imageUrl, name, attributes }) => {
  const [isFlipped, setIsFlipped] = useState<boolean>(false);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [isLiked, setIsLiked] = useState<boolean>(false);
  const { updateFavorites } = useFavorites();

  useEffect(() => {
    const cardInLocalStorage = localStorage.getItem(`card-${name}`);
    if (cardInLocalStorage) {
      setIsLiked(true);
    }
  }, [name]);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleLike = () => {
    setIsLiked(!isLiked);
    if (!isLiked) {
      const account = localStorage.getItem("account");
      localStorage.setItem(
        `card-${name}`,
        JSON.stringify({ imageUrl, name, attributes, account })
      );
    } else {
      localStorage.removeItem(`card-${name}`);
    }
    updateFavorites();
  };

  return (
    <div
      className={`bg-white shadow-md rounded-lg md:w-64 md:h-96 overflow-hidden flex flex-col transform transition-all duration-500 cursor-pointer ${
        isFlipped ? "rotate-y-180" : ""
      } ${isHovered && !isFlipped ? "rotate-1" : ""}`}
      onClick={handleFlip}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="">
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
        <button
          className={`absolute top-4 right-4 text-2xl ${
            isLiked ? "text-red-500" : "text-gray-400"
          }`}
          onClick={(e) => {
            e.stopPropagation();
            handleLike();
          }}
        >
          {isLiked ? <AiFillHeart /> : <AiOutlineHeart />}
        </button>
      </div>
    </div>
  );
};

export default Cards;
