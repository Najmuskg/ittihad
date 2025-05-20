"use client";
import Link from "next/link";
import Image from "next/image";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default function TeamPromo() {
  return (
    <section className="px-4 md:px-12 py-[70px] md:py-[120px]">
      <div className="flex items-center">
        <h2 className="text-2xl md:text-[40px] font-black leading-[125%] tracking-[2px] uppercase">
          First teams
        </h2>

        <Link
          href="/"
          className="ml-auto text-xs font-bold leading-[120%] tracking-[0.2px] uppercase text-black bg-[#FFF014] py-3 px-2 hover:bg-[#FFF014]/90 transition-all duration-300 ease-in-out"
          style={{
            clipPath:
              "polygon(8% 0px, 92% 0px, 100% 22%, 100% 80%, 93% 100%, 8% 100%, 0px 84%, 0px 22%)",
          }}
        >
          View full team
        </Link>
      </div>

      <Swiper
        modules={[Pagination, Navigation]}
        spaceBetween={8}
        slidesPerView={4.3}
        loop={true}
        pagination={{
          el: ".team-progress",
          type: "progressbar",
        }}
        navigation={{
          enabled: true,
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        breakpoints={{
          768: {
            spaceBetween: 20,
            slidesPerView: 4,
          },
        }}
      >
        <SwiperSlide className="w-full aspect-[175/100.235] md:aspect-[349/200]">
          <Image
            src="/images/team-1.png"
            alt=""
            width={347}
            height={485}
            className="object-contain h-full w-full"
          />

          <div>
            <h3>Abdulilah Alamri</h3>
            <span>4</span>
          </div>
        </SwiperSlide>
        <SwiperSlide className="w-full aspect-[175/100.235] md:aspect-[349/200]">
          {/* <Image
            src=""
            alt=""
            width={400}
            height={300}
            className="object-contain h-full w-full"
          /> */}
          <h2>hello</h2>
        </SwiperSlide>
        <SwiperSlide className="w-full aspect-[175/100.235] md:aspect-[349/200]">
          {/* <Image
            src=""
            alt=""
            width={400}
            height={300}
            className="object-contain h-full w-full"
          /> */}
          <h2>hello</h2>
        </SwiperSlide>
        <SwiperSlide className="w-full aspect-[175/100.235] md:aspect-[349/200]">
          {/* <Image
            src=""
            alt=""
            width={400}
            height={300}
            className="object-contain h-full w-full"
          /> */}
          <h2>hello</h2>
        </SwiperSlide>
        <SwiperSlide className="w-full aspect-[175/100.235] md:aspect-[349/200]">
          {/* <Image
            src=""
            alt=""
            width={400}
            height={300}
            className="object-contain h-full w-full"
          /> */}
          <h2>hello</h2>
        </SwiperSlide>
        <SwiperSlide className="w-full aspect-[175/100.235] md:aspect-[349/200]">
          {/* <Image
            src=""
            alt=""
            width={400}
            height={300}
            className="object-contain h-full w-full"
          /> */}
          <h2>hello</h2>
        </SwiperSlide>

        {/* Start OF Swiper Controls */}
        <div className="relative hidden md:flex items-center md:mt-8">
          <div className="swiper-navigation flex items-center">
            <div className="swiper-button-prev">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="43"
                height="11"
                viewBox="0 0 43 11"
                fill="none"
              >
                <g opacity="0.5">
                  <path
                    d="M42.5 4.52L4.31998 4.52L7.56 1.37L6.14999 4.93938e-07L0.5 5.5L6.14999 11L7.56 9.62L4.31998 6.47L42.5 6.47L42.5 4.52Z"
                    fill="#FFF014"
                  />
                </g>
              </svg>
            </div>
            <div className="swiper-button-next">
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

          <div className="team-progress"></div>
        </div>
      </Swiper>
    </section>
  );
}
