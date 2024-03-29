import styles from './basket-total.module.css';

type TProps = {
    sum : number
}

export const BasketTotal = (props : TProps) => {
    return (
        <div className={styles.general}>
            <div className={styles.text}>
                <p className={styles.totalSum_text}>Итого</p>
                <div className={styles.totalSum_num}>{props.sum} &#8381;</div>
            </div>
            <button className={styles.button}>Перейти к оформлению</button>
        </div>
    )
}