import { dumbChild } from "@/dumb"
import { useState } from "react"
import { styled } from "styled-components"

export default function ChildPage(){
    const [Data, setData] = useState(dumbChild);
    return(
        <MMM>
            <PgHd>
                자녀 관리
            </PgHd>
            <Ho>
                {Data.map((d,idx)=>{
                    return <ChildT Ph={d.Ph} name={d.name} xes={d.xes} key={idx}/>
                })}
            </Ho>
        </MMM>
    )
}

const MMM = styled.div`
    width: calc(100vw - 100px);
    height: 100vw;
`
const PgHd = styled.p`
    font-family: 'om';
    font-size: 52px;
    position: absolute;
    transform: translate(-50%, -50%);
    left: calc(50% + 50px);
    top: 10%;
`

const Ho = styled.div`
    display: flex;
    gap: 70px;
    width: calc(100vw - 300px);
    overflow-x: scroll;
    position: absolute;
    left: calc(50% + 50px);
    top: 50%;
    transform: translate(-50%, -50%);
`

function ChildT({xes, name, Ph}){
    return(
        <div style={{display:'flex', gap:'50px', alignItems:'center', flexDirection:'column'}}>
            <Mainbox>
                <XesImg src={xes==='male' ? "/xes/fe.png" : "/xes/!fe.png"}/>
                <Up>{name}</Up>
                <Sub>{Ph}</Sub>
                <div style={{display: 'flex', flexDirection:'row', gap:'10px'}}>
                    <IamBtn src='/btn/delBtn.png' />
                    <IamBtn src='/btn/editBtn.png' />
                </div>
            </Mainbox>
            <div style={{borderRadius:"100%", background:"#ECECEC", width:"240px", height:"20px"}}/>
        </div>
    )
}

const IamBtn = styled.button`
    height: 36px;
    width: 36px;
    background: url(${props=> props.src});
    border: none;
    &:hover{
        filter: brightness(95%);
        cursor: pointer;
    }
`

const Mainbox = styled.div`
    padding: 40px;
    width: 200px;
    border-radius: 10px;
    background: #FEF7DA;
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;
`

const XesImg = styled.img`
    background-color: white;
    border-radius: 999px;
    height: 130px;
    width: 130px;
`
const Up = styled.p`
    font-size: 36px;
    font-family: 'om';
    margin: 0;
`
const Sub = styled.p`
    color: #818181;
    font-size: 22px;
    font-family: 'om';
    margin: 0;
`