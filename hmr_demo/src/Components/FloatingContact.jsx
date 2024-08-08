import styles from "./FloatingContact.module.css"

const FloatingContact = ({id, icon, url, title}) => {
    return (
        <div className={styles.container}>
            <div className={styles.circleIcon}>
                <a href={url} target="_blank">
                    <img id={id} src={icon}></img>
                </a>
            </div>
            {
                title && 
                <div className={styles.title}>
                    {title}
                </div>
            }
        </div>
    )
}

export default FloatingContact