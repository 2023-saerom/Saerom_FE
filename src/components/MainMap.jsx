import { MapContainer, TileLayer, Polyline, Marker } from "react-leaflet";
import 'leaflet/dist/leaflet.css';
import { useRouter } from "next/router";
import { dumbData, dumbPlace } from "@/dumb";
import { useState } from "react";
const polyRoute= [
        [
            37.543736,
            127.03895,
        ],
        [
            37.543741,
            127.039067,
        ],
        [
            37.5438,
            127.039237,
        ],
        [
            37.543817,
            127.039399,
        ],
        [
            37.543887,
            127.039671,
        ],
        [
            37.544145,
            127.04031,
        ],
        [
            37.544181,
            127.040478,
        ],
        [
            37.544191,
            127.040641,
        ],
        [
            37.544181,
            127.040772,
        ],
        [
            37.544004,
            127.041439,
        ],
        [
            37.5449,
            127.041826,
        ],
        [
            37.544805,
            127.042182,
        ]
    ];
export default function MainMap(){
    const here = useRouter().route;
    


    return(
        <MapContainer center={here!=='/search' ? [37.544181,127.040478] : [37.6379, 127.0326]} zoom={14} className="leaflet-container" style={{width: '-webkit-fill-available', height: '100vh', zIndex:1}} >
            <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
            <Marker position={[37.6379, 127.0326]}/>

            <Polyline positions={polyRoute} pathOptions={{color: 'red'}}/>
        </MapContainer>
    )
}

function pathFinder(data){
    var apiKey = '10f1addb-aa8b-4e31-8fe1-3fab84534f5c';
    var start = data.from; //시작위치 위도,경도 (서울 중심)
    var end = data.to; //목적지위치 위도, 경도 (강남)
    var routingUrl = `https://graphhopper.com/api/1/route?point=${start.join(',')}&point=${end.join(',')}&vehicle=foot&locale=de&points_encoded=false&key=${apiKey}`;

    return fetch(routingUrl)
        .then(response => response.json())
        .then(data => {
            return data.paths[0].points.coordinates;
    });
}
