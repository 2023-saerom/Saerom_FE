import { styled } from "styled-components"
import { FlexCenter } from "@/styles"
import { useState } from "react"

export default function SignUp(){
    const [value, setValue] = useState({
        id: '',
        pw: '',
        name: '',
        pwrep: '',
        email: '',
    });

    return(
        <FlexCenter className="ly">
            <LoginMainContainer>
                <img src="/signUpSide.png" />
                <RightWing>
                    <Header>Sign Up</Header>
                    <TextboxContainer>
                        <TextBox value={value.name} onChange={(e)=>setValue({...value, name: e.target.value})} placeholder="이름을 입력해주세요"/>
                        <TextBox value={value.id} onChange={(e)=>setValue({...value, id: e.target.value})} placeholder="아이디를 입력해주세요"/>
                        <TextBox type="password" value={value.pw} onChange={(e)=>setValue({...value, pw: e.target.value})} placeholder="비밀번호를 입력해주세요"/>
                        <TextBox type="password" value={value.pwrep} onChange={(e)=>setValue({...value, pwrep: e.target.value})} placeholder="비밀번호를 다시 입력해주세요"/>
                        <TextBox value={value.email} onChange={(e)=>setValue({...value, email: e.target.value})} placeholder="이메일을 입력해주세요"/>
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
    font-family: 'jua';
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