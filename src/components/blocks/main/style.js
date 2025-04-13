import styled from "styled-components";
import MainImage from "../../../assets/images/main-image.png"

export const StyledMain = styled.section `
    position: relative;
    margin-bottom: 180px;

    p {
        max-width: 893px;
        font-weight: 500;
        font-size: 23px;
        color: #fff;
        opacity: 0.75;
    }

    .main-button {
        margin-top: 15px;
        width: 290px;
    }

    .main-comment {
        position: absolute;
        top: 525px;
        width: 411px;
        height: 237px;
        padding: 43px 42px;
        border-radius: 45px;
    }

    .main-comment div {
        display: flex;
        gap: 28px;
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
        width: 512px;
        height: 644px;
        padding: 38px 83px;
    }

    .main-card::after {
        position: absolute;
        content: "";
        width: 430px;
        height: 430px;
        top: -76px;
        right: 41px;
        background-image: url(${MainImage});
        background-size: cover;
    }

    .main-card .card-button {
        width: 264px;
        font-weight: 400;
        font-size: 28px;
        opacity: 0.75;
    }

    .main-card h2 {
        font-weight: 400;
        font-size: 38px;
        opacity: 0.75;
    }

    .main-card p {
        font-weight: 400;
    }
`

export const StyledMainWrapper = styled.div `
    display: flex;
    justify-content: space-between;
`

export const Title = styled.h1 `
    max-width: 910px;
    font-weight: 600;
    font-size: 118px;
    color: #fff;
    opacity: 0.75;
`

export const MainInfo = styled.div `
    display: flex;
    flex-direction: column;
`

export const CardWrapper = styled.div `
    display: flex;
    flex-direction: column;
    gap: 20px;
`