import { Station, StationData } from "model/station"
import { useEffect, useState } from "react"

export function useStationData() {

  const [euclid, setEuclid] = useState<Station[]>([])
  const [sphere, setSphere] = useState<Station[]>([])

  useEffect(() => {
    async function load() {
      const euclid = (await import("../../json/euclid.json")).default as StationData
      setEuclid(euclid.node_list)
      const sphere = (await import("../../json/sphere.json")).default as StationData
      setSphere(sphere.node_list)
    }
    load()
  }, [])

  return {
    euclid,
    sphere,
  }
}