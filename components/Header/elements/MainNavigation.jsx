"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import SecondaryNavigation from "./SecondaryNavigation";

export default function MainNavigation() {
  const pathname = usePathname();

  const links = [
    { href: "/link1", label: "Home" },
    { href: "/link2", label: "Club" },
    { href: "/link3", label: "News & Media" },
    { href: "/link4", label: "Matches" },
  ];

  return (
    <>
      <ul className="flex flex-col md:flex-row md:space-x-[56px]">
        {links.map(({ href, label }) => {
          const isActive = pathname === href;

          return (
            <li key={href}>
              <Link
                href={href}
                className={`text-sm font-bold uppercase leading-[120%] tracking-[0.8px] linkHover ${
                  isActive ? "text-[#FFF014]" : ""
                }`}
              >
                {label}
              </Link>
            </li>
          );
        })}
      </ul>

      <div className="block md:hidden">
        <SecondaryNavigation />
      </div>
    </>
  );
}
