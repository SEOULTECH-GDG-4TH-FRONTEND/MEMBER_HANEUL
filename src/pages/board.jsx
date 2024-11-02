import styled from 'styled-components';
import Container from '../componenets/global/container';
import Header from '../componenets/global/header';
import Body from '../componenets/global/body';

import BoardHeader from '../componenets/board/boardHeader';
import QuestionCard from '../componenets/board/boardCard';
import AskBtn from '../componenets/board/askBtn';
import BackBtn from '../componenets/global/backBtn';

export default function Mypage() {
    return (
        <Container>
            <Header justifyContent="center" alignContent="center">
                <BoardHeader name="H"/>
            </Header>
            <Body padding='0px 5px'>
                <CardContainer>
                    <QuestionCard writer='김하늘' title='질문 있어요~!' content='가나다라마바사아가나다라마바사아가나다라마바사아가나다라마바사아가나다라마바사아' status='pending'/>
                    <QuestionCard writer='김하늘' title='질문 있어요~!' content='가나다라마바사아가나다라마바사아' status='pending'/>
                    <QuestionCard writer='누리' title='누리는 아긴데' content='누리는 아긴데 언니는 늦잠만 자고 기분 별로 안 조아' status='pending'/>
                    <QuestionCard writer='김하늘' title='질문 있어요~!' content='가나다라마바사아가나다라마바사아가나다라마바사아가나다라마바사아가나다라마바사아' status='pending'/>
                </CardContainer>

                <Buttons>
                    <CenterButtonWrapper><AskBtn/></CenterButtonWrapper>
                    <BackBtn url="/main"/>
                </Buttons>
            </Body>
        </Container>
    );
}

const CardContainer = styled.div`
    width: 100%;
    height: auto;
    aspect-ratio: 1030 / 310;
    overflow: auto;

    border: 1px solid;
`

const Buttons = styled.div`
    width: 100%;
    height: auto;
    aspect-ratio: 1030 / 60;
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    position: relative;
    margin-top: 20px;
    padding: 5px 0px;

    border: 1px solid;
`

const CenterButtonWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
`