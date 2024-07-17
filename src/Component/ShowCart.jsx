import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux';
import { removeFromCart } from '../redux/Cart-System';
import Navbar from './Navbar';
import '../Styles/showCart.css'

const ShowCart = () => {
    const Dispatch = useDispatch();
    const { cart, totalItem, total } = useSelector((item) => item.cart);
    const TurncateText = (text, wordLimit) => {
        const word = text.split(" ");
        if (word.length > wordLimit) {
            return word.slice(0, wordLimit).join(" ") + "...";
        }
        return text;
    }
    return (
        <div className='cart-wrapper'>
            <div className='cart-section'>
                <Navbar />
            </div>
            <div className='totalItem-total'>
                <div className='total-item-p'>
                    <p>Total Item : {totalItem}</p>
                    <p>Total Price : {total}</p>
                </div>
            </div>
            <div className='cart-container'>
                {
                    cart.map((item, id) => (
                        <div className='cart-item' key={id}>
                            <h4>{item.title}</h4>
                            <img src={item.image} alt={`${item.title}`} width="163px" height="231px" />
                            <p>{TurncateText(item.description, 15)}</p>
                            <p className='rupees'>${item.price}</p>
                            <button onClick={() => Dispatch(removeFromCart(item))} type='submit'>Remove from Cart</button>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default ShowCart
