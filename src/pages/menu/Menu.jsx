import React from 'react';
import { MenuList } from "../../MenuList";
import {MenuItem} from './MenuItem';
import "../../styles/Menu.css";

export const Menu = () => {
 
return (
  <div className="menu">
    <div className="menuTitle">
      <h1>Our Menu</h1>
      </div>
    <div className="menuList">
      {" "}
      {MenuList.map((menuItem) => (
         <MenuItem data={menuItem} />
         ))}
</div>
</div>
);
};
