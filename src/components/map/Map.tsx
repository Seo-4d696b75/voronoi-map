import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import { FC, useCallback, useState } from "react";
import "./Map.css";

const Map: FC = () => {
    const { isLoaded } = useJsApiLoader({
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

    return isLoaded ? (
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
            >

            </GoogleMap>
        </div>
    ) : <div>map is loading</div>
}

export default Map