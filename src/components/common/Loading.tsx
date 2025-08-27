export default function Loading() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 md:px-12 lg:px-32 py-6">
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          className="animate-pulse p-4 border rounded-2xl shadow-sm w-full"
        >
          <div className="h-40 bg-gray-300 rounded-lg mb-4"></div>
          <div className="h-4 bg-gray-300 rounded w-3/4 mb-2"></div>
          <div className="h-4 bg-gray-300 rounded w-1/2"></div>
        </div>
      ))}
    </div>
  );
}
