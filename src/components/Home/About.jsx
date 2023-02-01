import React, { createElement } from 'react'
import "../../index.css"
import { Col, Row } from 'react-bootstrap'
import { homePageData } from '../../data/data'
import { useThemeContext } from '../../context/ThemeContext'

const { about } = homePageData

const About = () => {
    const arr = about.subtitle.split("retention ")
    return (
        <section>
            <h2 className='title-lg fs-2 fw-bold text-center' style={{ overflow: "hidden" }}>{about.title}</h2>
            <p className='fs-5 fw-normal text-center'>{arr[0]}<br />{arr[1]}</p>

            {/* CATEGORIES */}
            <div>
                <Row md={2} xs={1} lg={2} className='mt-5 g-3'>
                    {about.aboutCards.map(cur => (
                        <Col key={cur.id} data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1500"><Category {...cur} /></Col>
                    ))}
                </Row>
            </div>
        </section>
    )
}

export default About






// Component for Category Setion
const Category = ({ id, title, description, icon }) => {
    const { darkTheme } = useThemeContext()
    const cardStyle = {
        width: "100%",
        height: "180px",
        background: darkTheme ? `#fff` : `linear-gradient(to right bottom, #0e0d0dcb, #191a1ac0)`,
        borderRadius: "14px",
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "space-between",
        gap: "16px",
        padding: "20px 25px",
    }
    return (
        <div id={id} className="shadow-sm" style={cardStyle}>
            <span style={{ fontSize: "23px", flexBasis: "30%" }}>{createElement(icon)}</span>
            <div>
                <h1 className='h3'>{title}</h1>
                <span>{description}</span>
            </div>
        </div >
    )
}

