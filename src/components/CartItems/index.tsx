import React from 'react';

import "../CartItems/index.scss"

import CartPlus from '../UI/CartPlus'; 
import CartMinus from '../UI/CartMinus';

const CartItems: React.FC = () => {
    return (
        <div className='item'>
            <div className="wrapper">
                <div className="item__left">
                    <img src="https://a.lmcdn.ru/img600x866/R/T/RTLACB134901_18156082_1_v1_2x.jpg" alt="pic" className='item__img'/>
                    <div className="item__text">
                        <div className="item__title">Pants</div>
                        <div className="item__size">Size: XXXXXL</div>
                    </div>
                </div>
                <div className="item__right">
                    <div className="item__actions"> 
                        <div className="item__plus">
                            <button> <CartPlus /></button>
                        </div>
                        <div className="item__price">
                            <span className="item__price__one">1 x $ 30.00</span>
                            <span className="item__price__all">$ 90.00</span>
                        </div>
                        <div className="item__minus">
                            <button><CartMinus /></button>
                        </div>
                    </div>
                    
                    <button className='item__remove'>Удалить</button>
                </div>
            </div>
        </div>
    );
};

export default CartItems;