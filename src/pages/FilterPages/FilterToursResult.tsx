import { Link, useSearchParams } from "react-router-dom";
import { useFilterTours } from "@/hooks/FilteredTours/useFilterTours";
import NoData from "@/components/common/NoData";
import { ChevronLeft } from "lucide-react";
import Loading from "@/components/common/Loading";
import nullimage from "@/assets/images/noimage-home.png";

export default function FilterToursResult() {
  const [searchParams] = useSearchParams();
  const queryString = searchParams.toString();

  const { tours, isLoading, isError, error } = useFilterTours(queryString);

  if (isLoading) return <Loading />;
  if (isError) return <p className="text-red-500">{error?.message}</p>;

  return (
    <div className="bg-white px-4 md:px-12 lg:px-32 py-3 w-full">     
     {/* Mobile Header */}
      <div className="md:hidden">
        <div className="relative flex items-center justify-center mb-4">
          <Link to="/filter" className="absolute left-0">
            <ChevronLeft
              size={38}
              className="bg-gray-200 rounded-full p-2 text-gray-800"
            />
          </Link>
          <h2 className="text-lg font-semibold text-gray-800">Result</h2>
        </div>
      </div>

      {/* Laptop Header */}
      <div className="hidden md:flex items-center mb-4">
        <Link to="/filter">
          <ChevronLeft
            size={42}
            className="bg-gray-200 rounded-full px-2 py-2 text-gray-800"
          />
        </Link>
          <h2 className="text-2xl font-semibold text-gray-800 ml-4">Result</h2>
      </div>

     { tours.length === 0 ? 
      <NoData />
    : <div className="px-4 md:px-12 lg:px-32 py-6 grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {tours.map((tour) => (
        <div
          key={tour.id}
          className="border rounded-xl shadow-sm overflow-hidden hover:shadow-lg transition"
        >
          <img
            src={tour.image === null ? nullimage : tour.image}
            alt={tour.title}
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h2 className="text-lg font-bold text-gray-950">{tour.title}</h2>
            <p className="text-gray-600">{tour.location}</p>
            <p className="text-blue-600 font-semibold mt-2">${tour.price}</p>
            <p className="text-yellow-500">⭐ {tour.rating}</p>
          </div>
        </div>
      ))}
    </div>
}
    </div>
  );
}
