import styled from "styled-components";

export const StyledBeforeAfter = styled.div`
  position: relative;
  width: 100%;
  border-radius: var(--radius-card);
  background: var(--paper);
  border: 1px solid var(--line);
  box-shadow: var(--shadow-card);
  overflow: hidden;
  user-select: none;

  .ba-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    padding: 14px 18px;
    border-bottom: 1px solid var(--line);
    background: var(--foam);
  }

  .ba-title {
    font-family: var(--font-display);
    font-weight: 700;
    font-size: 16px;
    color: var(--graphite);
  }

  .ba-machine {
    font-family: var(--font-mono);
    font-size: 11.5px;
    font-weight: 500;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    color: var(--graphite-70);
  }

  .ba-stage {
    position: relative;
    width: 100%;
    aspect-ratio: 16 / 10;
    overflow: hidden;
    cursor: ew-resize;
    touch-action: pan-y;
    background: var(--foam);
  }

  .ba-img {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    pointer-events: none;
  }

  .ba-before-wrap {
    position: absolute;
    inset: 0;
    overflow: hidden;
  }

  .ba-badge {
    position: absolute;
    top: 12px;
    z-index: 2;
    padding: 5px 10px;
    border-radius: var(--radius-pill);
    font-family: var(--font-mono);
    font-size: 11px;
    font-weight: 500;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    pointer-events: none;
  }

  .ba-badge--before {
    left: 12px;
    background: var(--mud-dark);
    color: var(--paper);
  }

  .ba-badge--after {
    right: 12px;
    background: var(--sun);
    color: var(--graphite);
  }

  /* Разделитель-водосгон: резиновая кромка + ручка */
  .ba-squeegee {
    position: absolute;
    top: 0;
    bottom: 0;
    z-index: 4;
    width: 4px;
    transform: translateX(-50%);
    background: var(--graphite);
    pointer-events: none;

    &::after {
      content: "";
      position: absolute;
      inset: 0 -2px;
      border-left: 2px solid var(--sun);
    }
  }

  .ba-handle {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 48px;
    height: 48px;
    border-radius: 50%;
    background: var(--sun);
    border: 2px solid var(--graphite);
    box-shadow: var(--shadow-float);
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--graphite);
    pointer-events: auto;
    cursor: ew-resize;
  }

  .ba-handle:focus-visible {
    outline: 3px solid var(--aqua);
    outline-offset: 3px;
  }
`;
