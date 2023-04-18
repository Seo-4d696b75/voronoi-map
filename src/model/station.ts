import { GeoVoronoi } from "./geo"

export interface Station {
  code: number
  name: string
  lat: number
  lng: number
  right?: number | null
  left?: number | null
  voronoi: GeoVoronoi
}

export interface StationData {
  root: number
  node_list: Station[]
}