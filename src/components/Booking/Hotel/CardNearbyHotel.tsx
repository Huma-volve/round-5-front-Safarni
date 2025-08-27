import ImgHotel from "@/assets/images/ImgHotel.png";
import ImgLocation from "@/assets/images/icons/Location.svg";
import ImgStar from "@/assets/images/icons/ImgStar.svg";
import { Link } from "react-router-dom";

function CardNearbyHotel() {
  return (
    <>
      <Link
        to={`/booking/hotel/${1}`}
        className="p-4 border border-gray-200 rounded-3xl flex gap-4 shadow-[0px_3.39px_13.58px_0px_#838BB41F] hover:shadow-[0px_10px_30px_0px_#6F6F6F40] transition-shadow duration-300"
      >
        <img
          className="w-24 h-24 object-cover rounded-xl"
          src={ImgHotel}
          alt="Nearby Hotel"
        />
        <div className="flex justify-between w-full">
          <div>
            <p className="w-fit text-[12px] md:text-sm bg-[--primary-foreground] text-primary py-2 px-4 rounded-2xl">
              10% Off
            </p>
            <h3 className="font-semibold md:text-lg my-2 text-sm">
              Oasis Overture
            </h3>
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <img src={ImgLocation} alt="Location" />
              <p>New York, USA</p>
            </div>
          </div>
          <div>
            <div className="flex items-start gap-1">
              <img src={ImgStar} alt="ImgStar" />
              <p>4.2</p>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
}

export default CardNearbyHotel;
