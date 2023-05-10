// src/components/Navbar.tsx
import React from "react";
import Link from "next/link";
import ConnectWallet from "./ConnectWallet";

const Navbar: React.FC = () => {
  return (
    <main>
      <nav className="bg-white p-4 font-cereal md:justify-around w-full md:w-[60%] md:m-auto">
        <div className="lg:flex lg:flex-row lg:items-center lg:justify-between">
          <Link href="/">
            <p className="text-[#3e24b6] text-2xl font-extrabold">NFTERS</p>
          </Link>
          <div className="flex mt-4 justify-center sm:flex space-x-6">
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
          <div className="flex flex-row justify-around w-full mt-4">
            <input
              type="search"
              placeholder="Search"
              className="w-1/6 text-sm mt-4 md:mt-0 md:w-auto px-3 py-2 text-black border border-[#c0bdbd] rounded-3xl"
            />
            <button className="bg-[#3e24b6] text-white text-sm px-8 py-2 mt-4 md:mt-0 rounded-3xl">
              Upload
            </button>
            <div className="bg-white text-[#3e24b6] text-sm border border-[#3e24b6] px-4 py-2 mt-4 md:mt-0 rounded-3xl">
              <ConnectWallet />
            </div>
          </div>
        </div>
      </nav>
      <div className="border-t border-gray-100 w-[100%] mt-6"></div>
    </main>
  );
};

export default Navbar;
