import styled from "styled-components";
import Services1 from "../../../assets/images/main-image.png";

export const StyledServices = styled.section `
    margin-bottom: 100px;

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
            left: 12px;
            top: -89px;
            width: 614px;
            height: 614px;
            left: 50%;
            transform: translate(-50%, 0%);
        }
    }
`
