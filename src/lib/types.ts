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
export interface loginData {
  email: string;
  password: string;
}

export interface signUpData {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
}

export interface forgetPasswordData {
  email: string;
}

export interface resetPasswordData {
  email: string;
  password: string;
  password_confirmation: string;
}

export interface verifyCodeData {
  email: string;
  otp: string;
}

export interface TourResponse {
  id: number;
  category_id: number;
  title: string;
  location: string;
  description: string;
  price: string;
  image: string;
  views: number;
  is_recommended: boolean;
  rating: number;
}

// export interface LocationResponse {
//   id: number;
//   name: string;
//   latitude: number;
//   longitude: number;
//   country?: string;
//   region?: string;
// }
