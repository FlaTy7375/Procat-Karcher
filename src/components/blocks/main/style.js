import styled, { keyframes } from "styled-components";

const marqueeSlide = keyframes`
  0% {
    transform: translate3d(0, 0, 0);
  }
  100% {
    transform: translate3d(-33.3333%, 0, 0);
  }
`;

const pinPulse = keyframes`
  0% {
    transform: scale(0.92);
    opacity: 0.72;
  }
  70% {
    transform: scale(1.75);
    opacity: 0;
  }
  100% {
    transform: scale(1.75);
    opacity: 0;
  }
`;

export const StyledMain = styled.section`
  position: relative;
  width: 100%;
  min-height: clamp(500px, 41vw, 595px);
  background: var(--foam);
  color: var(--graphite);
  padding: clamp(24px, 3.6vw, 48px) var(--container-pad) clamp(32px, 4vw, 52px);
  overflow: hidden;
  display: flex;
  align-items: center;
  scroll-margin-top: 96px;

  .hero-bg-layer {
    position: absolute;
    inset: 0;
    pointer-events: none;
    overflow: hidden;
    z-index: 0;
  }

  .hero-bg-beam {
    position: absolute;
    top: -20%;
    left: -6%;
    width: 48%;
    height: 140%;
    background: radial-gradient(
      ellipse at 32% 44%,
      rgba(254, 210, 25, 0.16) 0%,
      rgba(254, 210, 25, 0) 70%
    );
  }

  @media (max-width: 1023px) {
    min-height: auto;
    display: block;
    padding: 18px var(--container-pad) 0;
  }

  @media (max-width: 767px) {
    padding: 14px 14px 0;
  }
`;

export const HeroContainer = styled.div`
  position: static;
  z-index: 2;
  width: 100%;
  max-width: var(--container-max);
  margin: 0 auto;
  display: grid;
  grid-template-columns: 0.9fr 1.1fr;
  align-items: center;

  @media (max-width: 1023px) {
    position: relative;
    grid-template-columns: 1fr;
    gap: 18px;
  }
`;

export const HeroLeft = styled.div`
  position: relative;
  z-index: 5;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  padding-right: clamp(16px, 2.5vw, 36px);

  .hero-kicker {
    display: inline-flex;
    align-items: center;
    gap: 10px;
  }

  .kicker-mark {
    width: 24px;
    height: 7px;
    background: var(--sun);
    border: 1px solid var(--graphite);
    transform: skewX(-16deg);
    flex-shrink: 0;
  }

  .hero-tag {
    font-family: var(--font-body);
    font-weight: 600;
    font-size: 15px;
    letter-spacing: -0.01em;
    color: var(--graphite);
  }

  .hero-subtitle {
    max-width: 470px;
    font-size: clamp(16px, 1.15vw, 18.5px);
    line-height: 1.55;
    color: var(--graphite-70);
  }

  .hero-actions {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 14px;
    margin-top: 2px;
    width: 100%;
  }

  .hero-facts-strip {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 14px;
    width: 100%;
    max-width: 470px;
    margin-top: 6px;
    padding: 14px 0 4px;
    border-top: 2px solid var(--graphite);
    border-bottom: 1px solid var(--line);
  }

  .hero-fact {
    display: flex;
    flex-direction: column-reverse;
    gap: 2px;
    min-width: 0;
    padding-right: 10px;
    border-right: 1px dashed var(--line);

    &:last-child {
      padding-right: 0;
      border-right: none;
    }

    dd {
      font-family: var(--font-display);
      font-weight: 700;
      font-size: 14.5px;
      line-height: 1.15;
      color: var(--graphite);
    }

    dt {
      font-size: 12px;
      line-height: 1.3;
      color: var(--graphite-70);
    }
  }

  @media (max-width: 1023px) {
    padding-right: 0;

    .hero-subtitle,
    .hero-facts-strip {
      max-width: 100%;
    }
  }

  @media (max-width: 767px) {
    gap: 12px;

    .hero-tag {
      font-size: 13px;
    }

    .hero-subtitle {
      font-size: 14.5px;
      line-height: 1.45;
    }

    .hero-actions {
      display: grid;
      grid-template-columns: 1.1fr 1fr;
      gap: 8px;
      margin-top: 0;
    }

    .hero-book-btn,
    .hero-pick-btn {
      width: 100%;
      min-height: 44px;
      padding: 10px 12px;
      font-size: 13.5px;
      white-space: nowrap;
      gap: 6px;
    }

    .hero-facts-strip {
      grid-template-columns: repeat(3, minmax(0, 1fr));
      gap: 8px;
      margin-top: 2px;
      padding: 10px 0 8px;
    }

    .hero-fact {
      padding-right: 6px;

      dd {
        font-size: 13px;
      }

      dt {
        font-size: 11px;
        line-height: 1.2;
      }
    }
  }

  @media (max-width: 355px) {
    .hero-actions {
      grid-template-columns: 1fr;
    }

    .hero-facts-strip {
      grid-template-columns: 1fr;
      gap: 7px;
      padding: 8px 0;
    }

    .hero-fact {
      flex-direction: row-reverse;
      align-items: baseline;
      justify-content: space-between;
      padding-right: 0;
      padding-bottom: 6px;
      border-right: none;
      border-bottom: 1px dashed var(--line);

      &:last-child {
        padding-bottom: 0;
        border-bottom: none;
      }
    }
  }
`;

