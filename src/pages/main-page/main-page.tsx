import { ItemsBlock } from '../../components/items-block/items-block';
import { headphones, wireless_headphones } from '../../services/data';
import styles from './main-page.module.css';

export const MainPage = () => {
    return (
        <div className={styles.general}>
            <ItemsBlock data={headphones} heading='Наушники'/>
            <ItemsBlock data={wireless_headphones} heading='Беспроводные наушники'/>
        </div>
    )
}
