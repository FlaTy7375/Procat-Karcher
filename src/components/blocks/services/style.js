import styled, { keyframes } from "styled-components";

const fanAppear = keyframes`
  from {
    opacity: 0;
    transform: scaleX(0.45);
  }
  to {
    opacity: 1;
    transform: scaleX(1);
  }
`;

const streamFlow = keyframes`
  from {
    stroke-dashoffset: 36;
  }
  to {
    stroke-dashoffset: 0;
  }
`;

const modalRise = keyframes`
  from {
    opacity: 0;
    transform: translateY(16px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const sheetSlideUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(100%);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const StyledServices = styled.section`
  position: relative;
  width: 100%;
  padding: clamp(64px, 8vw, 108px) var(--container-pad);
  background: var(--graphite);
  color: var(--paper);
  scroll-margin-top: 96px;
  overflow: hidden;

  @media (max-width: 767px) {
    padding: 52px 16px;
  }
`;

export const ServicesContainer = styled.div`
  width: 100%;
  max-width: var(--container-max);
  margin: 0 auto;
`;

export const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: 1.05fr 0.95fr;
  gap: clamp(28px, 4vw, 48px);
  align-items: start;

  .services-left,
  .services-right {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }

  .pressure-hero {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .pressure-number {
    font-family: var(--font-display);
    font-weight: 800;
    font-size: clamp(56px, 10.5vw, 172px);
    line-height: 0.92;
    letter-spacing: -0.03em;
    color: var(--sun);
    white-space: nowrap;
  }

  .pressure-sub {
    font-family: var(--font-body);
    font-size: 15px;
    font-weight: 500;
    letter-spacing: 0;
    color: rgba(255, 255, 255, 0.8);
  }

  /* Блок Vario Power */
  .vario-box {
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding: clamp(18px, 2.6vw, 28px);
    border-radius: var(--radius-card);
    background: #25282e;
    border: 1px solid rgba(255, 255, 255, 0.14);
  }

  .vario-head {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
  }

  .vario-kicker {
    font-family: var(--font-body);
    font-weight: 600;
    font-size: 13.5px;
    letter-spacing: 0;
    color: rgba(255, 255, 255, 0.78);
  }

  .vario-pressure {
    padding: 4px 10px;
    border-radius: 8px;
    background: var(--sun);
    color: var(--graphite);
    font-family: var(--font-body);
    font-weight: 700;
    font-size: 13px;
  }

  .vario-tabs {
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 8px;
  }

  .vario-tab {
    min-height: 44px;
    padding: 8px 10px;
    border-radius: 14px;
    background: #1c1e22;
    border: 1px solid rgba(255, 255, 255, 0.16);
    color: rgba(255, 255, 255, 0.78);
    font-family: var(--font-mono);
    font-weight: 500;
    font-size: 12.5px;
    letter-spacing: 0.06em;
    cursor: pointer;
    transition:
      background-color 200ms var(--ease-clean),
      border-color 200ms var(--ease-clean),
      color 200ms var(--ease-clean);

    &:hover:not(.is-active) {
      border-color: var(--sun);
      color: var(--paper);
    }

    &.is-active {
      background: var(--sun);
      border-color: var(--sun);
      color: var(--graphite);
    }
  }

  .vario-visualizer {
    display: grid;
    grid-template-columns: 180px 1fr;
    align-items: center;
    gap: 16px;
    padding: 14px 16px;
    border-radius: 18px;
    background: #1c1e22;
    border: 1px solid rgba(255, 255, 255, 0.1);
  }

  .vario-svg {
    width: 100%;
    height: auto;
    display: block;

    .fan-cone {
      transform-origin: 22px 60px;
      animation: ${fanAppear} 320ms var(--ease-clean);
    }

    .fan-stream {
      animation: ${streamFlow} 900ms linear infinite;
    }
  }

  .vario-desc {
    display: flex;
    flex-direction: column;
    gap: 4px;

    strong {
      font-family: var(--font-display);
      font-weight: 700;
      font-size: 15px;
      color: var(--paper);
    }

    p {
      font-size: 14.5px;
      line-height: 1.45;
      color: rgba(255, 255, 255, 0.76);
    }
  }

  /* Правая карточка с фото и характеристиками */
  .k5-stage {
    position: relative;
    min-height: 290px;
    padding: 24px;
    border-radius: var(--radius-card-lg);
    background: #25282e;
    border: 1px solid rgba(255, 255, 255, 0.14);
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;

    img {
      position: relative;
      z-index: 1;
      max-width: 300px;
      width: 100%;
      height: auto;
      object-fit: contain;
    }
  }

  .k5-clean-stripe {
    position: absolute;
    top: -18%;
    left: 22%;
    width: 56%;
    height: 136%;
    border-radius: 28px;
    background: var(--sun);
    transform: rotate(-12deg);
    z-index: 0;
  }

  .k5-price-tag {
    position: absolute;
    right: 14px;
    bottom: 14px;
    z-index: 2;
    padding: 6px 12px;
    border-radius: var(--radius-pill);
    background: var(--graphite);
    border: 1px solid rgba(255, 255, 255, 0.28);
    font-family: var(--font-mono);
    font-size: 12px;
    color: var(--sun);
  }

  .k5-info {
    display: flex;
    flex-direction: column;
    gap: 16px;

    h3 {
      font-family: var(--font-display);
      font-weight: 800;
      font-size: clamp(24px, 2.5vw, 34px);
      line-height: 1.08;
      letter-spacing: -0.02em;
      color: var(--paper);
    }

    p {
      font-size: 16.5px;
      line-height: 1.55;
      color: rgba(255, 255, 255, 0.8);
    }
  }

  .k5-specs-grid {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 10px;
  }

  .k5-spec-item {
    display: flex;
    flex-direction: column-reverse;
    gap: 4px;
    padding: 12px;
    border-radius: 16px;
    background: #25282e;
    border: 1px solid rgba(255, 255, 255, 0.12);

    dt {
      font-family: var(--font-mono);
      font-size: 11px;
      line-height: 1.3;
      color: rgba(255, 255, 255, 0.66);
    }

    dd {
      font-family: var(--font-display);
      font-weight: 700;
      font-size: 14.5px;
      line-height: 1.2;
      color: var(--sun);
    }
  }

  .services-actions {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    padding-top: 4px;
  }

  @media (max-width: 1023px) {
    grid-template-columns: 1fr;
  }

  @media (max-width: 767px) {
    .vario-tabs {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    .vario-visualizer {
      grid-template-columns: 1fr;
    }

    .k5-specs-grid {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    .services-actions button {
      width: 100%;
    }
  }
`;

