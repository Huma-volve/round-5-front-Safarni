import DestinationHero from "@/components/Destination/DestinationHero";
import TopActivities from "@/components/Destination/TopActivities";
import BestTimeVisit from "@/components/Destination/BestTimeVisit";
import Gallery from "@/components/Destination/Gallery";
import Reviews from "@/components/common/Reviews";

function Destination() {
  //fetch data here based on the id

  return (
    <div className="px-52">
      <DestinationHero/>
      <TopActivities/>
      <BestTimeVisit info="Spring (April - June) and autumn (September - October) are perfect times to visit Paris, with mild weather and fewer tourists."/>
      <Gallery/>
      <Reviews/>
    </div>
  );
}
export default Destination;
