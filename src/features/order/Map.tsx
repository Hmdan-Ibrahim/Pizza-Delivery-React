import {
  Circle,
  MapContainer,
  Marker,
  TileLayer,
  useMapEvents,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import {
  centerLat,
  centerLong,
  radius,
} from "../../utilities/DeliveryArea";
import { Icon } from "leaflet";
import { memo } from "react";

type Props = {
  position: { latitude: number; longitude: number };
  setPosition?: (latitude: number, longitude: number) => void;
};
const markerIcon = new Icon({
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  iconSize: [20, 35],
  iconAnchor: [12, 41],
});

export default memo(function MapPreview({
  position: { latitude, longitude },
  setPosition,
}: Props) {
  
  return (
    <div style={{ height: "300px", marginTop: "10px" }}>
      <MapContainer
        center={[centerLat, centerLong]}
        zoom={12}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          attribution="Tiles © Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye"
          url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
        />
        <Marker position={[latitude, longitude]} icon={markerIcon}></Marker>
        <Circle
          center={[centerLat, centerLong]}
          radius={radius}
          pathOptions={{ color: "blue", fillColor: "blue", fillOpacity: 0.15 }}
        />
        <LocationPicker onSelect={setPosition} />
      </MapContainer>
    </div>
  );
})

function LocationPicker({
  onSelect,
}: {
  onSelect?: (lat: number, lng: number) => void;
}) {
  useMapEvents({
    click(e) {
      if (onSelect) onSelect(e.latlng.lat, e.latlng.lng);
    },
  });
  return null;
}
