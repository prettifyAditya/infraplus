"use client";

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"


export default function ServiceTabbing() {
    const [activeTab, setActivetab] =useState("tab1")
    return(

        <>
            <div className="services-container">
            <ul className="tab-nav services-tab-nav flex">
                <li data-tab="tab1" className={activeTab === "tab1" ? "active" : ""} onClick={() => setActivetab("tab1")}>Planning</li>
                <li data-tab="tab2" className={activeTab === "tab2" ? "active" : ""} onClick={() => setActivetab("tab2")}>Designing</li>
                <li data-tab="tab3" className={activeTab === "tab3" ? "active" : ""} onClick={() => setActivetab("tab3")}>Management</li>
            </ul>
            <div className="tab-nav-content services-tab-nav-content">
                <div className={`tabs ${activeTab === "tab1" ? "active" : ""}`} data-tab="tab1">
                    <figure>
                        <Image src="/assets/images/home/home_service1.jpg" alt="service" width={468} height={362} />
                    </figure>
                    <figcaption>
                        <h3>Planning</h3>
                        <ul>
                            <li>Project Identification/Site Selection</li>
                            <li>Field Surveys / Investigations and Analysis</li>
                            <li>Economic and Financial Analysis</li>
                            <li>Techno-Economic Feasibility Studies</li>
                            <li>Project Structuring</li>
                            <li>Architecture</li>
                        </ul>
                        <Link href="/services" className='btn border-black'>Read this service</Link>
                    </figcaption>
                </div>
                <div className={`tabs ${activeTab === "tab2" ? "active" : ""}`} data-tab="tab2">
                    <figure>
                        <Image src="/assets/images/home/home_service1.jpg" alt="service" width={468} height={362} />
                    </figure>
                    <figcaption>
                        <h3>Designing</h3>
                        <ul>
                            <li>Project Identification/Site Selection</li>
                            <li>Field Surveys / Investigations and Analysis</li>
                            <li>Economic and Financial Analysis</li>
                            <li>Techno-Economic Feasibility Studies</li>
                            <li>Project Structuring</li>
                            <li>Architecture</li>
                        </ul>
                        <Link href="/services" className='btn border-black'>Read this service</Link>
                    </figcaption>
                </div>
                <div className={`tabs ${activeTab === "tab3" ? "active" : ""}`} data-tab="tab3">
                    <figure>
                        <Image src="/assets/images/home/home_service1.jpg" alt="service" width={468} height={362} />
                    </figure>
                    <figcaption>
                        <h3>Management</h3>
                        <ul>
                            <li>Project Identification/Site Selection</li>
                            <li>Field Surveys / Investigations and Analysis</li>
                            <li>Economic and Financial Analysis</li>
                            <li>Techno-Economic Feasibility Studies</li>
                            <li>Project Structuring</li>
                            <li>Architecture</li>
                        </ul>
                        <Link href="/services" className='btn border-black'>Read this service</Link>
                    </figcaption>
                </div>
            </div>
        </div>
        </>
    )
}