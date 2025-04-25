import styled from "styled-components";
import MainImage from "../../../assets/images/main-image.png"

export const StyledMain = styled.section `
    position: relative;
    margin-bottom: 100px;
    scroll-margin-top: 120px;

    .main-container {
        display: flex;
        flex-direction: column;
        gap: 79px;
    }

    p {
        font-weight: 500;
        font-size: 18px;
        color: #fff;
        opacity: 0.75;
    }

    .main-button {
        width: 265px;
    }

    .main-comment {
        display: flex;
        width: 392px;
        height: 237px;
        padding: 40px;
        border-radius: 45px;
    }

    .comment-wrapper {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .main-comment .comment-author {
        display: flex;
        gap: 25px;
    }

    .main-comment h2 {
        margin-top: 9px;
        font-weight: 400;
        font-size: 22px;
    }

    .main-comment p {
        margin-top: 22px;
        font-weight: 400;
        font-size: 17px;
        opacity: 0.75;
    }

    .main-card {
        position: relative;
        justify-content: flex-end;
        width: 430px;
        height: 556px;
        padding: 50px 60px;
        padding-right: 100px;
    }

    .main-card::after {
        position: absolute;
        content: "";
        width: 400px;
        height: 400px;
        top: -103px;
        right: 15px;
        background-image: url(${MainImage});
        background-size: cover;
    }

    .main-card .card-button {
        width: 242px;
        font-weight: 400;
        font-size: 24px;
        opacity: 0.75;
    }

    .main-card h2 {
        font-weight: 400;
        font-size: 28px;
        opacity: 0.75;
    }

    .main-card p {
        font-weight: 400;
    }

    @media (max-width: 1210px) {
        h1 ~ p {
            text-align: center;
        }
        
        .main-container {
            display: flex;
            width: calc(100vw - 60px);
            margin: 0 auto;
        }

        .main-comment {
            display: none;
        }

        .main-card {
            display: none;
        }
    }

    @media (max-width: 767px) {
        margin-bottom: 60px;

        .main-container {
            width: calc(100vw - 42px);
        }

        .main-button {
            font-size: 18px;
            width: auto;
        }
    }
`

export const StyledMainWrapper = styled.div `
    display: flex;
    justify-content: space-between;

    @media (max-width: 1210px) {
        display: block;
    }
`

export const Title = styled.h1 `
    font-weight: 600;
    font-size: 80px;
    color: #fff;
    opacity: 0.75;

    @media (max-width: 1210px) {
        text-align: center;
    }

    @media (max-width: 767px) {
        font-size: 36px;
    }
`

export const MainInfo = styled.div `
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 694px;

    @media (max-width: 1210px) {
        align-items: center;
        width: auto;
    }
`

export const CardWrapper = styled.div `
    display: flex;
    flex-direction: column;
    gap: 20px;
`