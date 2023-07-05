import { Map } from 'react-kakao-maps-sdk'
import useCurrentLocation from '@/hooks/useLatLng';
import SearchSidebar from '@/components/SearchSidebar';
import { styled } from 'styled-components';
import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import dynamic from 'next/dynamic';
const AuthModal = dynamic(() => import('@/components/AuthModal'), { ssr: false });

export default function Home() {
    const curLoc = useCurrentLocation();
    const [AuthPopupShowing, setAuthPopupShowing] = useState(false);

    useEffect(()=>{
        setAuthPopupShowing(true);
    },[])
    
    return (
        <MainFlex>
            {AuthPopupShowing ? createPortal(<AuthModal setState={setAuthPopupShowing}/>,document.body) : null}
            <SearchSidebar/>
            <Map style={{width: "calc(100vw - 530px)", height:"100vh"}} center={{ lat: curLoc.latitude, lng: curLoc.longitude }}>
            </Map>
        </MainFlex>
    )
}
    
const MainFlex = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: row;
`