export const ServicesAboutContainer = styled.div`
  position: fixed;
  inset: 0;
  z-index: 2200;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px 16px;
  background: rgba(28, 30, 34, 0.56);
  overflow-y: auto;

  .services-about {
    position: relative;
    width: min(980px, 100%);
    max-height: 90vh;
    overflow-y: auto;
    background: var(--paper);
    border: 1px solid var(--line);
    border-radius: var(--radius-card-lg);
    box-shadow: var(--shadow-card);
    color: var(--graphite);
    animation: ${modalRise} 260ms var(--ease-clean);
  }

  .sheet-head {
    position: sticky;
    top: 0;
    z-index: 5;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    padding: 18px 24px;
    background: var(--foam);
    border-bottom: 1px solid var(--line);
  }

  .about-kicker {
    font-family: var(--font-body);
    font-weight: 600;
    font-size: 13.5px;
    letter-spacing: 0;
    color: var(--graphite-70);
  }

  .button-close {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 44px;
    height: 44px;
    border-radius: 50%;
    background: var(--paper);
    border: 1px solid var(--line);
    color: var(--graphite);
    cursor: pointer;
    flex-shrink: 0;

    &:hover {
      background: var(--sun);
      border-color: var(--sun);
    }
  }

  .sheet-body {
    padding: clamp(20px, 3.2vw, 34px);
    display: flex;
    flex-direction: column;
    gap: 24px;
  }

  .about-top-grid {
    display: grid;
    grid-template-columns: 1.2fr 0.8fr;
    gap: 24px;
    align-items: center;

    @media (max-width: 767px) {
      grid-template-columns: 1fr;
    }
  }

  .about-intro {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  .about-title {
    font-family: var(--font-display);
    font-weight: 800;
    font-size: clamp(22px, 2.6vw, 30px);
    line-height: 1.1;
    letter-spacing: -0.02em;
    color: var(--graphite);
  }

  .about-description {
    font-size: 16.5px;
    line-height: 1.55;
    color: var(--graphite-70);
  }

  .image-card {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
    border-radius: var(--radius-card);
    background: var(--foam);
    border: 1px solid var(--line);
    overflow: hidden;

    &::before {
      content: "";
      position: absolute;
      inset: -15% 24%;
      background: var(--sun);
      transform: rotate(-12deg);
      border-radius: 20px;
    }

    img {
      position: relative;
      z-index: 1;
      max-height: 220px;
      width: auto;
      object-fit: contain;
    }
  }

  .about-specs-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;

    @media (max-width: 767px) {
      grid-template-columns: 1fr;
    }
  }

  .about-block {
    display: flex;
    flex-direction: column;
    gap: 12px;
    padding: 20px;
    border-radius: var(--radius-card);
    background: var(--foam);
    border: 1px solid var(--line);

    h3 {
      font-family: var(--font-display);
      font-weight: 700;
      font-size: 18px;
      color: var(--graphite);
    }

    ul {
      display: flex;
      flex-direction: column;
      gap: 10px;
      padding-left: 18px;
    }

    li {
      list-style-type: disc;
      font-size: 15.5px;
      line-height: 1.55;
      color: var(--graphite-70);

      strong {
        color: var(--graphite);
      }
    }
  }

  .about-container {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
    padding-top: 18px;
    border-top: 1px solid var(--line);
  }

  .about-button--wrapper {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;

    small {
      color: var(--graphite-70);
      font-size: 14px;
    }
  }

  .about-socials {
    display: flex;
    flex-direction: column;
    gap: 8px;

    h4 {
      font-family: var(--font-mono);
      font-size: 12px;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      color: var(--graphite-70);
    }
  }

  .social-about--list {
    display: flex;
    align-items: center;
    gap: 10px;

    a {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 44px;
      height: 44px;
      border-radius: 50%;
      background: var(--foam);
      border: 1px solid var(--line);
      color: var(--graphite);
      transition: background-color 200ms var(--ease-clean);

      &:hover {
        background: var(--sun);
        border-color: var(--sun);
      }
    }
  }

  @media (max-width: 767px) {
    padding: 0;
    align-items: flex-end;

    .services-about {
      border-radius: var(--radius-card) var(--radius-card) 0 0;
      max-height: 92vh;
      animation: ${sheetSlideUp} 280ms var(--ease-clean);
    }

    .about-button--wrapper,
    .about-button {
      width: 100%;
    }
  }
`;
