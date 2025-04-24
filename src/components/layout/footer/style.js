import styled from "styled-components";

export const StyledFooter = styled.footer `
    background-color: #1e1d25;
    width: 100%;
`

export const FooterWrapper = styled.div `
    position: relative;
    display: flex;
    justify-content: space-between;
    width: 1180px;
    margin: 0 auto;
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
        bottom: 30px;
    }

    @media (max-width: 1210px) {
        padding-top: 40px;
        padding-bottom: 100px;
        height: auto;
        flex-direction: column;
        align-items: center;
        gap: 65px;
        width: calc(100vw - 100px);

        .logo-container {
            width: auto;
        }

        .footer-logo {
            align-items: center;
            justify-content: center;
        }

        .logo-container p, .footer-book h2, .footer-socials h2 {
            text-align: center;
        }

        .footer-socials, .footer-book, .logo-container {
            margin-top: 0;
        }

        .logo-container article {
            left: 0;
            bottom: 20px;
        }

        .footer-book article {
            right: 0;
            bottom: 20px;
        }
    }
`