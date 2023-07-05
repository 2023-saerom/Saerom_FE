import { jua } from "@/geo-si-gie/fonts"
import { styled } from "styled-components"

export default function SignUp(){
    return(
        <FlexCenter>
            <LoginMainContainer>
                <img src="/signUpSide.png" />
                <RightWing>
                    <Header className={jua.className}>Sign Up</Header>
                    <TextboxContainer>
                        <TextBox/>
                        <TextBox/>
                        <TextBox/>
                        <TextBox/>
                        <TextBox/>
                    </TextboxContainer>
                    <Btn>회원가입</Btn>
                </RightWing>
            </LoginMainContainer>
        </FlexCenter>
    )
}

const FlexCenter = styled.div`
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #FEF7DA;
`
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
    background-color: red;
`

const Btn = styled.button`
    width: 100%;
`