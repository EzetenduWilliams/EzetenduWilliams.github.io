import React from 'react'
import Footer from '../components/Footer'
import About from '../components/Home/About'
import ArtAd from '../components/Home/ArtAd'
import FashionAds from '../components/Home/FashionAds'
import HomeMain from '../components/Home/HomeMain'
import Testimonials from '../components/Home/Testimonials'
import VideoAd from '../components/Home/VideoAd'
import Navbar from '../components/Navbar'

const LandingPage = () => {
    return (
        <div>
            <Navbar />
            <HomeMain />
            <About />
            <VideoAd />
            <Testimonials />
            <FashionAds />
            <ArtAd />
            <Footer />
        </div>
    )
}

export default LandingPage