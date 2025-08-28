import EditIcon from "@/assets/images/icons/EditIcon.svg";
import SearchIcon from "@/assets/images/icons/SearchIcon.svg";
import ImgStar from "@/assets/images/icons/ImgStar.svg";
import ImgNotFound from "@/assets/images/noimage-home.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { reviews } from "@/data/BookingHotel";

function RoomReview({ setActiveTab }: { setActiveTab: (tab: string) => void }) {
  return (
    <div>
      <div className="flex justify-between items-center my-7 font-medium">
        <div className="text-xl">add review</div>
        <div
          onClick={() => setActiveTab("addReview")}
          className="flex items-center cursor-pointer"
        >
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
        <Swiper
          modules={[Navigation, Pagination]}
          pagination={{ clickable: true }}
          spaceBetween={20}
          slidesPerView={1}
          className="w-full max-w-xs 2xl:max-w-3xl xl:max-w-xl mx-auto"
        >
          {reviews?.map((review) => (
            <SwiperSlide key={review.id}>
              <div className="p-4 border rounded-xl shadow-md bg-white">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full overflow-hidden">
                      <img
                        src={review.avatar}
                        alt={review.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <p className="font-medium">{review.name}</p>
                  </div>
                  <p className="text-sm text-gray-500">{review.time}</p>
                </div>

                {/* ImgStar */}
                <div className="flex gap-1 mt-2">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <img key={i} src={ImgStar} alt="star" className="w-4 h-4" />
                  ))}
                </div>

                {/* comment */}
                <p className="my-3 text-gray-700">{review.comment}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div>
          <p className="text-xl mt-7">
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
