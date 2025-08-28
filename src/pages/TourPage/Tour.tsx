import DestinationHero from "@/components/Tour/TourHero";
import TopActivities from "@/components/Tour/TopActivities";
import BestTimeVisit from "@/components/Tour/BestTimeVisit";
import Gallery from "@/components/Tour/Gallery";
import Reviews from "@/components/common/Reviews";
import { useParams } from "react-router-dom";
import useTour from "@/hooks/Tours/UseTour";
import TourBooking from "@/components/Tour/TourBooking";

const tour = {
  hero: {
    title: "Discover the Magic of Cappadocia",
    image:  "https://picsum.photos/id/1021/800/500",
    rating: 4.8,
    location: "Cappadocia, Turkey",
    duration: "7 Days and 6 Nights",
    category: "Adventure",
  },
  description:
    "Experience the breathtaking landscapes of Cappadocia with hot air balloon rides, ancient cave dwellings, and vibrant local culture. This 7-day journey offers a perfect mix of adventure, relaxation, and history.",
  price: 1299,
  top_activities: [],
  gallery: [
    "https://picsum.photos/id/1021/800/500",
    "https://picsum.photos/id/1021/800/500",
    "https://picsum.photos/id/1021/800/500",
    "https://picsum.photos/id/1021/800/500",
    "https://picsum.photos/id/1021/800/500",
    "https://picsum.photos/id/1022/800/500",
    "https://picsum.photos/id/1023/800/500",
  ],
  tour_slot_id: 1,
  seats_count: 12,
};


function Tour() {
  const params = useParams()
  const tour_id = params.id as string

  // const {data:tour, isPending, error } = useTour(parseInt(tour_id))

  // console.log(tour);

  if (!tour) return
  // if (isPending) return <p>...Loading</p>
  return (
    <div className="px-52">
      <DestinationHero hero={tour?.hero}/>
      <TopActivities activities={tour.top_activities}/>
      <BestTimeVisit info="Spring (April - June) and autumn (September - October) are perfect times to visit Paris, with mild weather and fewer tourists."/>
      <Gallery images={tour.gallery}/>
      <Reviews/>
      <TourBooking price={tour.price} tour_slot_id={tour.tour_slot_id} seats_count={tour.seats_count}/>
    </div>
  );
}
export default Tour;
