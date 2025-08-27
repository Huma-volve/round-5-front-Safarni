import StarRating from "./StarRating";

type ReviewCardProps = {
  id: number;
  name: string;
  avatar: string;
  date: string;
  rating: number;
  text: string;
};

export function ReviewCard({ review }: { review: ReviewCardProps }) {
  const { name, rating, text, avatar } = review;
  return (
    <div className="bg-white rounded-lg border border-gray-600 p-4">
      <div className="flex items-center gap-4 my-3">
        <img src={avatar} alt={name} className="w-[60px] rounded-full"/>
        <h3 className="text-lg font-semibold">{name}</h3>
      </div>
      <StarRating rating={rating} />
      <p className="my-3">{text}</p>
    </div>
  );
}
