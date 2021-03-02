import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './product.css';
const Product = (props) => {
    // console.log(props.handlerProduct)
     const {img,name,seller,price,stock} = props.product;
    return (
        <div className="product">
           <div>
               <img src={img}></img>
           </div> 
           <div>
           <h3 className="product-name">{name}</h3>
           <p>by: {seller}</p>
           <p>Price: ${price}</p>
           <p>only {stock} left in stock - order soon</p>
           <button onClick={() => props.handlerProduct(props.product)} className="btn">
               <FontAwesomeIcon icon={faShoppingCart} /> add to cart
               </button>
           </div>
        </div>
    );
};

export default Product;