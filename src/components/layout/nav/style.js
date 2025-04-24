import styled from "styled-components";

export const StyledNav = styled.nav `
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;

    .logo-wrapper {
        display: flex;
        height: 36px;
        justify-content: center;
        align-items: center;
    }

    .logo-wrapper a {
        display: flex;
        gap: 10px;
        align-items: center;
    }

    .logo-wrapper h2 {
        font-weight: 900;
        font-size: 24px;
        color: #fff;
        opacity: 0.75;
    }

    @media (max-width: 1210px) {
        justify-content: center;

        .logo-wrapper {
            position: absolute;
            left: 40px;
        }
        

        .logo-wrapper h2 {
            display: none;
        }
    }
`

export const StyledSocials = styled.div `
    display: flex;
    gap: 32px;

    a {
        width: 24px;
        height: 24px;
        cursor: pointer;
    }
    
    a:nth-child(3) {
        opacity: 0.85;
    }

    @media (max-width: 1210px) {
        display: none;
    }
`

export const StyledMainNav = styled.div `
    display: flex;
    gap: 32px;
    align-items: center;
    justify-content: space-between;
    

    a {
        font-weight: 500;
        font-size: 18px;
        color: #fff;
        cursor: pointer;
    }

    @media (max-width: 1210px) {
        gap: 15px;
    }
`