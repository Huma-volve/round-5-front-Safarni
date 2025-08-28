import ImgHotel from "@/assets/images/ImgHotel.png";
import ImgStar from "@/assets/images/icons/ImgStar.svg";
import ImgLocation from "@/assets/images/icons/Location.svg";
import { Link } from "react-router-dom";
function CardRecommendHotel() {
  return (
    <>
      <Link
        to={`/hotel/${1}`}
        className="p-4 border border-gray-200 rounded-3xl shadow-[0px_0px_26.37px_0px_#6F6F6F40] hover:shadow-[0px_10px_30px_0px_#6F6F6F40] transition-shadow duration-300"
      >
        <img
          src={ImgHotel}
          alt="Hotel"
          className="w-full h-40 object-cover rounded-2xl"
        />

        <div className="flex justify-between items-center my-4">
          <p className="text-sm bg-[--primary-foreground] text-primary py-2 px-4 rounded-2xl">
            10% Off
          </p>
          <div className="flex items-start gap-1">
            <img src={ImgStar} alt="ImgStar" />
            <p>4.2</p>
          </div>
        </div>

        <h3 className="font-semibold text-lg">Oasis Overture</h3>
        <div className="flex items-center gap-2 text-sm text-gray-400 mt-2">
          <img src={ImgLocation} alt="Location" />
          <p>New York, USA</p>
        </div>
      </Link>
    </>
  );
}

export default CardRecommendHotel;
