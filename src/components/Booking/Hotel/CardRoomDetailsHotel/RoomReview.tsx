import EditIcon from "@/assets/images/icons/EditIcon.svg";
import SearchIcon from "@/assets/images/icons/SearchIcon.svg";
import ImgStar from "@/assets/images/icons/ImgStar.svg";
import ImgNotFound from "@/assets/images/noimage-home.png";

function RoomReview() {
  return (
    <div>
      <div className="flex justify-between items-center my-7 font-medium">
        <div className="text-xl">add review</div>
        <div className="flex items-center cursor-pointer">
          <img src={EditIcon} alt="add review" className="mr-2" />{" "}
          <span className="text-[--primary] text-md">add review</span>
        </div>
      </div>
      <div className="relative w-full">
        <input
          type="text"
          placeholder="Search..."
          className="w-full pl-10 pr-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <img
          src={SearchIcon}
          alt="search"
          className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"
        />
      </div>
      <div className="my-7">
        <div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full overflow-hidden">
                <img
                  src={ImgNotFound}
                  alt="user review"
                  className="w-full h-full object-cover"
                />
              </div>
              <p>Dale Thiel</p>
            </div>
            <p>11 months ago</p>
          </div>
          <div className="flex gap-1">
            <img className="mt-2" src={ImgStar} alt="ImgStar" />
            <img className="mt-2" src={ImgStar} alt="ImgStar" />
            <img className="mt-2" src={ImgStar} alt="ImgStar" />
          </div>
          <p className="my-4 ">
            I really enjoyed my stay—the room was clean, the staff were
            friendly, and everything I needed was nearby.
          </p>
        </div>
        <div>
          <p className="text-xl">
            Total price :{" "}
            <span className="text-[--primary] text-2xl">$150.00</span>/night
          </p>
        </div>
        <button className="w-full bg-[--primary] text-white py-3 rounded-lg mt-6 hover:opacity-90 transition">
          Book Now
        </button>
      </div>
    </div>
  );
}

export default RoomReview;
