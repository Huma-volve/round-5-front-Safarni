import { useRecommendedTours } from "@/hooks/RecommendedTours/useRecommedndTours";
import { useState } from "react";
import { MapPin, Star } from "lucide-react";
import noimage from "@/assets/images/noimage-home.png";
import Loading from "../common/Loading";

export default function RecommendedTours() {
  const [showAll, setShowAll] = useState(false);
  const { tours, isLoading, isError } = useRecommendedTours();

  if (isLoading) return <Loading />;
  if (isError) return <p>Something went wrong!</p>;

  const displayedTours = showAll ? tours : tours.slice(0, 3);

  return (
    <div className="mt-8 px-6 md:px-12 lg:px-32 mb-12">
      {/* header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl md:text-2xl font-semibold text-gray-900">
          Recommendation
        </h2>
        {tours.length > 3 && (
          <button
            onClick={() => setShowAll(!showAll)}
            className="text-sm md:text-base text-blue-600 hover:underline"
          >
            {showAll ? "View less" : "View all"}
          </button>
        )}
      </div>

      {/* grid cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
        {displayedTours.map((tour) => (
          <div
            key={tour.id}
            className="border rounded-xl shadow-lg hover:shadow-xl transition p-3 flex flex-col"
          >
            {/* image */}
            <img
              src={tour.image === null ? noimage : tour.image}
              loading="lazy"
              alt={tour.title}
              className="w-full h-48 object-cover rounded-lg"
            />

            <div className="mt-3 flex flex-col flex-1">
              {/* title + rating */}
              <div className="flex items-center justify-between">
                <h3 className="text-gray-950 font-semibold text-sm md:text-base line-clamp-1">
                  {tour.title}
                </h3>
                <div className="flex items-center text-yellow-500 text-sm">
                  <Star size={16} className="fill-yellow-500 mr-1" />
                  {tour.rating}
                </div>
              </div>

              {/* price */}
              <div className="mt-auto pt-3 font-bold text-blue-600 text-lg">
                ${tour.price}
              </div>
              {/* location */}
              <div className="flex items-center text-gray-500 text-sm mt-2">
                <MapPin size={20} className="mr-1 text-blue-500" />
                <span className="line-clamp-1 text-gray-500">{tour.location}</span>
              </div>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
