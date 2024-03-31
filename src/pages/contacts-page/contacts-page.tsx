import { SMMLinks } from "../../components/smmLinksBlock/smmLinksBlock";
import styles from './contacts-page.module.css';

export const ContactsPage = () => {
    return (
        <div className={styles.general}>
            <div className={styles.wrapper}>
                <h2>Cвяжитесь с нами</h2> 
                <SMMLinks/>
            </div>
        </div>
    )
}