import { Header } from "../../components/header/header";
import { Footer } from "../../components/footer/footer";
import styles from './main-layout-page.module.css';
import { Outlet } from "react-router-dom";

export const MainLayoutPage = () => {
    return (
        <div className={styles.general}>
            <Header />
            <main className={styles.main}>
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}