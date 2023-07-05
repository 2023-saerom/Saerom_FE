import { styled } from "styled-components"
import { FlexCenter } from "@/styles"

export default function Login(){
    return(
        <FlexCenter className="ly">
            <MainContainer>
                asfadsf
            </MainContainer>
        </FlexCenter>
    )
}

const MainContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 560px;
    width: 900px;
    border-radius: 15px;
    background: #F8D648;
    box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.15);
`