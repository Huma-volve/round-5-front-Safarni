import BathIcon from "@/assets/images/icons/BathIcon.svg";
import BedIcon from "@/assets/images/icons/BedIcon.svg";
import SquareIcon from "@/assets/images/icons/SquareIcon.svg";
import CameraIcon from "@/assets/images/icons/CameraIcon.svg";
import { useState } from "react";
function RoomAbout() {
  const [expanded, setExpanded] = useState(false);
  return (
    <div>
      <ul className="flex justify-between items-center gap-10 my-7 text-[--muted]">
        <li className="flex items-center justify-center flex-wrap">
          <img src={BedIcon} alt="Bed" className="mr-2" />
          <span>1 Beds</span>
        </li>
        <li className="flex items-center justify-center flex-wrap">
          <img src={BathIcon} alt="Bath" className="mr-2" />
          <span>1 Bath</span>
        </li>
        <li className="flex items-center justify-center flex-wrap">
          <img src={SquareIcon} alt="Area" className="mr-2" />
          <span>350 Sqrt</span>
        </li>
      </ul>
      <div className="flex justify-between items-center font-medium">
        <div className="text-xl">
          Gallery <span className="text-[--primary]">(200)</span>
        </div>
        <div className="flex items-center cursor-pointer">
          <img src={CameraIcon} alt="CameraIcon" className="mr-2" />{" "}
          <span className="text-[--primary] text-md">add Photo</span>
        </div>
      </div>
      <div className="relative text-lg my-7">
        <span className={expanded ? "" : "line-clamp-3"}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the industry. Lorem Ipsum has been the industry's standard dummy
          text ever since the industry. Lorem Ipsum has been the industry's
          standard dummy text ever since the industry. Lorem Ipsum has been the
          industry's standard dummy text ever since the
        </span>
        {!expanded && (
          <button
            onClick={() => setExpanded(true)}
            className="absolute right-0 bottom-0 bg-white pl-2 text-blue-500"
          >
            Read more
          </button>
        )}
        {expanded && (
          <button
            onClick={() => setExpanded(false)}
            className="ml-2 text-blue-500"
          >
            Read less
          </button>
        )}
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
  );
}

export default RoomAbout;
