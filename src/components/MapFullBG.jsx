import { useEffect } from "react";
import { styled } from "styled-components";

export default function MapFullBG(){
    useEffect(() => {
        const initializeMap = () => {
            const map = new kakao.maps.Map(
                document.querySelector('#mapBackground'),
                {
                    center: new kakao.maps.LatLng(37.5665, 126.9780),
                    level: 8
                }
            );
        };
        if (typeof window !== 'undefined') {
            window.onload = () => {
                initializeMap();
        };}
    }, []);

    return(
        <FullCover id="mapBackground" />
    )
}

const FullCover = styled.div`
    width: 100vw;
    height: 100vh;
`