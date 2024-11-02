import styled from 'styled-components';
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import '../../assets/font.css';

export default function MypageButton({ defaultText, hoverText }) {
    const [buttonText, setButtonText] = useState(defaultText);

    const navigate = useNavigate();

    const handleClick = () => {
        navigate('../reply_question'); 
    };

    return (
        <Button
            onMouseEnter={() => setButtonText(hoverText)}
            onMouseLeave={() => setButtonText(defaultText)}
            onClick={handleClick}
        >
            {buttonText}
        </Button>
    );
}


const Button = styled.button`
    width: 150px;
    height: 50px;
    background-color: white;
    font-family: 'Bevan';
    font-size: 20px;
    border: 3.5px solid;
    box-sizing: border-box;
    border-radius: 15px;

    &:hover {
        background-color: #b2b2b2;
        color: white;
        border: 0;
    }
`