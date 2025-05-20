import Link from "next/link";
import React from "react";
import SecondaryNavigation from "./SecondaryNavigation";

export default function MainNavigation() {
  const links = [
    { href: "/link1", label: "Home" },
    { href: "/link2", label: "Club" },
    { href: "/link3", label: "News & Media" },
    { href: "/link4", label: "Matches" },
  ];
  return (
    <>
      <ul className="flex flex-col md:flex-row  md:space-x-[56px]">
        {links.map(({ href, label }) => (
          <li key={href}>
            <Link
              href={href}
              className=" text-sm font-bold uppercase leading-[120%] tracking-[0.8px] hover:text-[#FFF014] transition"
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>

      <div className="block md:hidden">
        <SecondaryNavigation />
      </div>
    </>
  );
}
