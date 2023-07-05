import { styled } from "styled-components";
import { SidebarBox, Toppeer } from "@/styles";
import { useState } from "react";
import { ListWarp, PlaceRenault } from "./placeRenault";
import { dumbData } from "@/dumb";

export default function SearchSidebar(){
    const [Data, setData] = useState(dumbData);

    return(
        <SidebarBox>
            <Toppeer>
                <Movie src="/move.svg"/>
                <InputContainer>
                    <TopInput placeholder="도착지를 입력해주세요"/>
                    <TopInput placeholder="출발지를 입력해주세요"/>
                </InputContainer>
                
            </Toppeer>
            <ListWarp>
                {Data.map((d, idx)=>{
                    return <PlaceRenault name={d.name} phNum={d.phNum} info={d.info} type={d.type} key={idx}/>
                })}
            </ListWarp>
        </SidebarBox>
    )
}

const Movie = styled.img`
    padding: 18px;
`

const TopInput = styled.input`
    border: none;
    border-radius: 19281226px;
    font-size: 20px;
    font-family: 'om';
    padding: 15px 20px;

    &::placeholder{
        color: #C4C4C4;
    }
`
const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    width: -webkit-fill-available;
`