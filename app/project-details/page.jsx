"use client"

import EnquireForm from '@/components/EnquireForm'
import ProjectGallery from '@/components/ProjectGallery'
import RelatedProject from '@/components/RelatedProject'
import '@/styles/sector/sector.css'
import Link from 'next/link'
import enterView from 'enter-view';
import '../../public/assets/css/animate.css'
import { useEffect } from 'react'

export default function ProjectDetails() {
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
            <div className="banner prodetails-banner center-banner">
                <div className="bg">
                    <img src="/assets/images/banner/secdetails-banner.jpg" alt="" />
                    <div className="banner-wrapper">
                        <div className="container">
                            <div className="heading" data-animate="fade-up">
                                <h2>BPCL Gas Pipeline Shifting work for NHAI in (Dwarka Expressway)</h2>
                                <p>Design Review, Project management and Construction Supervision of BPCL Gas Pipeline Shifting work for NHAI in NCR (Dwarka Expressway)</p>
                                <ul className="details flex">
                                    <li>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" fillRule="evenodd"><path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></path><path fill="#fff" d="M12 2a9 9 0 0 1 9 9c0 3.074-1.676 5.59-3.442 7.395a20.4 20.4 0 0 1-2.876 2.416l-.426.29l-.2.133l-.377.24l-.336.205l-.416.242a1.87 1.87 0 0 1-1.854 0l-.416-.242l-.52-.32l-.192-.125l-.41-.273a20.6 20.6 0 0 1-3.093-2.566C4.676 16.589 3 14.074 3 11a9 9 0 0 1 9-9m0 2a7 7 0 0 0-7 7c0 2.322 1.272 4.36 2.871 5.996a18 18 0 0 0 2.222 1.91l.458.326q.222.155.427.288l.39.25l.343.209l.289.169l.455-.269l.367-.23q.293-.186.627-.417l.458-.326a18 18 0 0 0 2.222-1.91C17.728 15.361 19 13.322 19 11a7 7 0 0 0-7-7m0 3a4 4 0 1 1 0 8a4 4 0 0 1 0-8m0 2a2 2 0 1 0 0 4a2 2 0 0 0 0-4"></path></g>
                                        </svg>
                                        <div className="loc-det">
                                            <h6>Location</h6>
                                            <p>India</p>
                                        </div>
                                    </li>
                                    <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none"><path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></path><path fill="#fff" d="M8.243 3.03a1 1 0 0 1 .727 1.213l-4 16a1 1 0 1 1-1.94-.485l4-16a1 1 0 0 1 1.213-.728m8.727.727l4 16a1 1 0 1 1-1.94.485l-4-16a1 1 0 1 1 1.94-.485M12 17a1 1 0 0 1 .993.883L13 18v2a1 1 0 0 1-1.993.117L11 20v-2a1 1 0 0 1 1-1m0-7a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0v-2a1 1 0 0 1 1-1m0-7a1 1 0 0 1 .993.883L13 4v2a1 1 0 0 1-1.993.117L11 6V4a1 1 0 0 1 1-1"></path></g></svg>
                                        <div className="loc-det">
                                            <h6>Sector</h6>
                                            <p>Highways, Bridges & Tunnels</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="form-wrapper">
                                <div className="title">
                                    <h6>Talk to Our Experts</h6>
                                </div>
                                <EnquireForm />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section>
                <div className="sector-detailA sec-pad">
                    <div className="container flex over-hidden">
                        <div className="colA" data-animate="fade-right">
                            <p>Lorem ipsum dolor sit amet consectetur. Ullamcorper porttitor commodo vel purus commodo. Pellentesque accumsan enim risus quisque viverra mattis in sed. Fringilla enim eu praesent scelerisque. Lectus diam arcu velit cursus. Viverra dis tincidunt duis bibendum interdum nulla maecenas sed. Porta dictum nec vitae luctus. Adipiscing fermentum porta lobortis mauris. Porttitor tellus elit diam quisque tempor varius consequat fusce. Placerat ut turpis nulla tristique pretium tortor maecenas cursus.</p>
                            <p>Lorem ipsum dolor sit amet consectetur. Ullamcorper porttitor commodo vel purus commodo. Pellentesque accumsan enim risus quisque viverra mattis in sed. Fringilla enim eu praesent scelerisque. Lectus diam arcu velit cursus. Viverra dis tincidunt duis bibendum interdum nulla maecenas sed. Porta dictum nec vitae luctus. Adipiscing fermentum porta lobortis mauris. Porttitor tellus elit diam quisque tempor varius consequat fusce. Placerat ut turpis nulla tristique pretium tortor maecenas cursus.</p>
                            <p>Lorem ipsum dolor sit amet consectetur. Ullamcorper porttitor commodo vel purus commodo. Pellentesque accumsan enim risus quisque viverra mattis in sed. Fringilla enim eu praesent scelerisque. Lectus diam arcu velit cursus. Viverra dis tincidunt duis bibendum interdum nulla maecenas sed. Porta dictum nec vitae luctus. Adipiscing fermentum porta lobortis mauris. Porttitor tellus elit diam quisque tempor varius consequat fusce. Placerat ut turpis nulla tristique pretium tortor maecenas cursus.</p>
                            <p>Lorem ipsum dolor sit amet consectetur. Ullamcorper porttitor commodo vel purus commodo. Pellentesque accumsan enim risus quisque viverra mattis in sed. Fringilla enim eu praesent scelerisque. Lectus diam arcu velit cursus. Viverra dis tincidunt duis bibendum interdum nulla maecenas sed. Porta dictum nec vitae luctus. Adipiscing fermentum porta lobortis mauris. Porttitor tellus elit diam quisque tempor varius consequat fusce. Placerat ut turpis nulla tristique pretium tortor maecenas cursus.</p>
                            <ul>
                                <li>Taking all approval from BPCL / NHAI for the pipe procurement</li>
                                <li>Design review and Value Engineering</li>
                                <li>Review and Approval of drawings and documents submitted by Supplier and Contractor</li>
                                <li>Review of Contractor’s shop drawings and providing approval</li>
                                <li>Scheduling and Budgeting</li>
                                <li>Full time Construction Supervision and bill certification</li>
                            </ul>
                        </div>
                        <div className="colB" data-animate="fade-left">
                            <h3>Project Gallery</h3>
                            <div className="project-gallery">
                                <ProjectGallery 
                                    zoomImg="/assets/images/project-gallery/pro-gallery1.jpg"
                                    mainImg="/assets/images/project-gallery/pro-gallery1.jpg"
                                />
                                <ProjectGallery 
                                    zoomImg="/assets/images/project-gallery/pro-gallery1.jpg"
                                    mainImg="/assets/images/project-gallery/pro-gallery1.jpg"
                                />
                                <ProjectGallery 
                                    zoomImg="/assets/images/project-gallery/pro-gallery1.jpg"
                                    mainImg="/assets/images/project-gallery/pro-gallery1.jpg"
                                />
                                <ProjectGallery 
                                    zoomImg="/assets/images/project-gallery/pro-gallery1.jpg"
                                    mainImg="/assets/images/project-gallery/pro-gallery1.jpg"
                                />
                                <ProjectGallery 
                                    zoomImg="/assets/images/project-gallery/pro-gallery1.jpg"
                                    mainImg="/assets/images/project-gallery/pro-gallery1.jpg"
                                />
                                <ProjectGallery 
                                    zoomImg="/assets/images/project-gallery/pro-gallery1.jpg"
                                    mainImg="/assets/images/project-gallery/pro-gallery1.jpg"
                                />
                            </div>
                            <h3>More Sectors</h3>
                            <ul>
                                <li><Link href="/sectors"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 256 256"><path fill="#000" d="M174 47.75a254.2 254.2 0 0 0-41.45-38.3a8 8 0 0 0-9.18 0A254.2 254.2 0 0 0 82 47.75C54.51 79.32 40 112.6 40 144a88 88 0 0 0 176 0c0-31.4-14.51-64.68-42-96.25M128 216a72.08 72.08 0 0 1-72-72c0-57.23 55.47-105 72-118c16.53 13 72 60.75 72 118a72.08 72.08 0 0 1-72 72m55.89-62.66a57.6 57.6 0 0 1-46.56 46.55a9 9 0 0 1-1.33.11a8 8 0 0 1-1.32-15.89c16.57-2.79 30.63-16.85 33.44-33.45a8 8 0 0 1 15.78 2.68Z"></path></svg>Water & Sanitation</Link></li>
                                <li><Link href="/sectors"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><g fill="none"><path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></path><path fill="#000" d="M8.243 3.03a1 1 0 0 1 .727 1.213l-4 16a1 1 0 1 1-1.94-.485l4-16a1 1 0 0 1 1.213-.728m8.727.727l4 16a1 1 0 1 1-1.94.485l-4-16a1 1 0 1 1 1.94-.485M12 17a1 1 0 0 1 .993.883L13 18v2a1 1 0 0 1-1.993.117L11 20v-2a1 1 0 0 1 1-1m0-7a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0v-2a1 1 0 0 1 1-1m0-7a1 1 0 0 1 .993.883L13 4v2a1 1 0 0 1-1.993.117L11 6V4a1 1 0 0 1 1-1"></path></g></svg>Roads & Highways</Link></li>
                                <li><Link href="/sectors"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><g fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} color="#000"><path d="m6 19l-2 2m14-2l2 2M9 15h.009m5.982 0H15M5 9c4 4 10.5 4 14 0"></path><path d="M5.273 7.894C6.094 3.716 7.23 3 11.455 3h1.09c4.225 0 5.36.716 6.182 4.894l.553 2.816c.755 3.84 1.132 5.76.032 7.025S16.142 19 12 19c-4.141 0-6.212 0-7.312-1.265s-.723-3.185.032-7.025z"></path></g></svg>Rail & Metro</Link></li>
                                <li><Link href="/sectors"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 48 48"><g fill="#000"><path d="m25 12l-6 9h4v6l6-9h-4z"></path><path fillRule="evenodd" d="M37.91 19.273a13.57 13.57 0 0 1-2.983 7.015C33.965 27.464 31.52 30.82 31 33H17c-.52-2.182-2.968-5.539-3.93-6.715a13.57 13.57 0 0 1-2.98-7.017a13.47 13.47 0 0 1 1.292-7.494a13.8 13.8 0 0 1 5.166-5.67A14.2 14.2 0 0 1 24.002 4c2.638 0 5.222.73 7.454 2.107a13.8 13.8 0 0 1 5.164 5.671a13.47 13.47 0 0 1 1.29 7.495M29.583 31H18.416c-.426-.983-.995-1.968-1.525-2.805a35 35 0 0 0-2.272-3.175a11.57 11.57 0 0 1-2.542-5.983a11.47 11.47 0 0 1 1.1-6.382a11.8 11.8 0 0 1 4.42-4.848A12.2 12.2 0 0 1 24.002 6c2.27 0 4.49.629 6.405 1.81a11.8 11.8 0 0 1 4.418 4.848a11.47 11.47 0 0 1 1.098 6.383a11.57 11.57 0 0 1-2.544 5.981a34 34 0 0 0-2.271 3.175c-.53.837-1.098 1.82-1.524 2.803" clipRule="evenodd"></path><path d="M17 36a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H18a1 1 0 0 1-1-1"></path><path fillRule="evenodd" d="M17 39h14v3a2 2 0 0 1-2 2H19a2 2 0 0 1-2-2zm2 2h10v1H19z" clipRule="evenodd"></path></g></svg>Energy</Link></li>
                                <li><Link href="/sectors"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><g fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}><path d="M5 21c.5-4.5 2.5-8 7-10"></path><path d="M9 18c6.218 0 10.5-3.288 11-12V4h-4.014c-9 0-11.986 4-12 9c0 1 0 3 2 5h3z"></path></g></svg>Environmental & Waste Management</Link></li>
                                <li><Link href="/sectors"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 32 32"><path fill="#000" d="M7 4h11.75c.69 0 1.25.56 1.25 1.25V14a1 1 0 0 0 1 1h3.75c.69 0 1.25.56 1.25 1.25V28h-3v-3.5a1.5 1.5 0 0 0-1.5-1.5h-11A1.5 1.5 0 0 0 9 24.5V28H6V5a1 1 0 0 1 1-1m14 24h-4v-3h4zm-6 0h-4v-3h4zm12 2a1 1 0 0 0 1-1V16.25A3.25 3.25 0 0 0 24.75 13H22V5.25A3.25 3.25 0 0 0 18.75 2H7a3 3 0 0 0-3 3v24a1 1 0 0 0 1 1zM10.5 10a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3m0 5a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3m1.5 3.5a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0m3.5-8.5a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3m1.5 3.5a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0M15.5 20a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3m6.5-1.5a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0"></path></svg>Buildings – Architecture</Link></li>
                                <li><Link href="/sectors"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 256 256"><path fill="#000" d="M248 212h-20V92h4a4 4 0 0 0 0-8h-52V44h4a4 4 0 0 0 0-8H40a4 4 0 0 0 0 8h4v168H24a4 4 0 0 0 0 8h224a4 4 0 0 0 0-8M220 92v120h-40V92ZM52 44h120v168h-32v-52a4 4 0 0 0-4-4H88a4 4 0 0 0-4 4v52H52Zm80 168H92v-48h40ZM76 80a4 4 0 0 1 4-4h16a4 4 0 0 1 0 8H80a4 4 0 0 1-4-4m48 0a4 4 0 0 1 4-4h16a4 4 0 0 1 0 8h-16a4 4 0 0 1-4-4m-44 44a4 4 0 0 1 0-8h16a4 4 0 0 1 0 8Zm44-4a4 4 0 0 1 4-4h16a4 4 0 0 1 0 8h-16a4 4 0 0 1-4-4"></path></svg>Industrial Parks/ SEZ</Link></li>
                                <li><Link href="/sectors"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 48 48"><path fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" d="m41.767 13.774l-.058 20.451L24.029 44.5l.058-20.451z" strokeWidth={1}></path><path fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" d="m12.38 37.78l11.65 6.72l.04-12.41l.02-8.04l-7.49-4.32l-10.31-5.96l-.06 20.46l3.04 1.76" strokeWidth={1}></path><path fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" d="m41.767 13.774l-17.68 10.275L6.291 13.775L23.971 3.5z" strokeWidth={1}></path><circle cx={24.029} cy={23.681} r={8.413} fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1}></circle><path fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" d="m17.101 30.609l.979-.979m-3.429.979l-6.243 6.243l2.45 2.449l6.243-6.243v-2.449z" strokeWidth={1}></path></svg>MEP & Structural Services</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="sector-detailB sec-pad">
                    <div className="container">
                        <div className="heading">
                            <h3>More Projects</h3>
                        </div>
                        <RelatedProject />
                    </div>
                </div>
            </section>
        </main>
    ) 
}