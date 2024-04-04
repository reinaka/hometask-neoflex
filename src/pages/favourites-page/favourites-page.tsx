import { useMemo } from "react";
import { TItem } from "../../services/types";
import { useAppSelector } from "../../services/hooks/reduxTypes";
import { selectAllItems } from "../../services/selector-functions";
import { ItemsBlock } from "../../components/items-block/items-block";

export const FavouritesPage = () => {
    const items = useAppSelector(selectAllItems);

    // массив всех избранных товаров (у которых поле favorite: true)
    let favoriteItems = useMemo(() => {
        return items.filter((elem : TItem) => elem.favorite);
    }, [items]);
    
    return (
        <div>
            <ItemsBlock data={favoriteItems} heading='Избранное'/>
        </div>
    )
}