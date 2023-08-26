import styles from './style.module.css'
import DoorModel from '../../model/door'

interface PortaProps {
    door: DoorModel
}

export default function Door(props: PortaProps){

    const { door } = props 
    const selected = door.isSelected ? styles.selected : ''
    
    return(
        <div className={styles.area}>
            <div className={`${styles.frame} ${selected}`}>
                <div className={styles.door}>
                    <div className={styles.number}>{door.number}</div>
                    <div className={styles.knob}></div>
                </div>
            </div>
            <div className={styles.floor}></div>
        </div>
        
    )
}