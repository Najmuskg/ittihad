import Link from "next/link";
import React from "react";

export default function MainNavigation() {
  const links = [
    { href: "/link1", label: "Home" },
    { href: "/link2", label: "Club" },
    { href: "/link3", label: "News & Media" },
    { href: "/link4", label: "Matches" },
  ];
  return (
    <nav>
      <ul className="flex space-x-[56px]">
        {links.map(({ href, label }) => (
          <li key={href}>
            <Link
              href={href}
              className=" text-sm font-bold uppercase leading-[120%] tracking-[0.8px] hover:text-yellow-400 transition"
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
