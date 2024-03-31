import { Header } from "../../components/header/header";
import { Footer } from "../../components/footer/footer";
import styles from './main-layout-page.module.css';
import { Outlet } from "react-router-dom";
import { Modal } from "../../components/modal/modal";
import { useAppDispatch, useAppSelector } from "../../services/hooks/reduxTypes";
import { selectItemDetails } from "../../services/selector-functions";
import { DELETE_ITEM_DETAILS } from "../../services/actions/action-types-item-details";
import { useCallback } from "react";

export const MainLayoutPage = () => {
    let itemDetails = useAppSelector(selectItemDetails);
    let dispatch = useAppDispatch();

    const closeItemDetailsModal = useCallback(() => {
        dispatch({type : DELETE_ITEM_DETAILS, payload : itemDetails.item})
    }, [dispatch, itemDetails.item]);

    return (
        <>
            <div className={itemDetails.selectedItem ?  `${styles.general} ${styles.noScroll}` : styles.general}>
                <Header />
                <main className={styles.main}>
                    <Outlet />
                </main>
                <Footer />
            </div>

            {itemDetails.selectedItem && 
                <Modal onClose={closeItemDetailsModal} title="Информация о товаре">
                    <div>test</div>
                </Modal>
            }
        </>
    )
}