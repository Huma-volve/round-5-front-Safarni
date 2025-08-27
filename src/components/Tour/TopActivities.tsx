import { ScrollArea, ScrollBar } from "../ui/scroll-area";
import ActivityCard from "./ActivityCard";

export const fakeActivities = [
{
    title: "Morning Coffee at Central Cafe",
    description: "Start your day with freshly brewed coffee and pastries at the city's most popular cafe.",
    image: "https://picsum.photos/id/1015/600/400"
  },
  {
    title: "Walk in the City Park",
    description: "Enjoy fresh air and greenery with a relaxing stroll through the main park.",
    image: "https://picsum.photos/id/1011/600/400"
  },
  {
    title: "Visit the Art Museum",
    description: "Discover modern and classic artworks in the city’s largest museum.",
    image: "https://picsum.photos/id/1025/600/400"
  },
  {
    title: "Street Food Market",
    description: "Taste local street food from a variety of vendors offering authentic flavors.",
    image: "https://picsum.photos/id/1060/600/400"
  },
  {
    title: "Evening by the Riverside",
    description: "Relax by the riverside with music, food stalls, and a beautiful sunset view.",
    image: "https://picsum.photos/id/1016/600/400"
  }
];

function TopActivities({activities}:any) {
  if (activities.length === 0) activities = fakeActivities
  return (
    <div className="section-margin space-y-4">
      <h2 className="section-header">Top Activities</h2>
      <ScrollArea className="pb-4">
        <div className="flex w-max space-x-4">
          {activities.map((activity:any, i:number) => (
            <ActivityCard key={i} activity={activity} />
          ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </div>
  );
}
export default TopActivities;
