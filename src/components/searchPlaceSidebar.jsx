import { Toppeer, SidebarBox } from "@/styles";
import { styled } from "styled-components";
import { ListWarp, PlaceRenault } from "./placeRenault";
import { dumbData } from "@/dumb";
import { useState } from "react";

export default function SearchPlaceSidebar(){
    const [Data,setData] = useState(dumbData);

    return(
        <SidebarBox>
            <Toppeer>
                <SebarH>
                    <Ikon/>
                    <Ipt placeholder="장소 검색하기"/>
                </SebarH>
            </Toppeer>
            <ListWarp style={{height:'calc( 100vh - 112px - 60px )'}}>
                {Data.map((d, idx)=>{
                    return <PlaceRenault info={d.info} name={d.name} phNum={d.phNum} type={d.type} key={idx}/>
                })}
            </ListWarp>
        </SidebarBox>
    )
}


const SebarH = styled.div`
    border-radius: 888px;
    display: flex;
    background: white;
    width: 100%;
    flex-direction: row;
    gap: 15px;
    padding: 15px 17px;
    align-items: center;
`
const Ikon = styled.button`
    background: url("/search22.png");
    border: none;
    width: 22px;
    height: 22px;
    transition: 250ms ease-in-out;
    &:hover{
        filter: brightness(95%);
        transition: 250ms ease-in-out;
    }
`
const Ipt = styled.input`
    font-size: 20px;
    font-family: 'om';
    width: -webkit-fill-available;
    border: 0;
    &::placeholder{
        color: #C4C4C4;
    }
`