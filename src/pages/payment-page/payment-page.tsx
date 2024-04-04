import styles from './payment-page.module.css';
import { PaymentForm } from '../../components/payment-form/payment-form';

export const PaymentPage = () => {
    return (
        <div className={styles.general}>
            <div className={styles.wrapper}>
                <h2 className={styles.heading}>Введите данные карты</h2>
                <PaymentForm />
            </div>
        </div>
    )
}