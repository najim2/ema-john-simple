import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { getDatabaseCart, removeFromDatabaseCart, processOrder } from '../../utilities/databaseManager';
import fakeData from '../../fakeData';
import ReviewItem from '../ReviewItem/ReviewItem';
import Cart from '../Cart/Cart';
import happyImage from '../../images/giphy.gif';


const Review = () => {
    const [cart, setCart]=useState([]);
    const [orderPlaced, setOrderPlaced]=useState(false);

    const handlePlaceOrder = () =>{
        setCart([]);
        setOrderPlaced(true);
        processOrder();
       
    }
    const removeProduct = (productKey)=>{
        const newCart = cart.filter(pd=>pd.key !== productKey);
        setCart(newCart);
        removeFromDatabaseCart(productKey);
    }

    useEffect(()=>{
        //cart
        const saveCart = getDatabaseCart();
        const productKeys = Object.keys(saveCart);
         const cartProduct= productKeys.map(key=>{
           const product = fakeData.find(pd => pd.key === key);
           product.quantity = saveCart[key];
           return product;
       });
       setCart(cartProduct); 
    },[]);

    let thankYou;
    if(orderPlaced){
        thankYou = <img src={happyImage} alt=""/>
    }

    return (
        <div className='twin-container'>
            <div className='product-container'>
                <h3> {cart.length}</h3>
                {
                    cart.map(pd=><ReviewItem 
                        product ={pd}
                        removeProduct ={removeProduct}
                        ></ReviewItem>)
                }
                {thankYou}
            </div>
            <div className="cart-container">
                <Cart cart={cart}>
                    <button onClick={handlePlaceOrder} className='main-btn' >Place Order</button>
                </Cart>
            </div>
        </div>
    );
};

export default Review;