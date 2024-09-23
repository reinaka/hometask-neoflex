import { useState } from "react";
import { Squash as Hamburger } from "hamburger-react";
import { Logo } from "../logo/logo";
import styles from './mobile-menu.module.css';
import { FooterMenuContent } from "../footer-menu-content/footer-menu-content";

export const MobileMenu = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className={`${styles.general} ${isMobileMenuOpen && styles.open}`}>
      <div className={styles.burgerAndLogo}>
        <span className={styles.logo}><Logo /></span>
        <Hamburger toggled={isMobileMenuOpen} size={20} toggle={setMobileMenuOpen} />
      </div>
        {isMobileMenuOpen && <FooterMenuContent setMobileMenuOpen={setMobileMenuOpen}/>}
    </div>
  );
}