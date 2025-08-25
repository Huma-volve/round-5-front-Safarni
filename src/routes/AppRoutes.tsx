import AppLayout from "@/components/Layouts/AppLayout";
import HomePage from "@/pages/Home/HomePage";
import ScrollToTop from "@/utils/ScrollToTop";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";

export default function AppRoutes(){
    return(
        <Router>
            <ScrollToTop />
            <Routes>
                {/* Layout for all app */}
                <Route element={<AppLayout />} >
                {/* home */}
                <Route path="/" element={<HomePage />} />
                </Route>
            </Routes>
        </Router>

    )
}