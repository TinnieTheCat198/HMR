import logo from "../assets/logo.jpg"
import location_icon from "../assets/location-on.svg"
import styles from "./Footer.module.css"

const Footer = () => {
    
    const branches = [
        {
            id: "branch1",
            address: "82 đường số 19 Khu đô thị Phú Mỹ Hưng, Quận 7, TP.HCM",
            hotline: "089 810 8585"
        },
        {
            id: "branch2",
            address: "300 Nguyễn Văn Cừ Nối Dài, Quận Ninh Kiều, Cần Thơ (BVQT Phương Châu)",
            hotline: "088 609 8585"
        }
    ];

    return (
        <div className={styles.footer}>
            <div className={styles.logoContainer}>
                <img className={styles.logo} src={logo} alt="hmr-logo"></img>  
            </div>
            <div className={styles.branchBox}>
                <h3>Trung Tâm HMR Phục Hồi Chức Năng & Hình Thể Chuẩn Mỹ</h3>
                <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />
                {
                branches.map( (branch, index) => {
                    return (
                        <div className={styles.branch}> 
                            <h4>
                            <img src={location_icon}/>
                            Cơ sở {index+1}
                            </h4>
                            <p>{branch.address}</p>
                            <p>Hotline: {branch.hotline}</p>
                        </div>
                    )
                })
            }
            </div>
        </div>
    )
}

export default Footer