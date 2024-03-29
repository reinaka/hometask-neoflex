import { BasketTotal } from '../../components/basket-total/basket-total';
import { BasketItem } from '../../components/basketItem/basketItem';
import styles from './basket-page.module.css';

export const BasketPage = () => {
    return (
        <>
            <h2 className={styles.heading}>Корзина</h2>
            <div className={styles.general}>
                <BasketItem />
                <BasketTotal sum={456} />
            </div>
        </>
    )
} 