"use client"
import BannerWrapper from "@/components/BannerWrapper";
import '../../styles/services/services.css'
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import enterView from 'enter-view';
import '../../public/assets/css/animate.css'


export default function Services() {
    useEffect(() => {
        if(typeof window !== 'undefined' && window.innerWidth > 1007) {
            enterView({
                selector: '[data-animate]',
                offset: 0,
                enter: (el) =>  {
                    el.classList.add('kmr-animate')
                },
                exit: (el) => {
                    el.classList.remove('kmr-animate');
                }
            })
        }
    }, [])
    const openPop = () => {
        document.querySelector('.enquire-pop').classList.add('is-open')
        document.querySelector('.overlay').classList.add('is-open')
        document.querySelector('body').classList.add('overflow-hidden')
    }
    return(
        <main>
            <BannerWrapper
                className="services-banner"
                mediaType="video"
                mediaSrc="/assets/video/services-banner.mp4"
                bannerPosition="center"
                title="Services"
                desc="Consulting services from the stage of conceptualization to planning, design and detailed engineering"
            />
        <section className="border-sec">
            <div className="container">
                <div className="services-secA" data-animate="fade-up">
                    <div className="heading">
                        <p>Infraplus provides consulting services from the stage of conceptualization to planning, design and detailed engineering of diverse discipline projects. Focusing on the need of clients, Infraplus has expanded its activities in diversified fields to develop areas of complementary expertise and strengthen firm’s capabilities.</p>
                    </div>
                </div>
                <div className="services-secB sec-pad">
                    <div className="step-count" data-animate="fade-right">
                        <div className="heading">
                            <span className="number">01</span>
                            <h6>Planning</h6>
                        </div>
                        <div className="step-details flex">
                            <div className="colA">
                                <Image src='/assets/images/services/services1.png' alt="services" width={405} height={303}></Image>
                            </div>
                            <div className="colB">
                                <ul>
                                    <li>Project Identification/Site Selection</li>
                                    <li>Field Surveys / Investigations and Analysis</li>
                                    <li>Economic and Financial Analysis</li>
                                    <li>Techno-Economic Feasibility Studies</li>
                                    <li>Project Structuring</li>
                                    <li>Architecture</li>
                                    <li>Urban and Regional Planning</li>
                                    <li>Feasibility / Business Plans</li>
                                    <li>Bid Advisory & Market Research</li>
                                    <li>Master Planning & Landscaping</li>
                                    <li>Smart Cities</li>
                                </ul>
                                <div className="btn-wrapper">
                                    <Link href="/service-details" className="btn">Read More</Link>
                                    <button className="btn border-black" onClick={openPop}>Enquire Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="step-count" data-animate="fade-right">
                        <div className="heading">
                            <span className="number">02</span>
                            <h6>Design</h6>
                        </div>
                        <div className="step-details flex">
                            <div className="colA">
                                <Image src='/assets/images/services/services2.png' alt="services" width={405} height={303}></Image>
                            </div>
                            <div className="colB">
                                <ul>
                                    <li>Project Identification/Site Selection</li>
                                    <li>Field Surveys / Investigations and Analysis</li>
                                    <li>Economic and Financial Analysis</li>
                                    <li>Techno-Economic Feasibility Studies</li>
                                    <li>Project Structuring</li>
                                    <li>Architecture</li>
                                    <li>Urban and Regional Planning</li>
                                    <li>Feasibility / Business Plans</li>
                                    <li>Bid Advisory & Market Research</li>
                                    <li>Master Planning & Landscaping</li>
                                    <li>Smart Cities</li>
                                </ul>
                                <div className="btn-wrapper">
                                    <Link href="/service-details" className="btn">Read More</Link>
                                    <button className="btn border-black" onClick={openPop}>Enquire Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="step-count" data-animate="fade-right">
                        <div className="heading">
                            <span className="number">03</span>
                            <h6>Project Management</h6>
                        </div>
                        <div className="step-details flex">
                            <div className="colA">
                                <Image src='/assets/images/services/services3.png' alt="services" width={405} height={303}></Image>
                            </div>
                            <div className="colB">
                                <ul>
                                    <li>Project Identification/Site Selection</li>
                                    <li>Field Surveys / Investigations and Analysis</li>
                                    <li>Economic and Financial Analysis</li>
                                    <li>Techno-Economic Feasibility Studies</li>
                                    <li>Project Structuring</li>
                                    <li>Architecture</li>
                                    <li>Urban and Regional Planning</li>
                                    <li>Feasibility / Business Plans</li>
                                    <li>Bid Advisory & Market Research</li>
                                    <li>Master Planning & Landscaping</li>
                                    <li>Smart Cities</li>
                                </ul>
                                <div className="btn-wrapper">
                                    <Link href="/service-details" className="btn">Read More</Link>
                                    <button className="btn border-black" onClick={openPop}>Enquire Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </main>
    )
}