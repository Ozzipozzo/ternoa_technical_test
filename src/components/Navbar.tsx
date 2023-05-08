// src/components/Navbar.tsx
import React from "react";
import Link from "next/link";
import ConnectWallet from "./ConnectWallet";

const Navbar: React.FC = () => {
  return (
    <>
      <nav className="bg-white p-4 font-cereal w-[60%] m-auto">
        <div className="container mx-auto flex items-center justify-between ">
          <Link href="/" className="text-[#3e24b6] text-2xl font-extrabold">
            NFTERS
          </Link>
          <div className="flex space-x-6">
            <Link href="/marketplace">
              <p className="text-black font-semibold">Marketplace</p>
            </Link>
            <Link href="/resources">
              <p className="text-black font-semibold">Resources</p>
            </Link>
            <Link href="/about">
              <p className="text-black font-semibold">About</p>
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <input
              type="search"
              placeholder="Search"
              className="px-3 py-2 text-black border border-[#c0bdbd] rounded-3xl"
            />
            <button className="bg-[#3e24b6] text-white px-8 py-2 rounded-3xl">
              Upload
            </button>
            <div className="bg-white text-[#3e24b6] border border-[#3e24b6] px-4 py-2 rounded-3xl">
              <ConnectWallet />
            </div>
          </div>
        </div>
      </nav>
      <div className=" border-t border-gray-100 w-[100%] mt-6"></div>
    </>
  );
};

export default Navbar;
