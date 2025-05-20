import React from "react";
import LanguageSelector from "./elements/LanguageSelector";
import Logo from "./elements/Logo";
import MainNavigation from "./elements/MainNavigation";
import SecondaryNavigation from "./elements/SecondaryNavigation";

export default function Header() {
  return (
    <header className="relative border-t-[8px] border-yellow-400 bg-black">
      <div className="py-[6px] flex items-center border-b border-[#333] px-[48px]">
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
