import styles from './desktop-menu.module.css';
import { Logo } from '../logo/logo';
import { SMMLinks } from '../smmLinksBlock/smmLinksBlock';
import { FooterMenuContent } from '../footer-menu-content/footer-menu-content';

export const DesktopMenu = () => {
    return (
        <div className={styles.general}>
            <span className={styles.logo}><Logo /></span>
            <FooterMenuContent className={styles.content}/>            
            <span className={styles.smmLinks}><SMMLinks /></span>
        </div>
    )
}