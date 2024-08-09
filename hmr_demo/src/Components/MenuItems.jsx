import { useState } from "react";
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';

import Dropdown from './Dropdown';
import './MenuItems.css'

const MenuItems = ({ items }) => {
  const [dropdown, setDropdown] = useState(false);


  return (
    <li className="menu-items main-items">
      {items.submenu ? (
        <>
          <HashLink to={items.url}>{items.title}</HashLink>
          <Dropdown submenus={items.submenu} dropdown={dropdown}/>
        </>
      ) : (
        <Link to={items.url}>{items.title}</Link>
      )}
    </li>
  );
};

export default MenuItems;