import React from "react";
import ImgStar from "@/assets/images/icons/ImgStar.svg";
import RoomAbout from "./RoomAbout";
import RoomGallery from "./RoomGallery";
import RoomReview from "./RoomReview";
import RoomAddReview from "./RoomAddReview";
import RoomBooking from "./RoomBooking";
type RoomHeaderProps = {
  activeTab: string;
  setActiveTab: React.Dispatch<React.SetStateAction<string>>;
};
function RoomHeader({ activeTab, setActiveTab }: RoomHeaderProps) {
  return (
    <>
      <div className="w-full md:max-w-3xl lg:max-w-4xl xl:max-w-5xl mx-auto">
        <div>
          <div className="flex justify-between items-center">
            <p className="text-sm bg-[--primary-foreground] text-primary py-2 px-4 rounded-2xl">
              10% Off
            </p>
            <div className="flex items-start gap-1">
              <img src={ImgStar} alt="ImgStar" />
              <p>4.2 (356 reviews)</p>
            </div>
          </div>
          <div className="my-5">
            <h2 className="text-2xl font-semibold mb-2">
              HarborHaven HIdeaway
            </h2>
            <p className="text-[--input]">1012 oscean avanue, New Yourk ,USA</p>
          </div>

          {activeTab === "booking" ? (
            <RoomBooking setActiveTab={setActiveTab} />
          ) : activeTab === "addReview" ? (
            <RoomAddReview />
          ) : (
            <ul className="flex justify-between border-b gap-10 text-lg text-[--muted]">
              <li
                className={`${
                  activeTab === "about"
                    ? "border-b-2 border-[--primary] text-primary"
                    : ""
                }`}
              >
                <button onClick={() => setActiveTab("about")}>About</button>
              </li>
              <li
                className={`${
                  activeTab === "gallery"
                    ? "border-b-2 border-[--primary] text-primary"
                    : ""
                }`}
              >
                <button onClick={() => setActiveTab("gallery")}>Gallery</button>{" "}
              </li>
              <li
                className={`${
                  activeTab === "review"
                    ? "border-b-2 border-[--primary] text-primary"
                    : ""
                }`}
              >
                <button onClick={() => setActiveTab("review")}>Review</button>
              </li>
            </ul>
          )}
        </div>
        <div>
          {activeTab === "about" && <RoomAbout setActiveTab={setActiveTab} />}
          {activeTab === "gallery" && (
            <RoomGallery setActiveTab={setActiveTab} />
          )}
          {activeTab === "review" && <RoomReview setActiveTab={setActiveTab} />}
        </div>
      </div>
    </>
  );
}

export default RoomHeader;
