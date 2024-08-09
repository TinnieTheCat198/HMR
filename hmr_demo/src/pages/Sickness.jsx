import { Link, Outlet } from "react-router-dom"
import Footer from "../Components/Footer"
import Section from "../Components/Section"

import styles from './Sickness.module.css'

const Sickness = () => {
    return (
        <div>
            <h1>Bệnh điều trị</h1>
            <Section id="co-xuong-khop" title="PHỤC HỒI CHỨC NĂNG - VLTL - HIỆU CHỈNH CƠ XƯƠNG KHỚP">
                <div className={styles.container}>
                    <div className={styles.col50}>
                        <ul>
                            <li><Link to="dau-vai-gay">Đau căng mỏi cổ vai gáy, cánh tay</Link></li>
                            <li><a>Đau thắt lưng, thoát vĩ đĩa đệm</a></li>    
                            <li><a>Đau thoái hóa cột sống, loãng xương</a></li>
                            <li><a>Đau khớp: cổ chân, gối, khủy, háng</a></li>    
                            <li><a>Đăng căng cơ, viêm thần kinh tọa</a></li>
                        </ul>
                    </div>
                    <div className={styles.col50}>
                        <ul>
                            <li>
                                <a>Gù vẹo cột sống, bàn chân bẹt</a>
                            </li>
                            <li>
                                <a>Thoái hóa khớp, tiêm các khớp</a>
                            </li>
                            <li><a>Các lệch vẹo vóc dáng hình thể</a></li>
                            <li><a>Dáng đi bất thường, tư thế xấu</a></li>    
                            <li><a>Tái lặp cân bằng hệ cơ cho người chơi thể thao</a></li>
                            
                        </ul>
                    </div>
                </div>
            </Section>
            <Section id="san-phu-nam-khoa" title="PHỤC HỒI CHỨC NĂNG SẢN PHỤ KHOA - NAM KHOA">
                <div className={styles.container}>
                    <div className={styles.col50}>
                        <ul>
                            <li><a>Lorem ipsum dolor sit amet, consectetuer</a></li>
                            <li><a>Lorem ipsum dolor sit amet, consectetuer</a></li>
                            <li><a>Lorem ipsum dolor sit amet, consectetuer</a></li>
                            <li><a>Lorem ipsum dolor sit amet, consectetuer</a></li>
                            <li><a>Lorem ipsum dolor sit amet, consectetuer</a></li>
                            <li><a>Lorem ipsum dolor sit amet, consectetuer</a></li>
                            <li><a>Lorem ipsum dolor sit amet, consectetuer</a></li>
                            <li><a>Lorem ipsum dolor sit amet, consectetuer</a></li>
                        </ul>
                    </div>
                    <div className={styles.col50}>
                        <ul>
                        <li><a>Lorem ipsum dolor sit amet, consectetuer</a></li>
                            <li><a>Lorem ipsum dolor sit amet, consectetuer</a></li>
                            <li><a>Lorem ipsum dolor sit amet, consectetuer</a></li>
                            <li><a>Lorem ipsum dolor sit amet, consectetuer</a></li>
                            <li><a>Lorem ipsum dolor sit amet, consectetuer</a></li>
                            <li><a>Lorem ipsum dolor sit amet, consectetuer</a></li>
                            <li><a>Lorem ipsum dolor sit amet, consectetuer</a></li>
                            <li><a>Lorem ipsum dolor sit amet, consectetuer</a></li>
                        </ul>
                    </div>
                </div>
            </Section>
            <Section id="nhi-khoa-khac-dot-quy" title="PHỤC HỒI CHỨC NĂNG NHI KHOA - KHOA KHÁC - ĐỘT QUỴ">
                <div className={styles.container}>
                    <div className={styles.col50}>
                        <ul>
                            <li><a>Lorem ipsum dolor sit amet, consectetuer</a></li>
                            <li><a>Lorem ipsum dolor sit amet, consectetuer</a></li>
                            <li><a>Lorem ipsum dolor sit amet, consectetuer</a></li>
                            <li><a>Lorem ipsum dolor sit amet, consectetuer</a></li>
                            <li><a>Lorem ipsum dolor sit amet, consectetuer</a></li>
                            <li><a>Lorem ipsum dolor sit amet, consectetuer</a></li>
                        </ul>
                    </div>
                    <div className={styles.col50}>
                        <ul>
                        <li><a>Lorem ipsum dolor sit amet, consectetuer</a></li>
                            <li><a>Lorem ipsum dolor sit amet, consectetuer</a></li>
                            <li><a>Lorem ipsum dolor sit amet, consectetuer</a></li>
                            <li><a>Lorem ipsum dolor sit amet, consectetuer</a></li>
                            <li><a>Lorem ipsum dolor sit amet, consectetuer</a></li>
                            <li><a>Lorem ipsum dolor sit amet, consectetuer</a></li>
                        </ul>
                    </div>
                </div>
            </Section>
        </div>
        
    )
}

export default Sickness