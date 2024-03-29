import { FC, ReactNode } from 'react';
import styles from './header-icon.module.css';
import { NavLink, useLocation } from 'react-router-dom';

type TProps = {
    children : ReactNode,
    count : number,
    to: string
};

export const HeaderIcon:FC<TProps> = (props) => {
    const location = useLocation();
    return (
        <NavLink to={props.to} state={{ from: location.pathname }}>
            <div className={styles.general}>
                <div className={styles.icon}>
                    {props.children}
                </div>
                <div className={styles.circle}>
                    <span>{props.count}</span>
                </div>
            </div>
        </NavLink>
    )
}