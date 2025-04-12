"use client"
import BannerWrapper from "@/components/BannerWrapper";
import "../../styles/career/career.css"
import Image from "next/image";
import CareerSlider from "@/components/CareerSlider";
import CareerAccordion from "@/components/CareerAccordion";
import React, { useEffect, useState } from "react";
import Select from "react-select";
import enterView from 'enter-view';
import '../../public/assets/css/animate.css'

const customStyles = {
    control: (base, state) => ({
        ...base,
        height: "100%",
        backgroundColor: "none",
        border: state.isFocused ? "none" : "none",
        boxShadow: state.isFocused ? "none" : "none",
        "&:hover": {
          borderColor: "#007bff"
        }
    }),
    valueContainer: (base) => ({
        ...base,
        height: "100%",
      }),
    input: (base, state) => ({
        ...base,
        height: "100%",
        minHeight: "100%",
        minWidth: "100%"
    }),
    placeholder: (base, state) => ({
        ...base,
        color: "var(--text)",
        fontFamily: "ttrg"
    }),
    option: (base, state) => ({
        ...base,
        background: state.isFocused ? "var(--gradient-a)" : "#fff",
        marginBottom: "5px",
        fontSize: "16px",
        padding: "20px 10px",
        color: state.isFocused ? "#fff" : "#000",
        "&:hover": {
          borderColor: "#000",
          color: "#fff"
        }
      }),
    menu: (base) => ({
    ...base,
    zIndex: 100,
    }),
    indicatorsContainer: (base, state) => ({
        ...base,
        padding: state.isFocused ? "0" : "0",
    })
}

const options = [
    { value: "Frontend Developer", label: "Frontend Developer"},
    { value: "Backend Developer", label: "Backend Developer"},
    { value: "Fullstack Developer", label: "Fullstack Developer"},
]

const openingData = [
    {
        title: "FTTH Network Planners and Designer",
        description: `
            <div class="flex align-center justify-between">
                <h3>Job Description</h3>
                <button class="btn border-black sqr-radius">Apply Now</button>
            </div>
            <ul>
                <li>Providing advisory service to clients for property.</li>
                <li>Strong sales, negotiation and communication skills</li>
                <li>Leadership Quality </li>
                <li>Liaison with Client </li>
                <li>Team Management</li>
            </ul>
        `
    },
    {
        title: "Business Development Executive",
        description: `
            <div class="flex align-center justify-between">
                <h3>Job Description</h3>
                <button class="btn border-black sqr-radius">Apply Now</button>
            </div>
            <ul>
                <li>Providing advisory service to clients for property.</li>
                <li>Strong sales, negotiation and communication skills</li>
                <li>Leadership Quality </li>
                <li>Liaison with Client </li>
                <li>Team Management</li>
            </ul>
        `
    }
    
];

export default function Careers() {
    const [selectedOption, setSelectedOption] = useState(null)
    useEffect(() => {
        if (typeof window !== "undefined" && window.innerWidth > 1007){
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
    })

    return(
        <main>
            <BannerWrapper
                className="career-banner"
                mediaType="image"
                mediaSrc="/assets/images/banner/career-banner.jpg"
                bannerPosition="center"
                title="Careers"
                desc="Empowering Talent, Driving Innovation"
            />
            <section>
                <div className="career-secA sec-pad">
                    <div className="container over-hidden">
                        <div className="heading text-center" data-animate="fade-up">
                            <h3>Why Join Us</h3>
                            <p>At infraplus consulting, we’re more than just a team — we’re a movement of over 100+ visionaries driving innovation, collaboration, and impactful change. Here's why you should be part of our journey</p>
                        </div>
                        <div className="grid-container" data-animate="zoom-out">
                            <div className="career-col">
                                <div className="icon">
                                    <Image src="/assets/icon/bulb.svg" width={44} height={44} />
                                </div>
                                <h6>Innovative Environment</h6>
                                <p>We thrive on fresh ideas and bold thinking. Join us to push boundaries, challenge norms, and create solutions that matter.</p>
                            </div>
                            <div className="career-col">
                                <div className="icon">
                                    <Image src="/assets/icon/thumbsup.svg" width={44} height={44} />
                                </div>
                                <h6>Collaborative Culture</h6>
                                <p>Our strength lies in teamwork. You'll work alongside passionate professionals who inspire and empower each other every day.</p>
                            </div>
                            <div className="career-col">
                                <div className="icon">
                                    <Image src="/assets/icon/growth.svg" width={44} height={44} />
                                </div>
                                <h6>Growth Opportunities</h6>
                                <p>From mentorship programs to leadership roles, we invest in your development to help you reach your full potential.</p>
                            </div>
                            <div className="career-col">
                                <div className="icon">
                                    <Image src="/assets/icon/vision.svg" width={44} height={44} />
                                </div>
                                <h6>Vision-Driven Leadership</h6>
                                <p>Be part of a company that values forward-thinking ideas and empowers individuals to turn concepts into reality.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="career-secB sec-pad">
                    <div className="main-container">
                        <div className="heading text-center" data-animate="fade-up">
                            <h3>Our Culture</h3>
                        </div>
                        <CareerSlider />
                    </div>
                </div>
            </section>
            <section>
                <div className="career-secC sec-pad">
                    <div className="container">
                        <div className="heading text-center" data-animate="fade-up">
                            <h3>Current Openings</h3>
                        </div>
                        <CareerAccordion openings={openingData} />
                    </div>
                </div>
            </section>
            <section>
                <div className="career-secD sec-pad gray-bg">
                    <div className="container">
                        <div className="heading text-center" data-animate="fade-up">
                            <h3>Interested in joining us?</h3>
                            <p>Submit your CV, we will contact you as soon as we have relevant openings</p>
                        </div>
                        <div className="form-wrap form form-grid">
                        <div className="form-group">
                            <input type="text" className="form-control" />
                            <label htmlFor="">Name</label>
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control" />
                            <label htmlFor="">Last Name</label>
                        </div>
                        <div className="form-group">
                            <input type="tel" className="form-control" />
                            <label htmlFor="">Phone</label>
                        </div>
                        <div className="form-group">
                            <input type="email" className="form-control" />
                            <label htmlFor="">Email</label>
                        </div>
                        <div className="form-group">
                            <Select 
                                placeholder="Apply for"
                                options={options}
                                value={selectedOption}
                                onChange={setSelectedOption}
                                styles={customStyles}
                                components={{
                                    IndicatorSeparator: () => null 
                                  }}
                            ></Select>
                            {selectedOption && <label>{selectedOption.label}</label>}
                            {/* <label for="">Apply For</label> */}
                        </div>
                        <div className="form-group file-input">
                            <input type="file" name="" id="careerResume" className="form-control" accept=".pdf"/>
                            <div className="file-name"></div>
                        </div>
                        <div className="form-group full">
                            <textarea name="" id="" className="form-control"></textarea>
                            <label htmlFor="">Message</label>
                        </div>
                        <div className="sbmt-grp full text-center">
                            <a href="thanks.html" className="btn btn-black btn-wide">Submit</a>
                        </div>
                    </div>
                    </div>
                </div>
            </section>
        </main>
    )
}