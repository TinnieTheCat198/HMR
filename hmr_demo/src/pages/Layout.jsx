import { Outlet, Link } from "react-router-dom";
import layout from "./layout.module.css"
import logo from "../assets/logo.jpg"

const Layout = () => {
  return (
    <>
      <nav className={layout.navbar}>
        <img id={layout.logoHeader} src={logo} alt="logo"></img>
        <ul className={layout.navLinks}>
          <li>
            <Link to="/">Trang chủ</Link>
          </li>
          <li>
            <Link to="/gioi-thieu">Giới thiệu</Link>
          </li>
          <li>
            <Link to="/benh-dieu-tri">Bệnh điều trị</Link>
          </li>
          <li>
            <Link to="/phuong-phap-dieu-tri">Phương pháp điều trị</Link>
          </li>
          <li>
            <Link to="/bac-si-khuyen-dung">Bác sĩ khuyên dùng</Link>
          </li>
          <li>
            <Link to="/lien-he">Liên hệ</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;