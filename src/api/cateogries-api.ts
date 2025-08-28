import axiosInstance from "@/lib/axios-instance";
import { CategoryResponse, RecommendedTourResponse } from "@/lib/types";

export async function fetchAllCategories(): Promise<CategoryResponse[]> {
  const { data } = await axiosInstance.get("allcategory");
  return data.data; 
}

// recommende
export async function fetchRecommendedTours(): Promise<RecommendedTourResponse[]> {
  const { data } = await axiosInstance.get("recommendedtour");
  return data.data;
}

// top rated
export async function fetchTopRatedTours(): Promise<RecommendedTourResponse[]> {
  const { data } = await axiosInstance.get("most-viewed-tours");
  return data.data; 
}