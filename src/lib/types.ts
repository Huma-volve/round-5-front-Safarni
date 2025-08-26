export interface CategoryResponse {
  title: string;
  description: string;
  image: string;
}
export interface RecommendedTourResponse {
  id: number;
  category_id: number;
  title: string;
  location: string;
  description: string;
  price: string;
  image: string;
  views: number;
  is_recommended: number;
  rating: number;
}
