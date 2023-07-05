import SearchSidebar from '@/components/SearchSidebar';
import { styled } from 'styled-components';
import { useState } from 'react';
import { createPortal } from 'react-dom';
import dynamic from 'next/dynamic';
import NavSidebar from '@/components/NavSidebar';
const AuthModal = dynamic(() => import('@/components/AuthModal'), { ssr: false });
const MainMap = dynamic(()=> import('@/components/MainMap'), { ssr: false });

export default function Home() {
    const [AuthPopupShowing, setAuthPopupShowing] = useState(false);
    const isLogined = true;
    
    return (
        <MainFlex>
            {AuthPopupShowing ? createPortal(<AuthModal setState={setAuthPopupShowing}/>,document.body) : null}
            {isLogined ? <NavSidebar/> : null}
            <SearchSidebar/>
            <MainMap />
        </MainFlex>
    )
}
    
const MainFlex = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: row;
`