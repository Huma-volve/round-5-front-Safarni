import { useState } from "react";
import RoomHeader from "./RoomHeader";
import RoomImageSection from "./RoomImageSection";
import RoomBookingNow from "./RoomBookingNow";

function CardRoomDetailsHotel() {
  const [activeTab, setActiveTab] = useState("about");
  return (
    <div className="flex flex-col md:flex-row gap-10 w-full">
      <div className="flex-1">
        <RoomImageSection />
      </div>
      {activeTab === "bookingNow" ? (
        <div className="flex-1 flex items-center justify-center">
          <RoomBookingNow />
        </div>
      ) : (
        <div className={"flex-1"}>
          <RoomHeader activeTab={activeTab} setActiveTab={setActiveTab} />
        </div>
      )}
    </div>
  );
}

export default CardRoomDetailsHotel;
