import styled from 'styled-components';
import Container from '../componenets/global/container';
import Header from '../componenets/global/header';
import Body from '../componenets/global/body';

import ReplyHeader from '../componenets/reply_question/replyHeader';
import QuestionRecieved from '../componenets/reply_question/questionRecieved';
import ReplyInput from '../componenets/reply_question/replyInput';
import SubmitBtn from '../componenets/global/submitBtn';
import BackBtn from '../componenets/global/backBtn';

export default function Question() {
    return (
        <Container>
            <Header justifyContent="start" alignItems="center">
                <ReplyHeader/>
            </Header>
            <Body padding='0px 5px' justifyContent="space-between">
                <Contents>
                    <QuestionRecieved questionText={".\n.\n\.\n.\n"}/>
                    <ReplyInput/>
                </Contents>

                <Buttons>
                    <CenterButtonWrapper><SubmitBtn width="72px" height="72px" url="/board"/></CenterButtonWrapper>
                    <BackBtn url="/mypage"/>
                </Buttons>
            </Body>
        </Container>
    );
}

const Contents = styled.div`
    width: 100%;
    max-width: 1030px;
    height: auto;
    aspect-ratio: 1030 / 288;
    
    // border: 1px solid;
`


const Buttons = styled.div`
    width: 100%;
    height: 72px;
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    position: relative;

    // border: 1px solid;
`

const CenterButtonWrapper = styled.div`
    display: flex;
    justify-content: center;
    flex-grow: 1;
`