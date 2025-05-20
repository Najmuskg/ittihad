import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Logo() {
  return (
    <h1>
      <Link href="/" className="flex items-center">
        <Image src="/images/Logo.svg" width={52} height={60} alt="Logo" />
      </Link>
    </h1>
  );
}
