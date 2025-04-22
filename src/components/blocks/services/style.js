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
        bottom: 21px;
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
`
