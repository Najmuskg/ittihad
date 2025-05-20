import React from "react";

export default function NewsLetter() {
  return (
    <section className="py-[48px]">
      <div className="container md:flex md:items-center">
        <div className="md:w-[535px]">
          <h2 className="text-[32px] md:text-[40px] font-extrabold leading-[125%] tracking-[2px] uppercase max-[767px]:text-center">
            Sign up to our newsletter
          </h2>
        </div>
        <div className="flex-1 md:pl-10">
          <form className=" text-white/50 p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 max-[767px]:gap-y-8 md:gap-x-5 mb-8 md:mb-[26px]">
              <div>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  placeholder="First name"
                  className="max-[767px]:text-center w-full text-xl font-medium leading-[120%] border-b border-white/50 focus:outline-none pb-[4px] placeholder-white/50"
                />
              </div>
              <div>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  placeholder="Last name"
                  className="max-[767px]:text-center w-full text-xl font-medium leading-[120%] border-b border-white/50 focus:outline-none pb-[4px] placeholder-white/50"
                />
              </div>
            </div>
            <div className="mb-8 md:mb-[26px]">
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email address"
                className="max-[767px]:text-center w-full text-xl font-medium leading-[120%] border-b border-white/50 focus:outline-none pb-[4px] placeholder-white/50"
              />
            </div>
            <p className="text-white/50 text-sm font-medium leading-[120%] mb-8 md:mb-[26px] max-[767px]:text-center">
              By signing up, you confirm you are happy to receive updates from
              us. You can unsubscribe at any time.
            </p>
            <div className="max-[767px]:text-center">
              <button
                type="submit"
                className="bg-[#FFF014] text-black font-semibold px-6 py-2 rounded-md"
              >
                SUBMIT
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
