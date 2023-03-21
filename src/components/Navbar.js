import React from 'react';
import Logo from '../assets/pizzaLogo.png';
import {Link} from 'react-router-dom';
import { ShoppingCart } from '@mui/icons-material';
import '../styles/Navbar.css';
function Navbar() {
  return (
    <div className='navbar'> 
        <div className='leftSide'>
            <img src={Logo} />
            </div>    
        <div className='rightSide'>
            <Link to="/">Home</Link>
            <Link to="/menu">Menu</Link>
            <Link to="/about">About</Link>
            <Link to="/cart">
              <ShoppingCart size={32}/>
            </Link>

        </div>
    </div>
  )
}

export default Navbar;