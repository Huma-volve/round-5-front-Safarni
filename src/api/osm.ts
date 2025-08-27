// const NOMINATIM_BASE = "https://nominatim.openstreetmap.org";
// const OVERPASS_BASE = "https://overpass-api.de/api/interpreter";


// // 1) البحث الجغرافي: يرجّع أول نتيجة لمكان/مدينة مع lat/lon/bbox
// export async function geocode(query) {
// const url = `${NOMINATIM_BASE}/search?format=json&q=${encodeURIComponent(query)}&limit=1`;
// const res = await fetch(url, { headers: { "Accept-Language": "ar" } });
// if (!res.ok) throw new Error("Nominatim geocoding failed");
// const data = await res.json();
// return data?.[0] || null; // { lat, lon, display_name, boundingbox }
// }


// /**
// * 2) جلب أماكن حقيقية من Overpass حسب فئة (amenity/tourism/shop...) حول مركز lat/lon وبـ radius (متر)
// * الفئات الشائعة:
// * amenity=restaurant | cafe | hospital | pharmacy | bank | fuel
// * tourism=hotel | museum | attraction
// */
// export async function overpassAround({ key = "amenity", value = "restaurant", lat, lon, radius = 3000, limit = 50 }) {
// // ملاحظة: here نركّز على nodes لتبسيط الأمور (فيه ways/relations برضه)
// const query = `
// [out:json][timeout:25];
// node["${key}"="${value}"](around:${radius},${lat},${lon});
// out body ${limit};
// `;
// const res = await fetch(OVERPASS_BASE, {
// method: "POST",
// headers: { "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8" },
// body: new URLSearchParams({ data: query })
// });
// if (!res.ok) throw new Error("Overpass fetch failed");
// const json = await res.json();
// // تحويل العناصر لفورمات موحّد بسيط
// const places = (json.elements || [])
// .filter(el => el.type === "node")
// .map(el => ({
// id: el.id,
// lat: el.lat,
// lon: el.lon,
// name: el.tags?.name || `${value} #${el.id}`,
// category: `${key}=${value}`,
// tags: el.tags || {},
// }));
// return places.slice(0, limit);
// }