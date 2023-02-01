import React from 'react'
import { formatCurrency } from "../../utilities/FormatCurency"
import { AiFillStar } from 'react-icons/ai';
import { AiOutlineStar } from 'react-icons/ai';
import { FaShoppingCart } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { useShoppingCartContext } from '../../context/ShoppingContext';

const StoreItems = ({ id, itemImage, name, price, description }) => {
    const { addToDetailsPage } = useShoppingCartContext()
    const navigate = useNavigate()
    function navigateToDetails() {
        navigate("/details-page")
    }

    return (
        <figure className="items-card-container rounded shadow-sm">
            <img src={itemImage} alt={name} />
            <figcaption className="items-description-card py-2 px-3">
                <p className="items-card-prices">{formatCurrency(price)}</p>
                <h1 className="items-card-title">{name}</h1>
                <p className="items-card-description">{description}</p>
                <div className="items-card-group">
                    <div className="stars">
                        <AiFillStar className="star-icon" />
                        <AiFillStar className="star-icon" />
                        <AiFillStar className="star-icon" />
                        <AiFillStar className="star-icon" />
                        <AiOutlineStar className="star-icon" />
                    </div>
                    <div className="item-card-img" onClick={() => {
                        addToDetailsPage(id - 1)
                        navigateToDetails()
                    }}>
                        <FaShoppingCart className="cart-icon" />
                    </div>
                </div>
            </figcaption>
        </figure>
    )
}

export default StoreItems