import heroImage from "@/assets/images/paris-hero.jpg";
import StarRating from "../common/StarRating";

type TourHeroType = {
  image:string,
  title: string,
  rating:number,
  location: string,
  category: string,
  duration: string,
} 

function TourHero({hero}:{hero:TourHeroType}) {
    const {image, title, rating, location, category, duration} = hero
  return (
    <div >
      {/* Image */}
      <div
        style={{ backgroundImage: `url(${image})` }}
        className="w-full md:h-[400px] aspect-[16/9] bg-center bg-cover rounded-lg my-3"
      ></div>

      {/* Title & Rating */}
      <div className="flex justify-between my-3">
        <h2 className="font-bold">{title}</h2>
        <div className="flex gap-2">
          <StarRating rating={rating}/>
          <p>
            {4.5} (<span>{625}</span>)
          </p>
        </div>
      </div>

      {/* Info */}
      <div className="flex flex-col sm:flex-row justify-between my-3 *:inline-block *:max-sm:my-2 text-gray-600 font-semibold">
        <span className="max-sm:font-bold">{category}</span>
        <span className="max-sm:text-sm">{duration}</span>
        <span className="max-sm:text-xs">{location}</span>
      </div>
    </div>
  );
}
export default TourHero;
