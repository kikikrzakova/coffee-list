
import { CoffeeObject } from "./Container";
import styles from './Coffee.module.css'

type PropsType = {
    coffee: CoffeeObject,
 };


export default function Coffee({coffee}: PropsType){

    return (
        <div className={styles.pictureContainer}>
            <img src={coffee.image} className={styles.coffeePicture}></img>
            <div className={styles.namePrice}>
                {coffee.name}
                <button className={styles.priceButton}>
                {coffee.price}
                </button>
            </div>
            <div className={styles.ratingAvailability}>
                {coffee.rating ?  
                    <div className={styles.ratingPart}>
                        <img src="resources/Star_fill.svg" alt="star" />
                        <span className={styles.rating}>{coffee.rating} </span>
                        <span className={styles.votes}>({coffee.votes} votes)</span>
                    </div> : 
                    <div className={styles.ratingPart}>
                    <img src="resources/Star.svg" alt="star" className={styles.picture}/>
                    <span className={styles.votes}>No ratings</span>
                </div>}
                    <span className={styles.soldout}>
                        {coffee.available ? "" : "Sold out"}
                    </span>
            </div>
        </div>
    )

}