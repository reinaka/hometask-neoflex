import { FC, ReactNode } from "react";
import styles from './modal-wrapper.module.css';


type TProps = {
    title? : string,
    children : ReactNode,
    onClose : () => void
}

export const ModalWrapper:FC<TProps> = (props) => {
    return (
        <div className={styles.wrapper}>
            <span className={styles.top}>
                <p className={styles.title}>{props.title}</p>
                <button onClick={props.onClose}>Close</button>
            </span>
            {props.children}
        </div>
    )
}