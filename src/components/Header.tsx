import Image from "next/image";
import React from "react";

const Header: React.FC = () => {
  return (
    <>
      <div className="w-[100%] md:w-[60%] mt-[6rem] flex flex-col md:flex-row items-center justify-center md:m-auto">
        <div className="w-[90%] lg:w-[48%] lg:space-y-6 space-y-6 text-center">
          <h1 className="font-extrabold w-full text-5xl sm:text-5xl md:text-5xl lg:text-7xl">
            Discover, and collect Digital Art NFTs{" "}
          </h1>
          <p className="text-[#c2c2c2] w-full mt-4 text-sm md:text-lg lg:w-2/3">
            Digital marketplace for crypto collectibles and non-fungible tokens
            (NFTs). Buy, Sell, and discover exclusive digital assets.
          </p>
          <button className="bg-[#3e24b6] text-white px-8 py-2 rounded-3xl">
            Explore Now
          </button>
          <div className="flex justify-center text-center w-full font-extrabold text-3xl md:text-5xl">
            <p>98K+</p>
            <p>2K+</p>
            <p>15K+</p>
          </div>
        </div>
        <div className="w-[80%] mt-8 mb-16 sm:w-[60%]">
          <Image
            src="/images/nftHeader.svg"
            alt="nft-image"
            layout="responsive"
            width={600}
            height={500}
            className="object-cover"
          />
        </div>
      </div>
      <div className="bg-[#f7f9fb] flex flex-col mt-12 lg-mt-8">
        <div className="mt-4 text-center space-x-6 space-y-16 lg:w-[70%] lg:min-h-[15rem]  lg:m-auto lg:flex lg:justify-evenly lg:items-center lg:mt-[4rem] lg:mb-[4rem]">
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
