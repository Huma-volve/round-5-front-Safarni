// src/hooks/useTours.ts
import { useQuery } from "@tanstack/react-query";
import type { AxiosError } from "axios";
import { fetchTours } from "@/api/tour-filter-api";
import type { TourResponse } from "@/lib/types";

export function useFilterTours(queryString: string) {
  const {
    data: tours = [],
    isLoading,
    isError,
    error,
  } = useQuery<TourResponse[], AxiosError>({
    queryKey: ["tours", queryString],
    queryFn: () => fetchTours(queryString),
  });

  return { tours, isLoading, isError, error };
}
