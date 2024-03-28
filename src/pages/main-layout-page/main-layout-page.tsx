import { Header } from "../../components/header/header";
import { Footer } from "../../components/footer/footer";
import styles from './main-layout-page.module.css';
import { MainPage } from "../main-page/main-page";

export const MainLayoutPage = () => {
    return (
        <div className={styles.general}>
            <Header />
            <main>
                <MainPage />
            </main>
            <Footer />
        </div>
    )
}