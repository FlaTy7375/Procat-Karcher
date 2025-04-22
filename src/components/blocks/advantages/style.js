import styled from "styled-components";

export const StyledAdvantages = styled.section `
    margin-bottom: 100px;

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
`

export const AdvantagesWrapper = styled.div `
    display: flex;
    justify-content: space-between;
    margin-top: 100px;
`