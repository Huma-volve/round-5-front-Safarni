import ImgHotel from "@/assets/images/ImgHotel.png";
import ImgStar from "@/assets/images/icons/ImgStar.svg";
import ImgLocation from "@/assets/images/icons/Location.svg";
function CardRecommendHotel() {
  return (
    <>
      <div className="p-4 border border-gray-200 rounded-3xl">
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
      </div>
    </>
  );
}

export default CardRecommendHotel;
