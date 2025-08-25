import axiosInstance from "@/lib/axios-instance";
import { CategoryResponse } from "@/lib/types";

export async function fetchAllCategories(): Promise<CategoryResponse[]> {
  const { data } = await axiosInstance.get("allcategory");
  return data.data; 
}