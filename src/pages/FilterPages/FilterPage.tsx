import { ChevronLeft, Star } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Range } from "react-range"; // 
import rangeImg from "@/assets/images/filter-range.png";

export default function FilterPage() {
  const [sortOption, setSortOption] = useState("");
  const [values, setValues] = useState([0, 1000]); 
  const [location, setLocation] = useState("");
  const [rating, setRating] = useState<number | null>(null);
  const navigate = useNavigate();
  const sortOptions = [
    { key: "low", label: "Price (Low to High)" },
    { key: "high", label: "Price (High to Low)" },
    { key: "reviewed", label: "Most Reviewed" },
    { key: "alpha", label: "Alphabetical" },
  ];

  const isDisabled =
    sortOption === "" &&
    values[0] === 0 &&
    values[1] === 5000 &&
    !location &&
    !rating;

  const handleClear = () => {
    setSortOption("low");
    setValues([0, 5000]);
    setLocation("");
    setRating(null);
  };
  // navigate to the result page
  const handleViewTours = () => {
  const params = new URLSearchParams();

  if (values[0]) params.append("min_price", values[0].toString());
  if (values[1]) params.append("max_price", values[1].toString());
  if (rating) params.append("min_rating", rating.toString());
  if (location) params.append("location", location);
  if (sortOption) {
    if (sortOption === "low") {
      params.append("sort_by", "price");
      params.append("sort_order", "asc");
    }
    if (sortOption === "high") {
      params.append("sort_by", "price");
      params.append("sort_order", "desc");
    }
    if (sortOption === "reviewed") {
      params.append("sort_by", "views");
      params.append("sort_order", "desc");
    }
    if (sortOption === "alpha") {
      params.append("sort_by", "title");
      params.append("sort_order", "asc");
    }
  }

  navigate(`/filter-tours?${params.toString()}`);
};

  return (
    <div className="bg-white px-4 md:px-12 lg:px-32 py-3 w-full">
      {/* Mobile Header */}
      <div className="md:hidden">
        <div className="relative flex items-center justify-center mb-4">
          <Link to=".." className="absolute left-0">
            <ChevronLeft
              size={38}
              className="bg-gray-200 rounded-full p-2 text-gray-800"
            />
          </Link>
          <h2 className="text-lg font-semibold text-gray-800">Filter</h2>
        </div>
      </div>

      {/* Laptop Header */}
      <div className="hidden md:flex items-center mb-4">
        <Link to="..">
          <ChevronLeft
            size={42}
            className="bg-gray-200 rounded-full px-2 py-2 text-gray-800"
          />
        </Link>
      </div>

      {/* Body */}
      <div className="space-y-6">
        {/* Sort */}
        <div>
          <h2 className="font-semibold mb-2 text-black">Sort By</h2>
          <div className="flex flex-wrap gap-4 mt-4">
            {sortOptions.map((opt) => (
              <button
                key={opt.key}
                onClick={() => setSortOption(opt.key)}
                className={`px-4 py-2 rounded-full text-sm font-medium border transition 
                  ${
                    sortOption === opt.key
                      ? "bg-blue-100 text-blue-800 border-blue-100"
                      : "bg-white text-gray-700 border-gray-300 hover:bg-blue-50"
                  }`}>
                {opt.label}
              </button>
            ))}
          </div>
        </div>
        <hr />

        {/* Budget Range */}
        <div>
          <h2 className="font-semibold mb-2 text-black">Budget Range</h2>
          <div className="flex flex-col items-center gap-6 mt-4">
            <img src={rangeImg} alt="range" className="w-3/4 max-w-sm" />

            {/* Double Range */}
            <div className="flex flex-col w-full max-w-md items-center">
              <Range
                values={values}
                step={100}
                min={0}
                max={1000}
                onChange={(vals) => setValues(vals)}
                renderTrack={({ props, children }) => (
                  <div
                    {...props}
                    className="h-2 w-full rounded-full bg-gray-200 relative">
                    <div
                      className="h-2 bg-blue-500 rounded-full absolute"
                      style={{
                        left: `${(values[0] / 1000) * 100}%`,
                        right: `${100 - (values[1] / 1000) * 100}%`,
                      }}
                    />
                    {children}
                  </div>
                )}
                renderThumb={({ props }) => {
                  const { key, ...rest } = props;
                  return (
                    <div
                      key={key}
                      {...rest}
                      className="h-5 w-5 bg-blue-600 rounded-full border-2 border-white shadow-md cursor-pointer"
                    />
                  );
                }}
              />

              {/* Labels */}
              <div className="flex justify-between w-full mt-3 text-sm font-medium">
                <div>
                  <h2 className="text-gray-500">Min</h2>
                  <h5 className="text-gray-800">${values[0]}</h5>
                </div>
                <div>
                  <h2 className="text-gray-500">Max</h2>
                  <h5 className="text-gray-800">${values[1]}</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr />

        {/* Location */}
        <div>
          <h2 className="font-semibold mb-2 text-black">Location</h2>
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Enter location..."
            className="w-full px-4 mt-4 py-3 border rounded-xl bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <hr />

        {/* Rating */}
        <div>
          <h2 className="font-semibold mb-2 text-black">Rating</h2>
          <div className="flex gap-3 mt-4 flex-wrap">
            {[1, 2, 3, 4, 5].map((num) => (
              <button
                key={num}
                onClick={() => setRating(num)}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl border transition  
                  ${
                    rating === num
                      ? "bg-blue-100 text-blue-800 border-blue-200"
                      : "bg-gray-50 text-gray-700 border-gray-300 hover:bg-blue-50"
                  }`}>
                <Star
                  size={18}
                  className={`${
                    rating === num
                      ? "fill-blue-500 text-blue-500"
                      : "fill-gray-300"
                  }`}
                />
                <span>{num}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-col md:flex-row gap-2 w-full">
          <button
            onClick={handleClear}
            className="mt-7 flex-1 text-blue-900 bg-white border border-blue-900 font-semibold py-3 mb-1 md:mb-2 hover:bg-gray-50">
            Clear all
          </button>
          <button
            onClick={handleViewTours}
            disabled={isDisabled}
            className={`mt-1 md:mt-7 flex-1 font-semibold py-3 mb-16 md:mb-2 ${
              isDisabled
                ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                : "bg-blue-900 text-white hover:bg-blue-950"
            }`}>
            View Tours
          </button>
        </div>
      </div>
    </div>
  );
}
