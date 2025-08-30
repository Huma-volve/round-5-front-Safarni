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
import RoomHotelPage from "@/pages/Booking/Hotel/RoomHotelPage";
import RoomDetailsHotelPage from "@/pages/Booking/Hotel/RoomDetailsHotelPage";
import Tours from "@/pages/TourPage/Tours";
import Tour from "@/pages/TourPage/Tour";
import AppPayment from "@/pages/Payment/AppPayment";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CarDetails from "@/pages/car-booking/car-details/CarDetails";
import CarBookingHome from "@/pages/car-booking/car-booking-home/CarBookingHome";
import Profile from "@/components/profile/Mainprofile/Profile";
import PersonalInformation from "@/pages/profile/personalInfo/PersonalInformation";
import MyBooking from "@/pages/profile/MyBooking/MyBooking";
import AccountSecurity from "@/pages/profile/AccountSecurity/AccountSecurity";

export default function AppRoutes() {
  const stripePromise = loadStripe("pk_test_XXXXXXXXXXXXXXXX");

  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route element={<AppLayout />}>
          {/* home */}
          <Route path="/" element={<HomePage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/filter" element={<FilterPage />} />

          <Route path="/filter-tours" element={<FilterToursResult />} />
          <Route path="/compare" element={<Compare />} />

          <Route path="/tours" element={<Tours />} />
          <Route path="/tours/:id" element={<Tour />} />


          <Route path="/filter-tours" element={<FilterToursResult />} />

          {/* compare */}
          <Route path="/compare" element={<Compare />} />

          {/* booking */}
            <Route path="hotel" element={<HotelPage />} />
            <Route path="/hotel/:hotelId" element={<RoomHotelPage />} />
            <Route
              path="hotel/:hotelId/room/:roomId"
              element={<RoomDetailsHotelPage />}
            />

            {/* //this approach is temporary until checkout mechanism is ready */}
              <Route path="payment" element={<Elements stripe={stripePromise}><AppPayment booking_id="7" clientSecret="pi_3S0XIT00Xq5cUHDc0gTeU98Z_secret_53dqpgxrvDaBBxX2vEhjtxGmh"/></Elements>}/>
      
          <Route path="/CarDetails/:id" element={<CarDetails />} />
                <Route path="/CarBookingHome" element={<CarBookingHome />} />
             <Route path="/Profile" element={<Profile />} />
             
               <Route path="/PersonalInformation" element={<PersonalInformation />} />
               <Route path="/AccountSecurity" element={<AccountSecurity />} />
             
               <Route path="/MyBooking" element={<MyBooking />} />
           
      
        </Route>





        {/* Auth */}
        <Route path="/auth" element={<AuthLayout />}>
          <Route path="welcome" element={<WelcomePage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="signup" element={<SignUpPage />} />
          <Route path="forget-password" element={<ForgetPassPage />} />
          <Route path="verify-code" element={<VerifyCodePage />} />
          <Route path="reset-password" element={<ResetPasswordPage />} />
          <Route path="reset-password-success" element={<ResetSuccessPage />} />
        </Route>
        
          <Route path="/maps" element={<MapSearchCompare />} />
          <Route path="/map" element={<MapView />} />

           
      </Routes>
    </Router>
  );
}
