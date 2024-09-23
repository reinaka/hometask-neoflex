import { DesktopMenu } from '../desktop-menu/desktop-menu';
import { MobileMenu } from '../mobile-menu/mobile-menu';
import styles from './footer.module.css';

export const Footer = () => {
    return (
        <footer className={styles.general}>
            <DesktopMenu />
            <MobileMenu />
        </footer>
    )
}