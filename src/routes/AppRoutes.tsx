import AppLayout from "@/components/Layouts/AppLayout";
import FilterPage from "@/pages/FilterPages/FilterPage";
import FilterTourResult from "@/pages/FilterPages/FilterToursResult";
import HomePage from "@/pages/Home/HomePage";
import SearchPage from "@/pages/SearchPages/SearchPage";
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
                <Route path="/search" element={<SearchPage />} />
                <Route path="/filter" element={<FilterPage />} />
                <Route path="/filter-tours" element={<FilterTourResult />} />
                </Route>
            </Routes>
        </Router>

    )
}