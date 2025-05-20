"use client";

import React, { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import Image from "next/image";

const slides = [
  {
    title: "Store - 1 hour ago",
    subTitle: "official Third Kit Launch",
    imgUrl: "/images/Banner.png",
  },
  {
    title: "Design That Matters",
    subTitle: "Driven by Vision",
    imgUrl: "/images/Banner2.jpg",
  },
  {
    title: "Design That Matters",
    subTitle: "Driven by Vision",
    imgUrl: "/images/Banner.png",
  },
];

const paginationTitles = [
  "Third kit Launch",
  "Match Highlights",
  "Behind the scenes",
];
const autoplayDelay = 4000;

export default function HeroBanner() {
  const progressBarsRef = useRef([]);

  const handleResetProgressBars = () => {
    progressBarsRef.current.forEach((bar) => {
      if (bar) {
        bar.style.transition = "none";
        bar.style.width = "0%";
      }
    });
  };

  const handleAnimateProgressBar = (index, delay = autoplayDelay) => {
    const bar = progressBarsRef.current[index];
    if (bar) {
      bar.style.transition = "none";
      bar.style.width = "0%";
      void bar.offsetWidth; // Force reflow
      bar.style.transition = `width ${delay}ms linear`;
      bar.style.width = "100%";
    }
  };

  useEffect(() => {
    handleAnimateProgressBar(0);
  }, []);

  const renderPaginationBullet = (index, className) => {
    const label = paginationTitles[index] || "";
    return `
      <div class="${className} relative !min-w-[160px] !h-0.5 !bg-white rounded-none">
        <div class="progress-bar absolute top-0 left-0 h-full bg-[#FFF014] z-10" style="width: 0%;"></div>
        <span class="text-xs font-bold leading-[120%] tracking-[0.7px] uppercase inline-block w-full pt-[10px] text-white z-9">${label}</span>
      </div>`;
  };

  return (
    <section className="relative overflow-hidden flex items-center justify-center h-screen min-h-160">
      <div className="w-full h-full relative">
        <Swiper
          className="h-full"
          modules={[EffectFade, Autoplay, Pagination]}
          effect="fade"
          loop
          speed={500}
            autoplay={{
              delay: autoplayDelay,
              disableOnInteraction: false,
            }}
          pagination={{
            el: ".custom-pagination",
            clickable: true,
            renderBullet: renderPaginationBullet,
          }}
          onSlideChangeTransitionStart={handleResetProgressBars}
          onSlideChangeTransitionEnd={(swiper) =>
            handleAnimateProgressBar(swiper.realIndex % slides.length)
          }
          onInit={(swiper) =>
            handleAnimateProgressBar(swiper.realIndex % slides.length)
          }
        >
          {slides.map((slide, i) => (
            <SwiperSlide
              key={i}
              className="!flex !items-end !justify-start relative w-full
                after:absolute after:inset-0 after:bg-[linear-gradient(180deg,_rgba(0,0,0,0)_58.81%,_#000_100%)]
before:absolute before:top-[62px] before:inset-x-0 before:h-[80px] before:bg-[linear-gradient(180deg,_#000_0%,_rgba(0,0,0,0)_100%)] before:z-10"
            >
              <div className="absolute inset-0 w-full h-full">
                <Image
                  src={slide.imgUrl}
                  alt="img"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="container relative z-10 pb-[80px] space-x-6">
                <div className="max-w-[700px]">
                  {slide.title && (
                    <h3 className="text-xs text-white/50 font-bold leading-[120%] tracking-[0.8px] uppercase slide-up">
                      {slide.title}
                    </h3>
                  )}
                  {slide.subTitle && (
                    <h2 className="text-[56px] font-extrabold leading-[125%] tracking-[2.5px] capitalize slide-up text-white">
                      {slide.subTitle}
                    </h2>
                  )}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Pagination */}
        <div className="absolute w-full left-0 bottom-[54px] z-10">
          <div className="container">
            <div
              className="custom-pagination text-white flex flex-wrap max-[768px]:shrink-0 max-[768px]:overflow-x-auto no-scrollbar"
              ref={(el) => {
                if (el) {
                  progressBarsRef.current = Array.from(
                    el.querySelectorAll(".progress-bar")
                  );
                }
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
