// CartComponent.js

import React from 'react';
import { useSelector } from 'react-redux';

const CartComponent = () => {
    const cartItems = useSelector(state => state.cart.cartItems);

    return (
        <div>
            <h2>Shopping Cart</h2>
            <ul>
                {cartItems.map(item => (
                    <li key={item.product._id}>
                        <p>{item.product.product_name}</p>
                        <p>Quantity: {item.quantity}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CartComponent;
