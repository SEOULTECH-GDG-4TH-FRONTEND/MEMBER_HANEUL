import styled from "styled-components";

export default function Body({ justifyContent, alignItems, children }) {
    return (
        <Wrapper justifyContent={justifyContent} alignItems={alignItems}>
            {children}
        </Wrapper>
    );
}

const Wrapper = styled.div`
    margin-top: 34px;
    width: 100%;
    aspect-ratio: 1040 / 390;
    box-sizing: border-box;
    padding: 0px 5px;
    display: flex;
    flex-direction: column;
    justify-content: ${({ justifyContent }) => justifyContent || 'start'};
    align-items: ${({ alignItems }) => alignItems || 'center'};
    overflow: visible;

    border: 1px solid;
`