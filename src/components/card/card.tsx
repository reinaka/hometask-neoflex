import styles from './card.module.css';
import { TItem } from '../../services/types';
import { useCallback } from 'react';
import { useAppDispatch } from '../../services/hooks/reduxTypes';
import { ADD_TO_BASKET } from '../../services/actions/action-types-basket';
import { ADD_ITEM_DETAILS } from '../../services/actions/action-types-item-details';
import { SWITCH_FAVORITE } from '../../services/actions/action-types-allItems';

type TProps = {
    data: TItem,
}

export const Card = (props: TProps) => {
    let data = props.data;
    const dispatch = useAppDispatch();

    // добавление в корзину
    const addToBasket = useCallback((item : TItem) => {
        dispatch({type: ADD_TO_BASKET, payload: item})
    }, [dispatch]);

    // выбор товара для просмотра деталей
    const openItemDetails = useCallback((item : TItem) => {
        dispatch({type: ADD_ITEM_DETAILS, payload: item})
    }, [dispatch]);

    // добавить в избранное/удалить из избранного
    const switchFavorite = useCallback((item : TItem) => {
        dispatch({type: SWITCH_FAVORITE, payload: item.id})
    }, [dispatch]);

    return (
        <div className={styles.general}>
            <div className={styles.likeAndInfo}>
                <svg x="0px" y="0px" width="30" height="30" viewBox="0,0,256,256" onClick={() => {openItemDetails(data)}}>
                    <g fill="#838383" stroke="none"><g transform="scale(8,8)"><path d="M16,3c-7.16797,0 -13,5.83203 -13,13c0,7.16797 5.83203,13 13,13c7.16797,0 13,-5.83203 13,-13c0,-7.16797 -5.83203,-13 -13,-13zM16,5c6.08594,0 11,4.91406 11,11c0,6.08594 -4.91406,11 -11,11c-6.08594,0 -11,-4.91406 -11,-11c0,-6.08594 4.91406,-11 11,-11zM15,10v2h2v-2zM15,14v8h2v-8z"></path></g></g>
                </svg>
                <svg height="28" version="1.1" width="28" onClick={() => {switchFavorite(data)}}>
                    <g transform="translate(0 -1028.4)"><path d="m7 1031.4c-1.5355 0-3.0784 0.5-4.25 1.7-2.3431 2.4-2.2788 6.1 0 8.5l9.25 9.8 9.25-9.8c2.279-2.4 2.343-6.1 0-8.5-2.343-2.3-6.157-2.3-8.5 0l-0.75 0.8-0.75-0.8c-1.172-1.2-2.7145-1.7-4.25-1.7z" fill={data.favorite ? '#ef0833' : "#838383"}/></g>
                </svg>
            </div>
            <div className={styles.image}>
                <img src={data.img} alt={data.title}/>
            </div>
            <div className={styles.info}>
                <div>{data.title}</div>
                <div className={styles.price}>
                    <div className={styles.currentPrice}>{data.price} &#8381;</div>
                    {data.previousPrice && <div className={styles.previousPrice}>{data.previousPrice} &#8381;</div>}
                </div>
                <div className={styles.rating}>
                    <svg width="25" height="23" viewBox="0 0 25 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.6268 17.6614L5.41618 22.0127L7.37647 13.892L0.960754 8.462L9.38215 7.79538L12.6268 0.0867615L15.8715 7.79538L24.2941 8.462L17.8771 13.892L19.8374 22.0127L12.6268 17.6614Z" fill="#FFCE7F"/>
                    </svg>
                    <span>{data.rate}</span>
                </div>
                <button className={styles.button} onClick={() => {addToBasket(data)}}>Купить</button>
            </div>
        </div>
    )
}