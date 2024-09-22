import styles from './payment-page.module.css';
import { PaymentForm } from '../../components/payment-form/payment-form';
import { useState } from 'react';
import { PaymentSuccess } from '../../components/payment-success/payment-success';

export const PaymentPage = () => {
    const [isPayment, setIsPayment] = useState(false);

    return (
        <div className={styles.general}>
            <div className={styles.wrapper}>
                { !isPayment ? (
                    <>
                        <h2 className={styles.heading}>Введите данные карты</h2>
                        <PaymentForm setIsPayment={setIsPayment} />
                    </>
                ) : (
                    <PaymentSuccess />
                )}
            </div>
        </div>
    )
}