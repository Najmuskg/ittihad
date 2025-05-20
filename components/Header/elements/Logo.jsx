import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Logo() {
  return (
    <h1>
      <Link href="/" className="max-h-[60px]">
        <Image className="h-full w-full" src="/images/Logo.svg" width={52} height={60} alt="Logo" />
      </Link>
    </h1>
  );
}
