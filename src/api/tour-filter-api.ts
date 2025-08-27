import axiosInstance from "@/lib/axios-instance";
import type { TourResponse } from "@/lib/types";

export async function fetchTours(queryString: string): Promise<TourResponse[]> {
  const { data } = await axiosInstance.get(`/tours?${queryString}`);
  return data.data;
}
