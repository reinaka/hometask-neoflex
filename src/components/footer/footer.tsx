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
                    <a href="https://www.neoflex.ru/%D0%9F%D0%BE%D0%BB%D0%B8%D1%82%D0%B8%D0%BA%D0%B0%20%D0%BE%D0%B1%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%BA%D0%B8%20%D0%BF%D0%B5%D1%80%D1%81%D0%BE%D0%BD%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D1%85%20%D0%B4%D0%B0%D0%BD%D0%BD%D1%8B%D1%85.pdf" target="_blank" rel="noreferrer">Условия сервиса</a>
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