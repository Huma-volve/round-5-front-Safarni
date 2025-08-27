import { Star } from "lucide-react";

type StarCompProps = {
  rating: number;
};

/**
 * Create an array from an object with length 5.
 * Use map to loop over this array.
 * We git the index (i), omit the element itself (_).
 * Every loop add a lucide icon start.
 * Check if the i is less than the rating (i.e we didn't reach the rating yet and we will color the star with yellow)
 * if less fill yellow, else fill grey
 */

function StarRating({ rating }: StarCompProps) {
  return (
    <div className="flex">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={20}
          className={`${
            i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
          }`}
        />
      ))}
    </div>
  );
}
export default StarRating;
