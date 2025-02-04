"use client"
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Image from 'next/image'
import 'swiper/css';

interface ImagesSliderProps {
    imageList: string[]
}

const ImagesSlider = ({ imageList }: ImagesSliderProps) => {
  return (
    <Swiper
      modules={[Autoplay]}
      slidesPerView={1}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      className="banner_bg bg-white"
    >
      {
        imageList.map((image, index) => (
          <SwiperSlide key={index} className="relative w-full h-full">
            <div className="absolute top-0 left-0 w-full h-full">
              <Image 
                src={image} 
                alt="" 
                fill 
                style={{ objectFit: 'cover' }} 
              />
            </div>
          </SwiperSlide>
        ))
      }
    </Swiper>
  )
}

export default ImagesSlider