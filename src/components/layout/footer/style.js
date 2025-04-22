import styled from "styled-components";

export const StyledFooter = styled.footer `
    background-color: #1e1d25;
    width: 100%;
`

export const FooterWrapper = styled.div `
    position: relative;
    display: flex;
    justify-content: space-between;
    width: 1280px;
    margin: 0 auto;
    padding: 0px 50px;
    height: 404px;


    .logo-container {
        width: 355px;
        margin-top: 83px;
    }

    .logo-container p {
        font-weight: 500;
        font-size: 18px;
    }

    .logo-container h1 {
        font-weight: 900;
        font-size: 32px;
    }

    .logo-container article {
        position: absolute;
        bottom: 30px;
        font-weight: 800;
        font-size: 24px;
    }

    .footer-logo {
        display: flex;
        align-items: center;
        gap: 20px;
        margin-bottom: 20px;
    }

    .footer-socials {
        margin-top: 95px;
    }

    .footer-socials h2 {
        font-weight: 800;
        font-size: 24px;
    }

    .social-list {
        margin-top: 30px;
        display: flex;
        gap: 35px;
    }

    .footer-book {
        display: flex;
        flex-direction: column;
        gap: 40px;
        margin-top: 95px;
    }

    .footer-book h2 {
        font-weight: 800;
        font-size: 24px;
    }

    .footer-book .book-button {
        width: 265px;
        font-weight: 400;
        font-size: 24px;
    }

    .footer-book article {
        font-weight: 500;
        font-size: 18px;
        position: absolute;
        bottom: 40px;
    }
`