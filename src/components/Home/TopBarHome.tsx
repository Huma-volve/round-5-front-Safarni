import { Search, SlidersHorizontal } from "lucide-react";
import profileicon from "@/assets/images/icons/avatar-navicon.jpg";
import { Link } from "react-router-dom";

export default function TopBarHome(){
    return(
        <>
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
                  <Link to="/filter">
                  <div className="p-3 rounded-xl border border-gray-300 text-gray-400 flex items-center justify-center">
                    <SlidersHorizontal size={20} />
                  </div>
                  </Link>
                  <Link to="/search" className="flex-1">
                  <div className="flex items-center gap-2 border border-gray-300 text-gray-400 px-3 py-[10px] rounded-xl">
                    <Search size={18} />
                    <span>Search...</span>
                  </div>
                  </Link>
                </div>
              </div>
              </>
    );
}