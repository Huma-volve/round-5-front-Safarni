import { useState } from "react";
import { ReviewCard } from "./ReviewCard";

const fakeReviews = [
  {
    id: 1,
    name: "Dale Thiel",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    date: "11 months ago",
    rating: 4.5,
    text: "I really enjoyed my stay—the room was clean, the staff were friendly, and everything I needed was nearby.",
  },
  {
    id: 2,
    name: "Dale Thiel",
    avatar: "https://randomuser.me/api/portraits/men/45.jpg",
    date: "11 months ago",
    rating: 3.5,
    text: "I really enjoyed my stay—the room was clean, the staff were friendly, and everything I needed was nearby.",
  },
  {
    id: 3,
    name: "Dale Thiel",
    avatar: "https://randomuser.me/api/portraits/men/50.jpg",
    date: "11 months ago",
    rating: 2,
    text: "I really enjoyed my stay—the room was clean, the staff were friendly, and everything I needed was nearby.",
  },
  {
    id: 4,
    name: "Dale Thiel",
    avatar: "https://randomuser.me/api/portraits/men/60.jpg",
    date: "11 months ago",
    rating: 5,
    text: "I really enjoyed my stay—the room was clean, the staff were friendly, and everything I needed was nearby.",
  },
];


export default function Reviews({reviews = fakeReviews}) {
  const [visibleCount, setVisibleCount] = useState(2);

  const handleSeeMore = () => {
    setVisibleCount((prev) =>
      prev + 2 > reviews.length ? reviews.length : prev + 2
    );
  };

  return (
    <div className="section-margin">
      <h2 className="section-header">Reviews</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-3">
        {reviews.slice(0, visibleCount).map((review) => (
          <ReviewCard key={review.id} review={review} />
        ))}
      </div>

      {visibleCount < reviews.length && (
        <div className="flex justify-center my-3">
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
