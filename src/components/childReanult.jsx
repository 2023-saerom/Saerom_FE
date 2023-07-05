import { styled } from "styled-components"

export function ChildRenault({xes, name, Ph}){
    return(
        <Mainbox>
            <XesImg src={xes==='male' ? "/xes/fe.png" : "/xes/!fe.png"}/>
            <V>
                <Up>{name}</Up>
                <Sub>{Ph}</Sub>
            </V>
        </Mainbox>
    )
}

const Mainbox = styled.div`
    display: flex;
    flex-direction: row;
    gap: 20px;
`

const XesImg = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 99px;
    border: 2px solid #F8D648;
`
const V = styled.div`
    display: flex;
    flex-direction: column;
    gap: 6px;
`
const Up = styled.p`
    font-family: 'om';
    font-size: 26px;
    margin: 0;
`
const Sub = styled.p`
    color: #818181;
    font-family: 'om';
    font-size: 18px;
    margin: 0;
`