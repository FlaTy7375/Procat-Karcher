import styled, { keyframes } from "styled-components";

const workbenchReveal = keyframes`
  from {
    opacity: 0;
    transform: translateY(8px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const StyledPick = styled.section`
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

export const PickContainer = styled.div`
  width: 100%;
  max-width: var(--container-max);
  margin: 0 auto;

  .pick-before-after {
    margin-top: 28px;
  }
`;

export const SurfaceRail = styled.div`
  display: grid;
  grid-template-columns: repeat(7, minmax(0, 1fr));
  gap: 10px;
  margin-bottom: 20px;

  .surface-tile {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 12px;
    min-width: 0;
    min-height: 126px;
    padding: 13px 12px 14px;
    border-radius: var(--radius-tag);
    border: 1.5px solid var(--line);
    background: #f2ede1;
    text-align: left;
    color: var(--graphite);
    cursor: pointer;
    overflow: hidden;
    transition:
      border-color 220ms var(--ease-clean),
      transform 220ms var(--ease-clean),
      box-shadow 220ms var(--ease-clean);

    &:hover:not(.is-active) {
      border-color: var(--mud);
      transform: translateY(-2px);
    }

    &:focus-visible {
      outline: 2px solid var(--aqua);
      outline-offset: 2px;
    }
  }

  /* Диагональная жёлтая «протирка» выбранной плитки */
  .tile-wipe {
    position: absolute;
    inset: 0;
    background: var(--sun);
    clip-path: polygon(0 0, 0 0, -18% 100%, 0 100%);
    transition: clip-path 340ms var(--ease-clean);
    z-index: 0;
  }

  .surface-tile.is-active {
    border-color: var(--graphite);
    transform: translateY(-2px);
    box-shadow: 0 14px 24px -18px rgba(28, 30, 34, 0.48);

    .tile-wipe {
      clip-path: polygon(-12% 0, 118% 0, 102% 100%, -22% 100%);
    }

    .tile-dust {
      opacity: 0;
    }

    .tile-num {
      background: var(--graphite);
      color: var(--sun);
    }

    .tile-hint {
      color: var(--graphite);
      opacity: 0.78;
    }
  }

  /* Грязные крапинки на невыбранных поверхностях */
  .tile-dust {
    position: absolute;
    inset: 0;
    background-image:
      radial-gradient(circle at 86% 18%, rgba(106, 86, 64, 0.16) 0 10px, transparent 11px),
      radial-gradient(circle at 74% 34%, rgba(106, 86, 64, 0.12) 0 4px, transparent 5px),
      radial-gradient(circle at 18% 82%, rgba(185, 170, 146, 0.28) 0 14px, transparent 15px);
    pointer-events: none;
    z-index: 0;
    transition: opacity 260ms var(--ease-clean);
  }

  .tile-top,
  .tile-bottom {
    position: relative;
    z-index: 1;
  }

  .tile-top {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 8px;
  }

  .tile-num {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 2px 6px;
    border-radius: 6px;
    background: rgba(28, 30, 34, 0.08);
    font-family: var(--font-display);
    font-weight: 700;
    font-size: 11px;
    line-height: 1.3;
    color: var(--graphite-70);
    transition:
      background-color 220ms var(--ease-clean),
      color 220ms var(--ease-clean);
  }

  .tile-icon {
    display: inline-flex;
    color: var(--graphite);
    flex-shrink: 0;
  }

  .tile-bottom {
    display: flex;
    flex-direction: column;
    gap: 2px;
  }

  .tile-title {
    font-family: var(--font-body);
    font-weight: 600;
    font-size: 14.5px;
    line-height: 1.2;
    color: var(--graphite);
  }

  .tile-hint {
    font-family: var(--font-body);
    font-size: 12px;
    line-height: 1.25;
    color: var(--graphite-70);
  }

  @media (max-width: 1099px) {
    display: flex;
    gap: 10px;
    overflow-x: auto;
    scroll-snap-type: x proximity;
    padding: 4px 2px 10px;
    margin-bottom: 12px;
    scrollbar-width: none;

    &::-webkit-scrollbar {
      display: none;
    }

    .surface-tile {
      flex: 0 0 144px;
      scroll-snap-align: start;
      min-height: 118px;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .surface-tile,
    .tile-wipe,
    .tile-dust {
      transition: none;
    }
  }
`;

