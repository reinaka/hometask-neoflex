import styles from './logo.module.css';
import { NavLink, useLocation } from 'react-router-dom';

export const Logo = () => {
    const location = useLocation();

    return (
        <div className={styles.general}>
            <NavLink to="/" state={{ from: location.pathname }}>
                <div className={styles.logo}>QPICK</div>
            </NavLink>
        </div>
    )
}