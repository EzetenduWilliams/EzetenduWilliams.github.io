import React from 'react'
import { useThemeContext } from '../../context/ThemeContext'
import { homePageData } from '../../data/data'

const ArtAd = () => {
    const { darkTheme } = useThemeContext()
    const { artCraftAds } = homePageData
    const artCard = artCraftAds.artCraftCard
    return (
        <section className="home-about container d-flex align-items-start justify-content-between">
            <div className='d-flex flex-column align-items-start gap-2 me-3' style={{ fontFamily: "Poppins" }}>
                <span className="h3" style={{ overflow: "hidden" }}>We teach devs how to<br /> write better content.</span>
                <span className="h6" style={{ overflow: "hidden" }}>Proin faucibus nibh et sagittis a. Lacinia purus ac<br /> amet pellentesque aliquam enim.</span>
                <span className="content-left-footer" style={{ fontSize: "15px" }}>Lorem ipsum dolor sit amet, consectetur adipis elit. Sit<br /> enim nec, proin faucibus nibh et sagittis a. Lacinia purus<br /> ac amet pellentesque aliquam enim.</span>
            </div>
            <div className='d-flex align-items-start gap-3 ms-5'>
                {artCard.map(cur => (
                    <div key={cur.id} className={`rounded shadow-sm`} style={{ width: "280px", height: "390px", background: darkTheme ? "white" : "linear-gradient(to right bottom, rgba(14, 13, 13, 0.796), rgba(25, 26, 26, 0.753))" }}>
                        <div className="rounded" style={{ width: "100%", height: "200px" }}>
                            <img src={cur.image} alt="about-card-img" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                        </div>
                        <div className="px-2 py-3 d-flex flex-column align-items-start justify-content-between" style={{ height: "190px" }}>
                            <h1 className="h5">{cur.title}</h1>
                            <span>{cur.date}</span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default ArtAd