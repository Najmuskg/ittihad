"use client";
import React from 'react'
import Image from 'next/image';
import bg1 from './news-1.webp';
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
			<div className="max-w-[2200px] mx-auto w-full px-5 md:px-11 lg:px-16">
				<div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-6">
					<div className="col-span-1 space-y-8 flex flex-col justify-center">
						<h2 className="text-titleSm md:text-title uppercase">al-ittihad latest</h2>

						<div>
							<a className='btn' href="#">view all news</a>
						</div>
					</div>

					<div className="md:col-span-2 md:col-start-2 col-span-1">
						<Swiper className="relative overflow-hidden md:pr-11 lg:pr-16"
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
								<SwiperSlide className=" cardCorner !w-116.25 !h-150 overflow-hidden relative after:absolute after:h-full after:w-full after:left-0 after:top-0">
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
								<SwiperSlide className=" cardCorner !w-116.25 !h-150 overflow-hidden relative after:absolute after:h-full after:w-full after:left-0 after:top-0">
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
								<SwiperSlide className=" cardCorner !w-116.25 !h-150 overflow-hidden relative after:absolute after:h-full after:w-full after:left-0 after:top-0">
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
								<SwiperSlide className=" cardCorner !w-116.25 !h-150 overflow-hidden relative after:absolute after:h-full after:w-full after:left-0 after:top-0">
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

							<div className="blockSlider-progress !relative md:block hidden md:mt-10"></div>
							<div className="blockSlider-prev cursor-pointer absolute top-1/2 -translate-y-1/2 z-10 md:hidden block left-0">
								-
							</div>
							<div className="blockSlider-next cursor-pointer absolute top-1/2 -translate-y-1/2 z-10 md:hidden block right-0">-
							</div>
						</Swiper>
					</div>
				</div>
			</div>
		</section>
	)
}
