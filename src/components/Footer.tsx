import Image from "next/image";
import React from "react";

const Footer: React.FC = () => {
  return (
    <>
      <div className="bg-[#f7f9fb]">
        <div className="w-[75%] m-auto m-h-[22rem] flex mt-[10rem] bg-[#f7f9fb]">
          <div className="grid grid-cols-4 gap-8 mt-[5rem] mb-[20rem]">
            <div>
              <h3 className="font-extrabold text-2xl">NFters</h3>
              <p className="text-[#c2c2c2] text-sm mt-4">
                The world’s first and largest digital marketplace for crypto
                collectibles and non-fungible tokens (NFTs). Buy, sell, and
                discover exclusive digital items.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-2xl">Market Place</h3>
              <ul className="font-normal text-sm mt-4 space-y-2">
                <li>All NFTs</li>
                <li>New</li>
                <li>Art</li>
                <li>Sports</li>
                <li>Utility</li>
                <li>Music</li>
                <li>Domain Name</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-2xl">My Account</h3>
              <ul className="font-normal text-sm mt-4 space-y-2">
                <li>Profile</li>
                <li>Favorite</li>
                <li>My collections</li>
                <li>Settings</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-2xl">Stay in the loop</h3>
              <p className="text-[#c2c2c2] text-sm mt-4">
                The world’s first and largest digital marketplace for crypto
                collectibles and non-fungible tokens (NFTs). Buy, sell, and
                discover exclusive digital items.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
