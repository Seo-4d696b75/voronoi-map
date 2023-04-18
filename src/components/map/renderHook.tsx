import { Marker, Polygon, Polyline } from "@react-google-maps/api";
import { Station } from "model/station";


export function renderStation(data: Station[]): JSX.Element[] {
  return data.map((s, i) => (
    <Marker
      key={i}
      position={s}
      icon={"https://maps.google.com/mapfiles/ms/icons/red-dot.png"} />
  ))
}

export function renderVoronoi(euclid: Station[]): JSX.Element[] {
  return [
    ...euclid,
  ].map((s, i) => {
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
          strokeColor: "#FF0000",
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
}