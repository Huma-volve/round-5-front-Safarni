import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import places from "@/assets/images/intro-places.png";
import img1 from "@/assets/images/trip1.jpg";
import img2 from "@/assets/images/trip2.jpg";
import img3 from "@/assets/images/trip3.jpeg";
import img4 from "@/assets/images/boat-trips.jpg";

import "swiper/css";
import "swiper/css/pagination";

export default function IntroHome() {
  return (
    <div className="container mx-auto px-6 md:px-12 lg:px-32 mt-10">
      {/* --- Mobile Slider --- */}
      <div className="block md:hidden">
        <Swiper
          modules={[Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          pagination={{ clickable: true }}
        >
          <SwiperSlide>
            <img src={img1} alt="Slide 1" className="rounded-xl w-full h-64 object-cover" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img2} alt="Slide 2" className="rounded-xl w-full h-64 object-cover" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img3} alt="Slide 3" className="rounded-xl w-full h-64 object-cover" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img4} alt="Slide 3" className="rounded-xl w-full h-64 object-cover" />
          </SwiperSlide>
        </Swiper>
      </div>

      {/* --- Desktop / Tablet Layout --- */}
      <div className="hidden md:flex flex-col md:flex-row justify-between items-center gap-12">
        {/* desc */}
        <div className="flex flex-col md:w-3/5 lg:w-1/2 text-center md:text-left">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[55px] font-semibold text-black capitalize tracking-wide">
            Visit the most <span className="text-[#1E429F]">beautiful places</span><br /> in the world
          </h2>
          <p className="mt-4 text-sm sm:text-base lg:text-lg text-gray-500 leading-relaxed max-w-full lg:max-w-[80%] mx-auto md:mx-0">
            Explore stunning destinations around the globe. Find travel inspiration,
            top attractions, and plan your next adventure—all from one platform.
          </p>
        </div>

        {/* images */}
        <div className="md:w-2/5 lg:w-1/2 flex justify-center">
          <img
            src={places}
            loading="lazy"
            alt="places"
            className="w-[260px] sm:w-[320px] md:w-[400px] lg:w-[600px]"
          />
        </div>
      </div>
    </div>
  );
}
