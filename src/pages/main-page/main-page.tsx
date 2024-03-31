import { ItemsBlock } from '../../components/items-block/items-block';
import { headphones, wireless_headphones } from '../../services/data';

export const MainPage = () => {
    return (
        <div>
            <ItemsBlock data={headphones} heading='Наушники'/>
            <ItemsBlock data={wireless_headphones} heading='Беспроводные наушники'/>
        </div>
    )
}
