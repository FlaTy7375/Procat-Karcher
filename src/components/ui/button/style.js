import styled from "styled-components";

export const StyledButton = styled.button `
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 15px 55px;
    border: 2px solid #fff;
    border-radius: 12px;
    background-color: transparent;
    width: 216px;
    height: 59px;
    font-weight: 400;
    font-size: 24px;
    color: #fff;
    cursor: pointer;

    &:hover {
        background-color: #fff;
        color: #000;
        opacity: 0.75;
    }

    &:hover svg {
        fill: #000;
    }
`