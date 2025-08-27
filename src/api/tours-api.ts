import axiosInstance from "@/lib/axios-instance";

export async function getTourDetails(id: number) {
  const { data } = await axiosInstance.get(`tours/${id}`);
  const tourData = data.data;
  console.log(tourData);

  const tour = {
    hero: {
        title: tourData.title,
        image: tourData.image, 
        rating: tourData.rating,
        location: tourData.location,
        duration: "7 Days and 6 Nights",
        category: tourData.category.title,
    },
    description: tourData.description,
    price: tourData.price,
    top_activities: tourData.top_activities,
    gallery: tourData.images,
  };

  return tour;
}
