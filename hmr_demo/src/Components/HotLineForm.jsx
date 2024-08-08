import styles from "./HotLineForm.module.css"

const HotLineForm = () => {
    const branches = [
        {
            title: "Cơ sở 1",
            address: "82 đường số 19 Khu đô thị Phú Mỹ Hưng, Quận 7, TP.HCM",
            hotline: " 089 810 8585",
        },
        {
            title: "Cơ sở 2",
            address: "300 Nguyễn Văn Cừ Nối Dài, Quận Ninh Kiều, Cần Thơ (BVQT Phương Châu)",
            hotline: " 088 609 8585",
        }
    ];
    return (
        <div className={styles.container}>
            <h2>LIÊN HỆ HOTLINE</h2>
            {branches.map( (branch) => {
                return(
                <h3>
                    {branch.title}:   
                    <span className={styles.phoneNumber}>{branch.hotline}</span>
                </h3>)
            } )}
        </div>
    )
}

export default HotLineForm