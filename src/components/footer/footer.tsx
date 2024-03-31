import { Logo } from "../logo/logo";
import styles from './footer.module.css';
import icon from '../../images/icons/language_icon.png';
import { SMMLinks } from "../smmLinksBlock/smmLinksBlock";
import { NavLink } from "react-router-dom";

export const Footer = () => {
    return (
        <footer className={styles.general}>
            <span className={styles.logo}><Logo /></span>
            <nav className={styles.navigationLayout}>
                <ul className={styles.navigation}>
                    <li>
                        <NavLink to="/favourites">
                            Избранное
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/basket">
                            Корзина
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/contacts">
                            Контакты
                        </NavLink>
                    </li>
                </ul>

                <div className={styles.navigation}>
                    <p>Условия сервиса</p>
                    <div className={styles.additionalNavigation}>
                        <img src={icon} alt="language icon" />
                        <div>
                            <input type="radio" name="radio" value="rus" id="rus" defaultChecked/>
                            <label htmlFor="rus">Рус</label>
                        </div>
                        <div>
                            <input type="radio" name="radio" value="eng" id="eng"/>
                            <label htmlFor="eng">Eng</label>
                        </div>
                    </div>
                </div> 
            </nav>
            <span className={styles.smmLinks}><SMMLinks /></span>
        </footer>
    )
}