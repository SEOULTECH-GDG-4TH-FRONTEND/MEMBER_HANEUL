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
    width: 100%;
    aspect-ratio: 1040 / 390;
    padding: 2px 0px;
    display: grid;
    box-sizing: border-box;
    grid-template-columns: repeat(auto-fit, minmax(325px, 1fr));
    place-items: center;
    justify-content: center;
    align-items: center;
    column-gap: 1rem;
    row-gap: 22px;
    overflow-y: auto;

    // border: 1px solid;
`;
