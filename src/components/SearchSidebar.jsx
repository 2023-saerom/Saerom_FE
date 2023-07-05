import { styled } from "styled-components"
import { SidebarBox, Toppeer } from "@/styles"
import { useState } from "react"

export default function SearchSidebar(){
    const [Data, setData] = useState([
        {
            name: '우리집', phNum:'011 2352 9999', info: '우리 집입니다 니가 왜검색해요개시발새기야', type: '가정집'
        },
        {
            name: '느그집', phNum:'010 4563 9999', info: '저는 가정교사 에요 문을 열어 주세요 꽝꽝', type: '던전'
        },
        {
            name: '우리집', phNum:'011 2352 9999', info: '우리 집입니다 니가 왜검색해요개시발새기야', type: '가정집'
        },
        {
            name: '느그집', phNum:'010 4563 9999', info: '저는 가정교사 에요 문을 열어 주세요 꽝꽝', type: '던전'
        },
        {
            name: '우리집', phNum:'011 2352 9999', info: '우리 집입니다 니가 왜검색해요개시발새기야', type: '가정집'
        },
        {
            name: '느그집', phNum:'010 4563 9999', info: '저는 가정교사 에요 문을 열어 주세요 꽝꽝', type: '던전'
        },
        {
            name: '우리집', phNum:'011 2352 9999', info: '우리 집입니다 니가 왜검색해요개시발새기야', type: '가정집'
        },
        {
            name: '느그집', phNum:'010 4563 9999', info: '저는 가정교사 에요 문을 열어 주세요 꽝꽝', type: '던전'
        },
        {
            name: '우리집', phNum:'011 2352 9999', info: '우리 집입니다 니가 왜검색해요개시발새기야', type: '가정집'
        },
        {
            name: '느그집', phNum:'010 4563 9999', info: '저는 가정교사 에요 문을 열어 주세요 꽝꽝', type: '던전'
        },
        {
            name: '우리집', phNum:'011 2352 9999', info: '우리 집입니다 니가 왜검색해요개시발새기야', type: '가정집'
        },
        {
            name: '느그집', phNum:'010 4563 9999', info: '저는 가정교사 에요 문을 열어 주세요 꽝꽝', type: '던전'
        },
    ]);

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
                {Data.map((d)=>{
                    return <ListInner name={d.name} phNum={d.phNum} info={d.info} type={d.type}/>
                })}
            </ListWarp>
        </SidebarBox>
    )
}

function ListInner(props){
    return(
        <ListInnerS>
            <InnerH>{props.name}</InnerH>
            <ComboPhType>
                <InnerPH>{props.phNum}</InnerPH>
                <span/>
                <InnerInfor>{props.type}</InnerInfor>
            </ComboPhType>
            <InnerInfor>{props.info}</InnerInfor>
        </ListInnerS>
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

const ListWarp = styled.div`
    padding: 30px 50px;
    overflow-y: scroll;
    height: calc( 100vh - 174px - 60px );
`

const ListInnerS = styled.div`
    display: flex;
    gap: 5px;
    flex-direction: column;
    padding: 30px 0;
    border-bottom: 1px #818181 solid;
`
const InnerH = styled.p`
    font-size: 22px;
    font-family: 'jua';
    margin: 0;
`
const InnerPH = styled.p`
    color: #257DDD;
    font-size: 20px;
    font-family: omyu pretty;
    margin: 0;
`
const InnerInfor = styled.p`
    font-size: 20px;
    font-family: 'om';
    margin: 0;
`

const ComboPhType = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 7px;
    width: 100%;

    &>span{
        height: 10px;
        border-left: black solid 1px;
    }
`