export const TaskWorkbench = styled.div`
  border-radius: var(--radius-card-lg);
  background: var(--paper);
  border: 1.5px solid var(--line);
  box-shadow: var(--shadow-card);
  overflow: hidden;

  .workbench-inner {
    display: grid;
    grid-template-columns: minmax(0, 0.86fr) minmax(0, 1.14fr);
    align-items: stretch;
    animation: ${workbenchReveal} 260ms var(--ease-clean) both;
  }

  /* Левое крыло — что отмываем (тёмный грязевой сланец) */
  .stage-before {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 24px;
    padding: clamp(24px, 3vw, 36px);
    background: linear-gradient(155deg, #322a22 0%, var(--graphite) 74%);
    color: var(--foam);
    overflow: hidden;
  }

  .before-bg-photo {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0.3;
    filter: grayscale(22%) contrast(1.06);
    pointer-events: none;
    z-index: 0;
  }

  .before-scrim {
    position: absolute;
    inset: 0;
    background: linear-gradient(
      155deg,
      rgba(36, 32, 27, 0.56) 0%,
      rgba(28, 30, 34, 0.88) 78%
    );
    pointer-events: none;
    z-index: 0;
  }

  .before-pattern {
    position: absolute;
    inset: 0;
    background-image: repeating-linear-gradient(
      -12deg,
      rgba(185, 170, 146, 0.06) 0 1px,
      transparent 1px 18px
    );
    pointer-events: none;
    z-index: 0;
  }

  .before-head,
  .before-copy,
  .before-specs {
    position: relative;
    z-index: 1;
  }

  .before-head {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
  }

  .before-badge {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    font-family: var(--font-body);
    font-weight: 600;
    font-size: 13.5px;
    color: var(--sun);

    &::before {
      content: "";
      width: 10px;
      height: 10px;
      background: var(--sun);
      transform: skewX(-12deg);
    }
  }

  .before-icon-badge {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 48px;
    height: 48px;
    border-radius: 14px;
    background: rgba(255, 255, 255, 0.06);
    border: 1px solid rgba(185, 170, 146, 0.24);
    color: var(--foam);
    flex-shrink: 0;
  }

  .before-copy {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  .before-title {
    font-family: var(--font-display);
    font-weight: 700;
    font-size: clamp(20px, 2.2vw, 28px);
    line-height: 1.15;
    letter-spacing: -0.02em;
    color: var(--foam);
  }

  .before-why {
    font-size: 16px;
    line-height: 1.55;
    color: rgba(251, 249, 243, 0.8);
  }

  .before-specs {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 12px;
    padding-top: 18px;
    border-top: 1px solid rgba(255, 255, 255, 0.14);
  }

  .spec-cell {
    display: flex;
    flex-direction: column-reverse;
    gap: 2px;
    min-width: 0;

    dd {
      font-family: var(--font-display);
      font-weight: 700;
      font-size: clamp(16px, 1.5vw, 19px);
      line-height: 1.15;
      color: var(--sun);
    }

    dt {
      font-size: 12.5px;
      line-height: 1.3;
      color: var(--dust);
    }
  }

  /* Правое крыло — бирка техники */
  .stage-after {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 20px;
    padding: clamp(24px, 3vw, 36px);
    background: var(--paper);
    border-left: 4px solid var(--sun);
  }

  .after-head {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 14px;
    flex-wrap: wrap;
  }

  .after-model-group {
    display: flex;
    flex-direction: column;
    gap: 4px;
    min-width: 0;
  }

  .after-role {
    font-family: var(--font-body);
    font-weight: 600;
    font-size: 13.5px;
    color: var(--graphite-70);
  }

  .after-machine {
    font-family: var(--font-display);
    font-weight: 800;
    font-size: clamp(22px, 2.5vw, 31px);
    line-height: 1.1;
    letter-spacing: -0.02em;
    color: var(--graphite);
  }

  .after-price-tag {
    position: relative;
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 8px 14px;
    border-radius: 10px;
    background: var(--sun);
    border: 2px solid var(--graphite);
    transform: rotate(-1.5deg);
    box-shadow: 0 8px 16px -12px rgba(28, 30, 34, 0.35);
    flex-shrink: 0;
  }

  .tag-rivet {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: var(--paper);
    border: 1.5px solid var(--graphite);
    flex-shrink: 0;
  }

  .tag-price {
    font-family: var(--font-display);
    font-weight: 800;
    font-size: clamp(14px, 1.4vw, 17px);
    color: var(--graphite);
    white-space: nowrap;
  }

  .after-body {
    display: grid;
    grid-template-columns: minmax(150px, 0.42fr) minmax(0, 0.58fr);
    gap: 20px;
    align-items: center;
  }

  .after-photo-stage {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 200px;
    padding: 14px;
    border-radius: var(--radius-tag);
    background: var(--foam);
    border: 1px solid var(--line);
    overflow: hidden;

    img {
      position: relative;
      z-index: 1;
      width: auto;
      max-width: 100%;
      max-height: 180px;
      height: auto;
      object-fit: contain;
    }
  }

  .after-stripe {
    position: absolute;
    inset: 26% -20%;
    background: var(--sun);
    transform: rotate(-12deg);
    z-index: 0;
  }

  .after-points {
    display: flex;
    flex-direction: column;
    min-width: 0;

    li {
      display: flex;
      align-items: flex-start;
      gap: 10px;
      padding: 9px 0;
      border-bottom: 1px dashed var(--line);
      font-size: 14.5px;
      line-height: 1.42;
      color: var(--graphite);

      &:first-child {
        padding-top: 0;
      }

      &:last-child {
        padding-bottom: 0;
        border-bottom: none;
      }
    }
  }

  .point-num {
    font-family: var(--font-mono);
    font-weight: 500;
    font-size: 12px;
    color: var(--graphite-70);
    padding-top: 3px;
    flex-shrink: 0;
  }

  .after-footer {
    display: flex;
    flex-direction: column;
    gap: 14px;
    padding-top: 14px;
    border-top: 1.5px dashed var(--line);
  }

  .after-chem-note {
    display: inline-flex;
    align-items: center;
    gap: 9px;
    padding: 10px 14px;
    border-radius: 12px;
    background: var(--foam);
    border-left: 3px solid var(--aqua);
    font-family: var(--font-body);
    font-weight: 500;
    font-size: 14px;
    line-height: 1.35;
    color: var(--graphite);

    svg {
      color: var(--aqua);
      flex-shrink: 0;
    }
  }

  .after-actions {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
  }

  @media (max-width: 1023px) {
    .workbench-inner {
      grid-template-columns: 1fr;
    }

    .stage-after {
      border-left: none;
      border-top: 4px solid var(--sun);
    }
  }

  @media (max-width: 640px) {
    .after-body {
      grid-template-columns: 1fr;
    }

    .after-photo-stage {
      min-height: 170px;
    }

    .before-specs {
      grid-template-columns: 1fr;
      gap: 10px;
    }

    .spec-cell {
      flex-direction: row-reverse;
      align-items: baseline;
      justify-content: space-between;
      border-bottom: 1px solid rgba(255, 255, 255, 0.08);
      padding-bottom: 6px;

      &:last-child {
        border-bottom: none;
        padding-bottom: 0;
      }
    }

    .after-actions {
      flex-direction: column;

      button {
        width: 100%;
      }
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .workbench-inner {
      animation: none;
    }
  }
`;
