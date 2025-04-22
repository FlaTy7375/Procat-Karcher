import styled from "styled-components";

export const StyledSection = styled.div `
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 332px;
    height: 78px;
    margin: 0 auto;
    padding: 12px 24px 18px 24px;

    h1 {
        font-weight: 600;
        font-size: 40px;
    }

    .left-border {
        position: absolute;
        bottom: 0px;
        left: 0;
    }

    .right-border {
        position: absolute;
        top: 0;
        right: 0;
        transform: rotate(180deg);
    }
`