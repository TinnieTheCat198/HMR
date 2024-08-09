import { menuItemsData } from '../menuItemsData';
import MenuItems from './MenuItems';
import './Navbar.css'

const Navbar = () => {
  return (
    <nav className="desktop-nav">
      <ul className="menus">
        {menuItemsData.map((menu, index) => {
          return (
            <MenuItems items={menu} key={index} />
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;