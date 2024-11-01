import styled from 'styled-components';
import Container from '../componenets/global/container';
import Header from '../componenets/global/header';
import Body from '../componenets/global/body';

import BoardHeader from '../componenets/board/boardHeader';

export default function Mypage() {
    return (
        <Container>
            <Header justifyContent="center" alignContent="center">
                <BoardHeader name="p"/>
            </Header>
            <Body justifyContent="space-between">
            </Body>
        </Container>
    );
}
