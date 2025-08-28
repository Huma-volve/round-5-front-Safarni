// import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
// import { LatLngExpression } from "leaflet"; 
// import { useRef } from "react";

// const center: LatLngExpression = [30.0444, 31.2357];

// const locations = [
//   { name: "Cairo", lat: 30.0444, lng: 31.2357 },
//   { name: "Alexandria", lat: 31.2001, lng: 29.9187 }
// ];

// export default function BookingCarMap() {
//   const mapRef = useRef<unknown>(null);

//   return (
//     <MapContainer 
//       whenCreated={(map) => {
//         if (!mapRef.current) mapRef.current = map;
//       }}
//       center={center}      
//       key={Math.random()} 
//       zoom={6} 
//        style={{ height: "100vh", width: "100%" }}
//     >
//       <TileLayer
//         url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//         attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//       />
//       {locations.map((loc, idx) => (
//         <Marker key={idx} position={[loc.lat, loc.lng]}>
//           <Popup>{loc.name}</Popup>
//         </Marker>
//       ))}
//     </MapContainer>
//   );
// }


import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { LatLngBoundsExpression, Map as LMap } from "leaflet"; 
import { useRef } from "react";

const locations = [
  { name: "Cairo", lat: 30.0444, lng: 31.2357 },
  { name: "Alexandria", lat: 31.2001, lng: 29.9187 }
];


const bounds: LatLngBoundsExpression = [
  [27, 25], 
  [32, 35]  
];

export default function BookingCarMap() {
  const mapRef = useRef<LMap | null>(null);

  return (
    <MapContainer 
      bounds={bounds} 
      maxBounds={bounds} 
      whenCreated={(map) => {
        if (!mapRef.current) mapRef.current = map;
      }}
      style={{ height: "100px", width: "100%" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {locations.map((loc, idx) => (
        <Marker key={idx} position={[loc.lat, loc.lng]}>
          <Popup>{loc.name}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
