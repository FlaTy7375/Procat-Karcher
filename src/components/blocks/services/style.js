import styled from "styled-components";
import Services1 from "../../../assets/images/main-image.png";

export const StyledServices = styled.section `
    margin-bottom: 100px;
    scroll-margin-top: 120px;

    .short-name {
        display: none;
    }

    .services-name {
        width: 544px;
    }

    .services-card {
        position: relative;
        width: 1180px;
        margin: 0 auto;
        margin-top: 100px;
        height: 478px;
        padding: 70px 55px 30px 514px;
    }

    .services-wrapper {
        width: 610px;
    }

    .services-card::before {
        content: "";
        position: absolute;
        left: 12px;
        top: -86px;
        width: 543px;
        height: 543px;
        background-image: url(${Services1});
        background-size: cover;
    }

    .services-title {
        margin-bottom: 20px;
    }

    .services-card h2 {
        font-weight: 600;
        font-size: 28px;
        opacity: 0.75;
    }

    .services-card p {
        font-weight: 600;
        font-size: 18px;
        opacity: 0.75;
    }

    .services-button {
        width: 216px;
        margin-top: 20px;
        font-weight: 400;
        font-size: 24px;
        opacity: 0.75;
    }

    @media (max-width: 1210px) {
        .services-card {
            padding: 540px 70px 40px 80px;
            height: auto;
            width: calc(100vw - 60px);
            max-width: 808px;
        }

        .services-wrapper {
            width: auto;
        }

        .services-card::before {
            top: -89px;
            width: 614px;
            height: 614px;
            left: 50%;
            transform: translate(-50%, 0%);
        }
    }

    @media (max-width: 767px) {
        margin-bottom: 50px;

        .short-name {
            display: block;
        }

        .full-name {
            display: none;
        }

        .services-name {
            width: 192px;
        }

        .services-name h1 {
            display: flex;        
        }

        .services-card { 
            margin-top: 50px;
            border-radius: 25px;
            padding: 70vw 38px 25px 38px;
            width: calc(100vw - 42px);
            max-width: 626px;
        }

        .services-card::before {
            top: -31px;
            width: 70vw;
            height: 70vw;
            left: 50%;
            transform: translate(-50%, 0%);
        }

        .services-card h2 {
            font-size: 18px;
        }

        .services-card p {
            font-size: 14px;
        }

        .services-button {
            height: 45px;
            width: 190px;
            margin: 0 auto;
            margin-top: 20px;
            font-size: 18px;
        }
    }

    @media (max-width: 468px) {
        .services-card { 
            padding: 70vw 18px 25px 18px;
        }
    }
`
