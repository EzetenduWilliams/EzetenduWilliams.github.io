import { Col, Row } from "react-bootstrap"
import { useThemeContext } from "../../context/ThemeContext"
import { homePageData } from "../../data/data"
import "../../index.css"

const Testimonials = () => {
    const { testimonials } = homePageData
    const { darkTheme } = useThemeContext()

    return (
        <section className="mt-3">
            <Row className="gap-2" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1500">
                {testimonials.map(cur => (
                    <Col key={cur.id} className="w-100 d-flex flex-column align-items-center gap-1 px-3 py-3 rounded shadow-sm" style={{ background: !darkTheme ? "linear-gradient(to right bottom, rgba(14, 13, 13, 0.796), rgba(25, 26, 26, 0.753))" : "white", height: "240px" }}>
                        <h4 className='h6 text-center'>{cur.testimonial}</h4>
                        <h3>{cur.name}</h3>
                        <p className='fs-8'>{cur.position}</p>
                    </Col>
                ))}
            </Row>
        </section>
    )
}

export default Testimonials