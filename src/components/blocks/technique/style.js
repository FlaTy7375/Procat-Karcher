import styled from "styled-components";
import Technique1 from "../../../assets/images/karcher-puzzi.png"
import Technique2 from "../../../assets/images/karcher-easy-sc3.png"

export const StyledTechnique = styled.section `
    margin-bottom: 189px;
`

export const TechniqueWrapper = styled.div `
    display: flex;
    flex-direction: column;

    .technique-name {
        width: 458px;
    }
`

export const CardsWrapper = styled.div `
    display: flex;
    flex-direction: column;
    gap: 136px;
    margin-top: 106px;

    .technique-card {
        position: relative;
        display: flex;
        width: 1618px;
        height: 526px;
        margin: 0 auto;
        padding: 125px 55px 125px 131px;
    }

    .technique-card:nth-child(1) {
        align-items: flex-end;
    }

    .technique-card:nth-child(1)::before {
        content: "";
        position: absolute;
        bottom: -70px;
        left: 0;
        width: 900px;
        height: 784px;
        background-image: url(${Technique1});
        background-size: cover;
    }

    .technique-card:nth-child(2)::after {
        content: "";
        position: absolute;
        bottom: 0px;
        right: 41px;
        width: 696px;
        height: 696px;
        background-image: url(${Technique2});
        background-size: cover;
    }

    .technique-card .card-wrapper {
        display: flex;
        flex-direction: column;
        gap: 24px;
        width: 700px;
    }

    .technique-card h2 {
        font-weight: 600;
        font-size: 38px;
        text-shadow: 0 -0px 2px 0 rgba(0, 0, 0, 0.06), 0 -0px 4px 0 rgba(0, 0, 0, 0.09), 0 -1px 6px 0 rgba(0, 0, 0, 0.11), 0 -1px 10px 0 rgba(0, 0, 0, 0.13), 0 -2px 15px 0 rgba(0, 0, 0, 0.15), 0 -3px 24px 0 rgba(0, 0, 0, 0.17), 0 -5px 40px 0 rgba(0, 0, 0, 0.2), 0 -9px 80px 0 rgba(0, 0, 0, 0.26);
    }

    .technique-card p {
        font-weight: 600;
        font-size: 20px;
    }

    .technique-card article {
        font-weight: 600;
        font-size: 38px;
    }

    .button-wrapper {
        display: flex;
        gap: 30px;
    }

    .technique-info {
        width: 64px;
        height: 64px;
        padding: 17px;
    }
`