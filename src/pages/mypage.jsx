import styled from 'styled-components';
import Container from '../componenets/global/container';
import Header from '../componenets/global/header';
import Body from '../componenets/global/body';

import Icon from '../assets/global/profileIcon.svg';
import MypageHeader from '../componenets/mypage/mypageHeader';

export default function Mypage() {
    return (
        <Container>
            <Header justifyContent="center" alignContent="center">
                <MypageHeader name="h"/>
            </Header>
            <Body justifyContent="space-between">
            </Body>
        </Container>
    );
}
