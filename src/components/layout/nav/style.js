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

    .unlog-wrapper {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .unlog-button {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        font-family: 'Inter';
        font-weight: 500;
        font-size: 18px;
        margin-right: 10px;
        color: #fff;
        cursor: pointer;
        background-color: transparent;
        border: none;
    }

    .unlog-avatar {
        display: flex;
        align-items: center;
        justify-content: center;
        border: 2px solid #fff;
        border-radius: 50%;
        width: 34px;
        height: 34px;
        font-family: 'Inter';
        font-weight: 400;
        font-size: 12px;
        cursor: pointer;
    }

    @media (max-width: 1210px) {
        justify-content: center;

        .logo-wrapper {
            position: absolute;
            left: 0px;
        }

        .logo-wrapper h2 {
            display: none;
        }

        .unlog-wrapper {
            position: absolute;
            right: 0;
        }
    }

    @media (max-width: 860px) {
        .unlog-img {
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
            border: none;
            background-color: transparent;
            width: 36px;
            height: 36px;
        }

        .logo-wrapper {
            left: 20px;
        }

        .logo-wrapper h2 {
            display: block;
        }

        .unlog-avatar {
            display: none;
        }
    }
`

export const StyledSocials = styled.div `
    display: flex;
    gap: 24px;

    a {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 32px;
        height: 32px;
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
    
    .nav-logout {
        display: none;
    }

    a {
        position: relative;
        font-weight: 500;
        font-size: 18px;
        color: #fff;
        cursor: pointer;
    }

    a:hover::before {
        content: "";
        position: absolute;
        bottom: -2px;
        height: 2px;
        width: 100%;
        background-color: #ffffff;
    }

    @media (max-width: 1210px) {
        gap: 15px;
    }

    @media (max-width: 767px) {
        display: none;
        z-index: 2;

        .nav-logout {
            display: flex;
        }

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

        .nav-opened & a, .nav-opened & button {
            display: flex;
            align-items: center;
            justify-content: center;
            height: 60px;
            width: 100vw;
        }

        .nav-opened & button {
            background-color: transparent;
            border: none;
            font-weight: 500;
            font-size: 18px;
        }

        .nav-opened & a:hover {
            background: rgba(255, 255, 255, 0.9);
            color: black;
        }
    }
`