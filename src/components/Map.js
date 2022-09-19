import React from 'react'
import { MapContainer, TileLayer, Marker } from 'react-leaflet'
import "./Map.css"
import markerIconPng from "leaflet/dist/images/marker-icon.png"
import {Icon} from 'leaflet'
import 'leaflet/dist/leaflet.css'


function Map() {
  return (
    <>
    <MapContainer center={[-22.80764, -45.1957]} zoom={16} scrollWheelZoom={false} className='mapContainer'>
  <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
<Marker position={[-22.80764, -45.1957]} icon={new Icon({iconUrl: markerIconPng, iconSize: [25, 41], iconAnchor: [12, 41]})} />
</MapContainer>
    </>
  )
}

export default Map