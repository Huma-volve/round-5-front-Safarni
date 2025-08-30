import axiosInstance from "@/lib/axios-instance";

import fake_tour from "@/data/tour.json"

export async function getTourDetails(id: number) {
  try {
    const { data } = await axiosInstance.get(`tours/${id}`);
    const tourData = data.data;
    console.log(tourData);

    const tour:any = {
      hero: {
        title: tourData.title,
        image: tourData.image,
        rating: tourData.rating || "3.5",
        location: tourData.location,
        duration: "7 Days and 6 Nights",
        category: tourData.highlights[0],
      },
      description: tourData.description,
      price: tourData.price,
      top_activities: tourData.top_activities || fake_tour.fakeActivities,
      gallery: tourData.images || fake_tour.images,
      tour_slot_id: tourData.slots[0].slot_id || 1,
      seats_count: tourData.slots[0].max_seats || 10,
    };

    return tour;

  } catch (error) {
    console.log(error);
    return error;
  }
}

export async function tourBooking(bookingDetails: any) {
  const { data } = await axiosInstance.post("tour-bookings", bookingDetails);
  return data;
}
