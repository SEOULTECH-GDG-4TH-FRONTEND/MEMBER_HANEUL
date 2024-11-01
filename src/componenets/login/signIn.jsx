import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import '../../assets/font.css';

export default function SignIn() {
    const navigate = useNavigate();

    const handleSignIn = () => {
        navigate("/main");
    };

    return (
        <Wrapper>
            <p>Sign in</p>
            <input
                type="text"
                id="id"
                name="id"
                placeholder="id"
                required
            />
            <input
                type="password"
                id="password"
                name="password"
                placeholder="password"
                required
            />
            <button onClick={handleSignIn}>Sign in</button>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    margin-top: 35px;
    width: 387px;
    height: 195px;
    box-sizing: border-box;
    border: 1px solid #e5e5e5;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;

    p {
        font-family: 'ADLaM Display';
        font-size: 20px;
        color: #000000;
        margin: 0px;
    }

    input {
        height: 40px;
        width: 337px;
        box-sizing: border-box;
        border: 1px solid #e5e5e5;
        border-radius: 10px;
        padding-left: 21px;
        font-family: 'ABeeZee';
        font-size: 18px;
        outline: none;
    }

    input::placeholder {
        color: #808080;
        font-family: 'ABeeZee';
        font-size: 18px;
    }

    input:focus {
        border-color: #000000;
    }

    button {
        width: 71px;
        height: 25px;
        line-height: 20px;
        border-radius: 10px;
        background-color: #000000;
        color: #ffffff;
        border: 0;
        font-family: 'ADLaM Display';
        font-size: 15px;
        display: flex;
        flex-direction: column;
        justify content: center;
        align-items: center;

        &: hover {
            transform: scale(1.05);
        }
    }
`;
