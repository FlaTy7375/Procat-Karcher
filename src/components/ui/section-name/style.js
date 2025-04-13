import styled from "styled-components";

export const StyledSection = styled.div `
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 439px;
    height: 109px;
    margin: 0 auto;
    padding: 18px 34px;

    h1 {
        font-weight: 600;
        font-size: 55px;
        text-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.09), 0 5px 4px 0 rgba(0, 0, 0, 0.13), 0 8px 6px 0 rgba(0, 0, 0, 0.15), 0 13px 10px 0 rgba(0, 0, 0, 0.18), 0 19px 15px 0 rgba(0, 0, 0, 0.21), 0 30px 24px 0 rgba(0, 0, 0, 0.23), 0 50px 40px 0 rgba(0, 0, 0, 0.27), 0 100px 80px 0 rgba(0, 0, 0, 0.36);
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