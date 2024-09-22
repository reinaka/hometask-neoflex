import { Routes, Route } from "react-router-dom";
import { MainLayoutPage } from "../../pages/main-layout-page/main-layout-page";
import { CartPage } from "../../pages/cart-page/cart-page";
import { MainPage } from "../../pages/main-page/main-page";
import { FavouritesPage } from "../../pages/favourites-page/favourites-page";
import { ContactsPage } from "../../pages/contacts-page/contacts-page";
import { Page404 } from "../../pages/page-404/page-404";
import { PaymentPage } from "../../pages/payment-page/payment-page";

export const App = () => {      
    return (
        <Routes>
            <Route path="/" element={<MainLayoutPage />}>
                <Route path="/" element={<MainPage />} />
                <Route path="/shoppingCart" element={<CartPage />} />
                <Route path="/favourites" element={<FavouritesPage />} />
                <Route path="/contacts" element={<ContactsPage />} />
                <Route path="/payment" element={<PaymentPage />} />
            </Route>
            <Route path="*" element={< Page404 />} />
        </Routes>
    )
}