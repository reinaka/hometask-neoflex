import styles from './payment-form.module.css';

export const PaymentFormError = ({ children } : { children : React.ReactNode}) => (
    <div className={styles.errorMessage}>{children}</div>
);