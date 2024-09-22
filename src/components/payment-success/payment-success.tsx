import { NavLink } from "react-router-dom";
import styles from './payment-success.module.css';

export const PaymentSuccess = () => {
    return (
        <div className={styles.wrapper}>
            <svg width="48" height="48" viewBox="0 0 48 48">
                <path fill="#c8e6c9" d="M44,24c0,11.045-8.955,20-20,20S4,35.045,4,24S12.955,4,24,4S44,12.955,44,24z"></path>
                <path fill="#4caf50" d="M34.586,14.586l-13.57,13.586l-5.602-5.586l-2.828,2.828l8.434,8.414l16.395-16.414L34.586,14.586z"></path>
            </svg>
            <h2 className={styles.text}>Оплата прошла успешно</h2>
            <p className={styles.text}>Спасибо за ваш заказ, мы уже начали его собирать и скоро доставим</p>
            <NavLink to="/" className={styles.link}>Продолжить покупки</NavLink>
        </div>
    )
}