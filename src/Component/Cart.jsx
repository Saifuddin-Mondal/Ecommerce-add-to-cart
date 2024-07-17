import React from 'react'
import { Cartdata } from '../Data/cartData'
import { FaCartPlus } from "react-icons/fa";
import '../Styles/Cart.css'
import Navbar from "./Navbar"
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/Cart-System';

const Cart = () => {
    const Dispatch=useDispatch();
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
            <h2>All Product</h2>
            <div className='cart-container'>
                {
                    Cartdata.map((item, id) => (
                        <div className='cart-item' key={id}>
                            <h4>{item.title}</h4>
                            <img src={item.image} alt={`${item.title}`} width="163px" height="231px" />
                            <p>{TurncateText(item.description, 15)}</p>
                            <p className='rupees'>${item.price}</p>
                            <button onClick={()=>Dispatch(addToCart(item))} type='submit'>Add to Cart<FaCartPlus className='icon-add' /></button>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Cart
