import { styled } from "styled-components"

export function PlaceRenault(props){
    return(
        <ListInnerS>
            <InnerH>{props.name}</InnerH>
            <ComboPhType>
                <InnerPH>{props.phNum}</InnerPH>
                <span/>
                <InnerInfor>{props.type}</InnerInfor>
            </ComboPhType>
            <InnerInfor>{props.info}</InnerInfor>
        </ListInnerS>
    )
}

export const ListWarp = styled.div`
    padding: 30px 50px;
    overflow-y: scroll;
    height: calc( 100vh - 174px - 60px );
`


const ListInnerS = styled.div`
    display: flex;
    gap: 5px;
    flex-direction: column;
    padding: 30px 0;
    border-bottom: 1px #818181 solid;
`
const InnerH = styled.p`
    font-size: 22px;
    font-family: 'jua';
    margin: 0;
`
const InnerPH = styled.p`
    color: #257DDD;
    font-size: 20px;
    font-family: omyu pretty;
    margin: 0;
`
const InnerInfor = styled.p`
    font-size: 20px;
    font-family: 'om';
    margin: 0;
`

const ComboPhType = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 7px;
    width: 100%;

    &>span{
        height: 10px;
        border-left: black solid 1px;
    }
`