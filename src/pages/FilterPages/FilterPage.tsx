import { ChevronLeft } from "lucide-react";
import { Link } from "react-router-dom";

export default function FilterPage() {
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
          <h2 className="text-lg font-semibold text-gray-800">Filter</h2>
        </div>
      </div>

      {/* --- Laptop / Tablet Layout --- */}
      <div className="hidden md:flex items-center mb-4">
        <Link to="..">
          <ChevronLeft
            size={42}
            className="bg-gray-200 rounded-full px-2 py-2 text-gray-800"
          />
        </Link>
      </div>
    </div>
  );
}
