import React, { createContext, useState } from 'react';
import { MenuList } from "../MenuList";

export const MenuContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for(let i = 1; i < MenuList.length; i++){
    cart[i] = 0;
  }
  return cart;
};

export const MenuContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());

  const addToCart = (itemId) => {
    setCartItems((prev) => ({...prev,[itemId]:prev[itemId] +1 }));
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({...prev,[itemId]:prev[itemId] -1 }));
  };

  const contextValue = {cartItems, addToCart, removeFromCart};

  console.log(cartItems);
  return  (
  <MenuContext.Provider value={contextValue}>
    {props.children}
    </MenuContext.Provider> 
  );
};


