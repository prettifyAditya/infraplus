"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; 
import "../styles/components/travelcard.css"
import "swiper/css/navigation"; 
import { Navigation } from "swiper/modules"
import { useEffect, useRef, useState } from "react";
import Link from "next/link";

export default function ServiceSlider() {
    const swiperRef = useRef(null);
    const [bgImage, setBgImage] = useState("/assets/images/home/secB-img1.jpg");

    useEffect(() => {
        setTimeout(() => {
            if (swiperRef.current) {
                swiperRef.current.swiper.navigation.update();
            }
        }, 100)
      }, []);

    const handleMouseEnter = (event) => {
        const newBg = event.currentTarget.getAttribute('data-bg')
        if(newBg) {
            setBgImage(newBg)
        }
    }
    return(
        <div 
            className='destinations-container' 
            id='destinationSection' 
            style={{backgroundImage: `url(${bgImage})`, transition: '.5s ease-in-out'}}
        >
            <div className="service-slider">
                <div className="swiper-nav service-nav">
                    <button className="service-prev"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" d="m14 7l-5 5l5 5" strokeWidth="1"/></svg></button>
                    <button className="service-next"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" d="m10 17l5-5l-5-5" strokeWidth="1"/></svg></button>
                </div>
                <Swiper 
                ref={swiperRef}
                modules={[Navigation]}
                spaceBetween={3}
                slidesPerView ={3}
                speed={1000}
                navigation={{
                    prevEl: ".service-prev",
                    nextEl: ".service-next"
                }}
                breakpoints={{
                    0: {
                        slidesPerView: 1,
                    },
                    540: {
                        slidesPerView: 2,
                    },
                    991: {

                    },
                    1200: {

                    }
                }}
                onSwiper={(swiper) => (swiperRef.current = swiper)}
            >
                <SwiperSlide>
                    <div className="main-card" data-bg="/assets/images/home/secB-img1.jpg" onMouseEnter={handleMouseEnter}>
                        <div className="content">
                            <h2>Rail & Metro</h2>
                            <ul>
                                <li>Track Installation</li>
                                <li>Signaling and Electrification</li>
                                <li>Railways</li>
                                <li>MRTS / LRTS</li>
                                <li>Railway Siding</li>
                                <li>Bridges – Major & Minor</li>
                            </ul>
                            <Link href="#" className="btn border-white">Read this sector</Link>
                        </div>
                    </div>   
                </SwiperSlide>
                <SwiperSlide>
                    <div className="main-card" data-bg="/assets/images/home/secB-img2.jpg"  onMouseEnter={handleMouseEnter}>
                        <div className="content">
                            <h2>Roads & Highways</h2>
                            <ul>
                                <li>Track Installation</li>
                                <li>Signaling and Electrification</li>
                                <li>Railways</li>
                                <li>MRTS / LRTS</li>
                                <li>Railway Siding</li>
                                <li>Bridges – Major & Minor</li>
                            </ul>
                            <Link href="#" className="btn border-white">Read this sector</Link>
                        </div>
                    </div>   
                </SwiperSlide>
                <SwiperSlide>
                    <div className="main-card">
                        <div className="content">
                            <h2>Water & Sanitation</h2>
                            <ul>
                                <li>Track Installation</li>
                                <li>Signaling and Electrification</li>
                                <li>Railways</li>
                                <li>MRTS / LRTS</li>
                                <li>Railway Siding</li>
                                <li>Bridges – Major & Minor</li>
                            </ul>
                            <Link href="#" className="btn border-white">Read this sector</Link>
                        </div>
                    </div>   
                </SwiperSlide>
                <SwiperSlide>
                    <div className="main-card">
                        <div className="content">
                            <h2>Rail & Metro</h2>
                            <ul>
                                <li>Track Installation</li>
                                <li>Signaling and Electrification</li>
                                <li>Railways</li>
                                <li>MRTS / LRTS</li>
                                <li>Railway Siding</li>
                                <li>Bridges – Major & Minor</li>
                            </ul>
                            <Link href="#" className="btn border-white">Read this sector</Link>
                        </div>
                    </div>   
                </SwiperSlide>
                <SwiperSlide>
                    <div className="main-card">
                        <div className="content">
                            <h2>Roads & Highways</h2>
                            <ul>
                                <li>Track Installation</li>
                                <li>Signaling and Electrification</li>
                                <li>Railways</li>
                                <li>MRTS / LRTS</li>
                                <li>Railway Siding</li>
                                <li>Bridges – Major & Minor</li>
                            </ul>
                            <Link href="#" className="btn border-white">Read this sector</Link>
                        </div>
                    </div>   
                </SwiperSlide>
                <SwiperSlide>
                    <div className="main-card">
                        <div className="content">
                            <h2>Water & Sanitation</h2>
                            <ul>
                                <li>Track Installation</li>
                                <li>Signaling and Electrification</li>
                                <li>Railways</li>
                                <li>MRTS / LRTS</li>
                                <li>Railway Siding</li>
                                <li>Bridges – Major & Minor</li>
                            </ul>
                            <Link href="#" className="btn border-white">Read this sector</Link>
                        </div>
                    </div>   
                </SwiperSlide>
            </Swiper>
            </div>
        </div>
    )
}
