import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import '../../assets/font.css';

export default function BackBtn({url}){
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(url); 
    };

    return (
        <Back onClick={handleClick}>back</Back>
    );

}

const Back = styled.div`
    font-family: 'ABeeZee';
    font-size: 22px;
    text-decoration: underline;
    color: #808080;
    background-color: transparent;
    border: none;
    user-select: none;

    &:hover {
        color: black;
    }
`