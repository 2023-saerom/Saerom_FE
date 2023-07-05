import { useRouter } from "next/router"
import { styled } from "styled-components"

export default function AuthModal({setState}){
    const route = useRouter();

    return(
        <Blck>
            <ModalTopper>
                adsf
                <ButtHo>
                    <Butt onClick={()=>setState(false)}>취소</Butt>
                    <Butt className="fill" onClick={()=>route.push('/auth/login')}>로그인</Butt>
                </ButtHo>
            </ModalTopper>
        </Blck>
    )
}

const ModalTopper = styled.div`
    background-color: white;
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    width: 440px;
    padding: 70px 180px;
`

const Blck = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(0, 0, 0, 0.50);
    z-index: 88;
    position: absolute;
    transform: translate(-50%,-50%);
    top: 50%;
    left: 50%;
`

const Butt = styled.button`
    color: #FFCE00;
    font-size: 24px;
    font-family: 'om';
    border-radius: 50px;
    border: 2px solid #FFCE00;
    background: rgba(248, 214, 72, 0.00);
    padding: 11px;
    width: -webkit-fill-available;
    transition: 250ms ease-in-out;
    background: white;

    &.fill{
        background: #FEFBED;
    }

    &:hover{
        cursor: pointer;
        filter: brightness(95%);
        transition: 250ms ease-in-out;
    }
`

const ButtHo = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    gap: 20px;
`