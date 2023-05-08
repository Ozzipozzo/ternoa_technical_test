import React, { createContext, useContext, useState, useEffect } from "react";

type LikedNFT = {
  imageUrl: string;
  name: string;
  attributes: any[];
  account: string;
  children: React.ReactNode;
};

type FavoritesContextProviderProps = {
  children: React.ReactNode;
};

type FavoritesContextType = {
  likedNFTs: LikedNFT[];
  updateFavorites: () => void;
};

const FavoritesContext = createContext<FavoritesContextType>({
  likedNFTs: [],
  updateFavorites: () => {},
});

export const useFavorites = () => {
  return useContext(FavoritesContext);
};

export const FavoritesProvider: React.FC<FavoritesContextProviderProps> = ({
  children,
}) => {
  const [likedNFTs, setLikedNFTs] = useState<LikedNFT[]>([]);

  const updateFavorites = () => {
    const nfts: LikedNFT[] = [];

    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);

      if (key && key.startsWith("card-")) {
        const nft = JSON.parse(localStorage.getItem(key) as string);
        nfts.push(nft);
      }
    }

    setLikedNFTs(nfts);
  };

  useEffect(() => {
    updateFavorites();
  }, []);

  return (
    <FavoritesContext.Provider value={{ likedNFTs, updateFavorites }}>
      {children}
    </FavoritesContext.Provider>
  );
};
