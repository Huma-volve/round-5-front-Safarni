import React, { useState } from "react";
import ImgStar from "@/assets/images/icons/ImgStar.svg";

function RoomHeader() {
  const [activeTab, setActiveTab] = useState("about");
  return (
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
        <h2 className="text-2xl font-semibold mb-2">HarborHaven HIdeaway</h2>
        <p className="text-[--input]">1012 oscean avanue, New Yourk ,USA</p>
      </div>
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
    </div>
  );
}

export default RoomHeader;
