import { Jua } from 'next/font/google'
import { Map } from 'react-kakao-maps-sdk'
import useCurrentLocation from '@/hooks/useLatLng';
import SearchSidebar from '@/components/SearchSidebar';
import { styled } from 'styled-components';

const jua = Jua({
  weight: ['400'],
  preload: false,
})

export default function Home() {
  const curLoc = useCurrentLocation()

  return (
    <MainFlex>
      <SearchSidebar/>
      <Map
        style={{width: "calc(100vw - 530px)", height:"100vh"}}
        center={{ lat: curLoc.latitude, lng: curLoc.longitude }}
      >
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