import { useQuery } from "@tanstack/react-query";
import { fetchAllCategories} from "@/api/cateogries-api";
import type { AxiosError } from "axios";
import { CategoryResponse } from "@/lib/types";

export function useCategories() {
  const {
    data: categories = [],
    isLoading,
    isError,
    error,
  } = useQuery<CategoryResponse[], AxiosError>({
    queryKey: ["categories"],
    queryFn: fetchAllCategories,
  });

  return { categories, isLoading, isError, error };
}
