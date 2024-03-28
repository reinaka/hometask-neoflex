import { Routes, Route } from "react-router-dom";
import { MainLayoutPage } from "../../pages/main-layout-page/main-layout-page";

export const App = () => {
    return (
        <Routes>
            <Route path="/" element={<MainLayoutPage />}>
            </Route>
        </Routes>
    )
}