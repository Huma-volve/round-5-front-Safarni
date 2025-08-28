import RoomHeader from "./RoomHeader";
import RoomImageSection from "./RoomImageSection";

function CardRoomDetailsHotel() {
  return (
    <div className="flex flex-col md:flex-row gap-10 w-full">
      <div className="flex-1">
        <RoomImageSection />
      </div>
      <div className="flex-1">
        <RoomHeader />
      </div>
    </div>
  );
}

export default CardRoomDetailsHotel;
