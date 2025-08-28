import { useQuery } from "@tanstack/react-query";
import type { AxiosError } from "axios";
import { fetchLocations } from "@/api/search-location-api";
import { LocationResponse } from "@/lib/types";

export function useSearchLocation(key: string = "") {
  const {
    data: locations = [],
    isLoading,
    isError,
    error,
  } = useQuery<LocationResponse[], AxiosError>({
    queryKey: ["locations", key],
    queryFn: () => fetchLocations(key),
  });

  return { locations, isLoading, isError, error };
}
