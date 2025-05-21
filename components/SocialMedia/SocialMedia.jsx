"use client";
import React from "react";
import Image from 'next/image';
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import './style.css';
import Logo from "./Logo";
import img1 from "./img-1.webp";

export default function SocialMedia() {
  return (
    <section className="px-4 md:px-12 py-[70px] md:py-[120px] space-y-7 team-promo-block overflow-hidden relative after:absolute after:h-full after:w-full after:left-0 after:top-0 socialMedia">
      <div className=" relative z-1">
        <h2 className="text-2xl md:text-[40px] font-black leading-[125%] tracking-[2px] uppercase">
          Follow us on socials
        </h2>
      </div>

      <Swiper
        className="overflow-visible z-1"
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
          className="w-full aspect-[264/369] md:aspect-[347/485] flex flex-col bg-center relative socialCard"
        >
          <div className="bg-dark-gray p-4 flex flex-wrap items-center">
            <div className="flex flex-wrap gap-3 items-center">
              <span>
                <Logo />
              </span>
              <div>
                <h4 className="text-base leading-none font-public-sans font-black">Al-Ittihad Club</h4>
                <a className="text-sm leading-none font-public-sans font-medium text-white/50" href="#">@ittihadclub</a>
              </div>
            </div>
            <div className="ml-auto">
              <a href="#">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M9.65039 10.3081C9.65041 9.86736 10.1251 9.58318 10.5264 9.78223L14.0061 11.4807C14.4512 11.694 14.4512 12.3199 14.0061 12.5332V12.5259L10.5264 14.2251C10.1251 14.4241 9.65043 14.1399 9.65039 13.6992V10.3081Z" fill="white" />
                  <path fillRule="evenodd" clipRule="evenodd" d="M21.75 0C22.9926 0 24 1.00736 24 2.25V21.75C24 22.9926 22.9926 24 21.75 24H2.25C1.00736 24 0 22.9926 0 21.75V2.25C0 1.00736 1.00736 0 2.25 0H21.75ZM5.73999 6C4.49965 6 3.50024 6.98119 3.50024 8.18262V15.8174C3.50024 17.0259 4.50695 18 5.73999 18H18.26C19.5004 18 20.4998 17.0259 20.4998 15.8174V8.18262C20.4998 6.97408 19.4931 6 18.26 6H5.73999Z" fill="white" />
                </svg>
              </a>
            </div>
          </div>
          <div className="flex-1">
            <Image
              src={img1}
              alt="Latest Slide"
              width={500}
              height={300}
              className="absolute h-full w-full object-cover" />
          </div>
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
