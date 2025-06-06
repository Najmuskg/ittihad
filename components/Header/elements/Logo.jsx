import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Logo() {
  return (
    <div>
      <h1>
        <Link href="/">
          <Image
            className="max-h-[56px] md:max-h-[60px] w-full"
            src="/images/Logo.svg"
            width={52}
            height={60}
            alt="Logo"
          />
        </Link>
      </h1>
    </div>
  );
}
