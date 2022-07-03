import React from 'react';
import "../styles/Cart.css"

const Cart = () => {
    const prix1 = 8;
    const prix2 = 10;
    const prix3 = 15;
    return (
        <div className='lmj-cart'>
            <h2>Panier</h2>
            <ul>
                <li>Un masquerin = {prix1}</li>
                <li>Un levrier = {prix2}</li>
                <li>Un 💐  = {prix3}</li>
            </ul>
            <p>Le total du panier est {prix2+prix1+prix3}</p>
        </div>
    );
}

export default Cart;
