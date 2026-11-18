import styled from "styled-components";

export const StyledHow = styled.section`
  position: relative;
  width: 100%;
  padding: clamp(56px, 7vw, 96px) var(--container-pad);
  background: var(--foam);
  color: var(--graphite);
  overflow-x: hidden;
  scroll-margin-top: 96px;

  @media (max-width: 767px) {
    padding: 48px 16px;
  }
`;

export const HowContainer = styled.div`
  width: 100%;
  max-width: var(--container-max);
  margin: 0 auto;
`;

export const HowTimeline = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 84px 1fr;
  gap: 28px;
  align-items: stretch;

  @media (max-width: 1023px) {
    grid-template-columns: 1fr;
    gap: 0;
  }
`;

export const HoseTrack = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 12px 0 6px;

  .hose-svg {
    width: 84px;
    flex: 1 1 auto;
    min-height: 0;
    display: block;
    overflow: visible;
  }

  .hose-bg-path {
    fill: none;
    stroke: var(--line);
    stroke-width: 10;
    stroke-linecap: round;
  }

  .hose-active-path {
    fill: none;
    stroke: var(--graphite);
    stroke-width: 10;
    stroke-linecap: round;
    transition: opacity 120ms linear;
  }

  .hose-coupling-end {
    position: relative;
    align-self: flex-start;
    display: flex;
    align-items: center;
    gap: 4px;
    margin-top: -2px;
    margin-left: 35px;
  }

  .coupling-ring {
    width: 14px;
    height: 22px;
    border-radius: 5px;
    background: var(--sun);
    border: 2px solid var(--graphite);
    flex-shrink: 0;
  }

  .hose-gun-svg {
    flex-shrink: 0;
  }

  @media (max-width: 1023px) {
    display: none;
  }
`;

export const StepsList = styled.ol`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 18px;

  .how-step {
    position: relative;
    display: flex;
    align-items: flex-start;
    gap: 18px;
  }

  .step-badge {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 48px;
    height: 48px;
    border-radius: 50%;
    background: var(--paper);
    border: 2px solid var(--line);
    font-family: var(--font-display);
    font-weight: 700;
    font-size: 13px;
    letter-spacing: -0.02em;
    color: var(--graphite-70);
    flex-shrink: 0;
    margin-top: 10px;
    transition:
      background-color 250ms var(--ease-clean),
      border-color 250ms var(--ease-clean),
      color 250ms var(--ease-clean);
  }

  .how-step.is-reached .step-badge {
    background: var(--sun);
    border-color: var(--graphite);
    color: var(--graphite);
  }

  .step-card {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 8px;
    padding: clamp(18px, 2.6vw, 28px);
    background: var(--paper);
    border: 1px solid var(--line);
    border-radius: var(--radius-card);
    box-shadow: var(--shadow-card);

    h3 {
      font-family: var(--font-display);
      font-weight: 700;
      font-size: clamp(18px, 2vw, 24px);
      line-height: 1.15;
      letter-spacing: -0.02em;
      color: var(--graphite);
    }

    p {
      font-size: 16.5px;
      line-height: 1.55;
      color: var(--graphite-70);
    }
  }

  .step-note {
    align-self: flex-start;
    margin-top: 4px;
    padding: 2px 0 2px 12px;
    border-left: 2px solid var(--sun-deep);
    font-family: var(--font-body);
    font-weight: 500;
    font-size: 13.5px;
    line-height: 1.45;
    color: var(--graphite-70);
  }

  @media (max-width: 1023px) {
    gap: 16px;

    &::before {
      content: "";
      position: absolute;
      top: 28px;
      bottom: 28px;
      left: 23px;
      width: 2px;
      background: var(--line);
      z-index: 0;
    }

    .step-badge {
      position: relative;
      z-index: 1;
      background: var(--sun);
      border-color: var(--graphite);
      color: var(--graphite);
    }
  }

  @media (max-width: 480px) {
    &::before {
      left: 19px;
    }

    .how-step {
      gap: 12px;
    }

    .step-badge {
      width: 40px;
      height: 40px;
      font-size: 12.5px;
    }

    .step-card {
      padding: 16px;
    }
  }
`;

export const HowCtaBox = styled.div`
  position: relative;
  margin-top: 26px;
  border-radius: var(--radius-card-lg);
  background: var(--paper);
  border: 1px solid var(--line);
  box-shadow: var(--shadow-card);
  overflow: hidden;

  .cta-clean-stripe {
    position: absolute;
    inset: 0;
    background: linear-gradient(
      102deg,
      var(--sun-soft) 0%,
      var(--sun) 55%,
      var(--sun-soft) 100%
    );
    clip-path: inset(0 100% 0 0);
    transition: clip-path 680ms var(--ease-clean);
    z-index: 0;
  }

  &.is-sprayed .cta-clean-stripe {
    clip-path: inset(0 0 0 0);
  }

  .cta-inner {
    position: relative;
    z-index: 1;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
    padding: clamp(22px, 3vw, 34px);
  }

  .cta-text {
    display: flex;
    flex-direction: column;
    gap: 6px;
    max-width: 620px;

    h3 {
      font-family: var(--font-display);
      font-weight: 800;
      font-size: clamp(20px, 2.2vw, 28px);
      line-height: 1.12;
      letter-spacing: -0.02em;
      color: var(--graphite);
    }
  }

  .cta-mono {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    font-family: var(--font-body);
    font-weight: 600;
    font-size: 14px;
    letter-spacing: 0;
    color: var(--graphite);

    &::before {
      content: "";
      width: 10px;
      height: 10px;
      background: var(--graphite);
      transform: skewX(-12deg);
    }
  }

  .how-book-btn {
    background: var(--graphite);
    border-color: var(--graphite);
    color: var(--paper);

    .btn-foam {
      background: #2b2e34;
    }

    &:hover:not(:disabled) {
      border-color: #2b2e34;
      color: var(--paper);
    }
  }

  @media (max-width: 767px) {
    .cta-clean-stripe {
      clip-path: inset(0 0 0 0);
    }

    .how-book-btn {
      width: 100%;
    }
  }
`;
