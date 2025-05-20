"use client";

import React, { useState } from "react";

export default function LanguageSelector() {
  const [language, setLanguage] = useState("ar");

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "ar" ? "en" : "ar"));
  };

  return (
    <div className="flex justify-end items-center w-full">
      <button
        onClick={toggleLanguage}
        className="flex overflow-hidden rounded-[10px] border border-[#333] bg-black text-white"
      >
        <span
          className={`px-4 py-2 transition-colors duration-300 ${
            language === "ar" ? "bg-[#333]" : "bg-black"
          }`}
        >
          ع
        </span>
        <span
          className={`px-4 py-2 transition-colors duration-300 ${
            language === "en" ? "bg-[#333]" : "bg-black"
          }`}
        >
          EN
        </span>
      </button>
    </div>
  );
}
