import { useRef, useState } from "react";
import Link from "next/link";
import { AdvancedImage } from "@cloudinary/react";
import Map, { MapRef, Marker, Popup, ViewState } from "react-map-gl";
// import "mapbox-gl/dist/mapbox-gl.css";
// import { Map } from "mapbox-gl";

interface IProps {}

const Maps = ({}: IProps) => {
  const mapRef = useRef<MapRef | null>(null);
  const [viewport, setViewport] = useState<ViewState>({
    longitude: 44.4268,
    latitude: 26.1025,
    zoom: 3.5,
    bearing: 0,
    pitch: 0,
    padding: { top: 0, bottom: 0, left: 0, right: 0 },
  });
  return (
    <div className="text-black relative">
      <Map
        {...viewport}
        style={{ width: "100%", height: "85vh" }}
        mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_API_TOKEN}
        mapStyle="mapbox://styles/mapbox/dark-v10"
        onMove={(evt) => setViewport(evt.viewState)}
        ref={(instance) => (mapRef.current = instance)}
      />
    </div>
  );
};

export default Maps;
