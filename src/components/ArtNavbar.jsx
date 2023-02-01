import React, { createElement } from 'react'
import { Link } from 'react-router-dom';
import { useShoppingCartContext } from '../context/ShoppingContext';
import { useThemeContext } from '../context/ThemeContext';
import { artAndCraftPage } from '../data/data';

const { navbar } = artAndCraftPage

const ArtNavbar = () => {
    const { darkTheme, toggleTheme } = useThemeContext()
    const { cartCount } = useShoppingCartContext()


    return (
        <nav className={`navbar bg-${!darkTheme ? "dark" : "light"} fixed-top d-flex align-items-center justify-content-between px-5 shadow-sm`} style={{ height: "10vh", overflow: "hidden" }}>
            <Link to="/" className='navbar-brand'>
                <img src={navbar.logo} alt="logo" width={40} />
            </Link>

            <ul className="nav-menu-list d-flex align-items-center gap-3">
                {navbar.menu.map((currentObj) => (
                    <Link to={currentObj.link} key={currentObj.id} className={`nav-link fs-6 mt-2 text-${darkTheme ? "dark" : "light"}`}>{currentObj.innerHtml}</Link>
                ))}
            </ul>

            <div className='d-flex align-items-center gap-3' style={{ position: "relative" }}>
                <span title='Create Account or Login' style={{ cursor: "pointer", fontSize: "20px", color: !darkTheme ? "white" : "black" }}>{createElement(navbar.loginIcon)}</span>
                <span title='Cart' className='' style={{ cursor: "pointer", fontSize: "20px", color: !darkTheme ? "white" : "black" }}>{createElement(navbar.cartIcon)}</span>
                <span title='Toggle Theme' onClick={toggleTheme} style={{ cursor: "pointer", fontSize: "20px", color: !darkTheme ? "white" : "black" }}>{createElement(navbar.theme)}</span>
                <span className='cart-notification-count'>{cartCount}</span>
            </div>
        </nav>
    )
}

export default ArtNavbar