import React from "react";
import LanguageSelector from "./elements/LanguageSelector";
import Logo from "./elements/Logo";
import MainNavigation from "./elements/MainNavigation";
import SecondaryNavigation from "./elements/SecondaryNavigation";

export default function Header() {
  return (
    <header className="absolute border-t-[8px] border-yellow-400 w-full top-0 left-0 z-[99]">
      <div className="py-[6px] flex items-center bg-black border-b border-[#333] px-[48px]">
        <LanguageSelector />
      </div>
      <div className="flex justify-between items-center px-[48px] py-[10px]">
        <Logo />
        <MainNavigation />
        <SecondaryNavigation />
      </div>
    </header>
  );
}
