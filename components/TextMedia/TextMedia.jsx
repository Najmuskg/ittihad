import Link from "next/link";
import Image from "next/image";

export default function TextMedia({ text, media }) {
  return (
    <section
      className="min-h-[754px] bg-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: "url('/images/text-media-full-img.png')",
      }}
    >
      <div className="grid lg:grid-cols-5 items-center gap-7">
        <div className="lg:col-span-2 px-4 lg:px-12 order-2 lg:order-1 text-center lg:text-left pb-[100px] lg:pb-0">
          <h2 className="text-[32px] md:text-[56px] font-black leading-[125%] tracking-[2.5px] uppercase text-black mb-2">
            Al-ittihad membership
          </h2>

          <div className="space-y-3 max-w-[525px]">
            <p className="text-base font-normal leading-[170%]  text-black">
              Become a member of Al-Ittihad today, with offers and promos
              exclusive to members.
            </p>
          </div>

          <Link
            href="#"
            className="text-xs font-bold leading-[120%] tracking-[0.2px] uppercase text-white bg-black hover:text-[#FFF014] transition-all duration-300 px-9 py-3 mt-5 inline-block"
            style={{
              clipPath:
                "polygon(8% 0px, 92% 0px, 100% 22%, 100% 80%, 93% 100%, 8% 100%, 0px 84%, 0px 22%)",
            }}
          >
            Sign up
          </Link>
        </div>

        <div className="lg:col-span-3 w-full aspect-[65/82] lg:aspect-[45/34] order-1 lg:order-2">
          <Image
            src="/images/text-media-1.png"
            alt=""
            width={900}
            height={680}
            className="w-full h-full object-cover pt-[90px] lg:pt-0"
          />
        </div>
      </div>
    </section>
  );
}
