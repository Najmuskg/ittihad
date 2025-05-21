import Link from "next/link";
import Image from "next/image";

export default function TextMedia({ text, media }) {
  return (
    <section className="min-h-[754px] bg-cover bg-no-repeat flex items-end relative">
      <div className="w-full aspect-[1512/750] min-h-[750px] lg:min-h-auto">
        <Image
          src="/images/text-media-full-img.png"
          alt=""
          width={1512}
          height={753}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="grid lg:grid-cols-5 items-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full">
        <div className="lg:col-span-2 px-4 lg:px-12 order-2 lg:order-1 text-center lg:text-left -mt-[290px] lg:-mt-0">
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
            className="btn tracking-[0.2px] !text-white !bg-black mt-5 !py-3 !px-9"
          >
            Sign up
          </Link>
        </div>

        <div className="lg:col-span-3 h-[418px] lg:h-[680px] order-1 lg:order-2 mt-10 lg:mt-auto">
          <Image
            src="/images/text-media-1.png"
            alt=""
            width={900}
            height={680}
            className="w-full h-full object-contain object-top-left lg:object-bottom-right"
          />
        </div>
      </div>
    </section>
  );
}
