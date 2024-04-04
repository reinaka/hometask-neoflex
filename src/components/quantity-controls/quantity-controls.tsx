import { DECREASE_BASKET_QUANTITY, INCREASE_BASKET_QUANTITY, REMOVE_FROM_BASKET } from '../../services/actions/action-types-basket';
import { useAppDispatch } from '../../services/hooks/reduxTypes';
import styles from './quantity-controls.module.css';

type TProps = {
    quantity : number,
    id : string,
    price: number
}

// Кнопки "+" и "-" для изменения количества товаров в корзине
export const QuantityControls = (props : TProps) => {
    const dispatch = useAppDispatch();

    // хэндлер для увеличения кол-ва
    const increaseQuantity = () => {
        dispatch({type : INCREASE_BASKET_QUANTITY, payload: {id: props.id, price: props.price}})
    }

    // хэндлер для уменьшения кол-ва
    const decreaseQuantity = () => {
        if (props.quantity > 1) {
            dispatch({type : DECREASE_BASKET_QUANTITY, payload: {id: props.id, price: props.price}})
        } else if (props.quantity === 1) {
            dispatch({type: REMOVE_FROM_BASKET, payload: {id: props.id, price: props.price, quantity: props.quantity}})
        }
        
    }

    return (
        <div className={styles.general}>
            <button className={styles.button} onClick={() => decreaseQuantity()}>
                <svg width="14" height="2" viewBox="0 0 14 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 0H14V2H0V0Z" fill="white"/>
                </svg>
            </button>
            <div>{props.quantity}</div>
            <button className={styles.button} onClick={() => increaseQuantity()}>
                <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.20557 6V0H8.20557V6H14.2056V8H8.20557V14H6.20557V8H0.205566V6H6.20557Z" fill="white"/>
                </svg>
            </button>
        </div>
    )
}