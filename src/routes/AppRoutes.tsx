import { Route, Routes } from "react-router-dom";
import { DefaultLayout } from "../default";
import { Login, Home } from "../pages";


export function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Login />}/>
            <Route path="/home" element={<DefaultLayout />}>
                <Route path="/home" element={<Home />} />
            </Route>
        </Routes>
    )
}