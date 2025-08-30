import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Swiper, SwiperSlide } from "swiper/react";
import { Thumbs } from "swiper/modules";
import "swiper/css";
import "swiper/css/thumbs";

export default function RoomImageSection() {
  const images = [
    "https://picsum.photos/id/1018/1000/600",
    "https://picsum.photos/id/1015/1000/600",
    "https://picsum.photos/id/1019/1000/600",
    "https://picsum.photos/id/1020/1000/600",
    "https://picsum.photos/id/1021/1000/600",
  ];

  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);

  return (
    <Card className="w-full max-w-xs 2xl:max-w-2xl xl:max-w-xl mx-auto shadow-xl rounded-2xl">
      <CardContent className="p-0 relative">
        {/* Large image */}
        <Swiper
          modules={[Thumbs]}
          thumbs={{ swiper: thumbsSwiper }}
          className="h-[650px] rounded-2xl"
        >
          {images.map((src, i) => (
            <SwiperSlide key={i}>
              <img
                src={src}
                alt={`Room ${i}`}
                className="w-full h-full object-cover rounded-2xl"
              />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Thumbnails */}
        <div className="absolute bottom-3 left-0 w-full px-4">
          <Swiper
            modules={[Thumbs]}
            onSwiper={setThumbsSwiper}
            slidesPerView={4}
            spaceBetween={8}
            watchSlidesProgress
          >
            {images.map((src, i) => (
              <SwiperSlide key={i}>
                <img
                  src={`${src}?w=200&h=120`}
                  alt={`Thumbnail ${i}`}
                  loading="lazy"
                  className="w-full h-20 object-cover rounded-md cursor-pointer border-2 border-white shadow-md"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </CardContent>
    </Card>
  );
}
