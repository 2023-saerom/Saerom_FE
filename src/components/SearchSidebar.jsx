import { styled } from "styled-components"

export default function SearchSidebar(){
    return(
        <SidebarBox>
            멋찐싸이드미러
            미러가아니라 바
        </SidebarBox>
    )
}

const SidebarBox = styled.div`
    background-color: white;
    box-shadow: 10px 1 1 black;
    width: 530px;
    height: 100vh;
`