import React from 'react';
import './ReviewItem.css';

const ReviewItem = (props) => {
    const {name, quantity, key, price}=props.product;

    return (
        <div className='review-item'>
            <h3 className='product-name'>{name}</h3>
            <p>Quantity: {quantity}</p>
            <p><small>${price}</small></p>
            <br/>
            <button
             onClick={()=>props.removeProduct(key)} 
             className='main-btn'>Remove
             </button>
        </div>
    );
};

export default ReviewItem;