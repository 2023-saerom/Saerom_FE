import { styled } from "styled-components"
import { FlexCenter } from "@/styles"

export default function Login(){
    return(
        <FlexCenter className="ly">
            <MainContainer>
                <LoIm src="/logo250.png" />
                <DaeGaRi>Log In</DaeGaRi>
                <Btttt>로그인</Btttt>
            </MainContainer>
        </FlexCenter>
    )
}

const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 400px;
    padding: 60px 250px;
    border-radius: 15px;
    background: #F8D648;
    box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.15);
`

const LoIm = styled.img`
    width: 60px;

`
const DaeGaRi = styled.p`
    font-family: 'jua';
    color: white;
    font-weight: 400;
    font-size: 42px;
    margin: 0;
`

const IPIP = styled.input`
    background-color: none;
    border: none;
`

const Btttt = styled.button`
    background-color: white;
    color: black;
    border: none;
    border-radius: 8888888888888px;
    font-size: 24px;
    font-family: 'om';
    padding: 15px;
    width: 100%;
    transition: 250ms ease-in-out;

    &:hover{
        transition: 250ms ease-in-out;
        filter: brightness(95%);
        cursor: pointer;
    }
`