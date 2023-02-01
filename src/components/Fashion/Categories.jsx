import React from 'react'
import { Button } from 'react-bootstrap'
import "../../css/Fashion/Categories.css"
import { fashionPage } from '../../data/data'
import "../../index.css"

const Categories = () => {
    const { categories } = fashionPage


    return (
        <section className="popular-categories-section">
            <h1>{categories.title}</h1>
            <div className="container category-row mt-4">
                {
                    categories.categoryCards.map(cur => (
                        <figure key={cur.id} className="categories-card-container">
                            <img src={cur.bgImage} alt={cur.title.trim()} className="w-100 h-100" />
                            <figcaption className='category-card-caption'>
                                <div>
                                    <h1 className="h4">{cur.title}</h1>
                                    <p>{cur.productCount}</p>
                                </div>

                                <Button>{cur.buttonText}</Button>
                            </figcaption>
                        </figure>
                    ))
                }

            </div>
        </section>
    )
}

export default Categories