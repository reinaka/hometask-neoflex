import styles from './modal-overlay.module.css';
import { EventHandler, FC, ReactNode } from 'react';

type TProps = {
    onClick : EventHandler<React.SyntheticEvent<HTMLDivElement, Event>>,
    children? : ReactNode,
}

export const ModalOverlay:FC<TProps> = (props) => {
    return (
        <div className={styles.overlay} onClick={props.onClick}>
            {props.children}
        </div>
    )
}