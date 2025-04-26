import styled from "styled-components";

export const StyledHeader = styled.header `
    position: relative;
    width: 1180px;
    margin: 0 auto;

    @media (max-width: 1210px) {
        width: 100vw;
    }

    @media (max-width: 767px) {
        width: 100vw;
    }
`

export const StyledWrapper = styled.div `
    z-index: 2;
    position: fixed;
    top: 40px;
    display: flex;
    width: 1180px;
    padding: 12px 36px;
    height: 60px;
    border-radius: 20px;
    box-shadow: 0px 18px 22px -6px rgba(0, 0, 0, 0.25);
    -webkit-backdrop-filter: blur(220.8px);
    backdrop-filter: blur(220.8px);
    background: rgba(255, 255, 255, 0.05);
    border: 2px solid rgba(255, 255, 255, 0.14);

    @media (max-width: 1210px) {
        padding: 12px 40px;
        width: calc(100vw - 60px);
        left: 50%;
        transform: translate(-50%, 0%);
    }

    @media (max-width: 767px) {
        padding: 12px 21px;
        width: 100vw;
        top: 0;
        left: 0;
        transform: none;
        border-radius: 0;
        background: rgba(18, 17, 25, 0.9);
    }
`