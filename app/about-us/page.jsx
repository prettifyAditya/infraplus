"use client"
import BannerWrapper from "@/components/BannerWrapper"
import '../../styles/aboutus/aboutus.css'
// import '../../styles/home/home.css'
import Image from "next/image"
import AboutJourney from "@/components/AboutJourney"
import { useEffect } from 'react';
import enterView from 'enter-view';
import '../../public/assets/css/animate.css'
import WorldMap from "@/components/WorldMap"

export default function Aboutus() {
    useEffect(() => {
        if (typeof window !== 'undefined' && window.innerWidth > 1007) {
            enterView({
            selector: '[data-animate]',
            offset: 0,
            enter: (el) => {
                el.classList.add('kmr-animate');
            },
            exit: (el) => {
                el.classList.remove('kmr-animate');
            },
            });
        }
        }, []);
    return(
        <main>
            <BannerWrapper
                className="aboutus-banner"
                mediaType="video"
                mediaSrc="/assets/video/aboutus-banner.mp4"
                bannerPosition="left"
                title="About Infraplus"
                desc="Infraplus has global experience of working in more than 30 countries in Africa, Middle East and Southeast Asia."
            />
            <section>
                <div className="about-secA sec-pad">
                    <div className="container">
                        <div className="heading" data-animate="fade-up">
                            <div className="icon">
                                <Image src="/assets/icon/quote.svg" alt="quote" width={51} height={36} />
                            </div>
                            <h3>Team Infraplus has global experience of working in more than 30 countries in Africa, Middle East and Southeast Asia. Infraplus is presently executing projects in India, Nigeria, Senegal, The Gambia, Democratic Republic of Congo and Oman and constantly expanding its global foot- prints.</h3>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="about-secB sec-pad">
                    <div className="container flex over-hidden">
                        <div className="colA" data-animate="fade-right">
                            <div className="video-icon">
                                <video src="/assets/video/about-video.mp4" width={407} height={407} autoPlay muted loop playsInline></video>
                            </div>
                        </div>
                        <div className="colB" data-animate="fade-left">
                            <p><strong>Infraplus Consulting Pvt. Ltd.</strong> is an IS0 9001: 2015 certified young and dynamic design and project management focused company, anchored by a group of professionals having experience across various sectors of development and investments. We, as an advisory firm have provided services related to Feasibility studies, design / detailed engineering and project management in various projects across sectors like Transportation & Logistics, Roads & Highways, Railways, SEZs, Industrial Parks, Integrated Developments, Water & Wastewater and Waste Management.</p>
                            <div className="counter-wrapper">
                                <div className="count-info-wrap">
                                    <div className="count-info">
                                        <Image src="/assets/icon/world-dark.svg" width={35} height={35} alt="world" />
                                        <h6>16+ Countries</h6>
                                        <p>Concept to Commissioning Services</p>
                                    </div>
                                </div>
                                <div className="count-info-wrap">
                                    <div className="count-info">
                                    <Image src="/assets/icon/road.svg" width={35} height={35} alt="road" />
                                        <h6>1000+ </h6>
                                        <p>Projects Delivered</p>
                                    </div>
                                </div>
                                <div className="count-info-wrap">
                                    <div className="count-info">
                                    <Image src="/assets/icon/hands.svg" width={35} height={35} alt="road" />
                                        <h6>500+ </h6>
                                        <p>Clients</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="about-secC sec-pad gray-bg">
                    <div className="container">
                        <div className="heading text-center" data-animate="fade-up">
                            <h3>10 years of excellence</h3>
                        </div>
                        <AboutJourney />
                    </div>
                </div>
            </section>
            <section>
            <div className="home-secG sec-pad">
                <div className="container">
                    <div className="heading text-center" data-animate="fade-up">
                        <h3>Global Reach</h3>
                        <p>Team Infraplus has global experience of working in more than 20 countries inAfrica, Middle East and Southeast Asia.</p>
                    </div>
                    <WorldMap />
                </div>
            </div>
        </section>
        <section>
            <div className="about-secD sec-pad">
                <div className="container flex over-hidden">
                    <div className="colA" data-animate="fade-right">
                        <h3>What we focus and strive for</h3>
                        <button className="btn solid-white">Enquire Now</button>
                    </div>
                    <div className="colB grid" data-animate="fade-left">
                        <div className="item flex">
                            <Image src="/assets/icon/topright-white.svg" alt="arrow" width={45} height={45}></Image>
                            <div className="content">
                                <h6>Heading</h6>
                                <p>Lorem ipsum dolor sit amet consectetur. Ipsum vulputate ultrices sed quis venenatis libero egestas.</p>
                            </div>
                        </div>
                        <div className="item flex">
                            <Image src="/assets/icon/topright-white.svg" alt="arrow" width={45} height={45}></Image>
                            <div className="content">
                                <h6>Heading</h6>
                                <p>Lorem ipsum dolor sit amet consectetur. Ipsum vulputate ultrices sed quis venenatis libero egestas.</p>
                            </div>
                        </div>
                        <div className="item flex">
                            <Image src="/assets/icon/topright-white.svg" alt="arrow" width={45} height={45}></Image>
                            <div className="content">
                                <h6>Heading</h6>
                                <p>Lorem ipsum dolor sit amet consectetur. Ipsum vulputate ultrices sed quis venenatis libero egestas.</p>
                            </div>
                        </div>
                        <div className="item flex">
                            <Image src="/assets/icon/topright-white.svg" alt="arrow" width={45} height={45}></Image>
                            <div className="content">
                                <h6>Heading</h6>
                                <p>Lorem ipsum dolor sit amet consectetur. Ipsum vulputate ultrices sed quis venenatis libero egestas.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section>
            <div className="about-secE sec-pad">
                <div className="container flex over-hidden">
                    <div className="colA" data-animate="fade-down">
                        <h3>Our Leadership</h3>
                        <p>We began from a small team, but now we are a force of 1000+ visionaries who believe in our mission</p>
                    </div>
                    <div className="colB grid" data-animate="fade-left">
                        <div className="profile-item">
                            <figure>
                                <Image src="/assets/images/about/profile1.jpg" alt="profile" width="314" height="290"></Image>
                            </figure>
                            <figcaption>
                                <h6>Sandeep Kumar Chhamunya </h6>
                                <p>Director</p>
                                <Image src="/assets/icon/linkedin-fill.svg" alt="linkedin" width="23" height="23"></Image>
                            </figcaption>
                        </div>
                        <div className="profile-item">
                            <figure>
                            <Image src="/assets/images/about/profile1.jpg" alt="profile" width="314" height="290"></Image>
                            </figure>
                            <figcaption>
                                <h6>Sunita Chhamunya</h6>
                                <p>Director</p>
                                <Image src="/assets/icon/linkedin-fill.svg" alt="linkedin" width="23" height="23"></Image>
                            </figcaption>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </main>
    )
}