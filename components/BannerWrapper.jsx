import "../styles/components/bannerwrapper.css"

export default function BannerWrapper({ className="", mediaType="video", mediaSrc="/assets/video/projects-banner.mp4", bannerPosition="", title, desc}) {

    return(
        <>
            <div className={`banner ${className}`}>
                <div className="bg">
                    {
                        mediaType === "video" ? (
                            <video playsInline autoPlay muted loop width="100%" height="100%">
                                <source src={mediaSrc} type="video/mp4" />
                            </video>
                        ) : (
                            <img src={mediaSrc} alt="Banner" width="100%" height="100%" loading="lazy-load" />
                        )
                    }
                    <div className="banner-wrapper">
                        <div className="container">
                            <div className={`heading ${bannerPosition}`} data-animate="fade-up">
                                <h2>{title}</h2>
                                <p>{desc}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
