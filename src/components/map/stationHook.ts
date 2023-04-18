import { Station, StationData } from "model/station"
import { useEffect, useState } from "react"

export function useStationData() {
  const [stations, setStations] = useState<Station[]>([])

  useEffect(() => {
    Promise.resolve().then(async () => {
      const data = (await import("../../json/euclid.json")).default as StationData
      console.log("data loaded", data)
      setStations(data.node_list)
    })
  }, [])

  return {
    euclid: stations
  }
}