import { Routes, Route } from "react-router-dom";
import { MainLayoutPage } from "../../pages/main-layout-page/main-layout-page";
import { BasketPage } from "../../pages/basket-page/basket-page";
import { MainPage } from "../../pages/main-page/main-page";

export const App = () => {
    return (
        <Routes>
            <Route path="/" element={<MainLayoutPage />}>
                <Route path="/" element={<MainPage />} />
                <Route path="/basket" element={<BasketPage />} />
            </Route>
        </Routes>
    )
}