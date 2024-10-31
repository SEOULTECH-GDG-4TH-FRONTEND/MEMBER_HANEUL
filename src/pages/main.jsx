import styled from 'styled-components';
import Container from '../componenets/global/container';
import Header from '../componenets/global/header';
import Body from '../componenets/global/body';
import BrowseHeader from '../componenets/main/browseHeader';
import MeBtn from '../componenets/main/meBtn';
import UserCard from '../componenets/main/userCard';

export default function Main() {
    return (
        <Container>
            <Header justifyContent="space-between" alignContent="center">
                <BrowseHeader />
                <MeBtn />
            </Header>
            <Body>
                <UserContainer>
                    <UserCard 
                        profile="h" 
                        name="김하늘" 
                        introduction="안녕하세요. 질문해주세요." 
                    />
                    <UserCard 
                        profile="h" 
                        name="김하늘" 
                        introduction="안녕하세요. 질문해주세요." 
                    />
                    <UserCard 
                        profile="h" 
                        name="김하늘" 
                        introduction="안녕하세요. 질문해주세요." 
                    />
                    <UserCard 
                        profile="h" 
                        name="김하늘" 
                        introduction="안녕하세요. 질문해주세요." 
                    />
                    <UserCard 
                        profile="h" 
                        name="김하늘" 
                        introduction="안녕하세요. 질문해주세요." 
                    />
                    <UserCard 
                        profile="h" 
                        name="김하늘" 
                        introduction="안녕하세요. 질문해주세요." 
                    />
                    <UserCard 
                        profile="h" 
                        name="김하늘" 
                        introduction="안녕하세요. 질문해주세요." 
                    />
                    <UserCard 
                        profile="h" 
                        name="김하늘" 
                        introduction="안녕하세요. 질문해주세요." 
                    />
                </UserContainer>
            </Body>
        </Container>
    );
}

const UserContainer = styled.div`
    width: 1040px;
    height: 390px;
    padding: 2px 5px;
    display: grid;
    box-sizing: border-box;
    grid-template-columns: repeat(auto-fit, minmax(325px, 1fr));
    max-width: 1040px;
    row-gap: 22px;
    column-gap: 26px;
    overflow-x: visible;
    overflow-y: auto;
    justify-items: center;

    border: 1px solid;
`;
