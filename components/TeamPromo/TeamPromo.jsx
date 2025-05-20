"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default function TeamPromo() {
  const [gender, setGender] = useState("mens");

  const toggleGender = () => {
    setGender((prev) => (prev === "mens" ? "mens" : "ladies"));
  };

  return (
    <section className="px-4 md:px-12 py-[70px] md:py-[120px] space-y-7 team-promo-block overflow-hidden">
      <div className="flex flex-col space-y-4 md:space-y-5">
        <div className="flex items-center">
          <h2 className="text-2xl md:text-[40px] font-black leading-[125%] tracking-[2px] uppercase">
            First teams
          </h2>

          <Link
            href="#"
            className="ml-auto text-xs font-bold leading-[120%] tracking-[0.2px] uppercase text-black bg-[#FFF014] py-3 px-2 hover:bg-[#FFF014]/90 transition-all duration-300 ease-in-out"
            style={{
              clipPath:
                "polygon(8% 0px, 92% 0px, 100% 22%, 100% 80%, 93% 100%, 8% 100%, 0px 84%, 0px 22%)",
            }}
          >
            View full team
          </Link>
        </div>

        <button
          onClick={toggleGender}
          className="flex items-center gap-[7px] border border-[#333] bg-[#333] text-white cursor-pointer p-px w-fit"
          style={{
            clipPath:
              "polygon(8% 0px, 92% 0px, 100% 22%, 100% 80%, 93% 100%, 8% 100%, 0px 84%, 0px 22%)",
          }}
        >
          <span
            style={{
              clipPath:
                "polygon(14% 0px, 83% 0px, 100% 24%, 100% 73%, 82% 100%, 14% 100%, 0px 79%, 0px 22%)",
            }}
            className={`text-xs font-normal leading-[170%] px-[7px] py-1 transition-colors duration-300 ${
              gender === "mens" ? "bg-black" : "bg-[#333]"
            }`}
          >
            Mens{" "}
          </span>
          <span
            className={`text-xs font-normal leading-[170%] pr-[7px] py-[5px] transition-colors duration-300 ${
              gender === "ladies" ? "bg-black" : "bg-[#333]"
            }`}
          >
            Ladies
          </span>
        </button>
      </div>

      <Swiper
        className="overflow-visible"
        modules={[Pagination, Navigation]}
        spaceBetween={10}
        slidesPerView={1.3}
        pagination={{
          el: ".team-progress",
          type: "progressbar",
        }}
        navigation={{
          enabled: true,
          nextEl: ".team-btn-next",
          prevEl: ".team-btn-prev",
        }}
        breakpoints={{
          768: {
            slidesPerView: 4,
          },
        }}
      >
        <SwiperSlide
          className="w-full aspect-[264/369] md:aspect-[347/485] bg-center !flex items-end relative !bg-black"
          style={{
            background:
              "linear-gradient(180deg, rgba(0, 0, 0, 0.00) 54.92%, #000 100%), url('/images/team-1.png') lightgray 50% / cover no-repeat",
          }}
        >
          <div className="w-[93px] h-[86px] absolute top-[84px] right-[58px]">
            <Image
              src={"/images/Badge.png"}
              width={93}
              height={86}
              alt=""
              className="w-full h-full object-contain"
            />
          </div>

          <div className="flex items-center gap-7 justify-between w-full px-4 py-5">
            <h3 className="text-base md:text-2xl font-extrabold leading-[125%] tracking-[0.5px] uppercase max-w-[196px]">
              Abdulilah Alamri
            </h3>
            <span className="text-[40px] md:text-[56px] font-black leading-[100%] tracking-[2px] uppercase">
              4
            </span>
          </div>
        </SwiperSlide>

        <SwiperSlide
          className="w-full aspect-[264/369] md:aspect-[347/485] bg-center !flex items-end relative !bg-black"
          style={{
            background:
              "linear-gradient(180deg, rgba(0, 0, 0, 0.00) 54.92%, #000 100%), url('/images/team-2.png') lightgray 50% / cover no-repeat",
          }}
        >
          <div className="flex items-center gap-7 justify-between w-full px-4 py-5">
            <h3 className="text-base md:text-2xl font-extrabold leading-[125%] tracking-[0.5px] uppercase max-w-[196px]">
              Muhannad Al-Shanqeeti
            </h3>
            <span className="text-[40px] md:text-[56px] font-black leading-[100%] tracking-[2px] uppercase">
              13
            </span>
          </div>
        </SwiperSlide>

        <SwiperSlide
          className="w-full aspect-[264/369] md:aspect-[347/485] bg-center !flex items-end relative !bg-black"
          style={{
            background:
              "linear-gradient(180deg, rgba(0, 0, 0, 0.00) 54.92%, #000 100%), url('/images/team-3.png') lightgray 50% / cover no-repeat",
          }}
        >
          <div className="flex items-center gap-7 justify-between w-full px-4 py-5">
            <h3 className="text-base md:text-2xl font-extrabold leading-[125%] tracking-[0.5px] uppercase max-w-[196px]">
              Hossam Aouar
            </h3>
            <span className="text-[40px] md:text-[56px] font-black leading-[100%] tracking-[2px] uppercase">
              10
            </span>
          </div>
        </SwiperSlide>

        <SwiperSlide
          className="w-full aspect-[264/369] md:aspect-[347/485] bg-center !flex items-end relative !bg-black"
          style={{
            background:
              "linear-gradient(180deg, rgba(0, 0, 0, 0.00) 54.92%, #000 100%), url('/images/team-4.png') lightgray 50% / cover no-repeat",
          }}
        >
          <div className="flex items-center gap-7 justify-between w-full px-4 py-5">
            <h3 className="text-base md:text-2xl font-extrabold leading-[125%] tracking-[0.5px] uppercase max-w-[196px]">
              Abdulaziz Albishi
            </h3>
            <span className="text-[40px] md:text-[56px] font-black leading-[100%] tracking-[2px] uppercase">
              2
            </span>
          </div>
        </SwiperSlide>

        <SwiperSlide
          className="w-full aspect-[264/369] md:aspect-[347/485] bg-center !flex items-end relative !bg-black"
          style={{
            background:
              "linear-gradient(180deg, rgba(0, 0, 0, 0.00) 54.92%, #000 100%), url('/images/team-5.png') lightgray 50% / cover no-repeat",
          }}
        >
          <div className="flex items-center gap-7 justify-between w-full px-4 py-5">
            <h3 className="text-base md:text-2xl font-extrabold leading-[125%] tracking-[0.5px] uppercase max-w-[196px]">
              Abdulilah Alamri
            </h3>
            <span className="text-[40px] md:text-[56px] font-black leading-[100%] tracking-[2px] uppercase">
              4
            </span>
          </div>
        </SwiperSlide>

        {/* Start OF Swiper Controls */}
        <div className="relative flex items-center gap-10 mt-8">
          <div className="swiper-navigation hidden md:flex items-center gap-4">
            <div className="team-btn-prev">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="43"
                height="11"
                viewBox="0 0 43 11"
                fill="none"
              >
                <g>
                  <path
                    d="M42.5 4.52L4.31998 4.52L7.56 1.37L6.14999 4.93938e-07L0.5 5.5L6.14999 11L7.56 9.62L4.31998 6.47L42.5 6.47L42.5 4.52Z"
                    fill="#FFF014"
                  />
                </g>
              </svg>
            </div>

            <div className="team-btn-next">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="43"
                height="11"
                viewBox="0 0 43 11"
                fill="none"
              >
                <path
                  d="M0.5 4.52L38.67 4.52L35.43 1.37L36.85 1.2106e-06L42.5 5.5L36.85 11L35.43 9.62L38.67 6.47L0.5 6.47L0.5 4.52Z"
                  fill="#FFF014"
                />
              </svg>
            </div>
          </div>

          <div className="team-progress !relative !bg-[#333] !h-px"></div>
        </div>
      </Swiper>
    </section>
  );
}
