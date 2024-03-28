import { FC, ReactNode } from 'react';
import styles from './header-icon.module.css';

type TProps = {
    children : ReactNode,
    count : number,
};

export const HeaderIcon:FC<TProps> = (props) => {
    return (
        <div className={styles.general}>
            <div className={styles.icon}>
                {props.children}
            </div>
            <div className={styles.circle}>
                <span>{props.count}</span>
            </div>
        </div>
    )
}