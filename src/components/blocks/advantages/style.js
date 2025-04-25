import styled from "styled-components";

export const StyledAdvantages = styled.section `
    margin-bottom: 100px;
    scroll-margin-top: 120px;

    .advantages-name {
        width: 355px;
    }

    .advantages-card {
        position: relative;
        width: 380px;
        height: 514px;
        padding: 307px 30px 48px 40px;
    }

    .advantages-card img {
        position: absolute;
    }

    .advantages-card:nth-child(1) img {
        width: 370px;
        height: 370px;
        top: -63px;
        left: 5px;
    }

    .advantages-card:nth-child(2) img {
        width: 311px;
        height: 467px;
        top: -71px;
        left: 34px;
    }

    .advantages-card:nth-child(3) img {
        width: 325px;
        height: 325px;
        top: -45px;
        left: 28px;
    }

    .advantages-card h2 {
        font-weight: 400;
        font-size: 28px;
        opacity: 0.75;
    }

    .advantages-card .advantages-title {
        margin-bottom: 15px;
    }

    .advantages-card p {
        font-weight: 400;
        font-size: 18px;
        opacity: 0.75;
        width: 310px;
    }

    @media (max-width: 1210px) {
        .advantages-card {
            height: 258px;
            padding: 60px;
            padding-left: 316px;
            min-width: 708px;
            width: calc(100vw - 60px);
        }

        .advantages-card:nth-child(1) img {
            width: 285px;
            height: 285px;
            top: -48px;
            left: 0px;
        }

        .advantages-card:nth-child(2) img {
            width: 240px;
            height: 360px;
            top: -43px;
            left: 22px;
        }

        .advantages-card:nth-child(3) img {
            width: 249px;
            height: 249px;
            top: -16px;
            left: 28px;
        }

        .advantages-card p {
            width: auto;
        }
    }

    @media (max-width: 767px) {
        margin-bottom: 50px;

        .advantages-name {
            width: 236px;
        }

        .advantages-card {
            border-radius: 25px;
            align-items: center;
            justify-content: center;
            padding: 75vw 60px 50px 60px;
            height: auto;
            width: calc(100vw - 42px);
            min-width: 280px;
            max-width: 626px;
        }

        .advantages-card h2 {
            text-align: center;
            font-size: 22px;
        }

        .advantages-card p {
            text-align: center;
            font-size: 14px;
            max-width: 542px;
        }

        .advantages-card:nth-child(1) img {
            width: 80vw;
            height: 80vw;
            left: 50%;
            transform: translate(-50%, 0%);
        }

        .advantages-card:not(:nth-child(1)) {
            display: none;
        }
    }

    @media (max-width: 468px) {
        .advantages-card {
            padding: 75vw 18px 50px 18px;
        }
    }
`

export const AdvantagesWrapper = styled.div `
    display: flex;
    justify-content: space-between;
    margin-top: 100px;

    @media (max-width: 1210px) {
        flex-direction: column;
        align-items: center;
        gap: 30px;
    }

    @media (max-width: 767px) {
        margin-top: 50px;
    }
`