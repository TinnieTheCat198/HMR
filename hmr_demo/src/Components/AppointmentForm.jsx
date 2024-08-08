import { useState } from "react";
import axios from 'axios'
import DatePicker from "react-datepicker";

import styles from "./AppointmentForm.module.css"
import "react-datepicker/dist/react-datepicker.css";

import appointment_img from "../assets/appointment-form.png"

const BRANCH = ["Chọn cơ sở","Cơ sở 1", "Cơ sở 2"]

const AppointmentForm = () => {
    const [branch, setBranch] = useState("");
    const [name, setName] = useState("");
    const [phoneNum, setPhoneNum] = useState("");
    const [date, setDate] = useState(false);

    const formatDateToString = (date) => {
        const day = date.getDate().toString().padStart(2, '0');
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const year = date.getFullYear();
        return `${day}/${month}/${year}`;
    };

    function alertMessage(mess) {
        alert(mess);
    }

    function checkInput(...props){

    }

    function submitForm(e){
        e.preventDefault();
        const appointmentForm = {
            Branch: branch,
            Date: formatDateToString(date),
            Name: name,
            Phone: "'" + phoneNum
        }
        setBranch("");
        setDate(false);
        setName("");
        setPhoneNum("");
        console.log(appointmentForm);
        axios.post('https://sheet.best/api/sheets/dd30655c-e83a-4a22-80dc-e69c849ea3d1', appointmentForm).then(response=>{
            console.log(response)
        })
    }
    
    return (
        <div className={styles.container}>
            <div className={styles.titleContainer}>
                <div className="col-50">
                    <h2>ĐẶT HẸN KHÁM</h2>
                    <p>Vui lòng để lại thông tin đầy đủ theo mẫu bên dưới, 
                    HMR sẽ liên hệ hỗ trợ bạn trong thời gian sớm nhất.</p>
                </div>
                <img src={appointment_img}/>
            </div>
            <form className="form" onSubmit={(e)=>submitForm(e)}>
                    <select name="Branch" value={branch} onChange={(e) => e.target.value == "Chọn cơ sở"? setBranch("") : setBranch(e.target.value)}>
                        {BRANCH.map( (b,index) => 
                            {return (
                            <option value={index}>{b}</option>
                        )})}
                    </select>
                    <DatePicker 
                        dateFormat='dd/MM/yyyy'
                        placeholderText="Chọn ngày đặt hẹn"
                        selected={date} 
                        onChange={(date) => setDate(date)} 
                        name="AppointmentDate"
                    />
                    <input
                        type="text"
                        name="Name"
                        value={name}
                        placeholder="Họ Tên"
                        onChange={(e) => setName(e.target.value)}
                    />
                    <input
                        type="text"
                        name="PhoneNumber"
                        value={phoneNum}
                        placeholder="Số điện thoại"
                        onChange={(e) => setPhoneNum(e.target.value)}
                    />
                    <input type="submit" value="Đặt hẹn" />
            </form>
            
        </div>
    )
}

export default AppointmentForm