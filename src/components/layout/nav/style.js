import styled from "styled-components";

export const StyledNav = styled.nav `
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;

    .logo-wrapper {
        display: flex;
        height: 48px;
        justify-content: center;
        align-items: center;
    }

    .logo-wrapper a {
        display: flex;
        gap: 14px;
        align-items: center;
    }

    .logo-wrapper h2 {
        font-weight: 900;
        font-size: 28px;
        color: #fff;
        opacity: 0.75;
    }
`

export const StyledSocials = styled.div `
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    width: 176px;

    a {
        width: 32px;
        height: 32px;
        cursor: pointer;
    }
`

export const StyledMainNav = styled.div `
    display: flex;
    align-items: center;
    justify-content: space-between;
    min-width: 703px;

    a {
        font-weight: 500;
        font-size: 24px;
        color: #fff;
        cursor: pointer;
    }
`