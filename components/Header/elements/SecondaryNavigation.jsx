import Link from "next/link";
import React from "react";

export default function SecondaryNavigation() {
  const links = [
    { href: "/link6", label: "Store" },
    { href: "/link7", label: "Tickets" },
  ];
  return (
    <div>
      <ul className="flex space-x-[56px]">
        {links.map(({ href, label }) => (
          <li key={href}>
            <Link
              href={href}
              className="flex items-center gap-2 text-sm font-bold uppercase leading-[120%] tracking-[0.8px] hover:text-yellow-400 transition"
            >
              {label}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="11"
                height="10"
                viewBox="0 0 11 10"
                fill="none"
              >
                <path
                  d="M5.5 1.88354V2.72095H1.33333V9.16667H7.74569V5.00407H8.57902V10H0.5V1.88354H5.5Z"
                  fill="white"
                />
                <path
                  d="M10.5 3.3374H9.66667L9.66219 1.42904L6.1665 4.9585L5.57487 4.37093L9.07503 0.837402L7.17074 0.841471V0.00813802L10.4915 0L10.5 3.3374Z"
                  fill="white"
                />
              </svg>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
