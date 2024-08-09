import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import logo from '../assets/logo.jpg'
import './Header.css'

const Header = () => {
  return (
    <header>
      <div className="nav-area">
        <Link to="/" className="logo">
          <img src={logo}/>
        </Link>
        <Navbar />
      </div>
    </header>
  );
};

export default Header;