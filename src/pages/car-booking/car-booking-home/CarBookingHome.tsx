import Brands from "@/components/car-booking/brands/Brands";
import PopularCarsCard from "@/components/car-booking/popular-cars-card/PopularCarsCard";
import brand from "@/data/Brands";
import { CarData } from "@/types/CarDataTypes";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Autoplay } from "swiper/modules";

export default function CarBookingHome() {
  const token = localStorage.getItem("token");
  const { data } = useQuery({
    queryKey: ["car"],
    queryFn: async () => {
      const options = {
        method: "get",
        url: "https://round5-safarnia.huma-volve.com/api/cars",
        headers: {
          Authorization: `bearer${token}`,
        },
      };
      const { data } = await axios.request(options);
      return data;
    },
  });
  return (
    <>
      <div className="gap-14 flex flex-col container mx-auto my-8">
        <div className="flex gap-4 justify-between ">
          <Swiper
            spaceBetween={10}
            slidesPerView={6}
            slidesPerGroup={3}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
          >
            {brand.map((item) => (
              <SwiperSlide>
                {" "}
                <Brands key={item.id} item={item} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className=" grid grid-cols-1 md:grid-cols-2 -space-y-4  md:space-y-6 gap-4 lg:gap-6">
          {data?.map((item: CarData) => (
            <PopularCarsCard item={item} key={item.id} />
          ))}
        </div>
      </div>
    </>
  );
}
