import React, { useEffect, useState } from 'react'
import ArtNavbar from '../components/ArtNavbar'
import { useThemeContext } from '../context/ThemeContext'
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
import { useShoppingCartContext } from '../context/ShoppingContext';
import "../css/DetailsPage/DetailsPage.css"
import "../index.css"
import { formatCurrency } from '../utilities/FormatCurency';
import { NavLink } from 'react-router-dom';
import StoreItems from '../components/Fashion/StoreItems';
import Item1 from "../assets/tab-img-1.png"
import Item2 from "../assets/tab-img-2.png"
import Item3 from "../assets/tab-img-3.png"
import { Row, Col } from "react-bootstrap"
import Footer from "../components/Footer"

const DetailsPage = ({ id, quantity }) => {
  const [activeTab, setActiveTab] = useState("description")
  const { darkTheme } = useThemeContext()
  const { storeItem } = useShoppingCartContext()

  useEffect(() => {
    BODY()
  })

  // const item = menItemStore.find(i => i.id === id)
  // if (item === null) return null
  if (storeItem === null) return null
  const body = document.body
  // Body background color
  function BODY() {
    body.style.backgroundColor = !darkTheme ? "rgba(0, 0, 0, 0.85)" : "#ddd"
    body.style.color = !darkTheme ? "white" : "#000"
  }


  return (
    <div>
      <ArtNavbar />
      <section id="details-page" className='details-page'>
        <div className='detailItem'>
          <h1>Home + <button><NavLink to="/fashion">Fashion</NavLink></button> + <span>{storeItem.name}</span></h1>

          <div className='cart-details'>
            <div className='cart-details-left'>
              <span className='arrow-icon-container'><AiOutlineLeft className='arrow-icon' /></span>
              <div className='cart-details-img'><img src={storeItem.itemImage} alt={storeItem.name} title={storeItem.name} /></div>
              <span className='arrow-icon-container'><AiOutlineRight className='arrow-icon' /></span>
            </div>
            <div className='cart-details-right'>
              <span className='cart-details-right-title'>
                <h1>{storeItem.name}</h1>
              </span>
              <span className='cart-details-right-desc'>{storeItem.description}</span>
              <div className="more-details">
                <a href="#details-page-tab">More Details</a>
              </div>
              <p className='item-price'>{formatCurrency(storeItem.price)}</p>
              <div className="cart-details-right-line"></div>
              <div className='item-size'>
                <h4>Size</h4>
                <span>{`${storeItem.size} inches`}</span>
              </div>
              <button>ADD TO BAG</button>
            </div>
          </div>
        </div>
      </section>

      <section id="details-page-tab" className='details-page-tab container'>
        <div className='details-page-tab-title'>
          <div onClick={() => setActiveTab("description")} className={activeTab === "description" ? "activeaItemsTab" : ""}>Description</div>
        </div>

        <div className="details-page-tab-description">
          <div style={{ display: activeTab === "description" ? "block" : "none" }}>
            <div className="art-description-tab">
              <h1>Product</h1>
              <span>{storeItem.productDescription}</span>

              <h1>Key Ingredients</h1>
              <span>{storeItem.keyIngredients}</span>

              <h1>How To Apply</h1>
              <span>{storeItem.howToApply}</span>
            </div>
          </div>
        </div>

        <div className='also-available'>
          Also Available
          <div className="art-gallery-cards-container mt-16">
            <Row>
              <Col>
                <StoreItems
                  itemImage={Item1}
                  name={`Beetle King Art Work`}
                  price={4500}
                  description={`Black With White Stripes`}
                />
              </Col>
              <Col>
                <StoreItems
                  itemImage={Item2}
                  name={`Beetle King Art Work`}
                  price={6400}
                  description={`Black With White Stripes`}
                />
              </Col>
              <Col>
                <StoreItems
                  itemImage={Item3}
                  name={`Beetle King Art Work`}
                  price={7000}
                  description={`Black With White Stripes`}
                />
              </Col>
            </Row>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default DetailsPage