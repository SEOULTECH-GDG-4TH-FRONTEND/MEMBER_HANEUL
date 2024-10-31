import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import "../../assets/font.css"

import cardImage from "../../assets/main/card.svg";


export default function UserCard({ profile, name, introduction }) {
    const navigate = useNavigate();

    const handleUserCard = () => {
        navigate("/question");
    };

    return (
        <Wrapper onClick={handleUserCard}>
            <Profile>{profile}</Profile>
            <Name>{name}</Name>
            <Introduction>{introduction}</Introduction>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    width: 325px;
    height: 179px;
    background-image: url(${cardImage});
    background-size: cover;
    position: relative;

    &:hover {
        transform: scale(1.02);
    }

    border: 1px solid;
`;

const Profile = styled.h1`
    position: absolute;
    font-family: 'Bevan';
    font-size: 40px;
    color: #ffffff;
    inset: 34px 0 0 53px;
    margin: 0;
    user-select: none;
`;

const Name = styled.h1`
    position: absolute;
    font-family: 'Noto Sans';
    font-size: 25px;
    inset: 32px 0 0 137px;
    color: #000000;
    margin: 0;
    user-select: none;
    font-weight: 700;
`;

const Introduction = styled.span`
    position: absolute;
    font-family: 'Noto Sans';
    font-size: 13px;
    font-weight: 700;
    inset: 73px 0 0 137px;
    margin: 0;
    color: #808080;
    user-select: none;
`;
