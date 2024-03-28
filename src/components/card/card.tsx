import styles from './card.module.css';
import { TCard } from '../../services/types';

export const Card = (props: {data: TCard}) => {
    let data = props.data;
    return (
        <div className={styles.general}>
            <div className={styles.image}>
                <img src={data.img} alt={data.title}/>
            </div>
            <div className={styles.info}>
                <div>{data.title}</div>
                <div className={styles.price}>
                    <div className={styles.currentPrice}>{data.price} &#8381;</div>
                    {data.previousPrice && <div className={styles.previousPrice}>{data.previousPrice} &#8381;</div>}
                </div>
                <div className={styles.rating}>
                    <svg width="25" height="23" viewBox="0 0 25 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.6268 17.6614L5.41618 22.0127L7.37647 13.892L0.960754 8.462L9.38215 7.79538L12.6268 0.0867615L15.8715 7.79538L24.2941 8.462L17.8771 13.892L19.8374 22.0127L12.6268 17.6614Z" fill="#FFCE7F"/>
                    </svg>
                    <span>{data.rate}</span>
                </div>
                <button className={styles.button}>Купить</button>
            </div>
        </div>
    )
}