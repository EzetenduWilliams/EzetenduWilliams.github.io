import React, { createElement, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useThemeContext } from '../context/ThemeContext'
import { homePageData } from '../data/data'
import SideNav from './SideNav'

const { navbar } = homePageData

const Navbar = () => {
    // Import theme state from context folder
    const { darkTheme, toggleTheme } = useThemeContext()

    const [show, setShow] = useState(false);
    const body = document.body

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // Body background color
    const BODY = () => {
        body.style.backgroundColor = !darkTheme ? "rgba(0, 0, 0, 0.85)" : "#ddd"
        body.style.color = !darkTheme ? "white" : "#000"
    }

    useEffect(() => {
        BODY()
    })
    return (
        <>
            <nav className={`homeNav navbar fixed-top navbar-dark bg-${!darkTheme ? "dark" : "light"} d-flex align-items-center justify-content-between shadow-sm`} style={{ height: "10vh", padding: "0 40px" }}>
                <Link to="/" className='navbar-brand'>
                    <img src={navbar.logo} alt="logo" width={50} />
                </Link>

                <span style={{ fontSize: "20px", cursor: "pointer", color: !darkTheme ? "white" : "black" }} onClick={handleShow}>{createElement(navbar.menuIcon)}</span>
            </nav>
            <SideNav show={show} handleClose={handleClose} toggleTheme={toggleTheme} />
        </>

    )
}

export default Navbar