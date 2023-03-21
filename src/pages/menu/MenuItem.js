import React from 'react';

export const MenuItem = (props) => {
  const {id, name, image, price }= props.data;
  return (
<div className='menuItem'>
<div style={{ backgroundImage: `url(${image})`}}></div>
  <h1>{name}</h1>
  <p>{price}rsd</p>
  <button className="addToCartBttn">Add to Cart</button>

</div>

  );
};

