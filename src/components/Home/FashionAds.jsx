import React, { createElement } from 'react'
import { useNavigate } from 'react-router-dom'
import { homePageData } from '../../data/data'
import "../../css/FashionAds.css"
import { useThemeContext } from '../../context/ThemeContext'

const FashionAds = () => {
    const { darkTheme } = useThemeContext()
    const { fashionAds } = homePageData
    const fashionArray = fashionAds.fashionCards
    const box0 = fashionArray[0]
    const box1 = fashionArray[1]
    const box2 = fashionArray[2]
    const box3 = fashionArray[3]
    const box4 = fashionArray[4]

    const navigate = useNavigate()
    function routeToShop() {
        navigate("/all-brands")
    }
    return (
        <section>
            <div className='delivery-box' style={{ background: !darkTheme ? "linear-gradient(to right bottom, rgba(14, 13, 13, 0.796), rgba(25, 26, 26, 0.753))" : "white" }}>
                <div className='box-1' style={{ background: !darkTheme ? "linear-gradient(to right bottom, rgba(14, 13, 13, 0.796), rgba(25, 26, 26, 0.753))" : "white" }}>
                    <h1>{fashionAds.title}</h1>
                    <p>{fashionAds.subtitle}</p>
                </div>
                <DeliveryBox
                    title={box0.title}
                    label={box0.category}
                    image={box0.image}
                />
                <DeliveryBox
                    title={box1.title}
                    label={box1.category}
                    image={box1.image}
                />

                <div className='box-4'>
                    <div className='box-4-group'>
                        {fashionAds.button}
                        <span onClick={routeToShop} style={{ cursor: "pointer", fontSize: "22px", fontWeight: "500" }}>{createElement(fashionAds.arrowIcon)}</span>
                    </div>
                </div>

                <DeliveryBox
                    title={box2.title}
                    label={box2.category}
                    image={box2.image}
                />
                <DeliveryBox
                    title={box3.title}
                    label={box3.category}
                    image={box3.image}
                />
                <DeliveryBox
                    title={box4.title}
                    label={box4.category}
                    image={box4.image}
                />
            </div>
        </section>
    )
}

export default FashionAds




const DeliveryBox = ({ title, label, image }) => {
    const cardStyle = {
        background: `linear-gradient(to bottom, #f7f0cf4b, #f3eac854)`,
        backgroundImage: `url(${image})`,
        backgroundSize: "contain",
        backgroundPosition: "center",
        width: "100%",
        position: "relative",
    }
    const h1Style = {
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: '600',
        fontSize: '16px',
        lineHeight: '22px',
        display: 'flex',
        alignItems: 'center',
        letterSpacing: '-0.5px',
        color: '#FFFFFF',
        marginTop: '7.5rem',
    }
    const labelStyle = {
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: '13px',
        lineHeight: '22px',
        color: '#E4E4E7',
    }
    return (
        <div style={cardStyle} className="box-2">
            <div className="">
                <h2 className="" style={h1Style}>{title}</h2>
                <span className="" style={labelStyle}>{label}</span>
            </div>
        </div>
    )
}