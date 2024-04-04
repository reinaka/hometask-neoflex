import { ItemsBlock } from '../../components/items-block/items-block';
import { useAppSelector } from '../../services/hooks/reduxTypes';
import { selectAllItems } from '../../services/selector-functions';
import { useMemo } from 'react';
import { TItem } from '../../services/types';

export const MainPage = () => {
    const items = useAppSelector(selectAllItems);

    // массив всех проводных наушников
    const headphones = useMemo(() => {
        let result = items.filter((elem : TItem) => elem.type === 'headphones');
        return result;
    }, [items]);
    
    //массив всех беспроводных наушников
    const wireless_headphones = useMemo(() => {
        return items.filter((elem : TItem) => elem.type === 'wireless_headphones');
    }, [items]);
    
    return (
        <div>
            <ItemsBlock data={headphones} heading='Наушники'/>
            <ItemsBlock data={wireless_headphones} heading='Беспроводные наушники'/>
        </div>
    )
}
