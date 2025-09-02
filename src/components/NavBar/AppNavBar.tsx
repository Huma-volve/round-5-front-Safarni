import { Link, NavLink, useLocation } from "react-router-dom";
import navicon from "@/assets/images/icons/safarni-navicon.png";
import {
  Search,
  SlidersHorizontal,
  Home,
  Heart,
  Map,
  SquareStack,
  LogIn,
} from "lucide-react";
import profileicon from "@/assets/images/icons/avatar-navicon.jpg";

export default function AppNavBar() {
  const token = localStorage.getItem("token");
  const isAuthenticated = !!token;
  const location = useLocation();

  const isLoginPage = location.pathname === "/auth/welcome" || location.pathname === "/auth/login";

  return (
    <>
      {/* Top Navbar (Desktop / Tablet) */}
      <div className="fixed top-0 left-0 right-0 w-full bg-white py-4 
                px-6 sm:px-12 md:px-32 
                hidden md:flex justify-between items-center z-50 ">
        {/* logo */}
        <Link to="/">
          <div className="hidden md:flex flex-col items-center">
            <img src={navicon} alt="safarni icon" className="w-10 md:w-12" />
            <h4 className="text-[#1E429F] text-xs md:text-sm font-medium">
              Safarni
            </h4>
          </div>
        </Link>

        {/* categories */}
        <nav className="hidden md:flex gap-10 items-center list-none font-medium">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-[#1E429F] font-semibold" : "text-gray-600"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/favourites"
            className={({ isActive }) =>
              isActive ? "text-[#1E429F] font-semibold" : "text-gray-600"
            }
          >
            Favourite
          </NavLink>
          <NavLink
            to="/compare"
            className={({ isActive }) =>
              isActive ? "text-[#1E429F] font-semibold" : "text-gray-600"
            }
          >
            Compare
          </NavLink>
          <NavLink
            to="/maps"
            className={({ isActive }) =>
              isActive ? "text-[#1E429F] font-semibold" : "text-gray-600"
            }
          >
            Maps
          </NavLink>
        </nav>

        {/* right side */}
        <div className="hidden md:flex items-center gap-6">
          {isAuthenticated ? (
            <>
              <Link to="/search">
                <Search className="text-gray-600 w-5 h-5" />
              </Link>
              <Link to="/filter">
                <SlidersHorizontal className="text-gray-600 w-5 h-5" />
              </Link>
              <Link to="/profile">
                <img
                  src={profileicon}
                  alt="profile icon"
                  className="w-8 h-8 rounded-full"
                />
              </Link>
            </>
          ) : (
            <Link
              to={isLoginPage ? "/auth/signup" : "/auth/welcome"}
              className="px-4 py-2 bg-[#1E429F] text-white rounded-lg text-sm font-medium hover:bg-[#16367A] transition"
            >
              {isLoginPage ? "Sign up" : "Login"}
            </Link>
          )}
        </div>
      </div>

      {/* Bottom Navbar (Mobile) */}
      <div className="fixed bottom-0 left-0 right-0 bg-white shadow-md border-t flex justify-around py-2 md:hidden">
        {isAuthenticated ? (
          <>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `flex flex-col items-center text-xs ${
                  isActive ? "text-[#1E429F]" : "text-gray-600"
                }`
              }
            >
              <Home size={20} />
              <span>Home</span>
            </NavLink>

            <NavLink
              to="/favourites"
              className={({ isActive }) =>
                `flex flex-col items-center text-xs ${
                  isActive ? "text-[#1E429F]" : "text-gray-600"
                }`
              }
            >
              <Heart size={20} />
              <span>Favourite</span>
            </NavLink>

            <NavLink
              to="/compare"
              className={({ isActive }) =>
                `flex flex-col items-center text-xs ${
                  isActive ? "text-[#1E429F]" : "text-gray-600"
                }`
              }
            >
              <SquareStack size={20} />
              <span>Compare</span>
            </NavLink>

            <NavLink
              to="/maps"
              className={({ isActive }) =>
                `flex flex-col items-center text-xs ${
                  isActive ? "text-[#1E429F]" : "text-gray-600"
                }`
              }
            >
              <Map size={20} />
              <span>Maps</span>
            </NavLink>
          </>
        ) : (
          <NavLink
            to={isLoginPage ? "/auth/signup" : "/auth/login"}
            className="flex flex-col items-center text-xs text-gray-600"
          >
            <LogIn size={20} />
            <span>{isLoginPage ? "Sign up" : "Login"}</span>
          </NavLink>
        )}
      </div>
    </>
  );
}
