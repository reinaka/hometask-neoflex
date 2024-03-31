import { Link } from "react-router-dom";
import styles from './page-404.module.css';

export const Page404 = () => {
    return (
        <div className={styles.wrapper}>
            <div>
                <div>404</div>
                <p>Такой страницы нет</p>
            </div>
            <Link to="/">
                <div className={styles.pseudoButton}>
                    <p>На главную</p>
                </div>
            </Link>
        </div>  
    )
}