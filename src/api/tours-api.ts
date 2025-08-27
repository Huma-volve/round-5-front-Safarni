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
    tour_slot_id: tourData.slot_ids[0],
    seats_count: tourData.seats_count || 1
  };

  return tour;
}

export async function bookTour(bookingDetails:any) {
    const { data } = await axiosInstance.post("tour-bookings", bookingDetails);
    console.log(data);
}