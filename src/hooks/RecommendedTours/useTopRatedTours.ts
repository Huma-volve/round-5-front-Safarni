import { fetchTopRatedTours } from "@/api/cateogries-api";
import { RecommendedTourResponse } from "@/lib/types";
import { useQuery } from "@tanstack/react-query";
import type { AxiosError } from "axios";

export function useTopRatedTours() {
  const {
    data: tours = [],
    isLoading,
    isError,
    error,
  } = useQuery<RecommendedTourResponse[], AxiosError>({
    queryKey: ["topRatedTours"],
    queryFn: fetchTopRatedTours,
  });

  return { tours, isLoading, isError, error };
}
