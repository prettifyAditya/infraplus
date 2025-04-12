"use client"
import BannerWrapper from "@/components/BannerWrapper"
import Image from "next/image"
import '../../styles/contact/contact.css'
import EnquireForm from "@/components/EnquireForm"
import { useEffect } from "react"
import enterView from 'enter-view';
import '../../public/assets/css/animate.css'

export default function Contactus() {
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

    return(
        <main>
            <BannerWrapper
                className="contact-banner"
                mediaType="video"
                mediaSrc="/assets/video/contact-banner.mp4"
                bannerPosition="center"
                title="Contact Us"
                desc="Engineering Solutions, Enabling Progress"
            />
            <section>
                <div className="contact-secA sec-pad">
                    <div className="container flex over-hidden">
                        <div className="colA" data-animate='fade-right'>
                            <div className="video-icon">
                                <video src="/assets/video/about-video.mp4" width={407} height={407} autoPlay muted loop playsInline></video>
                            </div>
                        </div>
                        <div className="colB" data-animate='fade-left'>
                            <h3>Infraplus Consulting Pvt. Ltd.</h3>
                            <div className="contact-grid">
                                <div className="contact-col">
                                    <div className="icon">
                                        <Image src="/assets/icon/location-grad.svg" alt="icon" width={44} height={44} />
                                    </div>
                                    <h6>Address</h6>
                                    <a href="javascript:;">1065, 10th Floor, Tower B1, Spaze i-Tech Park,Sector 49, Sohna Road, Guragon 122018, Haryana, India,</a>
                                </div>
                                <div className="contact-col">
                                    <div className="icon">
                                        <Image src="/assets/icon/location-grad.svg" alt="icon" width={44} height={44} />
                                    </div>
                                    <h6>Phone</h6>
                                    <a href="javascript:;">+91 124 - 4235627</a>
                                    <a href="javascript:;">info@infraplus.co.in</a>
                                </div>
                                <div className="contact-col">
                                    <div className="icon">
                                        <Image src="/assets/icon/location-grad.svg" alt="icon" width={44} height={44} />
                                    </div>
                                    <h6>Sandeep Chhamunya</h6>
                                    <a href="javascript:;">+91 98106 32693</a>
                                    <a href="javascript:;">sandeep@infraplus.co.in</a>
                                    <a href="javascript:;" className="whatsappBtn">Whatsapp Chat <Image src='/assets/icon/right-arrow.svg' alt="icon" width={25} height={25} /></a>
                                </div>
                                <div className="contact-col">
                                    <div className="icon">
                                        <Image src="/assets/icon/location-grad.svg" alt="icon" width={44} height={44} />
                                    </div>
                                    <h6>Rajeev Sharma</h6>
                                    <a href="javascript:;">+91- 84475 89998</a>
                                    <a href="javascript:;">rajeev@infraplus.co.in</a>
                                    <a href="javascript:;" className="whatsappBtn">Whatsapp Chat <Image src='/assets/icon/right-arrow.svg' alt="icon" width={25} height={25} /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="contact-secB sec-pad">
                    <div className="container">
                        <div className="heading text-center">
                            <h3>Transforming Infrastructure Powering Possibilities</h3>
                            <p>Please fill out the form below and we'll get back to you as soon as we can.</p>
                        </div>
                        <div className="form-container">
                            <EnquireForm
                            className="contact-form "
                            buttonType="solid-white"/>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="contact-secC">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3509.2000052509866!2d77.04092437549275!3d28.413221275785205!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d2364f0609143%3A0x2507b5e9dfc542e7!2sTower%20B1%20Spaze%20I%20Tech%20park!5e0!3m2!1sen!2sin!4v1743684158477!5m2!1sen!2sin" width="100%" height="600" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </section>
        </main>
    )
}