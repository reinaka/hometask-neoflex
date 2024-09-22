import styles from './cart-total.module.css';
import { NavLink } from 'react-router-dom';

type TProps = {
    sum : number
}

export const CartTotal = (props : TProps) => {
    return (
        <div className={styles.general}>
            <div className={styles.text}>
                <p className={styles.totalSum_text}>Итого</p>
                <div className={styles.totalSum_num}>{props.sum} &#8381;</div>
            </div>
            <NavLink to="/payment">
                <button className={styles.button}>
                    Перейти к оформлению
                </button>
            </NavLink>
        </div>
    )
}