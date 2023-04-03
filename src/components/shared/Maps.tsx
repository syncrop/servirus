import React from 'react'
import { useMemo, useState } from "react";
import { GoogleMap, useLoadScript, Marker, InfoWindow, useJsApiLoader, } from "@react-google-maps/api";

const mapContainerStyle = {
    widtt: '500px',
    height: '500px'
}

const center = {
    lat: 37.312927,
    lng: -6.851553,
}
const Maps = () => {
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyAoZGkIADd4F06I9T8onBYpUIKqLjmEt-4"
    })

    const center = useMemo(() => ({ lat: 37.312927, lng: -6.851553 }), [])
    return isLoaded ? (
        <GoogleMap
            mapContainerStyle={mapContainerStyle}
            center={center}
            zoom={11}
        >
            <Marker position={center} />
        </GoogleMap>
    ) : <></>;
}

export default Maps