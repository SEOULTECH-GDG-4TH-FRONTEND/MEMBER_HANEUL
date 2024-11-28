import styled from "styled-components";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import '../../assets/font.css';

import { login } from "../../apis/user";

export default function SignUp() {
    const navigate = useNavigate();
    const { isLoggedIn } = useAuth();
    const [username, setUsername] = useState("");
    const [password1, setPassword1] = useState("");
    const [password2, setPassword2] = useState("");
    const [email, setEmail] = useState("");

    useEffect(() => {
        if (isLoggedIn) {
            navigate("/main");
        }
    }, [isLoggedIn, navigate]);

    const handleSignup = async () => {
        try {
            await signup(username, password1, password2, email);
            alert("회원가입 성공");
            navigate("/login");
        } catch (error) {
            alert("회원가입 실패");
        }
    };

    return (
        <Wrapper>
            <p>Create New Account</p>
            <input
                type="test"
                id="username"
                name="username"
                placeholder="name"
                onChange={(e) => setUsername(e.target.value)} 
                required
            />
            <input
                type="email"
                id="email"
                name="email"
                placeholder="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)} // email 상태 업데이트
                required
            />
            <input
                type="password1"
                id="password1"
                name="password1"
                placeholder="password1"
                onChange={(e) => setPassword1(e.target.value)} // password 상태 업데이트
                required
            />
            <input
                type="password2"
                id="password2"
                name="password2"
                placeholder="password2"
                onChange={(e) => setPassword2(e.target.value)} // password 상태 업데이트
                required
            />
            <button onClick={(e) => handleSignup(e)}>Sign up</button>
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

const Form = styled.div`

`