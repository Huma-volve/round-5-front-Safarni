import { useQuery } from "@tanstack/react-query";
import type { AxiosError } from "axios";
import { RecommendedTourResponse } from "@/lib/types";
import { fetchRecommendedTours } from "@/api/cateogries-api";

export function useRecommendedTours() {
  const {
    data: tours = [],
    isLoading,
    isError,
    error,
  } = useQuery<RecommendedTourResponse[], AxiosError>({
    queryKey: ["recommendedTours"],
    queryFn: fetchRecommendedTours,
  });

  return { tours, isLoading, isError, error };
}
