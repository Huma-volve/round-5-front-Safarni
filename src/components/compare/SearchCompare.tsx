import Loading from "@/components/common/Loading";
import { ChevronLeft, Search } from "lucide-react";
import { useState, useEffect } from "react";
import { useFilterTours } from "@/hooks/FilteredTours/useFilterTours";
import { Link } from 'lucide-react'
import { useNavigate } from 'react-router-dom';
import CompareCard from "./CompareCard";

export default function SearchCompare() {
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");
  const [id, setId] = useState<number[]>([1])
  const navigate = useNavigate();

  const handelCheckout = () => {
    navigate('/')
  }
  const { tours, isLoading, isError, error } = useFilterTours(`search=${query}`);
  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      setQuery(search);
    }, 500);

    return () => clearTimeout(delayDebounce);
  }, [search]);
  if (isError) return <p className="text-red-500">{error?.message}</p>;
  useEffect(() => {
    if (tours.length > 0) {
      const ids = tours.map((item) => item.id);
      setId(ids);
    }
  }, [tours])

  return (
    <div className=" ">

      <div className="bg-white px-4 md:px-12 lg:px-32 py-3 ">
        {/* Header */}
        <div className="flex items-center gap-4 mb-6">
          <Link to="..">
            <ChevronLeft
              size={42}
              className="bg-gray-200 rounded-full px-2 py-2 text-gray-800"
            />
          </Link>
          <div className="flex items-center px-2 py-2 w-[100%] mb-4 border border-gray-200 shadow-md rounded-xl focus-within:border-[#8457f6] hover:border-[#8457f6]">
            <Search size={20} className="text-blue-900" />
            <input
              type="search"
              placeholder="Search tours..."
              className="w-full border-none outline-none px-3"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>

        {/* Results */}
        {isLoading ? (
          <Loading />
        ) : tours.length === 0 ? (
          <p className="text-gray-500">No tours found.</p>
        ) : (
          <div className='w-[100%] flex flex-wrap gap-4 justify-center mt-4'>
            {
              tours.map((item) => {
                return (
                  <div key={item.id} className='flex gap-2 p-2 md:gap-3 items-center bg-compare-bg shadow-sm shadow-shadow md:p-2 rounded-[24px] w-68 text-[12px] md:text-[13px] text-input'>
                    <img src={item.image} alt={item.title} className='w-28 rounded-[8px]' />
                    <div>
                      <h2 className='text-[#0F1417] font-bold truncate w-40'>{item.title}</h2>
                      <p>{item.rating} ⭐ | ${item.price}</p>
                      <p className='line-clamp-2 md:w-40'>{item.description}</p>
                    </div>
                  </div>
                )
              })
            }
          </div>
        )}
      </div>
      <div className='text-[24px] text-center text-[#333] font-medium mt-10 mb-4'>Compare</div>
      <div className='w-[100%] flex flex-wrap gap-4  justify-center container'>
        {id.map((itemId) => {
          return (<CompareCard key={itemId} tourId={itemId} />)
        })}

      </div>
      <div className='w-[100%] flex justify-center '>
        <button onClick={handelCheckout} className='bg-input text-white py-2 w-64 md:w-80 mt-6 rounded-[8px] mb-16'>
          Checkout
        </button>
      </div>
    </div>

  );
}
