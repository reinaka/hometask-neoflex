import { useAppSelector } from '../../../services/hooks/reduxTypes';
import { selectItemDetails } from '../../../services/selector-functions';
import styles from './item-details-modal.module.css';

// наполнение для модального окна с деталями о товаре
export const ItemDetailsModal = () => {
    let data = useAppSelector(selectItemDetails);

    return (
        <div className={styles.wrapper}>
            <div>
                <img src={data.item.img} alt={data.item.title}/>
            </div>
            <div className={styles.info}>
                <div>
                    <span>Наименование:</span> 
                    {data.item.title}
                </div>
                <div>
                    <span>Цена:</span>
                    {data.item.price} &#8381;
                </div>
                <div>
                    <span>Скидка:</span>
                    {data.item.discount ? "Да" : "Нет"}
                </div>
                {data.item.previousPrice && <div>
                    <span>Старая цена:</span>
                    {data.item.previousPrice} &#8381;
                </div>}
                <div>
                    <span>Рейтинг:</span>
                        {data.item.rate}
                    </div>
            </div>
        </div>
    )
}