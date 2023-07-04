import { Inter } from 'next/font/google'
import { Map } from 'react-kakao-maps-sdk'
import useCurrentLocation from '@/hooks/useLatLng';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const curLoc = useCurrentLocation()

  console.log(curLoc)


  return (
    <>
      <Map
        style={{width:"100%", height:"100vh"}}
        center={{ lat: curLoc.latitude, lng: curLoc.longitude }}
      />
    </>
  )
}
