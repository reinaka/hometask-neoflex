import styles from './cart.module.css';
import { TItem } from '../../services/types';
import { useCallback } from 'react';
import { useAppDispatch } from '../../services/hooks/reduxTypes';
import { switchedFavourite } from '../../services/slices/all-items-slice';
import { addedToCart } from '../../services/slices/cart-slice';
import { addedItemDetails } from '../../services/slices/current-item-slice';
import { toast } from 'sonner';

type TProps = {
    data: TItem,
}

export const Cart = (props: TProps) => {
    let data = props.data;

    const dispatch = useAppDispatch();

    // хэндлер добавления в корзину
    const addToCart = useCallback((item : TItem) => {
        dispatch(addedToCart(item));
        toast(`Товар ${item.title} добавлен в корзину`);
    }, [dispatch]);

    // хэндлер выбора товара для просмотра деталей
    const openItemDetails = useCallback((item : TItem) => {
        dispatch(addedItemDetails(item))
    }, [dispatch]);

    // хэндлер добавления товара в избранное/удаления из избранного
    const switchFavorite = useCallback((item : TItem) => {
        dispatch(switchedFavourite(item.id))
    }, [dispatch]);

    return (
        <div className={styles.general}>
            {/* иконка для просмотра информации о товаре и иконка для избранного */}
            <div className={styles.likeAndInfo}>
                {/* иконка информации */}
                <svg x="0px" y="0px" width="30" height="30" viewBox="0,0,256,256" onClick={() => {openItemDetails(data)}}>
                    <g fill="#838383" stroke="none"><g transform="scale(8,8)"><path d="M16,3c-7.16797,0 -13,5.83203 -13,13c0,7.16797 5.83203,13 13,13c7.16797,0 13,-5.83203 13,-13c0,-7.16797 -5.83203,-13 -13,-13zM16,5c6.08594,0 11,4.91406 11,11c0,6.08594 -4.91406,11 -11,11c-6.08594,0 -11,-4.91406 -11,-11c0,-6.08594 4.91406,-11 11,-11zM15,10v2h2v-2zM15,14v8h2v-8z"></path></g></g>
                </svg>
                {/* иконка избранного */}
                <svg height="28" version="1.1" width="28" onClick={() => {switchFavorite(data)}}>
                    <g transform="translate(0 -1028.4)">
                        <path d="m7 1031.4c-1.5355 0-3.0784 0.5-4.25 1.7-2.3431 2.4-2.2788 6.1 0 8.5l9.25 9.8 9.25-9.8c2.279-2.4 2.343-6.1 0-8.5-2.343-2.3-6.157-2.3-8.5 0l-0.75 0.8-0.75-0.8c-1.172-1.2-2.7145-1.7-4.25-1.7z"
                        fill={data.favorite ? '#ef0833' : "#838383"}/>
                    </g>
                </svg>
            </div>

            {/* картинка товара */}
            <div className={styles.image} onClick={() => {openItemDetails(data)}}>
                <img src={data.img} alt={data.title}/>
            </div>

            {/* весь блок ниже картинки */}
            <div className={styles.info}>
                <div>{data.title}</div>
                <div className={styles.price}>
                    <div className={styles.currentPrice}>{data.price} &#8381;</div>
                    {/* если есть скидка */}
                    {data.previousPrice && <div className={styles.previousPrice}>{data.previousPrice} &#8381;</div>}
                </div>
                {/* рейтинг */}
                <div className={styles.rating}>
                    <svg width="25" height="23" viewBox="0 0 25 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.6268 17.6614L5.41618 22.0127L7.37647 13.892L0.960754 8.462L9.38215 7.79538L12.6268 0.0867615L15.8715 7.79538L24.2941 8.462L17.8771 13.892L19.8374 22.0127L12.6268 17.6614Z" fill="#FFCE7F"/>
                    </svg>
                    <span>{data.rate}</span>
                </div>
                {/* конопка купить */}
                <button className={styles.button} onClick={() => {addToCart(data)}}>Купить</button>
            </div> 
        </div>
    )
}