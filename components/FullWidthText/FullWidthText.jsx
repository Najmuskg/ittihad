import Link from "next/link";

export default function FullWidthText() {
  return (
    <section
      className="min-h-[612px] bg-center bg-cover bg-no-repeat flex items-center text-center"
      style={{
        backgroundImage: "url('/images/signup-full-img.png')",
      }}
    >
      <div className="max-w-[736px] mx-auto">
        <h2 className="text-[32px] md:text-[56px] font-black leading-[125%] tracking-[2.5px] uppercase text-black mb-4">
          Sign up to win exclusive prizes
        </h2>

        <div className="space-y-3">
          <p className="text-base font-normal leading-[170%]  text-black">
            Become a member of Al-Ittihad today, with offers and promos
            exclusive to members.
          </p>
        </div>

        <Link
          href="#"
          className="text-xs font-bold leading-[120%] tracking-[0.2px] uppercase text-white bg-black hover:text-[#FFF014] transition-all duration-300 px-9 py-3 mt-7 inline-block"
          style={{
            clipPath:
              "polygon(8% 0px, 92% 0px, 100% 22%, 100% 80%, 93% 100%, 8% 100%, 0px 84%, 0px 22%)",
          }}
        >
          Sign up
        </Link>
      </div>
    </section>
  );
}
