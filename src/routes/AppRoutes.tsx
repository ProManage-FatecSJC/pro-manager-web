import { Route, Routes } from "react-router-dom";
import { DefaultLayout } from "../default";
import { Login, Partners } from "../pages";
import { Dashboard } from "../pages/dashboard";


export function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Login />}/>
            <Route path="" element={<DefaultLayout />}>
                <Route path="/partners" element={<Partners />} />
                <Route path="/dashboard" element={<Dashboard />}/>
            </Route>
        </Routes>
    )
}