import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Introduction from "./pages/Introduction";
import Sickness from "./pages/Sickness";
import CureMethods from "./pages/CureMethods";
import DoctorAdvice from "./pages/DoctorAdvice";
import Contact from "./pages/Contact";
import Layout from "./pages/Layout";
import NoPage from "./pages/NoPage";

const App = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Layout />}>
            <Route index element={<Home />}/>
            <Route path="gioi-thieu" element={<Introduction/>}/>
            <Route path="benh-dieu-tri" element={<Sickness />} />
            <Route path="phuong-phap-dieu-tri" element={<CureMethods/>} />
            <Route path="bac-si-khuyen-dung" element={<DoctorAdvice/>} />
            <Route path="lien-he" element={<Contact/>} />
            <Route path="*" element={<NoPage />} />
            </Route>
        </Routes>
    </BrowserRouter>
);
}

export default App
