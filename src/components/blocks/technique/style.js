import styled from "styled-components";
import Technique1 from "../../../assets/images/karcher-puzzi.png"
import Technique2 from "../../../assets/images/karcher-easy-sc3.png"

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