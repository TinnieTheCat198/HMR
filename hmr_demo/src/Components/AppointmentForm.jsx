import { useState } from "react";
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
            <form>
                    <select onChange={(e) => setBranch(e.target.value)}>
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
                    />
                    <input
                        type="text"
                        value={name}
                        placeholder="Họ Tên"
                        onChange={(e) => setName(e.target.value)}
                    />
                    <input
                        type="text"
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