import { styled } from "styled-components"
import { FlexCenter } from "@/styles"
import { useRouter } from "next/router"

export default function Login(){
    const route = useRouter();

    function goSU(){
        route.push('signup');
    }

    return(
        <FlexCenter className="ly">
            <MainContainer>
                <TopperS>
                    <LoIm src="/logo250.png" />
                    <DaeGaRi>Log In</DaeGaRi>
                </TopperS>
                <IPIP placeholder="아이디를 입력해주세요"/>
                <IPIP placeholder="비밀번호를 입력해주세요"/>
                <Btttt>로그인</Btttt>
                <Bt2 onClick={goSU}>회원가입</Bt2>
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
    gap: 40px;
    background: #F8D648;
    box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.15);
`

const TopperS = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
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
    background: none;
    border: none;
    padding: 10px 0;
    border-bottom: 1px white solid;
    font-size: 24px;
    font-family: 'om';
    color: white;
    width: 100%;

    &::placeholder{
        color: #FEF7DA;
    }
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

const Bt2 = styled.button`
    background: none;
    border: none;
    color: black;
    font-family: 'om';
    font-size: 20px;
    padding: 15px;
    width: 100%;
    transition: 250ms ease-in-out;
    border-radius: 8888888888888888888888px;

    &:hover{
        transition: 250ms ease-in-out;
        background: #0000000f;
        cursor: pointer;
    }
`