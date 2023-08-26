import styles from '@/components/Gift/style.module.css'

export default function Gift(){
    return(
        <div className={styles.gift}>
            <div className={styles.cover}></div>
            <div className={styles.box}></div>
            <div className={styles.ribbon1}></div>
            <div className={styles.ribbon2}></div>
        </div>
    )
}