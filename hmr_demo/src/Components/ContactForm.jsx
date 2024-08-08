import { useState } from "react"
import styles from "./ContactForm.module.css"

const BRANCH = ["Chọn cơ sở","Cơ sở 1", "Cơ sở 2"]

const ContactForm = () => {
    const [branch, setBranch] = useState("");
    const [name, setName] = useState("");
    const [phoneNum, setPhoneNum] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    return (
        <div className={styles.container}>
            <form>
                <div className="col-50">
                    <select onChange={(e) => setBranch(e.target.value)}>
                    {BRANCH.map( (b,index) => 
                        {return (
                        <option value={index}>{b}</option>
                    )})}
                    </select>
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
                    <input
                        type="text"
                        value={email}
                        placeholder="Địa chỉ Email (nếu có)"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="col-50">
                    <textarea type="text" row="33" placeholder="Nội dung (nếu có)"
                        onChange={(e) => setMessage(e.target.value)}
                    ></textarea>
                </div>
                <input type="submit" value="Gửi thông tin" />
        </form>
        </div>
    )
}

export default ContactForm