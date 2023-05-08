import { useEffect } from "react";
import Image from "next/image";
import { useFavorites } from "@/context/FavoritesContext";

const Favorites: React.FC = () => {
  const { likedNFTs, updateFavorites } = useFavorites();

  useEffect(() => {
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key && e.key.startsWith("card-")) {
        updateFavorites();
      }
    };

    window.addEventListener("storage", handleStorageChange);
    updateFavorites();

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, [updateFavorites]);

  return (
    <div className="flex flex-wrap justify-center w-[70%] m-auto">
      {likedNFTs.map(({ imageUrl, name, account }) => (
        <div key={name} className="m-4">
          <div className="bg-white shadow-md rounded-lg w-64 h-110 overflow-hidden flex flex-col transform transition-all duration-500">
            <div className="relative">
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
                <p className="text-center font-semibold mt-1 break-words">
                  Liked by: {account}
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Favorites;
