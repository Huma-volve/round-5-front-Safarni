import { NavLink } from "react-router-dom";
import navicon from "@/assets/images/icons/safarni-navicon.png";
import { Search, SlidersHorizontal, Home, Heart, Map, SquareStack } from "lucide-react";
import profileicon from "@/assets/images/icons/avatar-navicon.jpg";

export default function AppNavBar() {
  return (
    <>
      {/* Top Navbar */}
      <div className="w-full bg-white px-6 py-4 flex justify-between items-center">
        {/* logo (desktop/tablet) */}
        <div className="hidden md:flex flex-col items-center">
          <img src={navicon} alt="safarni icon" className="w-10 md:w-12" />
          <h4 className="text-[#1E429F] text-xs md:text-sm font-medium">Safarni</h4>
        </div>
        {/* categories (desktop/tablet only) */}
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

        {/* right side (desktop/tablet only) */}
        <div className="hidden md:flex items-center gap-6">
          <Search className="text-gray-600 w-5 h-5" />
          <SlidersHorizontal className="text-gray-600 w-5 h-5" />
          <img
            src={profileicon}
            alt="profile icon"
            className="w-8 h-8 rounded-full"
          />
        </div>
      </div>

      {/* Mobile Top Section */}
      <div className="md:hidden bg-white px-4 pt-3 pb-4">
        {/* Welcome */}
        <div className="flex justify-between items-center mb-4">
            <div className="flex flex-col gap-2">
                <p className="text-black font-medium text-base">Welcome</p>
                <p className="capitalize text-gray-400 text-xs">Explore the best places in world!</p>
            </div>
          <img
            src={profileicon}
            alt="profile icon"
            className="w-10 h-10 rounded-full"
          />
        </div>
        {/* Search + Filter */}
        <div className="flex flex-row-reverse items-center gap-3">
          <button className="p-3 rounded-xl border border-gray-300 text-gray-400 flex items-center justify-center">
            <SlidersHorizontal size={20} />
          </button>
          <button className="flex-1 flex items-center gap-2 border border-gray-300 text-gray-400 px-3 py-3 rounded-xl">
            <Search size={18} />
            <span>Search...</span>
          </button>
        </div>
      </div>

      {/* Bottom Navbar (mobile) */}
      <div className="fixed bottom-0 left-0 right-0 bg-white shadow-md border-t flex justify-around py-2 md:hidden">
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
      </div>
    </>
  );
}
