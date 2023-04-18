
export interface PolygonFeature {
  type: "Feature"
  geometry: {
    type: "Polygon"
    coordinates: number[][][]
  }
}

export interface LineStringFeature {
  type: "Feature"
  geometry: {
    type: "LineString"
    coordinates: number[][]
  }
}

export type GeoVoronoi = PolygonFeature | LineStringFeature