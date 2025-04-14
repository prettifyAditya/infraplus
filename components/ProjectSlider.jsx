"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; 
import "../styles/components/projectslider.css"
import "swiper/css/navigation"; 
import { Navigation } from "swiper/modules"
import { useEffect, useRef } from "react";
import Link from "next/link";

export default function ProjectSlider() {
    const swiperRef = useRef(null);

    useEffect(() => {
        setTimeout(() => {
            if (swiperRef.current) {
                swiperRef.current.swiper.navigation.update();
            }
        }, 100)
      }, []);
    return(
        <div className="project-slider">
            <div className="swiper-nav projects-nav">
                <button className="projects-prev"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" d="m14 7l-5 5l5 5" strokeWidth="1"/></svg></button>
                <button className="projects-next"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" d="m10 17l5-5l-5-5" strokeWidth="1"/></svg></button>
            </div>
            <Swiper 
            ref={swiperRef}
            modules={[Navigation]}
            spaceBetween={20}
            slidesPerView ={2.1}
            speed={1000}
            navigation={{
                prevEl: ".projects-prev",
                nextEl: ".projects-next"
            }}
            breakpoints={{
                    0: {
                        slidesPerView: 1,
                    },
                    540: {
                        slidesPerView: 1,
                    },
                    991: {

                    },
                    1200: {

                    }
                }}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
        >
            <SwiperSlide>
                <Link href="/project-details">
                <div className="item-md">
                    <figure>
                        <img src="/assets/images/home/project1.jpg"></img>
                    </figure>
                    <figcaption>
                        <h6>Techno Economic Feasibility Study, Master Planning and Design of Infrastructure Services of Green Agro Allied Economic Zone, Abuja Kaduna Expressway, Kaduna (1510 Ha), Kaduna, Nigeria</h6>
                    </figcaption>
                </div>
                </Link>
            </SwiperSlide>
            <SwiperSlide>
                <Link href="/project-details">
                <div className="item-md">
                    <figure>
                        <img src="/assets/images/home/project2.jpg"></img>
                    </figure>
                    <figcaption>
                        <h6>Design Review, Project management and Construction Supervision of BPCL Gas Pipeline Shifting work for NHAI in NCR (Dwarka Expressway)</h6>
                    </figcaption>
                </div>
                </Link>
            </SwiperSlide>
            <SwiperSlide>
            <Link href="/project-details">
                <div className="item-md">
                    <figure>
                        <img src="/assets/images/home/project1.jpg"></img>
                    </figure>
                    <figcaption>
                        <h6>Techno Economic Feasibility Study, Master Planning and Design of Infrastructure Services of Green Agro Allied Economic Zone, Abuja Kaduna Expressway, Kaduna (1510 Ha), Kaduna, Nigeria</h6>
                    </figcaption>
                </div>
                </Link>
            </SwiperSlide>
            <SwiperSlide>
            <Link href="/project-details">
                <div className="item-md">
                    <figure>
                        <img src="/assets/images/home/project1.jpg"></img>
                    </figure>
                    <figcaption>
                        <h6>Techno Economic Feasibility Study, Master Planning and Design of Infrastructure Services of Green Agro Allied Economic Zone, Abuja Kaduna Expressway, Kaduna (1510 Ha), Kaduna, Nigeria</h6>
                    </figcaption>
                </div>
                </Link>
            </SwiperSlide>
        </Swiper>
        </div>
    )
}
