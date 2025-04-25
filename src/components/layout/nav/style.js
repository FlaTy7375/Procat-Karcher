import styled from "styled-components";

export const StyledNav = styled.nav `
    position: relative;
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

    .menu-button {
        display: none;
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

    @media (max-width: 767px) {
        .menu-button {
            position: absolute;
            right: 20px;
            display: flex;
            align-items: center;
            justify-content: center;
            width: 36px;
            height: 36px;
        }

        .logo-wrapper {
            left: 20px;
        }

        .logo-wrapper h2 {
            display: block;
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

    @media (max-width: 767px) {
        display: none;

        .nav-opened & {
            padding: 0 20px;
            position: absolute;
            flex-direction: column;
            gap: 0;
            box-shadow: 0px 18px 22px -6px rgba(0, 0, 0, 0.25);
            background-color: #121119;
            background: rgba(18, 17, 25, 0.9);
            border: 2px solid rgba(255, 255, 255, 0.14);
            border-top: none;
            top: 46px;
            display: flex;
            width: 100vw;
        }

        .nav-opened & a {
            display: flex;
            align-items: center;
            justify-content: center;
            height: 60px;
            width: 100vw;
        }

        .nav-opened & a:hover {
            background: rgba(255, 255, 255, 0.9);
            color: black;
        }
    }
`