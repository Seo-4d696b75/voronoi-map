import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import { Station, StationData } from "model/station";
import { FC, useCallback, useEffect, useState } from "react";
import "./Map.css";

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

  const [stations, setStations] = useState<Station[]>([])

  useEffect(() => {
    Promise.resolve().then(async () => {
      const data = (await import("../../json/euclid.json")).default as StationData
      console.log("data loaded", data)
      setStations(data.node_list)
    })
  }, [])

  const render = () => {
    const stationMarkers = stations.map(s => (
      <Marker
        key={s.code}
        position={s}
        icon={"https://maps.google.com/mapfiles/ms/icons/blue-dot.png"} />
    ))
    return (
      <div className="map-container">
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
          {stationMarkers}
        </GoogleMap>
      </div>
    )
  }

  if (loadError) {
    return <div>Map can't be loaded.</div>
  }

  if (!isLoaded) {
    return <div>Map is loading...</div>
  }

  return render()
}

export default Map