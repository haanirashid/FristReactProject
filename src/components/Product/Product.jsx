import React from 'react'
import { Items } from '../../Global.js';
import './product.css';
import { Link } from 'react-router-dom';

const Product = () => {
    return (
        <>
            <div className="main">
                {
                    Items.map((value, index) => {
                        return (
                            <Link key={index} to={`/ProductUi/${value.title}`}>
                                <div className="eat">
                                    <div className="top">
                                        <img src={value.img} alt="error" />
                                    </div>
                                    <div className="bottom">
                                        <h1>{value.title}</h1>
                                        <p>{value.description}</p>
                                        <h3>Price {value.price}</h3>
                                        <button>Add to Cart</button>
                                    </div>
                                </div>
                            </Link>

                        )
                    })
                }
            </div>
        </>
    )
}

export default Product