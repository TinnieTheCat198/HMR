import styles from './Section.module.css'

const Section = ({id,title,children}) => {
    return (
        <div id={id} className={styles.container}>
            {title && <h2>{title}</h2>}
            {children}
        </div>
    )
}

export default Section