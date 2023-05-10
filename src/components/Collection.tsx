import { useEffect, useState } from "react";
import Image from "next/image";
import React from "react";
import Cards from "./Cards";
import { Attributes, NFTResponse } from "@/typings/collection";

const Collection: React.FC = () => {
  const [data, setData] = useState<NFTResponse | null>(null);
  const [metaData, setMetaData] = useState<
    { gateway: string; attributes: Attributes[]; name: string }[] | null
  >(null);
  const [pageKey, setPageKey] = useState<string>("");

  useEffect(() => {
    fetch(`/api/nfts?page=${pageKey}`)
      .then((response) => response.json())
      .then((data: NFTResponse) => {
        console.log(data);
        setData(data);
        const nftData = data.nfts.map((nft) => ({
          gateway: nft.media[0].gateway,
          attributes: nft.rawMetadata.attributes,
          name: nft.rawMetadata.name,
        }));
        console.log(nftData);
        setMetaData(nftData);
      })
      .catch((error) => console.error(error));
  }, [pageKey]);

  const handleLoadMore = () => {
    if (data && data.pageKey) {
      fetch(`/api/nfts?page=${data.pageKey}`)
        .then((response) => response.json())
        .then((newData: NFTResponse) => {
          const newNftData = newData.nfts.map((nft) => ({
            gateway: nft.media[0].gateway,
            attributes: nft.rawMetadata.attributes,
            name: nft.rawMetadata.name,
          }));

          setMetaData((prevMetaData) =>
            prevMetaData ? [...prevMetaData, ...newNftData] : newNftData
          );
          setData(newData);
        })
        .catch((error) => console.error(error));
    }
  };

  const handleLoadLess = () => {
    if (metaData && metaData.length > 20) {
      setMetaData((prevMetaData) =>
        prevMetaData ? prevMetaData.slice(0, -20) : []
      );
    }
  };

  return (
    <>
      <div className="md:w-[70%] m-auto mt-[10rem]">
        <h1 className="font-extrabold text-4xl">NFTs Collection</h1>
        <div className="grid grid-cols-2 gap-4 sm:grid sm:grid-cols-2 md:grid md:grid-cols-3 md:gap-8 mt-[2rem] lg:grid-cols-4 xl:grid-cols-5 lg:grid">
          {metaData &&
            Object.entries(metaData).map(([key, nft]) => (
              <Cards
                key={key}
                imageUrl={nft.gateway}
                name={nft.name}
                attributes={nft.attributes}
              />
            ))}
        </div>
        <div className="flex justify-center space-x-4 mt-8">
          {metaData && metaData.length > 20 && (
            <button
              onClick={handleLoadLess}
              className="bg-white text-[#3e24b6] border border-[#3e24b6] px-4 py-2 rounded-3xl"
            >
              Load Less NFTs
            </button>
          )}
          <button
            onClick={handleLoadMore}
            className="bg-white text-[#3e24b6] border border-[#3e24b6] px-4 py-2 rounded-3xl"
          >
            Load More NFTs
          </button>
        </div>
      </div>
    </>
  );
};

export default Collection;
