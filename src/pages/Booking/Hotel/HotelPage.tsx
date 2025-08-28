import CardNearbyHotel from "@/components/Booking/Hotel/CardNearbyHotel";
import CardRecommendHotel from "@/components/Booking/Hotel/CardRecommendHotel";
import { Link } from "react-router-dom";

function HotelPage() {
  return (
    <div className="mt-12 px-6 py-4 md:px-12 lg:px-32">
      <div className="flex justify-between items-center mb-6 text-[13px] md:text-lg">
        <p className="font-semibold">Recommendation</p>
        <Link to="" className="text-primary ">
          View all
        </Link>
      </div>
      <div
        className="
          grid gap-4
          grid-flow-col auto-cols-[270px] overflow-x-auto  
          md:grid-cols-2 md:grid-flow-row md:auto-cols-auto md:overflow-visible 
          lg:grid-cols-3 xl:grid-cols-4
        "
      >
        <CardRecommendHotel />
        <CardRecommendHotel />
        <CardRecommendHotel />
        <CardRecommendHotel />
      </div>
      <div className="flex justify-between items-center my-6 text-[13px] md:text-lg">
        <p className="font-semibold">Nearby Hotel</p>
        <Link to="" className="text-primary ">
          View all
        </Link>
      </div>
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
        <CardNearbyHotel />
        <CardNearbyHotel />
        <CardNearbyHotel />
        <CardNearbyHotel />
      </div>
    </div>
  );
}

export default HotelPage;
