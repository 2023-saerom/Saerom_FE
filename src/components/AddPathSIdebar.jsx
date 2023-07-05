import { dumbPlace } from "@/dumb";
import { SidebarBox } from "@/styles";
import { useState } from "react";
import { styled } from "styled-components";

export default function AddPatchSidebar(){
    const [Data, setData] = useState(dumbPlace);

    return(
        <SidebarBox>
            <RouteComLer>
                {Data.map((d,i)=>{
                    return <RouteCom name={d.name} starred={d.strred} key={i} />
                })}
            </RouteComLer>
        </SidebarBox>
    )
}

const RouteComLer = styled.div`
    padding: 50px;
    box-sizing: border-box;
    height: 100vh;
    overflow: scroll;
`

function RouteCom({name, starred}){
    return(
        <RoCo>
            <p>
                {name}
            </p>
            <RoCoBt src={starred ? "/btn22/bmYs.png" : "/btn22/bmNO.png"}/>
            <RoCoBt src="/btn22/fucker.png"/>
        </RoCo>
    )
}
const RoCo = styled.div`
    display: flex;
    padding: 25px 0px;
    justify-content: center;
    align-items: center;
    gap: 15px;
    border-bottom: 1px solid #818181;
    &>p{
        width: -webkit-fill-available;
        font-size: 26px;
        font-family: 'om';
        margin: 0;
    }
`
const RoCoBt = styled.button`
    height: 30px;
    width: 30px;
    background: url(${props=> props.src});
    border: none;
    background-size: cover;
`