import { Cart } from "../cart/cart";
import { TItem } from "../../services/types";
import styles from './items-block.module.css';

type TProps = {
    data: TItem[],
    heading: string
}

export const ItemsBlock = (props: TProps) => {
    return (
        <>
            <section className={styles.general}>
                <h2 className={styles.heading}>{props.heading}</h2>
                <ul className={styles.layout}>
                    {
                        props.data.map((item : TItem) => {
                            return (
                                <li key={item.id}>
                                    <Cart data={item} />
                                </li>
                            )
                        })
                    }
                </ul>
            </section>
        </>
    )
}