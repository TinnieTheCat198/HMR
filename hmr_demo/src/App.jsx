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

import FloatingContact from './Components/FloatingContact';
import Modal from './Components/Modal';
import AppointmentForm from './Components/AppointmentForm';
import HotLineForm from './Components/HotLineForm';

import appointment_icon from './assets/appointment.svg'
import phone_icon from './assets/phone.svg'
import { useState } from 'react';

const App = () => {
    const [appointment,setAppointment] = useState(false);
    const [contact,setContactt] = useState(false);
  return (
    <>
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Layout />}>
            <Route index element={<Home appointment={appointment} setAppointment={setAppointment}/>}/>
            <Route path="gioi-thieu" element={<Introduction/>}/>
            <Route path="benh-dieu-tri" element={<Sickness />} />
            <Route path="phuong-phap-dieu-tri" element={<CureMethods/>} />
            <Route path="bac-si-khuyen-dung" element={<DoctorAdvice/>} />
            <Route path="lien-he" element={<Contact/>} />
            <Route path="*" element={<NoPage />} />
            </Route>
        </Routes>
        </BrowserRouter>
        <div className='floating-contact-container'>
            <Modal modal={contact} setModal={setContactt} children1={<HotLineForm/>}>
                <FloatingContact
                    id="phone" 
                    icon={phone_icon}
                />
            </Modal>

            <Modal modal={appointment} setModal={setAppointment} title="ĐẶT HẸN" id="appointment-title" children1={<AppointmentForm/>}>
            <FloatingContact 
                id="appointment" 
                icon={appointment_icon}
                
            />
            </Modal>
            
            
        </div>
    </>
    
);
}

export default App
