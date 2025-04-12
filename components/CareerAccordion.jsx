"use client"
import { useState, useEffect } from "react";
import '../styles/career/career.css';
import enterView from 'enter-view';
import '../public/assets/css/animate.css'

const CareerAccordion = ({ openings = [] }) => { 
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };
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

    return (
        <div className="summery-detail-content" data-animate="fade-up">
            {openings.length > 0 ? (
                openings.map((opening, index) => (
                    <div key={index} className={`col ${activeIndex === index ? "active" : ""}`}>
                        <div className="title" onClick={() => toggleAccordion(index)}>
                            <h6>{opening.title}</h6>
                            <div className="ico"></div>
                        </div>
                        <article>
                            <div className="content-desc website-content">
                                <div dangerouslySetInnerHTML={{ __html: opening.description }} />
                            </div>
                        </article>
                    </div>
                ))
            ) : (
                <p>No FAQs available.</p>
            )}
        </div>
    );
};

export default CareerAccordion;
