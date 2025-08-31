type Brand = {
  brandName: string;
  img: string;
  rate: number;
  id: number;
};
export default function Brands({ item }: { item: Brand }) {
  return (
    <>
      <div className="px-6 py-4 bg-white transition-shadow duration-300 flex flex-col justify-center items-center gap-3">
        <img
          src={item.img}
          alt="brand logo"
          loading="lazy"
          className="w-20 h-16 object-fill rounded-md hover:scale-105 transition-transform duration-300"
        />
        <h2 className="font-semibold text-lg md:text-xl text-gray-800">
          {item.brandName}
        </h2>
        <h4 className="text-sm text-[#1E429F]">+{item.rate}</h4>
      </div>
    </>
  );
}
