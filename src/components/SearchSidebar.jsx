import { styled } from "styled-components";
import { SidebarBox, Toppeer } from "@/styles";
import { useState, useEffect } from "react";
import { ListWarp, PlaceRenault } from "./placeRenault";
import { dumbData } from "@/dumb";
import { useRouter } from "next/router";

export default function SearchSidebar(){
    const [Data, setData] = useState(dumbData);
    const r = useRouter();
    const [isLogined, setLogined] = useState(false);
    useEffect(()=>{
        setLogined(localStorage.getItem('lg'));
    })

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
                {!isLogined && <Btn onClick={()=> r.push('/auth/login')}>로그잉</Btn>}
                {Data.map((d, idx)=>{
                    return <PlaceRenault name={d.name} phNum={d.phNum} info={d.info} type={d.type} key={idx}/>
                })}
            </ListWarp>
        </SidebarBox>
    )
}

const Btn = styled.button`
    width: 100%;
    font-family: 'om';
    border-radius: 10px;
    padding: 18px;
    border: none;
    background: #FEF7DA;
    color: #F8D648;
    font-size: 24px;
    transition: 250ms ease-in-out;
    cursor: pointer;

    &:hover{
        filter: brightness(95%);
        color: darkgray;
        transition: 250ms ease-in-out;
    }
`

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