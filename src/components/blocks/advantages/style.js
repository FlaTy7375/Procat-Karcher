import styled from "styled-components";

export const StyledAdvantages = styled.section `
    margin-bottom: 187px;

    .advantages-name {
        width: 490px;
    }

    .advantages-card {
        position: relative;
        width: 513px;
        height: 644px;
        padding: 341px 47px 67px 47px;
    }

    .advantages-card img {
        position: absolute;
    }

    .advantages-card:nth-child(1) img {
        width: 488px;
        height: 488px;
        top: -136px;
        left: 0;
    }

    .advantages-card:nth-child(2) img {
        width: 447px;
        height: 671px;
        top: -166px;
        left: 33px;
    }

    .advantages-card:nth-child(3) img {
        width: 413px;
        height: 413px;
        top: -89px;
        left: 62px;
    }

    .advantages-card h2 {
        font-weight: 400;
        font-size: 38px;
        opacity: 0.75;
    }

    .advantages-card .advantages-title {
        margin-bottom: 15px;
    }

    .advantages-card p {
        font-weight: 400;
        font-size: 24px;
        opacity: 0.75;
        width: 370px;
    }
`

export const AdvantagesWrapper = styled.div `
    display: flex;
    justify-content: space-between;
    margin-top: 185px;
`