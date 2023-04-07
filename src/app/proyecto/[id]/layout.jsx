import styles from '../page.module.css'

export default function postLayout({children}) {
    return(
        <div className={styles.postlayout} >
        <h1>postLayout</h1>
        {children}
        </div>
    )
}