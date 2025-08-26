import heroImage from "@/assets/images/paris-hero.jpg";
import { Star } from "lucide-react";

function DestinationHero({props}:any) {
    // const {} = props
  return (
    <div>
      {/* Image */}
      <div
        style={{ backgroundImage: `url(${heroImage})` }}
        className="w-full md:h-[400px] aspect-[16/9] bg-center bg-cover rounded-lg my-3"
      ></div>

      {/* Title & Rating */}
      <div className="flex justify-between my-3">
        <h2 className="font-bold">Eiffel Tower</h2>
        <div className="flex gap-2">
          <div className="flex gap-[2px] *:w-[15px] *:fill-yellow-500 *:stroke-none">
            <Star />
            <Star />
            <Star />
            <Star />
            <Star />
          </div>
          <p>
            {4.5} (<span>{625}</span>)
          </p>
        </div>
      </div>

      {/* Info */}
      <div className="flex flex-col sm:flex-row justify-between my-3 *:inline-block *:max-sm:my-2 text-gray-600 font-semibold">
        <span className="max-sm:font-bold">City Breaks</span>
        <span className="max-sm:text-sm">7 Days and 6 Nights</span>
        <span className="max-sm:text-xs">Paris, France</span>
      </div>
    </div>
  );
}
export default DestinationHero;
