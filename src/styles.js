import { styled } from "styled-components";

export const FlexCenter = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    
    &.ly{
        background: #FEF7DA;
    }
`

export const SidebarBox = styled.div`
    background-color: white;
    min-width: 530px;
    width: 530px;
    height: 100vh;
    z-index: 8;
    box-shadow: 0 0 18px rgba(0, 0, 0, 0.15);;
`

export const Toppeer = styled.div`
    background: #F8D648;
    padding: 30px;
    display: flex;
    flex-direction: row;
`