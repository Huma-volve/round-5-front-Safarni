import CardRoomHotel from "@/components/Booking/Hotel/CardRoomHotel";
import { Link } from "react-router-dom";

function RoomHotelPage() {
  return (
    <div className="mt-12 px-6 py-4 md:px-12 lg:px-32">
      <div className="flex justify-between items-center mb-6 text-[13px] md:text-lg">
        <p className="font-semibold">Available Rooms</p>
        <Link to="" className="text-primary ">
          View all
        </Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        <CardRoomHotel />
        <CardRoomHotel />
        <CardRoomHotel />
        <CardRoomHotel />
      </div>
    </div>
  );
}

export default RoomHotelPage;
