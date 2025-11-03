import axiosInstance from "@/lib/axios-instance";



export async function fetchLocations(key: string = ""): Promise<[]> {
  const { data } = await axiosInstance.get(`/locations?key=${key}`);
  return data.data;
}
