import Loading from "@/components/common/Loading";
import { useSearchLocation } from "@/hooks/FilteredTours/useSearchLocation";
import { ChevronLeft, Search } from "lucide-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import locationImg from "@/assets/images/location-placeholder.jpeg";

export default function SearchPage() {
  const [search, setSearch] = useState("");
  const { locations, isLoading, isError } = useSearchLocation(search);
  const navigate = useNavigate();
 
  if (isError) return <p className="text-red-500">Something went wrong!</p>;

  return (
    <div className="bg-white px-4 md:px-12 lg:px-32 py-3">
      {/* --- Mobile Layout --- */}
      <div className="md:hidden">
        {/* top bar */}
        <div className="relative flex items-center justify-center mb-4">
          <Link to=".." className="absolute left-0">
            <ChevronLeft
              size={38}
              className="bg-gray-200 rounded-full p-2 text-gray-800"
            />
          </Link>
          <h2 className="text-lg font-semibold text-gray-800">Search</h2>
        </div>

        {/* search input */}
        <div className="flex items-center px-3 py-2 border border-gray-200 shadow-sm rounded-xl focus-within:border-[#8457f6]">
          <Search size={20} className="text-blue-900" />
          <input
            type="search"
            placeholder="Search destinations, tours..."
            className="w-full border-none outline-none px-3 text-sm"
            onChange={(e) => setSearch(e.target.value)}
            value={search}
          />
        </div>
      </div>

      {/* Laptop */}
      <div className="hidden md:flex items-center gap-2 mb-6">
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
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      {/* Locations List */}
      {
      isLoading ? <Loading /> :
      <div className="flex flex-col gap-4 mb-14 mt-8">
        {locations.map((loc , index) => (
          <div
            key={index}
            className="flex items-center gap-4 w-[95%] cursor-pointer p-2 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition hover:scale-[1.01]"
            onClick={() => navigate(`/filter-tours?location=${loc}`)}
          >
            <img
              src={locationImg}
              alt="location"
              className="w-20 h-20 rounded-lg object-cover"
              loading="lazy"
            />
            <h3 className="text-base md:text-lg font-semibold text-blue-900">
              {loc}
            </h3>
          </div>
        ))}
      </div>
      }
    </div>
  );
}
