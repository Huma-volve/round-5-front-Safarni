import { useState } from "react";

  const fakeImages = [
    "https://picsum.photos/id/1011/400/400",
    "https://picsum.photos/id/1012/400/400",
    "https://picsum.photos/id/1013/400/400",
    "https://picsum.photos/id/1014/400/400",
    "https://picsum.photos/id/1015/400/400",
    "https://picsum.photos/id/1016/400/400",
    "https://picsum.photos/id/1018/400/400",
    "https://picsum.photos/id/1020/400/400",
    "https://picsum.photos/id/1024/400/400",
    "https://picsum.photos/id/1025/400/400",
    "https://picsum.photos/id/1027/400/400",
    "https://picsum.photos/id/1028/400/400",
  ];


export default function Gallery({images}:any) {

  //fallback images array (temporary)
  if (images.length === 0) images = fakeImages 

  const [visibleCount, setVisibleCount] = useState(6);

  const handleSeeMore = () => {
    setVisibleCount((prev) =>
      prev + 6 > images.length ? images.length : prev + 6
    );
  };

  return (
    <div className="section-margin">
      {/* Title */}
      <h2 className="section-header">
        Gallery <span className="text-blue-600">({images.length})</span>
      </h2>

      {/* Image grid */}
      <div className="grid grid-cols-2 sm:grid-cols-6 gap-3 my-3">
        {images.slice(0, visibleCount).map((src:string, i:number) => (
          <img
            key={i}
            src={src}
            alt={`gallery-${i}`}
            className="w-full aspect-square object-cover rounded-lg shadow"
          />
        ))}
      </div>

      {/* See more button */}
      {visibleCount < images.length && (
        <div className="flex justify-center mt-4">
          <button
            onClick={handleSeeMore}
            className="text-blue-600 flex items-center gap-2"
          >
            <span className="text-lg">+</span> See More
          </button>
        </div>
      )}
    </div>
  );
}
