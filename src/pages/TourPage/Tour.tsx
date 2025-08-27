import DestinationHero from "@/components/Tour/TourHero";
import TopActivities from "@/components/Tour/TopActivities";
import BestTimeVisit from "@/components/Tour/BestTimeVisit";
import Gallery from "@/components/Tour/Gallery";
import Reviews from "@/components/common/Reviews";
import { useParams } from "react-router-dom";
import useTour from "@/hooks/Tours/UseTour";
import TourBooking from "@/components/Tour/TourBooking";

function Tour() {
  const params = useParams()
  const tour_id = params.id as string

  const {data:tour, isPending, error } = useTour(parseInt(tour_id))

  console.log(tour);

  if (!tour) return
  if (isPending) return <p>...Loading</p>
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
