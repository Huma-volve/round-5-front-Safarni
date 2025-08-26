import nodata from "@/assets/images/nodata.gif";

export default function NoData() {
  return (
    <div className="flex flex-col items-center justify-center p-6 md:p-12 text-center">
      <img
        src={nodata}
        alt="No Data"
        className="w-full h-60 object-contain mb-6"
        loading="lazy"
      />
      <h2 className="text-lg md:text-2xl font-semibold text-gray-700">
        No Data Found
      </h2>
      <p className="text-sm md:text-base text-gray-500 mt-2">
        Try adjusting your filters or check back later.
      </p>
    </div>
  );
}
