import CardRoomDetailsHotel from "@/components/Booking/Hotel/CardRoomDetailsHotel";
import React from "react";
import { Link } from "react-router-dom";

function RoomDetailsHotelPage() {
  return (
    <div className="mt-12 px-6 py-4 md:px-12 lg:px-32">
      <Link
        to={`/booking/hotel/${1}`}
        className="w-fit block mb-8 p-4 rounded-full text-2xl bg-[#F3F4F6] cursor-pointer"
      >
        {"<"}
      </Link>
      <div>
        <CardRoomDetailsHotel />
      </div>
    </div>
  );
}

export default RoomDetailsHotelPage;
