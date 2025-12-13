import styled from "styled-components";
import Technique1 from "../../../assets/images/karcher-puzzi.png"
import Technique2 from "../../../assets/images/karcher-sc4-deluxe.png"

export const StyledTechnique = styled.section `
    margin-bottom: 100px;
    scroll-margin-top: 120px;

    @media (max-width: 767px) {
        margin-bottom: 50px;
    }
`

export const TechniqueWrapper = styled.div `
    display: flex;
    flex-direction: column;

    @media (max-width: 767px) {
        .technique-name {
            width: 234px;
        }
    }
`

export const CardsWrapper = styled.div `
    display: flex;
    flex-direction: column;
    gap: 80px;
    margin-top: 100px;

    .technique-card {
        position: relative;
        display: flex;
        justify-content: center;
        width: 1180px;
        height: 380px;
        margin: 0 auto;
        padding: 54px;
        border-radius: 100px;
    }

    .technique-card:nth-child(1) {
        align-items: flex-end;
    }

    .technique-card:nth-child(1)::before {
        content: "";
        position: absolute;
        bottom: 15px;
        left: 40px;
        width: 532px;
        height: 463px;
        background-image: url(${Technique1});
        background-size: cover;
    }

    .technique-card:nth-child(2) {
        padding-left: 142px;
    }

    .technique-card:nth-child(2)::after {
        content: "";
        position: absolute;
        bottom: 18px;
        right: 54px;
        width: 460px;
        height: 460px;
        background-image: url(${Technique2});
        background-size: cover;
    }

    .technique-card .card-wrapper {
        display: flex;
        flex-direction: column;
        gap: 24px;
        width: 526px;
    }

    .technique-card h2 {
        font-weight: 600;
        font-size: 28px;
    }

    .technique-card p {
        font-weight: 600;
        font-size: 18px;
    }

    .technique-card article {
        font-weight: 600;
        font-size: 28px;
    }

    .button-wrapper {
        display: flex;
        gap: 30px;
    }

    .technique-info {
        width: 59px;
        height: 59px;
        padding: 12px;
    }

    .technique-button {
        width: 266px;
        font-weight: 500;
    }

    @media (max-width: 1210px) {
        .technique-card {
            flex-direction: column;
            width: calc(100vw - 60px);
            max-width: 808px;
            padding-top: 510px;
            height: auto;
        }

        .technique-card:nth-child(1) {
            align-items: center;
        }

        .technique-card .card-wrapper {
            width: auto;
        }

        .technique-card:nth-child(1)::before {
            top: -108px;
            width: 665px;
            height: 579px;
            left: calc(50% + 15px);
            transform: translate(-50%, 0%);
        }

        .technique-card:nth-child(2)::after {
            top: -134px;
            width: 607px;
            height: 607px;
            left: calc(50% + 10px);
            transform: translate(-50%, 0%);
        }

        .technique-card:nth-child(2) {
            padding: 54px;
            padding-top: 510px;
        }
    }

    @media (max-width: 767px) {
        margin-top: 50px;
        gap: 50px;

        .technique-card .card-wrapper {
            width: 100%;
        }

        .technique-card {
            
            padding: 20px 19px 20px 20px;
            padding-top: 70vw;
            width: calc(100vw - 42px);
            border-radius: 25px;
        }

        .technique-card h2 {
            font-size: 22px;
        }

        .technique-card p {
            font-size: 14px;
        }

        .technique-card article {
            font-size: 22px;
        }

        .technique-card:nth-child(1)::before {
            top: -24px;
            width: 80vw;
            height: 70vw;
            left: 50%;
            transform: translate(-50%, 0%);
        }

        .technique-card:nth-child(2)::after {
            top: -62px;
            width: 75vw;
            height: 75vw;
            left: 50%;
            transform: translate(-50%, 0%);
        }

        .technique-card:nth-child(2) {
            padding: 20px 19px 20px 20px;
            padding-top: 67vw;
        }

        .button-wrapper {
            gap: 15px;
        }

        .technique-button {
            width: 168px;
            height: 52px;
            font-size: 18px;
        }

        .technique-info {
            width: 52px;
            height: 52px;
        }
    }
`

export const TechniqueAboutContainer = styled.div`
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

    .technique-about {
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

    .about-button--wrapper {
        display: flex;
        flex-direction: column;
        gap: 15px;
    }

    h2 {
        font-weight: 600;
        font-size: 28px;
    }

    p , li {
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

    .image-card {
        position: absolute;
        top: 220px;
        right: 60px;
        width: 40vw;
        height: 26vw;
        max-width: 513px;
        max-height: 357px;
    }

    .image-card img {
        position: absolute;
        top: -35px;
        width: 34vw;
        height: 30vw;
        max-width: 441px;
        max-height: 383px;
    }

    .about-container {
        position: relative;
        display: flex;
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
        .image-card {
            position: relative;
            top: auto;
            right: auto;
            margin-bottom: 40px;
            border-radius: 35px;
            min-width: 338px;
            min-height: 220px;
        }

        .image-card img {
            min-width: 286px;
            min-height: 252px;
            left: 40px;
        }

        .technique-about {
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
        .technique-about {
            width: calc(100% - 42px);
            border-radius: 25px;
            padding: 50px 30px 50px 30px;
        }

        .image-card {
            width: 100%;
            height: 50vw;
            min-width: auto;
            min-height: auto;
            max-width: 378px;
            max-height: 260px;
        }

        .image-card img {
            width: 90%;
            height: 60vw;
            max-width: 336px;
            max-height: 306px;
            min-width: auto;
            min-height: auto;
            left: 15px;
            top: -40px;
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

        .about-block ul {
            margin-left: 0;
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

    @media (max-width: 354px) {
        .technique-about {
            padding: 70px 30px 50px 30px;
        }
    }
`