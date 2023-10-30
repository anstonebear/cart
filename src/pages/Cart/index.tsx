import React from 'react';



import CartItems from '../../components/CartItems';
import CartOrder from '../../components/CartOrder';
import CartIcon from '../../components/UI/CartIcon';

import "../Cart/index.scss";

const Cart: React.FC = () => {
    return (
        <div className='cart'>
            <div className="cart__hat">
                <span className="cart__title">Shopping Cart </span>
                <button className='cart__clean'> <span className="">Очистить карзину </span> <CartIcon/></button>
            </div>
        <div className="cart__main">
            <div className="cart__items">
                <CartItems />
                <CartItems />
                <CartItems />
            </div>
            <CartOrder />
        </div>    
        </div>
    );
};

export default Cart;