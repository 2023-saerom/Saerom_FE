import { styled } from "styled-components"
import { SidebarBox, Toppeer } from "@/styles"

export default function SearchSidebar(){
    return(
        <SidebarBox>
            <Toppeer>
                <Movie src="/move.svg"/>
                <InputContainer>
                    <TopInput placeholder="도착지를 입력해주세요"/>
                    <TopInput placeholder="출발지를 입력해주세요"/>
                </InputContainer>
            </Toppeer>
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