import React, {useContext} from 'react';
import {MenuContext} from '../../context/menu-context';

export const MenuItem = (props) => {
  const {id, name, image, price }= props.data;
  const {addToCart, cartItems} = useContext(MenuContext);

  const cartItemAmount = cartItems[id];
  return (
<div className='menuItem'>
<div style={{ backgroundImage: `url(${image})`}}></div>
  <h1>{name}</h1>
  <p>{price}rsd</p>
  <button className="addToCartBttn" onClick ={() => addToCart(id)}>
  Add to Cart {cartItemAmount > 0 && <> ({cartItemAmount}) </>}
  </button>
</div>


  );
};

