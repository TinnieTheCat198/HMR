import './Dropdown.css'

const Dropdown = ({ submenus , dropdown}) => {
    return (
      <ul className={`${dropdown ? "show" : ""} dropdown`}>
        {submenus.map((submenu, index) => (
          <li key={index} className="menu-items">
            <a href={submenu.url}>{submenu.title}</a>
          </li>
        ))}
      </ul>
    );
  };
  
  export default Dropdown;