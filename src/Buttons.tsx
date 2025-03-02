import styles from './Buttons.module.css'
export default function Buttons({setOnlyAvailable, onlyAvailable}: {setOnlyAvailable: any, onlyAvailable: boolean}){
    return (
    <div className={styles.buttonContainer}>
        <button className={`${styles.button} ${onlyAvailable ? "" : styles.active}` } onClick={()=>setOnlyAvailable(false)}>All Products</button>
        <button className={`${styles.button} ${onlyAvailable ? styles.active : ""}`} onClick={()=>setOnlyAvailable(true)}>Available Now</button>
    </div>
    )
}