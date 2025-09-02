import React, { useEffect, useState } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
  Polyline,
} from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import CarTicketCard from "@/components/my-booking/CarTicketCard/CarTicketCard";
import { useCarBooking } from "@/api/fromtomap";
import { useLocation } from "react-router-dom";

const createIcon = (iconUrl: string) =>
  new L.Icon({
    iconUrl,
    iconSize: [32, 32],
    iconAnchor: [16, 32],
  });

// Component to handle map clicks
function LocationSelector({
  setDestination,
}: {
  setDestination: (pos: [number, number]) => void;
}) {
  useMapEvents({
    click(e) {
      setDestination([e.latlng.lat, e.latlng.lng]);
    },
  });
  return null;
}

interface Car {
  id: number;
  model: string;
  brand: string;
  daily_rate: string;
  seats: number;
  fuel_type: string;
  transmission: string;}
export default function MapWithRoute() {
 const location = useLocation();
  const carFromPrevPage = location.state?.selectedCar;

  const [selectedCar, setSelectedCar] = useState<Car | null>(carFromPrevPage || null);
  const [pickupDate, setPickupDate] = useState<Date | null>(null);
  const [returnDate, setReturnDate] = useState<Date | null>(null);



  const bookingMutation = useCarBooking();
  const [start, setStart] = useState<[number, number] | null>(null);
  const [destination, setDestination] = useState<[number, number] | null>(null);

  // Get user location
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setStart([pos.coords.latitude, pos.coords.longitude]);
      },
      (err) => {
        console.error(err);
        // Default to Cairo if denied
        setStart([30.0444, 31.2357]);
      }
    );
  }, []);

  return (
    <>
      <div className="h-screen w-screen relative">
        {start && (
          <MapContainer
            center={start}
            zoom={13}
            style={{ height: "100%", width: "100%" }}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OSM</a>'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            {/* Current location marker */}
            <Marker
              position={start}
              icon={createIcon(
                "https://cdn-icons-png.flaticon.com/512/149/149060.png"
              )}
            >
              <Popup>Your Location</Popup>
            </Marker>

            {/* Destination marker */}
            {destination && (
              <Marker
                position={destination}
                icon={createIcon(
                  "https://cdn-icons-png.flaticon.com/512/684/684908.png"
                )}
              >
                <Popup>Destination</Popup>
              </Marker>
            )}

            {/* Line between start and destination */}
            {start && destination && (
              <Polyline positions={[start, destination]} color="blue" />
            )}

            {/* Enable user to click and choose destination */}
            <LocationSelector setDestination={setDestination} />
          </MapContainer>
        )}
      </div>
      <div className="absolute bottom-[9%] w-[40%] mx-auto  left-0 right-0  z-[9999]">
        <CarTicketCard showConfirm={true} 
        onConfirm={() => {
    if (!selectedCar || !pickupDate || !returnDate) {
      alert("Please select a car and pick-up/return dates");
      return;
    }

    bookingMutation.mutate({
      car_id: selectedCar.id,             
      pickup_date: pickupDate.toISOString(),
      return_date: returnDate.toISOString(),
    } ) } }
  selectedCar={selectedCar}
  setSelectedCar={setSelectedCar}
  pickupDate={pickupDate}
  setPickupDate={setPickupDate}
  returnDate={returnDate}
  setReturnDate={setReturnDate}
    />
      </div>
    </>
  );
}
