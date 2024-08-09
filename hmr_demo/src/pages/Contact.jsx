import { useState } from "react"

import Footer from "../Components/Footer"
import ContactForm from "../Components/ContactForm"
import image1 from "../assets/contact-landing.jpg"
import branch1 from "../assets/branch1.jpg"
import branch2 from "../assets/branch2.jpg"
import styles from "./Contact.module.css"

const branches = [
    {
        title: "Cơ sở 1",
        address: "82 đường số 19 Khu đô thị Phú Mỹ Hưng, Quận 7, TP.HCM",
        hotline: "089 810 8585",
        map: branch1,
        url: "https://maps.app.goo.gl/rsXPkiFDsHN4u4dM6" 
    },
    {
        title: "Cơ sở 2",
        address: "300 Nguyễn Văn Cừ Nối Dài, Quận Ninh Kiều, Cần Thơ (BVQT Phương Châu)",
        hotline: "088 609 8585",
        map: branch2,
        url: "https://maps.app.goo.gl/ARa6HKfyBVPUsYYr5" 
    }
];

function Collapsible({ title, children, isOpen, onClick  }) {
  
    return (
      <>
        <button 
          className={`${styles.collapsible} ${isOpen ? styles.active : ''}`} 
          onClick={onClick}
        >
          {title}
        </button>
        <div className={styles.content} style={{ display: isOpen ? 'block' : 'none' }}>
          {children}
        </div>
      </>
    );
  }

const MyMap = () => {
    const [openSection, setOpenSection] = useState(0);
    const [branchMap, setBranchMap] = useState(branch1);
    const [linkMap, setLinkMap] = useState(branches[0].url)

    const handleCollapsibleClick = (index) => {
        setOpenSection(openSection === index ? 0 : index);
    };

    return (
        <div className={styles.mapContainer}>
            <div className={styles.branchContainer}>
                {
                    branches.map((item,index) => (
                        <Collapsible
                            key={index}
                            title={item.title}
                            isOpen={openSection===index}
                            onClick={() => {handleCollapsibleClick(index); setBranchMap(item.map)
                                ; setLinkMap(item.url) 
                            }}
                        >
                            <p>{item.address}</p>
                            <p>Hotline: {item.hotline}</p>
                        </Collapsible>
                    ))
                }
            </div>
            <a href={linkMap} target="_blank">
                <img className={styles.map} src={branchMap}></img></a>
        </div>
    )
}

const Contact = () => {
    return (
        <div className={styles.body}>
            <img 
                src={image1}
                className={styles.image1}
            />
            <div className={styles.title}>Liên hệ với phòng khám HMR</div>
            <p>Vui lòng để lại thông tin đầy đủ theo mẫu bên dưới<br/>
                HMR sẽ liên hệ hỗ trợ bạn trong thời gian sớm nhất</p>
            <ContactForm/>
            <MyMap/>
        </div>
        
    )
}

export default Contact