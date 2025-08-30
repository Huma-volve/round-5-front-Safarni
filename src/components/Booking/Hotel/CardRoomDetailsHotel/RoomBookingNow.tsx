import { useState } from "react";

function RoomBookingNow() {
  const [adultCount, setAdultCount] = useState(0 as number);
  const [childCount, setChildCount] = useState(0 as number);
  const [infantCount, setInfantCount] = useState(0 as number);
  return (
    <div className="w-full flex flex-col mb-14">
      <div className="flex justify-between items-center border-b mb-8 pb-4">
        <div className="">
          <p className="text-xl mb-2">Adults</p>
          <p className="text-[#4B5563]">Ages 18 Or Above</p>
        </div>
        <div className="flex items-center justify-center gap-4">
          <button
            onClick={() => {
              setAdultCount(() => Math.max(adultCount - 1, 0));
            }}
            className="px-2 border-none bg-[#F3F4F6] border"
          >
            -
          </button>
          <p>{adultCount}</p>
          <button
            onClick={() => {
              setAdultCount(adultCount + 1);
            }}
            className="px-2 border-none bg-primary text-white border rounded"
          >
            +
          </button>
        </div>
      </div>
      <div className="flex justify-between items-center border-b mb-8 pb-4">
        <div className="">
          <p className="text-xl mb-2">Children</p>
          <p className="text-[#4B5563]">Ages 2-17</p>
        </div>
        <div className="flex items-center justify-center gap-4">
          <button
            onClick={() => {
              setChildCount(() => Math.max(childCount - 1, 0));
            }}
            className="px-2 border-none bg-[#F3F4F6] border"
          >
            -
          </button>
          <p>{childCount}</p>
          <button
            onClick={() => {
              setChildCount(childCount + 1);
            }}
            className="px-2 border-none bg-primary text-white border rounded"
          >
            +
          </button>
        </div>
      </div>
      <div className="flex justify-between items-center border-b mb-8 pb-4">
        <div className="">
          <p className="text-xl mb-2">Infants</p>
          <p className="text-[#4B5563]">Under Ages 2</p>
        </div>
        <div className="flex items-center justify-center gap-4">
          <button
            onClick={() => {
              setInfantCount(() => Math.max(infantCount - 1, 0));
            }}
            className="px-2 border-none bg-[#F3F4F6] border"
          >
            -
          </button>
          <p>{infantCount}</p>
          <button
            onClick={() => {
              setInfantCount(infantCount + 1);
            }}
            className="px-2 border-none bg-primary text-white border rounded"
          >
            +
          </button>
        </div>
      </div>
      <button
        onClick={() => {}}
        className="w-full bg-[--primary] text-white py-3 rounded-lg mt-6 hover:opacity-90 transition"
      >
        Check Out
      </button>
    </div>
  );
}

export default RoomBookingNow;
