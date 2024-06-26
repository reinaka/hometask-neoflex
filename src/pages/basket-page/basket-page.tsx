import { BasketTotal } from '../../components/basket-total/basket-total';
import { BasketItem } from '../../components/basketItem/basketItem';
import { useAppSelector } from '../../services/hooks/reduxTypes';
import { selectBasket, selectTotalCost } from '../../services/selector-functions';
import styles from './basket-page.module.css';

export const BasketPage = () => {
    let totalSum = useAppSelector(selectTotalCost);
    let basketItems = useAppSelector(selectBasket);

    return (
        <>
            <h2 className={styles.heading}>Корзина</h2>

            {/* Список товаров в корзине */}
            <div className={styles.general}>
                {
                    basketItems.length ? (
                        // если товары есть
                        <ul className={styles.list}>
                            {basketItems.map(elem => {
                                return (
                                    <li key={elem.item.id}>
                                        <BasketItem item={elem.item} quantity={elem.quantity}/>
                                    </li>
                                    )
                                })
                            }
                        </ul>
                        )
                        // если товаров нет
                    : <div>Товаров нет</div>
                }

                {/* Блок с общей ценой заказа и кнопкой для перехода к оплате (отображается только в случае, если сумма > 0) */}
                {totalSum 
                    ? (<div className={styles.totalWrapper}>
                        <BasketTotal sum={totalSum} />
                    </div>)
                    : <></>
                }               
            </div>
        </>
    )
} 