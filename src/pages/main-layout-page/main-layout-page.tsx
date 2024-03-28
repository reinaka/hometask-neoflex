import { Header } from "../../components/app/header/header";
import { Footer } from "../../components/footer/footer";
import styles from './main-layout-page.module.css';
import { MainPage } from "../main-page/main-page";

export function MainLayoutPage() {
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