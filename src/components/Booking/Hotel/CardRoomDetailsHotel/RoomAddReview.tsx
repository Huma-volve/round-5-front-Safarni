import { useState } from "react";
import ImgStar from "@/assets/images/icons/ImgStar.svg";
import CameraIcon from "@/assets/images/icons/CameraIcon.svg";

function RoomAddReview() {
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState("");
  const [photo, setPhoto] = useState<File | null>(null);

  const handleStarClick = (index: number) => {
    setRating(index + 1);
  };

  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhoto(e.target.files?.[0] || null);
  };

  const handleSubmit = () => {
    if (!rating || !review.trim()) {
      alert("Please add a rating and review before submitting.");
      return;
    }

    const reviewData = {
      rating,
      review,
      photo,
    };

    console.log("Review submitted:", reviewData);
  };

  return (
    <div className="border-t pt-8 flex flex-col my-7 gap-4">
      <p className="text-[#6B7280] text-xl flex justify-center">
        Your Overall Rating Of This Product
      </p>

      {/* Rating Stars */}
      <div className="flex justify-center gap-2 cursor-pointer mt-4">
        {[...Array(5)].map((_, index) => (
          <img
            key={index}
            className={`w-14 h-14 ${
              index < rating ? "opacity-100" : "opacity-40"
            }`}
            src={ImgStar}
            alt="Star"
            onClick={() => handleStarClick(index)}
          />
        ))}
      </div>

      <p className="text-lg">Add detailed review</p>
      <textarea
        value={review}
        onChange={(e) => setReview(e.target.value)}
        className="border p-2 bg-[#F3F4F6] rounded-md w-full h-32 resize-none focus:outline-none focus:ring-2 focus:ring-[#202a3e]"
        placeholder="Write your review here..."
      />

      {/* Add Photo */}
      <div className="mb-3 mt-1 flex items-center cursor-pointer">
        <label className="flex items-center cursor-pointer">
          <img src={CameraIcon} alt="CameraIcon" className="mr-2" />
          <span className="text-[--primary] text-md">Add Photo</span>
          <input
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handlePhotoChange}
          />
        </label>
      </div>

      {/* Submit Button */}
      <button
        onClick={handleSubmit}
        className="w-full bg-[--primary] text-white py-3 rounded-lg hover:opacity-90 transition"
      >
        Submit
      </button>
    </div>
  );
}

export default RoomAddReview;
