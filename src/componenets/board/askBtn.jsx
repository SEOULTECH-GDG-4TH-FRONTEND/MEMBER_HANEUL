import styled from 'styled-components';
import { useNavigate } from "react-router-dom";
import '../../assets/font.css';

export default function AskBtn(){
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/question'); 
    };

    return(
        <Button onClick={handleClick}>
            + new question
        </Button>
    );
}

const Button = styled.button`
    width: 200px;
    height: 50px;
    background-color: black;
    color: white;
    font-family: 'Bevan';
    font-size: 20px;
    box-sizing: border-box;
    border-radius: 30px;
    margin: 0px;

    &:hover {
        transform: scale(1.03)
    }
`