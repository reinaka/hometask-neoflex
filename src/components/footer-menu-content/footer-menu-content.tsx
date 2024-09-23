import styles from './footer-menu-content.module.css';
import { NavLink } from 'react-router-dom';
import icon from '../../images/icons/language_icon.png';

const menuItems = [
    {
        title : "Избранное",
        link: "/favourites"
    },
    {
        title : "Корзина",
        link: "/shoppingCart"
    },
    {
        title : "Контакты",
        link: "/contacts"
    }
]

export const FooterMenuContent = ({ className, setMobileMenuOpen } : {
    className? : string, setMobileMenuOpen? : React.Dispatch<React.SetStateAction<boolean>>
}) => {
    return (
        <nav className={`${styles.navigationLayout} ${className || ''}`}>
            <ul className={styles.navigation}>
                {menuItems.map((item) => (
                    <li onClick={setMobileMenuOpen ? () => setMobileMenuOpen(false) : undefined} key={item.title}>
                        <NavLink to={item.link}>
                            {item.title}
                        </NavLink>
                    </li>
                ))}
            </ul>

            <div className={styles.navigation}>
                <a 
                    href="https://www.neoflex.ru/%D0%9F%D0%BE%D0%BB%D0%B8%D1%82%D0%B8%D0%BA%D0%B0%20%D0%BE%D0%B1%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%BA%D0%B8%20%D0%BF%D0%B5%D1%80%D1%81%D0%BE%D0%BD%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D1%85%20%D0%B4%D0%B0%D0%BD%D0%BD%D1%8B%D1%85.pdf"
                    target="_blank"
                    rel="noreferrer"
                >
                    <span>Условия сервиса</span>
                </a>
                <div className={styles.additionalNavigation}>
                    <img src={icon} alt="language icon" className={styles.icon}/>
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
    )
}