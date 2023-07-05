import { jua } from "@/geo-si-gie/fonts"
import { styled } from "styled-components"
import { FlexCenter } from "@/styles"

export default function SignUp(){
    return(
        <FlexCenter className="ly">
            <LoginMainContainer>
                <img src="/signUpSide.png" />
                <RightWing>
                    <Header className={jua.className}>Sign Up</Header>
                    <TextboxContainer>
                        <TextBox placeholder="이름을 입력해주세요"/>
                        <TextBox placeholder="아이디를 입력해주세요"/>
                        <TextBox placeholder="비밀번호를 입력해주세요"/>
                        <TextBox placeholder="비밀번호를 다시 입력해주세요"/>
                        <TextBox placeholder="이메일을 입력해주세요"/>
                    </TextboxContainer>
                    <Btn>회원가입</Btn>
                </RightWing>
            </LoginMainContainer>
        </FlexCenter>
    )
}

const LoginMainContainer = styled.div`
    display: flex;
    width: 1000px;
    height: 600px;
    background-color: #F8D648;
    border-radius: 10px;
    box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.15);
`
const Header = styled.p`
    font-size: 42px;
    margin: 0;
`

const RightWing = styled.div`
    display: flex;
    flex-direction: column;
    padding: 30px 50px;
    width: 100%;
    color: white;
    gap: 56px;
`

const TextboxContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
`

const TextBox = styled.input`
    background-color: white;
    border: none;
    font-size: 22px;
    font-family: 'om';
    padding: 10px 15px;

    &::placeholder{
        color: #C4C4C4;
    }
`

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

    &:hover{
        filter: brightness(95%);
        color: darkgray;
        transition: 250ms ease-in-out;
    }
`