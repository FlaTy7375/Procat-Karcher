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
    
    .button-wrapper {
        display: flex;
        gap: 30px;
        margin-top: 20px;
    }

    .services-button {
        width: 216px;
        font-weight: 400;
        font-size: 24px;
        opacity: 0.75;
    }

    .services-info {
        width: 59px;
        height: 59px;
        padding: 12px;
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

        .button-wrapper {
            gap: 30px;
            margin-top: 20px;
        }

        .services-info {
            width: 45px;
            height: 45px;
            padding: 9px;
            opacity: 0.75;
        }

        .services-button {
            height: 45px;
            width: 190px;
            font-size: 18px;
        }
    }

    @media (max-width: 468px) {
        .services-card { 
            padding: 70vw 18px 25px 18px;
        }

        .button-wrapper {
            gap: 15px;
        }

        .services-button {
            width: 160px;
        }
    }
`

export const ServicesAboutContainer = styled.div `
    display: none;

    &.modal-show {
        display: block;
        position: fixed;
        left: 50%;
        transform: translate(-50%, 0);
        z-index: 3;
        top: 0px;
        padding: 40px 0;
        width: 100%;
        height: 100%;
        overflow: auto;
        background-color: rgba(0, 0, 0, 0.4);
    }

    .services-about {
        position: relative;
        height: 100%;
        overflow: auto;
        border-radius: 20px;
        padding: 60px 80px 60px 80px;
        width: calc(100% - 100px);
        max-width: 1180px;
        margin: 0 auto;
        background-color: rgb(44, 44, 44);
    }

    .about-container {
        position: relative;
        display: flex;
    }

    .about-button--wrapper {
        display: flex;
        flex-direction: column;
        gap: 15px;
    }

    h2 {
        font-weight: 600;
        font-size: 28px;
    }

    p , li, article {
        font-weight: 600;
        font-size: 18px;
        max-width: 910px;
    }

    ul, li {
        list-style-type: disc;
    }

    small {
        font-weight: 600;
        font-size: 18px;
        color: rgba(255, 255, 255, 0.75);
    }

    .button-close {
        position: absolute;
        right: 40px;
        top: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 50px;
        height: 50px;
        background-color: transparent;
        border: 2px solid #fff;
        border-radius: 10px;
        stroke: #fff;
        cursor: pointer;
    }

    .button-close:hover {
        background-color: #fff;
        stroke: #000;
        opacity: 0.75;
    }

    .about-block {
        display: flex;
        flex-direction: column;
        gap: 20px;
        margin-bottom: 40px;
    }

    .about-block ul {
        display: flex;
        flex-direction: column;
        gap: 20px;
        margin-left: 20px;
    }

    .about-block:nth-child(4) ul {
        margin-left: 0;
    }

    .about-block:nth-child(4) li {
        margin-left: 20px;
    }

    .about-socials {
        position: absolute;
        bottom: 0px;
        right: 0px;
    }

    .about-socials h2 {
        font-size: 24px;
    }

    .about-socials a:nth-child(3) {
        opacity: 0.85;
    }

    .social-about--list {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-top: 10px;
    }

    @media (max-width: 1210px) {
        .services-about {
            padding: 50px 40px 50px 40px;
        }

        .about-socials {
            position: unset;
            display: flex;
            flex-direction: column;
            gap: 15px;
            max-width: 216px;
            margin-top: 40px;
        }

        .about-container {
            flex-direction: column;
        }
    }

    @media (max-width: 767px) {
        .services-about {
            width: calc(100% - 42px);
            border-radius: 25px;
            padding: 50px 30px 50px 30px;
        }

        .about-socials {
            margin: 0 auto;
            margin-top: 20px;
        }

        .about-button {
            margin: 0 auto;
            padding: 5px 10px;
            max-width: 216px;
            width: 100%;
            font-weight: 400;
            font-size: 18px;
        }

        .button-close { 
            width: 36px;
            height: 36px;
            top: 20px;
            right: 20px;
        }

        h2 {
            font-weight: 600;
            font-size: 18px;
        }

        p , li, article {
            font-weight: 600;
            font-size: 14px;
        }

        small {
            text-align: center;
            font-weight: 600;
            font-size: 14px;
        }

        .about-socials h2 {
            font-size: 18px;
        }

        .about-socials {
            max-width: 162px;
        }

        .about-socials img, .about-socials a {
            width: 36px;
            height: 36px;
        }
    }

    @media (max-width: 442px) {
        .services-about {
            padding: 70px 30px 50px 30px;
        }
    }

    @media (max-width: 396px) {
        .services-about {
            padding: 30px 40px 50px 40px;
        }
    }
`