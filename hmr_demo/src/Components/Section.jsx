import styles from './Section.module.css'

const Section = ({title,children}) => {
    return (
        <div className={styles.container}>
            {title && <h2>{title}</h2>}
            {children}
        </div>
    )
}

export default Section