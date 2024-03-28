import { Card } from "../card/card";
import { TCard } from "../../services/types";
import styles from './items-block.module.css';

type TProps = {
    data: TCard[],
    heading: string
}

export const ItemsBlock = (props: TProps) => {
    return (
        <section className={styles.general}>
            <h2 className={styles.heading}>{props.heading}</h2>
            <ul className={styles.layout}>
                {
                    props.data.map((item : TCard) => {
                        return (
                            <li key={item.id}>
                                <Card data={item} />
                            </li>
                        )
                    })
                }
            </ul>
        </section>
        
    )
}