import { GoogleMap, Marker, Polygon, Polyline, useJsApiLoader } from "@react-google-maps/api";
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
    const stationMarkers = stations.map((s,i) => (
      <Marker
        key={i}
        position={s}
        icon={"https://maps.google.com/mapfiles/ms/icons/blue-dot.png"} />
    ))
    const voronoiPolygons = stations.map((s,i) => {
      const geo = s.voronoi.geometry
      const points = geo.type === "Polygon" ? geo.coordinates[0] : geo.coordinates
      const paths = points.map(p => ({
        lat: p[1],
        lng: p[0],
      }))
      return geo.type === "Polygon" ? (
        <Polygon
          key={i}
          paths={paths}
          options={{
            strokeColor: "#0000FF",
            strokeWeight: 1,
            strokeOpacity: 0.8,
            fillOpacity: 0,
          }} />
      ) : (
        <Polyline
          key={i}
          path={paths} />
      )
    })
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
          {voronoiPolygons}
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