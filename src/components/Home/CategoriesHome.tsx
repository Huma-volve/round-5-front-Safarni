import { useState } from "react";
import { useCategories } from "@/hooks/Categories/useCategories";

export default function CategoriesHome() {
  const { categories, isLoading, isError } = useCategories();
  const [showAll, setShowAll] = useState(false);

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Something went wrong!</p>;

  const visibleCategories = showAll ? categories : categories.slice(0, 4);

  return (
    <div className="mt-12 px-6 py-4 md:px-12 lg:px-32 mb-12">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl md:text-2xl font-semibold text-gray-900">Categories</h2>
        {categories.length > 8 && (
          <button
            onClick={() => setShowAll(!showAll)}
            className="text-sm md:text-base text-blue-600 hover:underline"
          >
            {showAll ? "See less" : "See all"}
          </button>
        )}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mt-3">
        {visibleCategories.map((cat, i) => (
          <div
            key={i}
            className="flex flex-col items-center text-center transition hover:scale-105"
          >
            <div className="w-24 h-24 md:w-28 md:h-28 rounded-full overflow-hidden shadow-md">
              <img
                src={cat.image}
                alt={cat.title}
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="mt-3 text-sm md:text-base font-medium">{cat.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
