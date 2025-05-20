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

export default function PartnerSliders() {
  return (
    <section className="px-4 md:px-12 py-8 md:py-16 space-y-7 partners-slider-block overflow-hidden bg-[#FFF014]">
      <div className="container space-y-6 relative">
        <h2 className="text-base font-black leading-[125%] tracking-[1.5px] uppercase text-black text-center">
          Sponsors
        </h2>

        <Swiper
          className="max-w-[1200px] mx-auto"
          modules={[Pagination, Navigation]}
          spaceBetween={48}
          slidesPerView={3}
          pagination={true}
          loop={true}
          navigation={{
            enabled: true,
            nextEl: ".custom-btn-next",
            prevEl: ".custom-btn-prev",
          }}
          breakpoints={{
            768: {
              spaceBetween: 70,
              slidesPerView: 7,
            },
          }}
        >
          <SwiperSlide className="w-full aspect-[59/35]">
            <Image
              src={"/images/partner-1.svg"}
              width={118}
              height={70}
              alt=""
              className="w-full h-full object-contain"
            />
          </SwiperSlide>

          <SwiperSlide className="w-full aspect-[59/35]">
            <Image
              src={"/images/partner-2.svg"}
              width={118}
              height={70}
              alt=""
              className="w-full h-full object-contain"
            />
          </SwiperSlide>

          <SwiperSlide className="w-full aspect-[59/35]">
            <Image
              src={"/images/partner-3.svg"}
              width={118}
              height={70}
              alt=""
              className="w-full h-full object-contain"
            />
          </SwiperSlide>

          <SwiperSlide className="w-full aspect-[59/35]">
            <Image
              src={"/images/partner-4.svg"}
              width={118}
              height={70}
              alt=""
              className="w-full h-full object-contain"
            />
          </SwiperSlide>

          <SwiperSlide className="w-full aspect-[59/35]">
            <Image
              src={"/images/partner-5.svg"}
              width={118}
              height={70}
              alt=""
              className="w-full h-full object-contain"
            />
          </SwiperSlide>

          <SwiperSlide className="w-full aspect-[59/35]">
            <Image
              src={"/images/partner-6.svg"}
              width={118}
              height={70}
              alt=""
              className="w-full h-full object-contain"
            />
          </SwiperSlide>
          <SwiperSlide className="w-full aspect-[59/35]">
            <Image
              src={"/images/partner-7.svg"}
              width={118}
              height={70}
              alt=""
              className="w-full h-full object-contain"
            />
          </SwiperSlide>
          <SwiperSlide className="w-full aspect-[59/35]">
            <Image
              src={"/images/partner-7.svg"}
              width={118}
              height={70}
              alt=""
              className="w-full h-full object-contain"
            />
          </SwiperSlide>
        </Swiper>

        {/* Start OF Swiper Controls */}
        <div className="swiper-navigation hidden md:flex items-center justify-between absolute left-0 top-[45%] -translate-y-[45%] w-full">
          <div className="custom-btn-prev cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="42"
              height="11"
              viewBox="0 0 42 11"
              fill="none"
            >
              <path
                d="M42 4.52H3.81998L7.06 1.37L5.64999 0L0 5.5L5.64999 11L7.06 9.62L3.81998 6.47H42V4.52Z"
                fill="#1D1D1B"
              />
            </svg>
          </div>

          <div className="custom-btn-next cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="42"
              height="11"
              viewBox="0 0 42 11"
              fill="none"
            >
              <path
                d="M0 4.52H38.17L34.93 1.37L36.35 0L42 5.5L36.35 11L34.93 9.62L38.17 6.47H0V4.52Z"
                fill="#1D1D1B"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
