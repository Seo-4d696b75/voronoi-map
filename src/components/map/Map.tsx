import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import { FC, useCallback, useState } from "react";
import "./Map.css";
import { renderStation, renderVoronoi } from "./renderHook";
import { useStationData } from "./stationHook";

const Map: FC = () => {
  const { isLoaded, loadError } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.REACT_APP_API_KEY,
  })

  const [map, setMap] = useState<google.maps.Map | null>(null)
  const onLoaded = useCallback((map: google.maps.Map) => {
    setMap(map)
  }, [])
  const onUnmounted = useCallback(() => {
    setMap(null)
  }, [])

  const data = useStationData()

  if (loadError) {
    return <div>Map can't be loaded.</div>
  }

  if (!isLoaded) {
    return <div>Map is loading...</div>
  }

  return <div className="map-container">
    <GoogleMap
      center={{
        lat: 35.681236,
        lng: 139.767125,
      }}
      zoom={14}
      onLoad={onLoaded}
      onUnmount={onUnmounted}
      mapContainerStyle={{
        width: "100%",
        height: "100%",
      }}
      options={{
        streetViewControl: false,
      }}
    >
      {renderVoronoi(data.sphere, "#0000FF")}
      {renderVoronoi(data.euclid, "#FF0000")}
      {renderStation(data.euclid)}
    </GoogleMap>
  </div>
}

export default Map