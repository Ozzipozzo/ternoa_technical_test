import Image from "next/image";
import React from "react";

const Header: React.FC = () => {
  return (
    <>
      <div className="w-[75%] m-auto flex justify-evenly mt-[10rem]">
        <div className="w-[48%] space-y-6">
          <h1 className="font-extrabold text-7xl">
            Discover, and collect Digital Art NFTs{" "}
          </h1>
          <p className="text-[#c2c2c2] text-lg w-2/3">
            Digital marketplace for crypto collectibles and non-fungible tokens
            (NFTs). Buy, Sell, and discover exclusive digital assets.
          </p>
          <button className="bg-[#3e24b6] text-white px-8 py-2 rounded-3xl">
            Explore Now
          </button>
          <div className="flex font-extrabold text-5xl">
            <p>98K+</p>
            <p>2K+</p>
            <p>15K+</p>
          </div>
        </div>
        <div className="">
          <Image
            src="/images/nftHeader.svg"
            alt="nft-image"
            width={600}
            height={500}
          />
        </div>
      </div>
      <div className="bg-[#f7f9fb]">
        <div className="w-[70%] min-h-[20rem]  m-auto flex justify-evenly items-center mt-[10rem]">
          <div className="flex-1 flex flex-col items-center">
            <h2 className="font-extrabold text-4xl">
              The amazing NFT art of the world here{" "}
            </h2>
          </div>
          <div className="flex-1 flex flex-col items-center">
            <h2 className="font-extrabold text-xl">Fast Transaction </h2>
            <p className="text-[#c2c2c2] text-lg w-2/3 text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              etiam viverra tellus imperdiet.
            </p>
          </div>
          <div className="flex-1 flex flex-col items-center">
            <h2 className="font-extrabold text-xl">Growth Transaction </h2>
            <p className="text-[#c2c2c2] text-lg w-2/3 text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              etiam viverra tellus imperdiet.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
