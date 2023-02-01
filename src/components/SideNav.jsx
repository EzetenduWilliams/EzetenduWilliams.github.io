import { Button } from 'react-bootstrap';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link } from 'react-router-dom';
import { useThemeContext } from '../context/ThemeContext';
import { homePageData } from '../data/data';

function SideNav({ show, handleClose, toggleTheme }) {
    const { navbar } = homePageData
    const theme = useThemeContext()

    return (
        <>
            <Offcanvas show={show} onHide={handleClose} keyboard placement="end" className={!theme.darkTheme ? "bg-dark" : "bg-light"}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Menu List</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    {navbar.menu.map((currentObj) => (
                        <Link to={currentObj.link} key={currentObj.id} className={`nav-link fs-5 mt-2 text-${theme.darkTheme ? "dark" : "light"}`}>{currentObj.innerHtml}</Link>
                    ))}
                    <Button className="mt-3" onClick={toggleTheme}>{navbar.button}</Button>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}

export default SideNav;