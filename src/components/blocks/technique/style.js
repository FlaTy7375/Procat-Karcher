import styled, { keyframes } from "styled-components";

const tagSwing = keyframes`
  0% {
    transform: rotate(0deg);
  }
  28% {
    transform: rotate(-2deg);
  }
  65% {
    transform: rotate(1.8deg);
  }
  100% {
    transform: rotate(0deg);
  }
`;

export const StyledTechnique = styled.section`
  position: relative;
  width: 100%;
  padding: clamp(56px, 7vw, 96px) var(--container-pad);
  background: var(--foam);
  color: var(--graphite);
  scroll-margin-top: 96px;

  @media (max-width: 767px) {
    padding: 48px 16px;
  }
`;

export const TechniqueWrapper = styled.div`
  width: 100%;
  max-width: var(--container-max);
  margin: 0 auto;
`;

export const CardsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: clamp(24px, 3.5vw, 40px);
  padding-top: 22px;
  align-items: stretch;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 36px;
  }
`;

export const TagCard = styled.article`
  position: relative;
  display: flex;
  flex-direction: column;
  transform-origin: 50% 6px;
  filter: drop-shadow(0 24px 28px rgba(28, 30, 34, 0.12));

  @media (hover: hover) and (pointer: fine) {
    &:hover {
      animation: ${tagSwing} 750ms var(--ease-clean);
    }

    &:hover .tag-surface {
      border-color: var(--sun-deep);
    }
  }

  .tag-cord {
    position: absolute;
    top: -22px;
    left: 50%;
    transform: translateX(-50%);
    width: 4px;
    height: 44px;
    border-radius: 999px;
    background: var(--graphite);
    z-index: 3;
  }

  .tag-surface {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex: 1;
    background: var(--paper);
    border: 1px solid var(--line);
    border-radius: var(--radius-tag);
    padding-top: 16px;
    transition: border-color 250ms var(--ease-clean);

    /* Срезанные уголки сверху в стиле прокатной бирки */
    clip-path: polygon(
      20px 0,
      calc(100% - 20px) 0,
      100% 20px,
      100% 100%,
      0 100%,
      0 20px
    );
  }

  .tag-eyelet-row {
    display: flex;
    justify-content: center;
    margin-bottom: 12px;
  }

  .tag-eyelet {
    position: relative;
    z-index: 4;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: var(--foam);
    border: 3px solid var(--graphite);
    box-shadow: 0 0 0 3px var(--sun);
  }

  .tag-body {
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 0 clamp(20px, 3vw, 34px) 22px;
    flex: 1;
  }

  .tag-top-row {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    gap: 8px;
  }

  .tag-mono-head {
    font-family: var(--font-body);
    font-weight: 600;
    font-size: 13.5px;
    letter-spacing: 0;
    color: var(--graphite-70);
  }

  .tag-free-badge {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 4px 10px;
    border-radius: 6px;
    background: rgba(46, 158, 91, 0.08);
    border: 1.5px solid var(--ok);
    font-family: var(--font-body);
    font-weight: 600;
    font-size: 12px;
    letter-spacing: 0.01em;
    color: #1f7442;
    transform: rotate(-1.5deg);

    &::before {
      content: "";
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background: var(--ok);
    }
  }

  .tag-visual {
    position: relative;
    min-height: 260px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 16px;
    overflow: hidden;

    img {
      position: relative;
      z-index: 2;
      max-width: 260px;
      width: 100%;
      height: 230px;
      object-fit: contain;
      filter: drop-shadow(0 20px 22px rgba(28, 30, 34, 0.22));
    }
  }

  /* Круг из «чистой полосы» */
  .tag-clean-circle {
    position: absolute;
    width: 224px;
    height: 224px;
    border-radius: 50%;
    background: var(--foam);
    border: 1px solid var(--line);
    overflow: hidden;
    z-index: 1;

    &::before {
      content: "";
      position: absolute;
      inset: -24% 18%;
      background: linear-gradient(180deg, var(--sun-soft) 0%, var(--sun) 100%);
      transform: rotate(-12deg);
    }
  }

  .tag-price-sticker {
    position: absolute;
    right: 6px;
    bottom: 10px;
    z-index: 3;
    padding: 8px 14px;
    border-radius: 14px;
    background: var(--sun);
    border: 1.5px solid var(--graphite);
    font-family: var(--font-display);
    font-weight: 800;
    font-size: 15px;
    color: var(--graphite);
    transform: rotate(-4deg);
    box-shadow: 0 10px 18px -12px rgba(28, 30, 34, 0.35);
  }

  .tag-info {
    display: flex;
    flex-direction: column;
    gap: 8px;

    h3 {
      font-family: var(--font-display);
      font-weight: 800;
      font-size: clamp(22px, 2.3vw, 30px);
      line-height: 1.08;
      letter-spacing: -0.02em;
      color: var(--graphite);
    }

    p {
      font-size: 16.5px;
      line-height: 1.5;
      color: var(--graphite-70);
    }
  }

  .tag-metrics {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 10px;
    padding: 14px 16px;
    border-radius: 16px;
    background: var(--foam);
    border: 1px solid var(--line);
  }

  .tag-metric-item {
    display: flex;
    flex-direction: column-reverse;
    gap: 3px;

    dt {
      font-family: var(--font-mono);
      font-size: 11px;
      letter-spacing: 0.06em;
      text-transform: uppercase;
      color: var(--graphite-70);
    }

    dd {
      font-family: var(--font-display);
      font-weight: 700;
      font-size: clamp(16px, 1.7vw, 20px);
      line-height: 1.1;
      color: var(--graphite);
    }
  }

  /* Линия перфорации с вырезами по бокам */
  .tag-perforation {
    position: relative;
    display: flex;
    align-items: center;
    height: 20px;
    width: 100%;
  }

  .perf-line {
    width: 100%;
    border-top: 2px dashed var(--line);
  }

  .perf-notch {
    position: absolute;
    top: 50%;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: var(--foam);
    border: 1px solid var(--line);
    transform: translateY(-50%);
    z-index: 2;
  }

  .perf-notch--left {
    left: -11px;
  }

  .perf-notch--right {
    right: -11px;
  }

  .tag-footer {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    padding: 16px clamp(20px, 3vw, 34px) clamp(22px, 3vw, 30px);
  }

  .tag-book-btn {
    flex: 1 1 170px;
  }

  .tag-specs-btn {
    flex: 1 1 170px;
  }

  @media (max-width: 480px) {
    .tag-metrics {
      grid-template-columns: repeat(3, minmax(0, 1fr));
      gap: 8px;
      padding: 12px;
    }

    .tag-metric-item dd {
      font-size: 15px;
    }

    .tag-footer button {
      width: 100%;
    }
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

/* Светлый лист / bottom-sheet для TechniqueAbout */
export const TechniqueAboutContainer = styled.div`
  position: fixed;
  inset: 0;
  z-index: 2200;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px 16px;
  background: rgba(28, 30, 34, 0.56);
  overflow-y: auto;

  .technique-about {
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
    }
  }

  .about-bold {
    color: var(--graphite);
    font-weight: 600;
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

    .technique-about {
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
