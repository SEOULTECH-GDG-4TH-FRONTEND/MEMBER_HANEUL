import styled from 'styled-components';

import Icon from '../../assets/global/profileIcon.svg';

export default function MypageHeader({name}){
    return(
        <Wrapper>
            <Name>{name}</Name>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    width: 244px;
    height: 65px;
    background-image: url(${Icon});
    display: flex;
    position: relative;
`

const Name = styled.div`
    width: 40px;
    height: 40px;
    margin: 0px;
    padding: 0px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-family: 'Bevan';
    font-size: 40px;
    color: #ffffff;
    user-select: none;
    position: absolute;
    inset: 12px 0 12px 12px;
    // border: 1px solid #ffffff;
`