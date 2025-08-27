import { useTopRatedTours } from "@/hooks/RecommendedTours/useTopRatedTours";
import { useState } from "react";
import { MapPin, Star } from "lucide-react";
import noimage from "@/assets/images/noimage-home.png";
import Loading from "../common/Loading";

export default function TopRatedTours() {
  const [showAll, setShowAll] = useState(false);
  const { tours, isLoading, isError } = useTopRatedTours();

  const displayedTours = showAll ? tours : tours.slice(0, 3);

  if (isLoading) return <Loading />;
  if (isError) return <p>Something went wrong!</p>;

  return (
    <div className="mt-8 px-4 md:px-12 lg:px-32 mb-12">
      {/* header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg md:text-2xl font-semibold text-gray-900">
          Top-Rated Tours
        </h2>
        {tours.length > 3 && (
          <button
            onClick={() => setShowAll(!showAll)}
            className="text-xs md:text-base text-blue-600 hover:underline"
          >
            {showAll ? "View less" : "View all"}
          </button>
        )}
      </div>

      {/* cards grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        {displayedTours.map((tour) => (
          <div
            key={tour.id}
            className="flex border rounded-xl shadow hover:shadow-md transition p-3 md:p-4 gap-3 md:gap-4"
          >
            {/* left image */}
            <img
              src={tour.image === null  ? noimage : tour.image}
              alt={tour.title}
              loading="lazy"
              className="w-24 h-24 md:w-28 md:h-28 object-cover rounded-lg flex-shrink-0"
            />

            {/* right content */}
            <div className="flex flex-col flex-1">
              {/* top row: label + rating */}
              <div className="flex items-center justify-between">
                <span className="text-[10px] md:text-xs text-gray-700 font-semibold py-0.5 rounded-full">
                  Full Day Tour
                </span>
                <div className="flex items-center text-yellow-500 text-xs md:text-sm">
                  <Star size={14} className="fill-yellow-500 mr-1" />
                  {tour.rating}
                </div>
              </div>

              {/* title */}
              <h3 className="mt-2 text-black font-semibold text-s md:text-base line-clamp-1">
                {tour.title}
              </h3>

              {/* location */}
              <div className="flex items-center text-gray-500 text-xs md:text-sm mt-1">
                <MapPin size={14} className="mr-1" />
                <span className="line-clamp-1">{tour.location}</span>
              </div>

              {/* price */}
              <div className="mt-auto text-gray-900 font-semibold text-sm md:text-base">
                From{" "}
                <span className="text-blue-600 font-bold">${tour.price}</span>{" "}
                per person
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
