import styled from 'styled-components';
import Container from '../componenets/global/container';
import Header from '../componenets/global/header';
import Body from '../componenets/global/body';

import QuestionHeader from '../componenets/question/questionHeader';
import QuestionInput from '../componenets/question/questionInput';
import SubmitBtn from '../componenets/global/submitBtn';
import BackBtn from '../componenets/global/backBtn';
export default function Question() {
    return (
        <Container>
            <Header justifyContent="start" alignItems="center">
                <QuestionHeader/>
                <Name>김하늘</Name>
            </Header>
            <Body padding='0px 5px' justifyContent="space-between">
                <QuestionInput/>
                <Buttons>
                    <CenterButtonWrapper><SubmitBtn width="72px" height="72px" url="/main"/></CenterButtonWrapper>
                    <BackBtn url="/main"/>
                </Buttons>
            </Body>
        </Container>
    );
}

const Name = styled.div`
    width: 111px;
    margin-left: 15px;
    margin-top: 10px;
    font-family: 'Noto Sans';
    font-size: 40px;
    font-weight: 700;
    user-select: none;
    white-space: nowrap;
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

    border: 1px solid;
`

const CenterButtonWrapper = styled.div`
    display: flex;
    justify-content: center;
    flex-grow: 1;
`