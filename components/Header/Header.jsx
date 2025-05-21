"use client";
import React, { useState } from "react";
import LanguageSelector from "../LanguageSelector";
import Logo from "./elements/Logo";
import MainNavigation from "./elements/MainNavigation";
import SecondaryNavigation from "./elements/SecondaryNavigation";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <header className="absolute border-t-[4px] md:border-t-[8px] border-yellow-400 w-full top-0 left-0 z-[99]">
      <div className="py-[6px] flex items-center bg-black border-b border-[#333] px-4 md:px-[48px]">
        <LanguageSelector />
      </div>
      <div className="flex justify-between items-center px-4 md:px-[48px] py-[10px]">
        <Logo />
        <div className="max-[1024px]:block lg:hidden flex justify-end">
          <button
            className="toggleNav flex flex-col items-end w-[32px] bg-transparent space-y-[4px]"
            onClick={toggleMenu}
            aria-label="Toggle navigation"
          >
            <span
              className={`block w-full h-[2px] bg-white relative transition-transform duration-300 ${
                isMenuOpen ? "rotate-[45deg] top-[5px]" : ""
              }`}
            ></span>
            <span
              className={`block w-full h-[2px] bg-white relative transition-opacity duration-300 ${
                isMenuOpen ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`block w-full h-[2px] bg-white relative transition-transform duration-300 ${
                isMenuOpen ? "-rotate-[45deg] -top-2" : ""
              }`}
            ></span>
          </button>
        </div>
        <nav
          className={`main-menu absolute left-0 top-full z-10 max-[1024px]:w-full max-[1024px]:overflow-y-auto max-[1024px]:transition-all max-[1024px]:duration-300 max-[1024px]:ease-in-out
            ${
              isMenuOpen
                ? "max-[1024px]:opacity-100 max-[1024px]:visible max-[1024px]:h-auto bg-black py-10"
                : "max-[1024px]:opacity-0 max-[1024px]:invisible max-[1024px]:h-0"
            }
            lg:block lg:relative lg:h-full
          `}
        >
          <MainNavigation />
        </nav>
        <div className="hidden md:block">
          <SecondaryNavigation />
        </div>
      </div>
    </header>
  );
}
