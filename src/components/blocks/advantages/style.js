import styled from "styled-components";

export const StyledAdvantages = styled.section `
    margin-bottom: 100px;
    scroll-margin-top: 120px;
    position: relative;

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
        pointer-events: none;
    }

    .advantages-card:nth-of-type(3) img {
        width: 370px;
        height: 370px;
        top: -63px;
        left: 5px;
    }

    .advantages-card:nth-child(4) img {
        width: 311px;
        height: 467px;
        top: -71px;
        left: 34px;
    }

    .advantages-card:nth-child(5) img {
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

    //SWIPER СТИЛИ

    .swiper {
        position: relative;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        margin-top: 70px;
        overflow: visible;
        z-index: 0;
    }

    .slider-nav--container {
        display: none;
    }

    @media (max-width: 1210px) {
        .swiper {
            flex-direction: column;
            gap: 30px;
        }

        .advantages-card {
            height: 258px;
            padding: 60px;
            padding-left: 316px;
            min-width: 708px;
            width: calc(100vw - 60px);
        }

        .advantages-card:nth-child(3) img {
            width: auto;
            height: auto;
            max-width: 285px;
            top: -48px;
            left: 0px;
        }

        .advantages-card:nth-child(4) img {
            width: 240px;
            height: 360px;
            top: -43px;
            left: 22px;
        }

        .advantages-card:nth-child(5) img {
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
            align-items: stretch;
            position: relative;
            border-radius: 25px;
            align-items: center;
            justify-content: center;
            padding: 75vw 60px 60px 60px;
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

        .swiper-slide img {
            top: -30px;
            left: 50%;
            transform: translate(-50%, 0%);
        }

        .swiper-slide:nth-child(1) img {
            width: 80vw;
            height: 80vw;
        }

        .swiper-slide:nth-child(2) img {
            width: 70vw;
            height: 100vw;
        }

        .swiper-slide:nth-child(3) img {
            width: 75vw;
            height: 75vw;
        }

        .swiper-wrapper {
            flex-direction: row;
        }

        .swiper {
            padding-top: 20px;
            overflow: hidden;
            position: relative;
            margin-top: 30px;
            gap: 0;
            height: auto;
        }

        .swiper-slide {
            display: flex;
            justify-content: center;
            height: auto;
        }

        .swiper-pagination {
            position: absolute;
            bottom: 20px;
            font-weight: 700;
            font-size: 16px;
            opacity: 0.75;
        }

        .slider-nav--container {
            position: absolute;
            display: flex;
            width: 120px;
            align-items: center;
            bottom: 17px;
            left: 50%;
            transform: translate(-50%, 0%);
        }

        .slide-prev {
            position: absolute;
            bottom: 0;
            left: 0;
            border: none;
            width: 25px;
            height: 25px;
            transform: rotate(180deg);
            cursor: pointer;
            background-color: transparent;
        }

        .slide-next {
            position: absolute;
            bottom: 0;
            right: 0;
            border: none;
            width: 25px;
            height: 25px;
            cursor: pointer;
            background-color: transparent;
        }
    }

    @media (max-width: 468px) {
        .advantages-card {
            padding: 75vw 18px 60px 18px;
        }
    }
`