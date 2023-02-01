import React, { useEffect } from 'react'
import Categories from '../components/Fashion/Categories'
import Main from '../components/Fashion/Main'
import MenStore from '../components/Fashion/MenStore'
import Navbar from '../components/Fashion/Navbar'
import Footer from "../components/Footer"
import { useThemeContext } from '../context/ThemeContext'

const Fashion = () => {

    const { darkTheme } = useThemeContext()

    const body = document.body

    // Body background color
    const BODY = () => {
        body.style.backgroundColor = !darkTheme ? "rgba(0, 0, 0, 0.85)" : "#ddd"
        body.style.color = !darkTheme ? "white" : "#000"
    }


    useEffect(() => {
        BODY()
    })
    return (
        <div>
            <Navbar />
            <Main />
            <Categories />
            <MenStore />
            <Footer />
        </div>
    )
}

export default Fashion