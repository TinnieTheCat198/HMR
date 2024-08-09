import Footer from "../Components/Footer"
import HomeSlide1 from "../Components/HomeSlide1"
import Section from "../Components/Section"

import styles from './Home.module.css'

import logo from '../assets/logo.jpg'
import avatar from '../assets/avatar.svg'

const nums = [1,2,3,4,5];

const section1Cards = ['Bệnh điều trị', 'Tìm Bác Sĩ', 'Đặt hẹn khám bệnh', 'Hỏi đáp'];

const Home = ({appointment, setAppointment}) => {

    return (
        <div className={styles.main}>
            <HomeSlide1/>
            <Section title='Chăm Sóc Sức Khỏe Ngay Trong Tầm Tay'>
                <div className={styles.section1}>
                    <div><img src={logo}></img></div>
                    <div>
                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,</p>
                        <button onClick={()=>setAppointment(!appointment)}>
                            ĐẶT HẸN NGAY
                        </button>
                    </div>
                </div>
            </Section>
            <Section title='Giới thiệu'>
                <div className={styles.section2}>
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a,</p>
                    <div className={styles.cardContainer}>
                        {
                            nums.map((item) =>{ return (
                                <div className={styles.card}>
                                    <div className={styles.image}>
                                        <img src={avatar}/>
                                    </div>
                                    <h3><a>Title {item}</a></h3>
                                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo</p>
                                </div>
                            )})
                        }   
                    </div>
                </div>
            </Section>
        </div>
    )
}

export default Home