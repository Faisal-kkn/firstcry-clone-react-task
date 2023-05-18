import { Route, Routes } from "react-router-dom";
import { Paths } from "./path";
import { HomePage, Layout, Login, Register, RegisterLayout } from "../pages/index";
export const AppRouter = () => {
    return (
        <Routes>
            <Route element={<RegisterLayout />} >
                <Route path={Paths.login} element={<Login />} />
                <Route path={Paths.register} element={<Register />} />
            </Route>
            <Route element={<Layout />} >
                <Route path={Paths.home} element={<HomePage />} />
            </Route>
        </Routes>
    );
};
