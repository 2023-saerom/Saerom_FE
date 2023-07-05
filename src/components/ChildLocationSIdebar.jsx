import { SidebarBox } from "@/styles";
import { styled } from "styled-components";
import { ChildRenault } from "./childReanult";
import { useState } from "react";
import { dumbChild } from "@/dumb";

export default function ChildLocationSidebar(){
    const [Data, setData] = useState(dumbChild);

    return(
        <SidebarBox>
            <Ttttt>
                나의 자녀 위치 찾기
            </Ttttt>
            <Chlico>
                {Data.map((d, idx)=>{
                    return <ChildRenault Ph={d.Ph} name={d.name} xes={d.xes} key={idx} />
                })}
            </Chlico>
        </SidebarBox>
    )
}

const Ttttt = styled.div`
    font-size: 38px;
    font-family: 'jua';
    padding: 60px 40px;
`

const Chlico = styled.div`
    padding: 0 40px;
    display: flex;
    gap: 30px;
    flex-direction: column;
`