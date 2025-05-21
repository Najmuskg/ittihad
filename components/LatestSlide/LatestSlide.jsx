"use client";
import React from 'react'
import Image from 'next/image';
import bg1 from './news-1.webp';
import bg2 from './news-2.webp';
import bg3 from './news-3.webp';
import './style.css';

import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default function LatestSlide() {
	return (
		<section className='py-11 md:py-15'>
			<div className="max-w-[2200px] mx-auto w-full pr-5 md:pr-0 p-5 md:pl-11 lg:pl-16">
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6">
					<div className="col-span-1 md:space-y-8 flex flex-row md:flex-col justify-center relative">
						<h2 className="text-titleSm md:text-title uppercase">al-ittihad latest</h2>

						<div>
							<a className='btn' href="#">view all news</a>
						</div>

						<div className='absolute left-0 bottom-0 z-2 w-25 md:flex flex-wrap justify-between hidden'>
							<div className="blockSlider-prev cursor-pointer block left-0">
								<svg xmlns="http://www.w3.org/2000/svg" width="42" height="11" viewBox="0 0 42 11" fill="none">
									<path d="M42 4.52L3.81998 4.52L7.06 1.37L5.64999 4.93938e-07L-4.80825e-07 5.5L5.64999 11L7.06 9.62L3.81998 6.47L42 6.47L42 4.52Z" fill="#FFF014" />
								</svg>
							</div>
							<div className="blockSlider-next cursor-pointer block right-0">
								<svg xmlns="http://www.w3.org/2000/svg" width="42" height="11" viewBox="0 0 42 11" fill="none">
									<path d="M-1.50535e-07 4.52L38.17 4.52L34.93 1.37L36.35 1.2106e-06L42 5.5L36.35 11L34.93 9.62L38.17 6.47L-2.15477e-07 6.47L-1.50535e-07 4.52Z" fill="#FFF014" />
								</svg>
							</div>
						</div>
					</div>

					<div className="md:col-span-2 col-span-1">
						<Swiper className="relative overflow-hidden md:!pr-11 lg:!pr-16"
							modules={[Pagination, Navigation]}
							spaceBetween={10}
							slidesPerView={'auto'}
							pagination={{
								el: ".blockSlider-progress",
								type: "progressbar",
							}}
							navigation={{
								enabled: true,
								nextEl: ".blockSlider-next",
								prevEl: ".blockSlider-prev",
							}}
						>
							<SwiperSlide className=" cardCorner !w-66 md:!w-116.25 !h-92 md:!h-150 overflow-hidden relative after:absolute after:h-full after:w-full after:left-0 after:top-0">
								<div className='h-full w-full absolute left-0 top-0'>
									<Image
										src={bg1}
										alt="Latest Slide"
										width={500}
										height={300}
										className="absolute h-full w-full object-cover"
									/>
								</div>

								<div className='z-1 relative px-6 py-8 flex flex-col items-start justify-end h-full'>
									<p className='text-sm font-bold leading-[120%] tracking-[0.04375rem] text-white/50 uppercase mb-2.5'>video - 1 hour ago</p>
									<h3 className='text-subTitleSm md:text-subTitle text-white uppercase mb-4'>With two clean goals, Al-Ittihad secured a convincing victory over Riyadh.</h3>
									<a className='link-base' href="#">read more</a>
								</div>
							</SwiperSlide>
							<SwiperSlide className=" cardCorner !w-66 md:!w-116.25 !h-92 md:!h-150 overflow-hidden relative after:absolute after:h-full after:w-full after:left-0 after:top-0">
								<div className='h-full w-full absolute left-0 top-0'>
									<Image
										src={bg2}
										alt="Latest Slide"
										width={500}
										height={300}
										className="absolute h-full w-full object-cover"
									/>
								</div>

								<div className='z-1 relative px-6 py-8 flex flex-col items-start justify-end h-full'>
									<p className='text-sm font-bold leading-[120%] tracking-[0.04375rem] text-white/50 uppercase mb-2.5'>video - 1 hour ago</p>
									<h3 className='text-subTitleSm md:text-subTitle text-white uppercase mb-4'>Fresh faces and high hopes as the team rebuilds for success.</h3>
									<a className='link-base' href="#">read more</a>
								</div>
							</SwiperSlide>
							<SwiperSlide className=" cardCorner !w-66 md:!w-116.25 !h-92 md:!h-150 overflow-hidden relative after:absolute after:h-full after:w-full after:left-0 after:top-0">
								<div className='h-full w-full absolute left-0 top-0'>
									<Image
										src={bg3}
										alt="Latest Slide"
										width={500}
										height={300}
										className="absolute h-full w-full object-cover"
									/>
								</div>

								<div className='z-1 relative px-6 py-8 flex flex-col items-start justify-end h-full'>
									<p className='text-sm font-bold leading-[120%] tracking-[0.04375rem] text-white/50 uppercase mb-2.5'>video - 1 hour ago</p>
									<h3 className='text-subTitleSm md:text-subTitle text-white uppercase mb-4'>Al-Ittihad defeats Al-Taei 3-0 with a dominant display, showing a strong performance.</h3>
									<a className='link-base' href="#">read more</a>
								</div>
							</SwiperSlide>
							<SwiperSlide className=" cardCorner !w-66 md:!w-116.25 !h-92 md:!h-150 overflow-hidden relative after:absolute after:h-full after:w-full after:left-0 after:top-0">
								<div className='h-full w-full absolute left-0 top-0'>
									<Image
										src={bg1}
										alt="Latest Slide"
										width={500}
										height={300}
										className="absolute h-full w-full object-cover"
									/>
								</div>

								<div className='z-1 relative px-6 py-8 flex flex-col items-start justify-end h-full'>
									<p className='text-sm font-bold leading-[120%] tracking-[0.04375rem] text-white/50 uppercase mb-2.5'>video - 1 hour ago</p>
									<h3 className='text-subTitleSm md:text-subTitle text-white uppercase mb-4'>With two clean goals, Al-Ittihad secured a convincing victory over Riyadh.</h3>
									<a className='link-base' href="#">read more</a>
								</div>
							</SwiperSlide>
							<SwiperSlide className=" cardCorner !w-66 md:!w-116.25 !h-92 md:!h-150 overflow-hidden relative after:absolute after:h-full after:w-full after:left-0 after:top-0">
								<div className='h-full w-full absolute left-0 top-0'>
									<Image
										src={bg2}
										alt="Latest Slide"
										width={500}
										height={300}
										className="absolute h-full w-full object-cover"
									/>
								</div>

								<div className='z-1 relative px-6 py-8 flex flex-col items-start justify-end h-full'>
									<p className='text-sm font-bold leading-[120%] tracking-[0.04375rem] text-white/50 uppercase mb-2.5'>video - 1 hour ago</p>
									<h3 className='text-subTitleSm md:text-subTitle text-white uppercase mb-4'>Fresh faces and high hopes as the team rebuilds for success.</h3>
									<a className='link-base' href="#">read more</a>
								</div>
							</SwiperSlide>
							<SwiperSlide className=" cardCorner !w-66 md:!w-116.25 !h-92 md:!h-150 overflow-hidden relative after:absolute after:h-full after:w-full after:left-0 after:top-0">
								<div className='h-full w-full absolute left-0 top-0'>
									<Image
										src={bg3}
										alt="Latest Slide"
										width={500}
										height={300}
										className="absolute h-full w-full object-cover"
									/>
								</div>

								<div className='z-1 relative px-6 py-8 flex flex-col items-start justify-end h-full'>
									<p className='text-sm font-bold leading-[120%] tracking-[0.04375rem] text-white/50 uppercase mb-2.5'>video - 1 hour ago</p>
									<h3 className='text-subTitleSm md:text-subTitle text-white uppercase mb-4'>Al-Ittihad defeats Al-Taei 3-0 with a dominant display, showing a strong performance.</h3>
									<a className='link-base' href="#">read more</a>
								</div>
							</SwiperSlide>

							<div className="blockSlider-progress !relative mt-8 md:mt-10"></div>

						</Swiper>
					</div>
				</div>
			</div>
		</section>
	)
}
