import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useState } from "react"; 
import '../../assets/font.css';
import { login } from "../../apis/user";

export default function SignIn() {
    const navigate = useNavigate();
    const [email, setEmail] = useState(""); // email 상태 추가
    const [password, setPassword] = useState(""); // password 상태 추가
    const [responseMessage, setResponseMessage] = useState(""); // 응답 메시지 상태 추가

    // const handleSignIn = async (e) => {
    //     e.preventDefault(); // 버튼의 기본 동작 방지
        
    //     if (loginEmail==="ciellehera@gmail.com" && loginPassword==="skykim2002") { 
    //         login();
    //         navigate("/main");
    //     } else {
    //         alert("Incorrect username or password.")
    //     }
    // };

    const handleSignIn = async (e) => {
        e.preventDefault();
        try {
            await login(email, password).then((data) => {
                console.log(data);
            })
            alert("로그인 성공");
            navigate("/main");
        } catch (error) {
            alert("로그인 실패");
        }
    };

    return (
        <Wrapper>
            <p>Sign in</p>
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
                type="password"
                id="password"
                name="password"
                placeholder="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)} // password 상태 업데이트
                required
            />
            <button onClick={(e) => handleSignIn(e)}>Sign in</button>
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