import styled from "styled-components";

export const StyledFooter = styled.footer `
    background-color: #1e1d25;
`

export const FooterWrapper = styled.div `
    display: flex;
    padding: 0px 89px 20px 89px;

    .logo-container {
        max-width: 580px;
        margin-top: 116px;
    }

    .logo-container p {
        font-weight: 500;
        font-size: 28px;
    }

    .logo-container h1 {
        font-weight: 900;
        font-size: 58px;
        opacity: 0.75;
    }

    .logo-container article {
        margin-top: 119px;
        font-weight: 800;
        font-size: 28px;
    }

    .footer-logo {
        display: flex;
        align-items: center;
        gap: 13px;
        margin-bottom: 31px;
    }

    .footer-socials {
        margin-top: 147px;
        margin-left: 152px;
    }

    .footer-socials h2 {
        font-weight: 800;
        font-size: 28px;
    }

    .social-list {
        margin-top: 40px;
        display: flex;
        gap: 30px;
    }

    .footer-book {
        display: flex;
        flex-direction: column;
        gap: 40px;
        margin-left: 220px;
        margin-top: 147px;
    }

    .footer-book h2 {
        font-weight: 800;
        font-size: 28px;
    }

    .footer-book .book-button {
        width: 292px;
        font-weight: 400;
        font-size: 28px;
        margin-bottom: 182px;
    }

    .footer-book article {
        font-weight: 500;
        font-size: 24px;
    }
`