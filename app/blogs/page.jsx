"use client"
import BlogCard from "@/components/BlogCard"
import '../../styles/blogs/blogs.css'
import { useEffect } from "react"
import Image from "next/image"
export default function Blogs() {
    useEffect(() => {
        const header = document.querySelector("header")
        if (header) header.classList.add('header-fit')

        return () => {
            if (header) header.classList.remove("header-fit")
        }
    })
    return(
        <main>
            <section>
                <div className="blog-secA mt-hdrfix sec-pad">
                    <div className="container">
                        <div className="heading text-center">
                            <h3>Blogs</h3>
                            <p>Transforming Infrastructure, Powering Possibilities.</p>
                        </div>
                        <div className="blogs-container">
                            <BlogCard
                                title="21 March, 2025"
                                desc="How can the Infraplus make better decisions on infrastructure projects?"
                                src="/assets/images/blogs/blog1.jpg"
                            />
                            <BlogCard
                                title="21 March, 2025"
                                desc="How can the Infraplus make better decisions on infrastructure projects?"
                                src="/assets/images/blogs/blog1.jpg"
                            />
                            <BlogCard
                                title="21 March, 2025"
                                desc="How can the Infraplus make better decisions on infrastructure projects?"
                                src="/assets/images/blogs/blog1.jpg"
                            />
                            <BlogCard
                                title="21 March, 2025"
                                desc="How can the Infraplus make better decisions on infrastructure projects?"
                                src="/assets/images/blogs/blog1.jpg"
                            />
                            <BlogCard
                                title="21 March, 2025"
                                desc="How can the Infraplus make better decisions on infrastructure projects?"
                                src="/assets/images/blogs/blog1.jpg"
                            />
                            <BlogCard
                                title="21 March, 2025"
                                desc="How can the Infraplus make better decisions on infrastructure projects?"
                                src="/assets/images/blogs/blog1.jpg"
                            />
                            <BlogCard
                                title="21 March, 2025"
                                desc="How can the Infraplus make better decisions on infrastructure projects?"
                                src="/assets/images/blogs/blog1.jpg"
                            />
                            <BlogCard
                                title="21 March, 2025"
                                desc="How can the Infraplus make better decisions on infrastructure projects?"
                                src="/assets/images/blogs/blog1.jpg"
                            />
                            <BlogCard
                                title="21 March, 2025"
                                desc="How can the Infraplus make better decisions on infrastructure projects?"
                                src="/assets/images/blogs/blog1.jpg"
                            />
                        </div>
                        <button class="loadBtn">
                        <Image alt="infraplus" width={20} height={20}  src="/assets/icon/logo-grad.svg" />Load more..</button>
                    </div>
                </div>
            </section>
        </main>
    )
}