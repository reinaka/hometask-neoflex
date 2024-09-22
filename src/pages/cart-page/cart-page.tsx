import { CartTotal } from '../../components/cart-total/cart-total';
import { CartItem } from '../../components/cart-item/cart-item';
import { useAppSelector } from '../../services/hooks/reduxTypes';
import { selectCart, selectTotalCost } from '../../services/selector-functions';
import styles from './cart-page.module.css';

export const CartPage = () => {
    let totalSum = useAppSelector(selectTotalCost);
    let cartItems = useAppSelector(selectCart);

    return (
        <>
            <h2 className={styles.heading}>Корзина</h2>

            {/* Список товаров в корзине */}
            <div className={styles.general}>
                {
                    cartItems.length ? (
                        // если товары есть
                        <ul className={styles.list}>
                            {cartItems.map(elem => {
                                return (
                                    <li key={elem.item.id}>
                                        <CartItem item={elem.item} quantity={elem.quantity}/>
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
                        <CartTotal sum={totalSum} />
                    </div>)
                    : <></>
                }               
            </div>
        </>
    )
} 