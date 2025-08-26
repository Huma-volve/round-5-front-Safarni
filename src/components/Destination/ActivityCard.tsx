function ActivityCard({ activity }: any) {
  const { image, title, description } = activity;
  return (
    <div className="flex-shrink-0 rounded-md overflow-hidden w-[45vw] sm:w-[25vw] md:w-[20vw]">
      {/* Image in square ratio */}
      <div className="aspect-square">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>

      {/* Text section */}
      <div className="my-2">
        <h3 className="text-sm font-semibold truncate">{title}</h3>
        <p className="text-xs text-gray-600 line-clamp-2">{description}</p>
      </div>
    </div>
  );
}
export default ActivityCard;
