import { compareDetails } from "@/api/compare";
import { getTourDetails } from "@/api/tours-api";
import { useQuery } from "@tanstack/react-query";

export default function useTour(id:number) {
    return useQuery({
        queryKey:["tour", id],
        queryFn: ()=> getTourDetails(id)
    })
}

export const useCompareDetails=(id:number)=>{
    return useQuery({
        queryKey:["tour", id],
        queryFn: ()=> compareDetails(id)
    })
}