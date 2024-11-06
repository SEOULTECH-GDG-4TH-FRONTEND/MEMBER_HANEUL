import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import '../../assets/font.css';

import Me from '../../assets/global/me.svg'

export default function MypageHeader(){
    return(
        <Wrapper>
            <Image src={Me} />
        </Wrapper>
    );
};

const Wrapper = styled.div`
    width: 76px;
    height: 76px;
    box-sizing: border-box;
    user-select: none;
    pointer-events: none;
    
    // border: 1px solid;
`

const Image = styled.img`
    width: 100%;
    height: 100%;
    draggable: false;
`