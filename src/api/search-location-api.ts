import axiosInstance from "@/lib/axios-instance";
import { LocationResponse } from "@/lib/types";


export async function fetchLocations(key: string = ""): Promise<LocationResponse[]> {
  const { data } = await axiosInstance.get(`/locations?key=${key}`);
  return data.data;
}
