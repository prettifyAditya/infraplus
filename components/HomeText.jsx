"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; 
import "swiper/css/autoplay";
import "../styles/home/home.css"
import { Autoplay } from "swiper/modules";

export default function HomeText() {
    return(
        <div className="text-slider">
            <Swiper 
            loop= {true}
            autoplay={{ delay: 1000, disableOnInteraction: false,}}
            direction="vertical"
            slidesPerView ={1}
            speed={1000}
            modules={[Autoplay]}
        >
            <SwiperSlide>
                <h2>Roads</h2>
            </SwiperSlide>
            <SwiperSlide>
                <h2>Water</h2>
            </SwiperSlide>
            <SwiperSlide>
                <h2>Industrial</h2>
            </SwiperSlide>
            <SwiperSlide>
                <h2>Agriculture</h2>
            </SwiperSlide>
            <SwiperSlide>
                <h2>Environment</h2>
            </SwiperSlide>
            <SwiperSlide>
                <h2>Telecom</h2>
            </SwiperSlide>
        </Swiper>
        </div>
    )
}
