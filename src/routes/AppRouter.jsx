import { Route, Routes } from "react-router-dom";
import { Paths } from "./path";
import { HomePage } from "../pages/Home";
import { Layout } from "../pages/Layout";
export const AppRouter = () => {
    return (
        <Routes>
            <Route element={<Layout />} >
                <Route path={Paths.home} element={<HomePage />} />
            </Route>
        </Routes>
    );
};
