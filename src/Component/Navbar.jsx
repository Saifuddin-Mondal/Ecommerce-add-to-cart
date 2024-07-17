import React from 'react'
import{Link} from "react-router-dom"
import '../Styles/Navbar.css'

const Navbar = () => {
  return (
    <div className='navbar-link'>
      <Link className='navbar-link-all' to="/">Home</Link>
      <Link className='navbar-link-all' to="/cart-show">Cart</Link>
    </div>
  )
}

export default Navbar
