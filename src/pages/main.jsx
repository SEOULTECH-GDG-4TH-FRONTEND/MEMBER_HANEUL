import styled from 'styled-components';
import { useEffect } from 'react'
import { useState } from 'react'

import Container from '../componenets/global/container';
import Header from '../componenets/global/header';
import Body from '../componenets/global/body';
import BrowseHeader from '../componenets/main/browseHeader';
import MeBtn from '../componenets/main/meBtn';
import UserCard from '../componenets/main/userCard';

export default function Main() {

    const [profiles, setProfiles] = useState([])

    useEffect(() => {
      const fetchProfiles = async () => {
        const response = await fetch(
          'https://api-test-gdsc-22b48e20369e.herokuapp.com/api/data'
        )
        if (response.ok) {
          const data = await response.json()
          console.log(data)
          setProfiles(data)
        }
      }

      fetchProfiles()
    }, [])

    return (
        <Container>
            <Header justifyContent="space-between" alignContent="center">
                <BrowseHeader />
                <MeBtn />
            </Header>
            <Body>
                <UserContainer>
                    {profiles.map((profile) => (
                        <UserCard
                        key={profile.id}
                        id={profile.id}
                        icon={profile.id}
                        name={profile.name}
                        bio={profile.bio}
                        replyCount={profile.questionCount}
                        />
                    ))}
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
