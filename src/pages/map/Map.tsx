import React, { useEffect, useMemo, useState } from "react";
import axios from "axios";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { ChevronLeft, Search } from "lucide-react";
import { Link } from "react-router-dom";

// ---------- Types ----------
export type NominatimPlace = {
  place_id: number;
  osm_id: number;
  lat: string;
  lon: string;
  display_name: string;
  type?: string;
  class?: string;
  // other fields are possible
};

// ---------- Helpers ----------
// Simple helper to create an icon (you can replace iconUrl with your asset)
const createIcon = (
  iconUrl = "https://cdn-icons-png.flaticon.com/512/684/684908.png"
) =>
  new L.Icon({
    iconUrl,
    iconRetinaUrl: iconUrl,
    iconSize: [28, 28],
    iconAnchor: [14, 28],
    popupAnchor: [0, -28],
  });

// Center map component to a given coord when results arrive
function FlyToLocation({ lat, lon }: { lat?: number; lon?: number }) {
  const map = useMap();
  useEffect(() => {
    if (lat && lon) {
      map.flyTo([lat, lon], 13, { duration: 0.8 });
    }
  }, [lat, lon, map]);
  return null;
}

// ---------- Main Component ----------
export default function MapSearchCompare() {
  // UI states
  const [query, setQuery] = useState<string>("Cairo");
  const [category, setCategory] = useState<string>("restaurant");
  const [places, setPlaces] = useState<NominatimPlace[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  console.log(places);
  // Selected place to centre map
  const center = useMemo(() => {
    if (places.length > 0) return { lat: +places[0].lat, lon: +places[0].lon };
    return { lat: 30.0444, lon: 31.2357 }; // default Cairo
  }, [places]);

  // Icon
  const pinIcon = useMemo(() => createIcon(), []);

  // Fetch from Nominatim
  const searchPlaces = async (searchText: string, cat: string) => {
    try {
      setLoading(true);
      setError(null);
      // Build query string
      const q = `${cat} ${searchText}`.trim();

      // Nominatim public instance usage policy requires a valid User-Agent.
      // Replace the user-agent value with your app name and contact info in production.
      const res = await axios.get<NominatimPlace[]>(
        "https://nominatim.openstreetmap.org/search",
        {
          params: {
            q,
            format: "json",
            addressdetails: 0,
            limit: 20,
            countrycodes: "eg",
            viewbox: "29.5,31.5,32.5,27.5",
            bounded: 1,
          },
          headers: {
            "Accept-Language": "en",
            "User-Agent": "SafarniApp/1.0 (your-email@example.com)",
          },
        }
      );
      setPlaces(res.data);
    } catch (err: any) {
      console.error(err);
      setError("Error fetching places. Try again.");
    } finally {
      setLoading(false);
    }
  };

  // Initial search on mount
  useEffect(() => {
    searchPlaces(query, category);
    // eslint-disable-next-line react-hooks/exhaustive-de
  }, []);

  return (
    <>
      <div className="p-4 pb-0 text-input h-[20dvh] w-[90%] ml-[5%] fixed top-[0px] left-[0px] z-[1000] ">
        <div className="flex items-center justify-center mb-4 gap-4">
          <Link to=".." className=" ">
            <ChevronLeft
              size={38}
              className="bg-white rounded-full p-2 mb-3 text-gray-800 hover:bg-secondary-foreground"
            />
          </Link>
          <div className="flex gap-3 mb-3 w-full bg-white rounded-[10px] border hover:shadow-md px-6 py-2 mt-1">
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="ex: Cairo, Giza, Alexandria"
              className="outline-none w-full "
            />
            <button
              onClick={() => searchPlaces(query, category)}
              disabled={loading}
            >
              <Search />
            </button>
          </div>
        </div>

        <div className="mb-3 mt-4">
          <div className="flex flex-wrap gap-3 mt-2 items-center justify-evenly">
            {["restaurant", "hotel", "museum"].map((cat) => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                className={`w-24 text-[13px] lg:text-[16px] lg:w-60 px-4 py-3 rounded-[10px] hover:opacity-[.8] ${
                  category === cat
                    ? "bg-primary text-white"
                    : "bg-white text-secondary"
                }`}
              >
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </button>
            ))}
            <div className="text-[16px] w-28 lg:w-60 text-center md:text-xl text-primary font-bold bg-secondary-foreground p-2 rounded-[8px]">
              Results: {places.length}
            </div>
          </div>
        </div>

        <div className="mb-3"></div>
      </div>
      <div className="flex h-screen w-screen text-input">
        <main className="flex-1 relative">
          <MapContainer
            center={[center.lat, center.lon]}
            zoom={13}
            style={{ height: "100%", width: "100%"}}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            {/* Fly to current center if available */}
            <FlyToLocation lat={center.lat} lon={center.lon} />

            {/* Render markers */}
            {places.map((p) => (
              <Marker
                key={p.place_id}
                position={[+p.lat, +p.lon]}
                icon={pinIcon}
              >
                <Popup>
                  <div className="w-64">
                    <div className="font-semibold text-sm">
                      {p.display_name.split(",")[0]}
                    </div>
                    <div className="text-xs text-gray-600 mb-2">
                      {p.display_name}
                    </div>
                    <div className="flex gap-2 mt-2">
                      <button
                        className="text-xs bg-blue-600 text-white px-2 py-1 rounded"
                        onClick={() => {
                          // simulate navigation to booking page
                          alert(
                            `Navigate to booking for: ${
                              p.display_name.split(",")[0]
                            }`
                          );
                        }}
                      >
                        Book
                      </button>
                    </div>
                  </div>
                </Popup>
              </Marker>
            ))}
          </MapContainer>

          {/* small legend */}
          <div className="absolute right-4 bottom-4 bg-white p-2 rounded shadow ">
            <div className="text-xs">Markers: {places.length}</div>
          </div>
        </main>
      </div>
    </>
  );
}
