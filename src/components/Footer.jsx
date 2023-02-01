import React, { useRef } from 'react'
import "../css/Footer.css"
import Logo from "../assets/logo.png"
import { Link } from "react-router-dom"
import { useThemeContext } from '../context/ThemeContext'
import { homePageData } from '../data/data'

const Footer = () => {
    const { darkTheme } = useThemeContext()
    const { footer } = homePageData
    const foot = footer.newsletter

    const footerRef = useRef()
    const handleSubmit = (e) => {
        e.preventDefault();
        const data = new FormData(e.target)
        const dataObject = Object.fromEntries(data.entries())
        console.log(dataObject);

        footerRef.current.reset()
    }
    return (
        <footer style={{ background: darkTheme ? "white" : "#181a1d", color: darkTheme ? "black" : "white" }}>
            <div className="footer-top">
                <div className='footer-col-1 w-25'>
                    <img src={Logo} alt="logo" />
                    <span>{footer.thesis}</span>
                </div>

                <div className='footer-col-2'>
                    <h4>{footer.company.title}</h4>
                    {footer.company.list.map(cur => (
                        <Link style={{ color: "inherit" }} key={cur.id} to={cur.link}>{cur.text}</Link>
                    ))}
                </div>

                <div className='footer-col-2'>
                    <h4>{footer.help.title}</h4>
                    {footer.help.list.map(cur => (
                        <Link style={{ color: cur.id === 2 ? "#E80E0F" : "inherit" }} key={cur.id} to={cur.link}>{cur.text}</Link>
                    ))}
                </div>

                <div className='footer-col-2 footer-col-3'>
                    <h4>{foot.title}</h4>
                    <form ref={footerRef} id="footer-form" onSubmit={handleSubmit}>
                        <input type={foot.type} name={foot.name} placeholder={foot.placeholder} style={{ border: darkTheme ? "1px solid #111" : "1px solid white" }} />
                        <button>{foot.buttonText}</button>
                    </form>
                </div>
            </div>

            <div className="copyright text-white">{foot.copyright}</div>
        </footer>
    )
}

export default Footer