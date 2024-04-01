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
                <svg x="0px" y="0px" width="30" height="30" viewBox="0,0,256,256" onClick={props.onClose}>
                    <g fill="#838383" stroke="none"><g transform="scale(10.66667,10.66667)"><path d="M12,2c-5.511,0 -10,4.489 -10,10c0,5.511 4.489,10 10,10c5.511,0 10,-4.489 10,-10c0,-5.511 -4.489,-10 -10,-10zM12,4c4.43012,0 8,3.56988 8,8c0,4.43012 -3.56988,8 -8,8c-4.43012,0 -8,-3.56988 -8,-8c0,-4.43012 3.56988,-8 8,-8zM8.70703,7.29297l-1.41406,1.41406l3.29297,3.29297l-3.29297,3.29297l1.41406,1.41406l3.29297,-3.29297l3.29297,3.29297l1.41406,-1.41406l-3.29297,-3.29297l3.29297,-3.29297l-1.41406,-1.41406l-3.29297,3.29297z"></path></g></g>
                </svg>
            </span>
            {props.children}
        </div>
    )
}