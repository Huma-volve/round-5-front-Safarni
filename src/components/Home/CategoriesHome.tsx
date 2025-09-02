import { useCategories } from "@/hooks/Categories/useCategories";
import noimage from "@/assets/images/noimage-home.png";
import Loading from "../common/Loading";
import car from "@/assets/images/car.jpg";
import flight from "@/assets/images/flight.jpg";
import tour from "@/assets/images/tour.jpg";
import hotel from "@/assets/images/hotel.jpg";
import { Link } from "react-router-dom";

export default function CategoriesHome() {
  const { categories, isLoading, isError } = useCategories();

  if (isLoading) return <Loading />;
  if (isError) return <p>Something went wrong!</p>;

  const getCategoryImage = (title: string) => {
    const normalized = title.toLowerCase();

    if (normalized.includes("car")) return car;
    if (normalized.includes("flight")) return flight;
    if (normalized.includes("tour")) return tour;
    if (normalized.includes("hotel")) return hotel;

    return noimage;
  };

  return (
    <div className="mt-12 px-6 py-4 md:px-12 lg:px-32">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-xl md:text-2xl font-semibold text-gray-900">
          Categories
        </h2>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mt-8">
        {categories.slice(0, 4).map((cat, i) => {
          const imageSrc = getCategoryImage(cat.title);
          return (
            <Link
              to={`${
                imageSrc == "/src/assets/images/hotel.jpg"
                  ? "/booking/hotel"
                  : imageSrc == "/src/assets/images/car.jpg"
                  ? "/CarBookingHome"
                  : imageSrc == "/src/assets/images/tour.jpg"
                  ? "/tours"
                  : "/flight"
              }`}
              key={i}
              className="flex flex-col items-center text-center transition hover:scale-105"
            >
              <div className="w-28 h-28 md:w-28 md:h-28 rounded-full overflow-hidden shadow-md">
                <img
                  src={imageSrc}
                  alt={cat.title}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="mt-3 text-sm md:text-base font-medium text-blue-800">
                {cat.title}
              </h3>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
