import { ChevronLeft, Search } from "lucide-react";
import { Link } from "react-router-dom";

export default function SearchPage() {
  return (
    <div className="bg-white px-4 md:px-12 lg:px-32 py-3">
      {/* --- Mobile Layout --- */}
      <div className="md:hidden">
        {/* top bar */}
        <div className="relative flex items-center justify-center mb-4">
          {/* back button (left) */}
          <Link to=".." className="absolute left-0">
            <ChevronLeft
              size={38}
              className="bg-gray-200 rounded-full p-2 text-gray-800"
            />
          </Link>

          {/* centered title */}
          <h2 className="text-lg font-semibold text-gray-800">Search</h2>
        </div>

        {/* search input */}
        <div className="flex items-center px-3 py-2 border border-gray-200 shadow-sm rounded-xl focus-within:border-[#8457f6]">
          <Search size={20} className="text-blue-900" />
          <input
            type="search"
            placeholder="Search destinations, tours..."
            className="w-full border-none outline-none px-3 text-sm"
          />
        </div>
      </div>

      {/* Laptop */}
      <div className="hidden md:flex items-center gap-2">
        <Link to="..">
          <ChevronLeft
            size={42}
            className="bg-gray-200 rounded-full px-2 py-2 text-gray-800"
          />
        </Link>
        <div className="flex items-center px-2 py-2 w-[90%] border border-gray-200 shadow-md rounded-xl focus-within:border-[#8457f6] hover:border-[#8457f6]">
          <Search size={20} className="text-blue-900" />
          <input
            type="search"
            placeholder="Search destinations, tours..."
            className="w-full border-none outline-none px-3"
          />
        </div>
      </div>
    </div>
  );
}
