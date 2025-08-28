import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/navigation";
import { Grid, Navigation } from "swiper/modules";
import CameraIcon from "@/assets/images/icons/CameraIcon.svg";

export default function RoomGallery() {
  return (
    <>
      <div className="flex justify-between items-center my-7 font-medium">
        <div className="text-xl">
          Gallery <span className="text-[--primary]">(200)</span>
        </div>
        <div className="flex items-center cursor-pointer">
          <img src={CameraIcon} alt="CameraIcon" className="mr-2" />{" "}
          <span className="text-[--primary] text-md">add Photo</span>
        </div>
      </div>
      <div className="w-full max-w-sm xl:max-w-xl mx-auto relative">
        <button className="hidden xl:block prev-btn absolute -left-14 top-1/2 -translate-y-1/2 bg-gray-200 px-4 py-2  rounded-full shadow">
          {"<"}
        </button>
        <button className="hidden xl:block next-btn absolute -right-6 top-1/2 -translate-y-1/2 bg-gray-200 px-4 py-2  rounded-full shadow">
          {">"}
        </button>

        <Swiper
          slidesPerView={4}
          grid={{
            rows: 2,
            fill: "row",
          }}
          spaceBetween={10}
          navigation={{
            nextEl: ".next-btn",
            prevEl: ".prev-btn",
          }}
          modules={[Grid, Navigation]}
          className="mySwiper"
        >
          {[
            "https://picsum.photos/id/1015/400/300",
            "https://picsum.photos/id/1016/400/300",
            "https://picsum.photos/id/1018/400/300",
            "https://picsum.photos/id/1020/400/300",
            "https://picsum.photos/id/1024/400/300",
            "https://picsum.photos/id/1025/400/300",
            "https://picsum.photos/id/1027/400/300",
            "https://picsum.photos/id/1031/400/300",
            "https://picsum.photos/id/1032/400/300",
            "https://picsum.photos/id/1033/400/300",
          ].map((src, index) => (
            <SwiperSlide key={index}>
              <img
                src={src}
                alt={`Room ${index + 1}`}
                className="w-[100px] h-[80px] object-cover rounded-md border"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="mb-16 mt-7">
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
    </>
  );
}
