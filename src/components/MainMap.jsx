import { MapContainer, TileLayer } from "react-leaflet";
import 'leaflet/dist/leaflet.css';

export default function MainMap(){

    return(
        <MapContainer center={[37.5379, 127.0326]} zoom={14} className="leaflet-container" style={{width: '-webkit-fill-available', height: '100vh', zIndex:1}} >
            <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
            
        </MapContainer>
    )
}