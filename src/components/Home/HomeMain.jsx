import React from 'react'
import "../../index.css"
import { Button } from 'react-bootstrap'
import HomeBg from "../../assets/company-name-round.png"
import MovingComponent from 'react-moving-text'
import { homePageData } from '../../data/data'

const HomeMain = () => {
    const { main } = homePageData

    const mainStyle = {
        backgroundImage: `url(${main.bgImg})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        width: "100vw",
        height: "90vh",
        padding: "40px 80px",
        overflow: "hidden",
        marginTop: "10vh"
    }

    return (
        <main className='d-flex align-items-center justify-content-between' style={mainStyle}>
            <div className='home-main-left d-flex flex-column align-items-start gap-3 w-50'>
                <h1 style={{ overflow: "hidden", lineHeight: "62px" }} data-aos="fade-right" data-aos-easing="linear" data-aos-duration="1500">
                    <MovingComponent type="typewriter" dataText={main.movingText} />
                </h1>

                <h4 className='h4' style={{ lineHeight: "32px" }} data-aos="fade-right" data-aos-easing="linear" data-aos-duration="1500">{main.descriptionTxt}</h4>
                <div className='home-main-btns d-flex align-items-baseline gap-3 mt-2'>
                    <Button className="btn btn-outline-primary text-light" style={{ borderRadius: "20px", border: "0", outline: "0" }}>Fashion Store</Button>
                    <Button className="btn btn-outline-primary text-light" style={{ borderRadius: "20px", border: "0", outline: "0" }}>Art Store</Button>
                </div>
            </div>
            <div className='home-main-right ms-4'>
                <img src={HomeBg} alt="home-bg-img" data-aos="fade-left" data-aos-easing="linear" data-aos-duration="1500" />
            </div>
        </main>
    )
}

export default HomeMain