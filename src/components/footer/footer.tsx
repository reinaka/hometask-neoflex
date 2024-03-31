import { Logo } from "../logo/logo";
import style from './footer.module.css';
import icon from '../../images/icons/language_icon.png';
import { SMMLinks } from "../smmLinksBlock/smmLinksBlock";

export const Footer = () => {
    return (
        <footer className={style.general}>
            <span className={style.logo}><Logo /></span>
            <nav className={style.navigationLayout}>
                <ul className={style.navigation}>
                    <li>Избранное</li>
                    <li>Корзина</li>
                    <li>Контакты</li>
                </ul>

                <div className={style.navigation}>
                    <p>Условия сервиса</p>
                    <div className={style.additionalNavigation}>
                        <img src={icon} alt="language icon" />
                        <p>Рус</p>
                        <p>Eng</p>
                    </div>
                </div> 
            </nav>
            <span className={style.smmLinks}><SMMLinks /></span>
        </footer>
    )
}