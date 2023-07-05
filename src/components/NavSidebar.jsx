import { useRouter } from "next/router"
import { styled } from "styled-components"

export default function NavSidebar(){
    const r = useRouter();

    function changeRoute(path){
        if (process.browser)
            r.push(path);
    }

    function logout(){
        console.log('fucku')
    }

    return(
        <NavMainC>
            <Logoimg src="/logo250.png"/>
            <TabWrapper>
                <Tabber className={r.pathname == '/'} onClick={() => changeRoute('/')}>
                    <img src="/sidenav/findPath.png"/>
                </Tabber>
                <Tabber className={r.pathname == '/search'} onClick={() => changeRoute('/search')}>
                    <img src="/sidenav/search.png"/>
                </Tabber>
                <Tabber className={r.pathname == '/child/Loc'} onClick={() => changeRoute('/child/Loc')}>
                    <img src="/sidenav/childLoc.png"/>
                </Tabber>
                <Tabber className={r.pathname == '/child/Add'} onClick={() => changeRoute('/child/Add')}>
                    <img src="/sidenav/childAdd.png"/>
                </Tabber>
                <Tabber className={r.pathname == '/addPath'} onClick={() => changeRoute('/addPath')}>
                    <img src="/sidenav/addPath.png"/>
                </Tabber>
                <Tabber onClick={()=> logout()}>
                    <img src="/sidenav/logOut.png"/>
                </Tabber>
            </TabWrapper>
        </NavMainC>
    )
}

const NavMainC = styled.div`
    z-index: 88;
    display: flex;
    flex-direction: column;
    min-width: 100px;
    width: 100px;
    background: white;
    border-right: 1px solid #F8D648;
    height: 100vh;
    padding: 30px 15px;
    box-sizing: border-box;
    gap: 60px;
`

const Logoimg = styled.img`
    width: -webkit-fill-available;
`

const TabWrapper = styled.div`
    display: flex;
    flex-direction: column;
`
const Tabber = styled.button`
    height: 75px;
    width: 75px;
    background: white;
    border: none;
    border-radius: 99px;
    transition: 250ms ease-in-out;

    &:hover{
        filter: brightness(95%);
        cursor: pointer;
        transition: 250ms ease-in-out;
    }
    &.true{
        background: #FEFBED;
    }
`