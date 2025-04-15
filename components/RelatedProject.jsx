"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; 
import "../styles/components/projectslider.css"
import "swiper/css/navigation"; 
import { Navigation } from "swiper/modules"
import { useEffect, useRef } from "react";
import ProjectListing from "./ProjectListing";


export default function RelatedProject() {
    const swiperRef = useRef(null);

    useEffect(() => {
        setTimeout(() => {
            if (swiperRef.current) {
                swiperRef.current.swiper.navigation.update();
            }
        }, 100)
      }, []);
    return(
        <div className="related-slider">
            <div className="swiper-nav projects-nav">
                <button className="projects-prev"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" d="m14 7l-5 5l5 5" strokeWidth="1"/></svg></button>
                <button className="projects-next"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" d="m10 17l5-5l-5-5" strokeWidth="1"/></svg></button>
            </div>
            <Swiper 
            ref={swiperRef}
            modules={[Navigation]}
            spaceBetween={20}
            slidesPerView ={3}
            speed={1000}
            breakpoints={{
                0: {
                    slidesPerView: 1.2,
                },
                540: {
                    slidesPerView: 2,
                },
                991: {
                },
                1200: {

                }
            }}
            navigation={{
                prevEl: ".projects-prev",
                nextEl: ".projects-next"
            }}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
        >
            <SwiperSlide>
                <ProjectListing 
                title={"Abuja Kaduna Expressway, Kaduna (1510 Ha), Kaduna, Nigeria"}
                desc={"Techno Economic Feasibility Study, Master Planning and Design of Infrastructure Services of Green Agro Allied Economic Zone"}
                sector={"Highways, Bridges & Tunnels"} />
            </SwiperSlide>
            <SwiperSlide>
                <ProjectListing 
                title={"Abuja Kaduna Expressway, Kaduna (1510 Ha), Kaduna, Nigeria"}
                desc={"Techno Economic Feasibility Study, Master Planning and Design of Infrastructure Services of Green Agro Allied Economic Zone"}
                sector={"Highways, Bridges & Tunnels"} />
            </SwiperSlide>
            <SwiperSlide>
                <ProjectListing 
                title={"Abuja Kaduna Expressway, Kaduna (1510 Ha), Kaduna, Nigeria"}
                desc={"Techno Economic Feasibility Study, Master Planning and Design of Infrastructure Services of Green Agro Allied Economic Zone"}
                sector={"Highways, Bridges & Tunnels"} />
            </SwiperSlide>
            <SwiperSlide>
                <ProjectListing 
                title={"Abuja Kaduna Expressway, Kaduna (1510 Ha), Kaduna, Nigeria"}
                desc={"Techno Economic Feasibility Study, Master Planning and Design of Infrastructure Services of Green Agro Allied Economic Zone"}
                sector={"Highways, Bridges & Tunnels"} />
            </SwiperSlide>
            <SwiperSlide>
                <ProjectListing 
                title={"Abuja Kaduna Expressway, Kaduna (1510 Ha), Kaduna, Nigeria"}
                desc={"Techno Economic Feasibility Study, Master Planning and Design of Infrastructure Services of Green Agro Allied Economic Zone"}
                sector={"Highways, Bridges & Tunnels"} />
            </SwiperSlide>
            <SwiperSlide>
                <ProjectListing 
                title={"Abuja Kaduna Expressway, Kaduna (1510 Ha), Kaduna, Nigeria"}
                desc={"Techno Economic Feasibility Study, Master Planning and Design of Infrastructure Services of Green Agro Allied Economic Zone"}
                sector={"Highways, Bridges & Tunnels"} />
            </SwiperSlide>
        </Swiper>
        </div>
    )
}
