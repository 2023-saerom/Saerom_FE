import { styled } from "styled-components"

export default function SignUp(){
    return(
        <FlexCenter>
            <LoginMainContainer>
                <img src="/signUpSide.png" />
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
    width: 1000px;
    height: 600px;
    background-color: #F8D648;
    border-radius: 10px;
    box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.15);
`
const Header = styled.p`
    font-family: var(-jua);
`