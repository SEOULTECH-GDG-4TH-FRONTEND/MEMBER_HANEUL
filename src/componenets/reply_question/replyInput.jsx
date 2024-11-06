import styled from 'styled-components';
import '../../assets/font.css';

import InputBox from "../../assets/reply/r_input.svg";

export default function Question() {
    return (
        <Wrapper>
            <textarea
                type="text"
                id="reply"
                name="reply"
                placeholder="Answer to the question above..."
                required
            ></textarea>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    width: 100%;
    max-width: 1030px;
    height: auto;
    aspect-ratio: 1030 / 173;
    max-height: 173px;
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-image: url(${InputBox});
    background-size: contain;
    background-repeat: no-repeat;

    textarea {
        width: 95%;
        height: 85%;
        box-sizing: border-box;
        border: none;
        font-family: 'ABeeZee';
        font-size: 18px;
        outline: none;
        // border: 1px solid;
    }

`