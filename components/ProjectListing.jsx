import '@/styles/components/component.css'
import Image from 'next/image'
import Link from 'next/link'

export default function ProjectListing({ title, desc, sector, src= "/assets/images/projects/project1.jpg" }) {
    return(
        <div className="item item-md projectCard">
            <figure>
                <Image src={src} width={400} height={370} alt='Project' />
            </figure>
            <figcaption>
                <h6>{title}</h6>
                <p>{desc}</p>
                <Link href="/project-details" className='btn'>Explore </Link>
            </figcaption>
            <div className="sector">
                <img src="/assets/icon/pro-icon.svg" alt="" />
                <h6>{sector}</h6>
            </div>
        </div>
    )
}