import { Header } from "../../components/header/header";
import { Footer } from "../../components/footer/footer";
import styles from './main-layout-page.module.css';
import { Outlet } from "react-router-dom";
import { Modal } from "../../components/modal/modal";
import { useAppDispatch, useAppSelector } from "../../services/hooks/reduxTypes";
import { selectItemDetails } from "../../services/selector-functions";
import { useCallback } from "react";
import { ItemDetailsModal } from "../../components/modal/item-details-modal/item-details-modal";
import { deletedItemDetails } from "../../services/slices/current-item-slice";

export const MainLayoutPage = () => {
    let itemDetails = useAppSelector(selectItemDetails);
    let dispatch = useAppDispatch();

    const closeItemDetailsModal = useCallback(() => {
        dispatch(deletedItemDetails(itemDetails.item))
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

            {/* Модальное окно с информацией о товаре открывается при появлении в сторе данных в currentItem */}
            {itemDetails.selectedItem && 
                <Modal onClose={closeItemDetailsModal}>
                    <ItemDetailsModal />
                </Modal>
            }
        </>
    )
}