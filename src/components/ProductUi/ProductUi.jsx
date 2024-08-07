import React from 'react'
import './ProductUi.css';
import { Items } from '../../Global';
import { useParams } from 'react-router-dom';


const ProductUi = () => {
    let { id } = useParams()
    let Filter_product = Items.filter((product)=>{
        return product.title === id
    })
    let [product] = Filter_product;
  return (
    <>
    <div className="main_product">
        <div className="product_container">
            <div className="leftside">
                <img src={product.img}/>
            </div>
            <div className="rightside">
                <h1>{product.title}</h1>
                <p>{product.description}</p>
                <h4>Price {product.price}/-</h4>
                <button>Add To Cart</button>
            </div>
        </div>
    </div>
    </>
  )
}

export default ProductUi