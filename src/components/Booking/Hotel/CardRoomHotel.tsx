import ImgHotel from "@/assets/images/ImgHotel.png";
import { Link } from "react-router-dom";

function CardRoomHotel() {
  return (
    <Link
      to={`/hotel/${1}/room/${1}`}
      className="p-4 border border-gray-200 rounded-3xl shadow-[0px_0px_26.37px_0px_#6F6F6F40] hover:shadow-[0px_10px_30px_0px_#6F6F6F40] transition-shadow duration-300"
    >
      <img
        className="w-full h-40 object-cover rounded-2xl"
        src={ImgHotel}
        alt="room"
      />
      <h3 className="font-medium my-4 text-lg">Room_1</h3>
      <p>
        From <span className="text-[--primary] font-semibold">200$ </span> Per
        Night
      </p>
    </Link>
  );
}

export default CardRoomHotel;
