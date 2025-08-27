import Compare from "@/pages/Compare";
import AppLayout from "@/components/Layouts/AppLayout";
import FilterPage from "@/pages/FilterPages/FilterPage";
import HomePage from "@/pages/Home/HomePage";
import SearchPage from "@/pages/SearchPages/SearchPage";
import ScrollToTop from "@/utils/ScrollToTop";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Tour from "@/pages/TourPage/Tour";
import Tours from "@/pages/TourPage/Tours";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        {/* Layout for all app */}
        <Route element={<AppLayout />}>
          {/* home */}
          <Route path="/" element={<HomePage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/filter" element={<FilterPage />} />
          <Route path="/compare" element={<Compare />} />

          {/* Tours */}
          <Route path="tours" element={<Tours />}></Route>
          <Route path="tours/:id" element={<Tour />}></Route>
          
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
