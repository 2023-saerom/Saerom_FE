import { styled } from "styled-components"

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

const SidebarBox = styled.div`
    background-color: white;
    width: 530px;
    height: 100vh;
    z-index: 8;
    box-shadow: 0 0 18px rgba(0, 0, 0, 0.15);;
`

const Movie = styled.img`
    padding: 18px;
`
const Toppeer = styled.div`
    background: #F8D648;
    padding: 30px;
    display: flex;
    flex-direction: row;

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