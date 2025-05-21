import Link from "next/link";

export default function FullWidthText() {
  return (
    <section
      className="min-h-[612px] bg-cover bg-center md:bg-top bg-no-repeat flex items-center text-center px-4 md:px-0"
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
          className="btn !text-xs tracking-[0.2px] !text-white !bg-black mt-7 !py-3 !px-9"
        >
          Sign up
        </Link>
      </div>
    </section>
  );
}
