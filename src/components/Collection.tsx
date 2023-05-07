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
  const [previousPageKeys, setPreviousPageKeys] = useState<string[]>([]);

  useEffect(() => {
    fetch(`/api/nfts?page=${pageKey}`)
      .then((response) => response.json())
      .then((data: NFTResponse) => {
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

  const handlePreviousPage = () => {
    if (previousPageKeys.length > 0) {
      const newPreviousPageKeys = [...previousPageKeys];
      const lastPageKey = newPreviousPageKeys.pop();
      setPreviousPageKeys(newPreviousPageKeys);
      setPageKey(lastPageKey as string);
      console.log(previousPageKeys);
    }
  };

  const handleNextPage = () => {
    if (data && data.pageKey) {
      setPreviousPageKeys([...previousPageKeys, pageKey]);
      setPageKey(data.pageKey);
    }
  };

  return (
    <>
      <div className="w-[70%] m-auto mt-[10rem]">
        <h1 className="font-extrabold text-4xl">NFTs Collection</h1>
        <div className="grid grid-cols-5 gap-8 mt-[2rem]">
          {metaData &&
            Object.entries(metaData).map(([key, nft]) => (
              <Cards key={key} imageUrl={nft.gateway} name={nft.name} attributes={nft.attributes} />
            ))}
        </div>

        {/* <button onClick={handlePreviousPage}>Page précédente</button>
      <button onClick={handleNextPage}>Page suivante</button> */}
      </div>
    </>
  );
};

export default Collection;
