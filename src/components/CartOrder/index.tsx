import React from 'react';

import "../CartOrder/index.scss";

const CartOrder: React.FC = () => {
    return (
        <div className='order'>
            <div className='order__container'>
                <div className="order__price">
                    <h5 className="order__price__title">Your order</h5>
                    <div className="order__price__sub">SUB-TOTAL <span className=""> 100$</span></div>
                    <div className="order__price__sidestep">SIDESTEP PICKUP <span className=""> 100$</span></div>
                    <div className="order__price__total">TOTAL <span className=""> 100$</span></div>
                </div>
                <div className="order__delivery">
                    <h5 className="order__delivery__title">Delivery method</h5>
                    <div className="order__delivery__method">
                        <span className="order__delivery__input">12/13/14 - jopa xui pizda</span>
                        <button className='order__delivery__btn'>Edit</button>
                    </div>
                    <div className="order__delivery__btns">
                        <button className='order__delivery__buy'>Check out (6 items)</button>
                        <a className='order__delivery__continue' href='/cotalog' >Continue shopping</a>
                    </div>
                    
                </div>
                
                
            </div>
        </div>
        
    );
};

export default CartOrder;