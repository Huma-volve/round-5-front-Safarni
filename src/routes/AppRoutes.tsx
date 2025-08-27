import Compare from '@/pages/Compare'
import AppLayout from "@/components/Layouts/AppLayout";
import HomePage from "@/pages/Home/HomePage";
import SearchPage from "@/pages/SearchPages/SearchPage";
import ScrollToTop from "@/utils/ScrollToTop";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import FilterPage from '@/pages/FilterPages/FilterPage';

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
                <Route path="/compare" element={<Compare />} />

                </Route>
            </Routes>
        </Router>

    )
}