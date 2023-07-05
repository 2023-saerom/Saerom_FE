import { styled } from "styled-components"
import { FlexCenter } from "@/styles"

export default function NotFoundMama(){
    return(
        <FlexCenter style={{flexDirection:"column"}}>
            <img width={800} src="/momNotFound.png"/>
            <Lrg>
                404 Not Found
            </Lrg>
            <Lrg2>
                주소가 정확한지 확인해 보세오
            </Lrg2>
        </FlexCenter>
    )
}

const Lrg = styled.p`
    font-family: 'jua';
    font-size: 36px;
    margin: 8px;
`

const Lrg2 = styled.p`
    font-family: 'om';
    font-size: 24px;
    margin: 2px;
`