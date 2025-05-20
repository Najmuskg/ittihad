import Image from "next/image";
import Link from "next/link";
import styles from "./ShopSlider.module.css";

export default function ShopSlider() {
  const logos = [
    {
      src: "/images/shop-logo.svg",
    },
    {
      src: "/images/shop-logo.svg",
    },
    {
      src: "/images/shop-logo.svg",
    },
    {
      src: "/images/shop-logo.svg",
    },
    {
      src: "/images/shop-logo.svg",
    },
    {
      src: "/images/shop-logo.svg",
    },
  ];

  return (
    <section className=" overflow-hidden">
      <div className="relative flex gap-5 md:flex-shrink-0 items-center animate-[scrollToLeft_14s_linear_infinite_normal_running]">
        {logos.map((logo, index) => (
          <Link
            key={index}
            href="#"
            className="flex items-center gap-10 relative justify-center"
          >
            <Image src={logo.src} alt="Shop Slider" width={66} height={80} />
            <h3 className="text-[24px] md:text-[40px] font-black leading-[136%] tracking-[2px] uppercase">
              Shop official kits
            </h3>
          </Link>
        ))}
      </div>
    </section>
  );
}
