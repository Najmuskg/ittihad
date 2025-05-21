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

export default function SocialMedia() {
  return (
    <section className="px-4 md:px-12 py-[70px] md:py-[120px] space-y-7 team-promo-block overflow-hidden">
      <div className="flex flex-col space-y-4 md:space-y-5">
        <div className="flex items-center">
          <h2 className="text-2xl md:text-[40px] font-black leading-[125%] tracking-[2px] uppercase">
            Follow us on socials
          </h2>
        </div>
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
          nextEl: ".custom-btn-next",
          prevEl: ".custom-btn-prev",
        }}
        breakpoints={{
          768: {
            slidesPerView: 4,
          },
        }}
      >
        <SwiperSlide
          className="w-full aspect-[264/369] md:aspect-[347/485] bg-center !flex items-end relative !bg-black cornerClip2"
          style={{
            background:
              "url('/images/Social.jpg') lightgray 50% / cover no-repeat",
          }}
        >

         
        </SwiperSlide>


        {/* Start OF Swiper Controls */}
        <div className="relative flex items-center gap-10 mt-8">
          <div className="swiper-navigation hidden md:flex items-center gap-4">
            <div className="custom-btn-prev cursor-pointer">
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

            <div className="custom-btn-next cursor-pointer">
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
