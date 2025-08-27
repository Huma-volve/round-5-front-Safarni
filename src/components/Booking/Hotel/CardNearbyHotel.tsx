import ImgHotel from "@/assets/images/ImgHotel.png";
import ImgLocation from "@/assets/images/icons/Location.svg";
import ImgStar from "@/assets/images/icons/ImgStar.svg";

function CardNearbyHotel() {
  return (
    <>
      <div className="p-4 border border-gray-200 rounded-3xl flex gap-4">
        <img
          className="w-24 h-24 object-cover rounded-xl"
          src={ImgHotel}
          alt="Nearby Hotel"
        />
        <div className="flex justify-between w-full">
          <div>
            <p className="w-fit text-sm bg-[--primary-foreground] text-primary py-2 px-4 rounded-2xl">
              10% Off
            </p>
            <h3 className="font-semibold text-lg my-1">Oasis Overture</h3>
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
      </div>
    </>
  );
}

export default CardNearbyHotel;