export const HeroTitle = styled.h1`
  font-family: var(--font-display);
  font-weight: 800;
  font-size: clamp(27px, 4.4vw, 72px);
  line-height: 1.05;
  letter-spacing: -0.025em;
  color: var(--graphite);
  max-width: 100%;
  overflow-wrap: break-word;

  .title-dirty {
    color: var(--mud-dark);
  }

  .title-accent {
    position: relative;
    display: inline-block;
    z-index: 1;
    color: var(--graphite);

    &::after {
      content: "";
      position: absolute;
      left: -4px;
      right: -8px;
      bottom: 4px;
      height: 0.25em;
      background: var(--sun);
      transform: skewX(-12deg);
      z-index: -1;
    }
  }
`;

export const HeroRight = styled.div`
  position: static;

  /* Правая часть вынесена в полноразмерный диагональный вылет до правого края экрана */
  .hero-bleed-wrap {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    width: 54%;
    z-index: 3;
    pointer-events: auto;
  }

  /* Яркий жёлтый клин вдоль диагонального среза */
  .bleed-slash-accent {
    position: absolute;
    inset: 0;
    background: var(--sun);
    clip-path: polygon(calc(8.5% - 14px) 0%, 100% 0%, 100% 100%, 0% 100%);
    z-index: 0;
  }

  .bleed-viewport {
    position: absolute;
    inset: 0;
    clip-path: polygon(9.5% 0%, 100% 0%, 100% 100%, 1.2% 100%);
    overflow: hidden;
    background: #dcd4c5;
    z-index: 1;
  }

  /* Внутренний якорь строго 1280/955 гарантирует точное попадание пинов на узлы при любой ширине экрана */
  .bleed-media-anchor {
    position: absolute;
    top: 50%;
    left: 50%;
    min-width: 100%;
    min-height: 100%;
    aspect-ratio: 1280 / 955;
    transform: translate(-50%, -50%);
    transition: transform 120ms linear;
  }

  .bleed-room-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    user-select: none;
    pointer-events: none;
  }

  /* Тонкая чертёжная SVG-выноска */
  .bleed-leader-svg {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    z-index: 4;
    pointer-events: none;
  }

  .leader-line-shadow {
    fill: none;
    stroke: rgba(255, 255, 255, 0.78);
    stroke-width: 0.42;
    stroke-linecap: round;
    stroke-linejoin: round;
  }

  .leader-line-main {
    fill: none;
    stroke: var(--graphite);
    stroke-width: 0.22;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-dasharray: 0.85 0.75;
  }

  .spot-pin {
    position: absolute;
    z-index: 6;
    transform: translate(-50%, -50%);
    width: 34px;
    height: 34px;
    padding: 0;
    border: none;
    background: transparent;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .spot-pulse {
    position: absolute;
    inset: 3px;
    border-radius: 50%;
    background: var(--sun);
    animation: ${pinPulse} 2.2s ease-out infinite;
    pointer-events: none;
  }

  .spot-core {
    position: relative;
    width: 26px;
    height: 26px;
    border-radius: 50%;
    background: rgba(28, 30, 34, 0.9);
    color: #ffffff;
    border: 1.5px solid #ffffff;
    font-family: var(--font-mono);
    font-weight: 500;
    font-size: 11px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 4px 12px rgba(28, 30, 34, 0.35);
    transition:
      background-color 180ms var(--ease-clean),
      color 180ms var(--ease-clean),
      transform 180ms var(--ease-clean);
  }

  .spot-pin:hover .spot-core,
  .spot-pin.is-active .spot-core {
    background: var(--sun);
    color: var(--graphite);
    border-color: var(--graphite);
    transform: scale(1.14);
  }

  .spot-pin.is-active .spot-pulse {
    background: #ffffff;
  }

  /* Чистая журнальная типографика прямо по спокойной стене (без карточной рамки!) */
  .wall-callout-desktop {
    position: absolute;
    top: 13%;
    right: clamp(20px, 3.2vw, 44px);
    width: min(286px, 46%);
    z-index: 6;
    padding: 8px 10px;
    background: radial-gradient(
      ellipse at 45% 45%,
      rgba(251, 249, 243, 0.78) 0%,
      rgba(251, 249, 243, 0.3) 72%,
      rgba(251, 249, 243, 0) 100%
    );
  }

  .wall-callout-mobile {
    display: none;
  }

  .callout-eyebrow {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 6px;
  }

  .callout-num {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 2px 8px;
    border-radius: 4px;
    background: var(--sun);
    border: 1px solid var(--graphite);
    font-family: var(--font-mono);
    font-weight: 500;
    font-size: 11px;
    color: var(--graphite);
    flex-shrink: 0;
  }

  .callout-rule {
    flex: 1;
    height: 1px;
    background: rgba(28, 30, 34, 0.28);
  }

  .callout-tabs {
    display: inline-flex;
    align-items: center;
    gap: 4px;
  }

  .callout-tab {
    border: none;
    border-bottom: 2px solid transparent;
    background: transparent;
    color: var(--graphite-70);
    padding: 2px 5px;
    font-family: var(--font-mono);
    font-weight: 500;
    font-size: 11px;
    cursor: pointer;
    transition: color 150ms var(--ease-clean), border-color 150ms var(--ease-clean);

    &:hover {
      color: var(--graphite);
    }

    &.is-active {
      color: var(--graphite);
      border-bottom-color: var(--graphite);
    }
  }

  .callout-title {
    display: block;
    font-family: var(--font-display);
    font-weight: 700;
    font-size: clamp(14px, 1.15vw, 17px);
    line-height: 1.2;
    color: var(--graphite);
    margin-bottom: 4px;
  }

  .callout-desc {
    margin: 0;
    font-family: var(--font-body);
    font-size: 13px;
    line-height: 1.42;
    color: var(--graphite);
    max-width: 290px;
  }

  /* Вертикальная техническая бирка вдоль жёлтого диагонального среза */
  .slash-spec-tag {
    position: absolute;
    left: 24px;
    bottom: 20px;
    z-index: 6;
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 5px 12px;
    background: var(--graphite);
    color: var(--sun);
    font-family: var(--font-mono);
    font-weight: 500;
    font-size: 11px;
    letter-spacing: 0.04em;
    border-radius: 4px;
    transform: skewX(-7deg);
    pointer-events: none;

    > * {
      transform: skewX(7deg);
    }
  }

  .slash-dot {
    width: 3px;
    height: 3px;
    border-radius: 50%;
    background: rgba(254, 210, 25, 0.55);
  }

  @media (max-width: 1023px) {
    .hero-bleed-wrap {
      position: relative;
      top: auto;
      right: auto;
      bottom: auto;
      width: calc(100% + var(--container-pad) * 2);
      margin-left: calc(var(--container-pad) * -1);
      display: flex;
      flex-direction: column;
    }

    .bleed-slash-accent {
      position: relative;
      height: 6px;
      background: var(--sun);
      border-top: 1.5px solid var(--graphite);
      clip-path: none;
    }

    .bleed-viewport {
      position: relative;
      inset: auto;
      clip-path: none;
      width: 100%;
      aspect-ratio: 16 / 10.2;
      border-top: 1.5px solid var(--graphite);
      border-bottom: 1.5px solid var(--graphite);
    }

    /* Сдвигаем центр чуть ниже верхней шторы, чтобы на одном экране поместились и диван, и весь пылесос с пинами */
    .bleed-media-anchor {
      position: absolute;
      top: 50%;
      left: 50%;
      width: 100%;
      height: auto;
      aspect-ratio: 1280 / 955;
      transform: translate(-50%, -56%) !important;
      will-change: auto;
    }

    .spot-pulse {
      animation: none;
      opacity: 0.45;
      transform: scale(1.22);
    }

    .bleed-leader-svg,
    .wall-callout-desktop {
      display: none;
    }

    .wall-callout-mobile {
      display: block;
      padding: 12px var(--container-pad) 6px;
      background: var(--foam);

      .callout-title {
        font-size: 14px;
        margin: 0;
      }

      .callout-tabs {
        margin-left: auto;
      }

      .callout-desc {
        max-width: none;
        font-size: 12.5px;
      }
    }
  }

  @media (max-width: 767px) {
    .hero-bleed-wrap {
      width: calc(100% + 28px);
      margin-left: -14px;
    }

    .bleed-viewport {
      aspect-ratio: 16 / 10.6;
    }

    .wall-callout-mobile {
      padding: 10px 14px 4px;
    }
  }
`;

export const StyledMarquee = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
  padding: clamp(28px, 3vw, 44px) 0;
  background: var(--foam);

  .marquee-band {
    width: calc(100% + 48px);
    margin-left: -24px;
    background: var(--sun);
    border-top: 1.5px solid var(--graphite);
    border-bottom: 1.5px solid var(--graphite);
    transform: rotate(-1.8deg);
    overflow: hidden;
  }

  .marquee-track {
    display: flex;
    width: max-content;
    animation: ${marqueeSlide} 26s linear infinite;
    backface-visibility: hidden;
    will-change: transform;
  }

  .marquee-band:hover .marquee-track {
    animation-play-state: paused;
  }

  .marquee-group {
    display: flex;
    align-items: center;
    flex-shrink: 0;
  }

  .marquee-item {
    display: inline-flex;
    align-items: center;
    gap: 18px;
    padding: 12px 9px;
    font-family: var(--font-display);
    font-weight: 700;
    font-size: 13px;
    letter-spacing: 0.04em;
    text-transform: uppercase;
    color: var(--graphite);
    white-space: nowrap;
  }

  .marquee-spark {
    color: var(--graphite);
    font-size: 11px;
    line-height: 1;
  }
`;
