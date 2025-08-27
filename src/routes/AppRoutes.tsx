
import Compare from "@/pages/Compare";
import AppLayout from "@/components/Layouts/AppLayout";
import AuthLayout from "@/components/Layouts/AuthLayout";
import ForgetPassPage from "@/pages/Auth/ForgetPassPage";
import LoginPage from "@/pages/Auth/LoginPage";
import SignUpPage from "@/pages/Auth/SignUpPage";
import WelcomePage from "@/pages/Auth/WelcomePage";
import ResetPasswordPage from "@/pages/Auth/ResetPasswordPage";
import VerifyCodePage from "@/pages/Auth/VerifyCodePage";
import HomePage from "@/pages/Home/HomePage";
import SearchPage from "@/pages/SearchPages/SearchPage";
import ScrollToTop from "@/utils/ScrollToTop";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import ResetSuccessPage from "@/pages/Auth/ResetSuccessPage";
import HotelPage from "@/pages/Booking/Hotel/HotelPage";
import FilterPage from "@/pages/FilterPages/FilterPage";
import FilterToursResult from "@/pages/FilterPages/FilterToursResult";
import MapSearchCompare from "@/pages/map/Map";
import MapView from "@/components/map/MapView";

export default function AppRoutes() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        {/* Layout for all app */}
        <Route element={<AppLayout />}>
          {/* home */}
          <Route path="/" element={<HomePage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/filter" element={<FilterPage />} />
          <Route path="/filter-tours" element={<FilterToursResult />} />
          <Route path="/compare" element={<Compare />} />
        </Route>
          <Route path="/maps" element={<MapSearchCompare />} />
          <Route path="/map" element={<MapView />} />
        <Route path="/auth" element={<AuthLayout />}>
          <Route path="welcome" element={<WelcomePage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="signup" element={<SignUpPage />} />
          <Route path="forget-password" element={<ForgetPassPage />} />
          <Route path="verify-code" element={<VerifyCodePage />} />
          <Route path="reset-password" element={<ResetPasswordPage />} />
          <Route path="reset-password-success" element={<ResetSuccessPage />} />
        </Route>
 
        {/* booking */}
        <Route path="/booking/hotel" element={<HotelPage />} />
      </Routes>
    </Router>
  );
}

