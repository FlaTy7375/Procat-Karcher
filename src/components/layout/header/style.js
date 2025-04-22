import styled from "styled-components";

export const StyledHeader = styled.header `
    position: relative;
    width: 1180px;
    margin: 0 auto;
`

export const StyledWrapper = styled.div `
    z-index: 1;
    position: fixed;
    top: 40px;
    display: flex;
    width: 1180px;
    padding: 12px 36px;
    min-height: 60px;
    border-radius: 20px;
    box-shadow: 0px 18px 22px -6px rgba(0, 0, 0, 0.25);
    backdrop-filter: blur(220.8px);
    background: rgba(255, 255, 255, 0.05);
    border: 2px solid rgba(255, 255, 255, 0.14);
`