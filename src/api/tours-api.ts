import axiosInstance from "@/lib/axios-instance";

const fakeTour = {
  status: 200,
  message: "Tour details retrieved successfully",
  data: {
    id: 1,
    title: "Pyramids of Giza & Sphinx",
    location: "Giza, Egypt",
    description:
      "Explore the ancient wonders of Egypt including the Great Pyramid, Sphinx, and Valley Temple. Learn about the fascinating history of the Old Kingdom.",
    price: "450.00",
    image: "pyramids.jpg",
    slot_ids: [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
      22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39,
      40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57,
      58, 59, 60,
    ],
    duration: null,
    highlights: null,
  },
};




export async function getTourDetails(id: number) {
  const { data } = await axiosInstance.get(`tours/${id}`);
  const tourData = data.data;

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
    tour_slot_id: tourData.slot_ids[0],
    seats_count: tourData.seats_count || 1,
  };

  return tour;
}

export async function bookTour(bookingDetails: any) {
  const { data } = await axiosInstance.post("tour-bookings", bookingDetails);
  return data;
}
