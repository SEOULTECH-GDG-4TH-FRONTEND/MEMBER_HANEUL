import styled from "styled-components";
import '../../assets/font.css'

export default function SignUp() {
    return (
        <Wrapper>
            <p>-or-</p>
            <button type="button" onclick="location.href='signup.html'">Create Account</button>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    margin-top: 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    p {
        font-family: 'ADLaM Display';
        font-size: 15px;
        color: #808080;
    }

    button {
        background-color: transparent;
        font-family: 'ADLaM Display';
        font-size: 20px;
        border: 0;
        text-decoration: underline;
    }
`;

