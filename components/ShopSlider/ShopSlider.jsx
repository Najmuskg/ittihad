import Image from "next/image";
import Link from "next/link";
import styles from "./ShopSlider.module.css";

export default function ShopSlider() {
  const logos = [
    { src: "/images/shop-logo.svg" },
    { src: "/images/shop-logo.svg" },
    { src: "/images/shop-logo.svg" },
    { src: "/images/shop-logo.svg" },
    { src: "/images/shop-logo.svg" },
    { src: "/images/shop-logo.svg" },
  ];

  const repeatedLogos = [...logos, ...logos, ...logos]; // repeat for smooth scrolling

  return (
    <section className=" bg-[#FFF014] w-full overflow-hidden py-4">
      <div className={`${styles.marqueeInner} flex gap-10`}>
        {repeatedLogos.map((logo, index) => (
          <Link
            key={index}
            href="#"
            className="flex items-center gap-10 flex-shrink-0"
          >
            <Image src={logo.src} alt="Shop Logo" width={66} height={80} />
            <h3 className="text-[24px] md:text-[40px] font-black leading-[136%] tracking-[2px] uppercase whitespace-nowrap text-black">
              Shop official kits
            </h3>
          </Link>
        ))}
      </div>
    </section>
  );
}
