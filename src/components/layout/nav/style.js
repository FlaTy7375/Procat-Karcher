import styled from "styled-components";

export const StyledNav = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: minmax(max-content, 1fr) auto minmax(max-content, 1fr);
  align-items: center;
  gap: 16px;
  width: 100%;

  .logo-wrapper {
    justify-self: start;
    flex-shrink: 0;
    display: flex;
    align-items: center;
  }

  .logo-link {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    height: 44px;
    border-radius: var(--radius-pill);
  }

  .logo-coin {
    width: 44px;
    height: 44px;
    perspective: 600px;
    flex-shrink: 0;
  }

  .logo-coin-inner {
    position: relative;
    display: block;
    width: 100%;
    height: 100%;
    transform-style: preserve-3d;
    transition: transform 550ms var(--ease-clean);
  }

  .logo-link:hover .logo-coin-inner,
  .logo-link:focus-visible .logo-coin-inner {
    transform: rotateY(180deg);
  }

  .logo-coin-face {
    position: absolute;
    inset: 0;
    backface-visibility: hidden;
    -webkit-backface-visibility: hidden;
    border-radius: 50%;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .logo-coin-front img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: cover;
    transform: scale(1.16);
  }

  .logo-coin-back {
    transform: rotateY(180deg);
    background: var(--sun);
    border: 2px dashed var(--graphite);
    color: var(--graphite);
    font-family: var(--font-display);
    font-weight: 800;
    font-size: 10.5px;
    letter-spacing: -0.02em;
    line-height: 1;
  }

  .logo-brand {
    display: inline-flex;
    align-items: center;
    font-family: var(--font-display);
    font-weight: 800;
    font-size: 17px;
    line-height: 1;
    letter-spacing: -0.02em;
    color: var(--graphite);
    white-space: nowrap;
    padding-top: 1px;

    span {
      color: var(--graphite-70);
    }
  }

  .nav-actions {
    justify-self: end;
    display: flex;
    align-items: center;
    gap: 8px;
    flex-shrink: 0;
  }

  .header-book-btn {
    min-height: 46px;
    padding: 10px 20px;
    font-size: 14px;
  }

  .unlog-wrapper {
    display: flex;
    align-items: center;
    gap: 6px;
  }

  .unlog-avatar {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: var(--sun-soft);
    border: 1px solid var(--sun-deep);
    color: var(--graphite);
    font-family: var(--font-mono);
    font-weight: 500;
    font-size: 12px;
  }

  .unlog-button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 44px;
    height: 44px;
    border-radius: 50%;
    background: var(--foam);
    border: 1px solid var(--line);
    color: var(--graphite);
    cursor: pointer;
    transition:
      background-color 200ms var(--ease-clean),
      border-color 200ms var(--ease-clean);

    &:hover {
      background: var(--sun-soft);
      border-color: var(--sun-deep);
    }
  }

  .menu-button {
    display: none;
    align-items: center;
    justify-content: center;
    width: 44px;
    height: 44px;
    border-radius: 50%;
    background: var(--foam);
    border: 1px solid var(--line);
    color: var(--graphite);
    cursor: pointer;
    transition:
      background-color 200ms var(--ease-clean),
      border-color 200ms var(--ease-clean);

    &:hover {
      background: var(--sun);
      border-color: var(--sun);
    }
  }

  @media (max-width: 1279px) {
    .desktop-socials {
      display: none;
    }
  }

  @media (max-width: 1023px) {
    display: flex;
    justify-content: space-between;

    .menu-button {
      display: inline-flex;
    }

    .unlog-avatar {
      display: none;
    }
  }

  @media (max-width: 480px) {
    gap: 8px;

    .logo-brand {
      font-size: 15px;
    }

    .header-book-btn {
      padding: 8px 14px;
      font-size: 13px;
      min-height: 44px;
    }
  }

  @media (max-width: 374px) {
    .header-book-btn {
      display: none;
    }
  }
`;

export const StyledMainNav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: clamp(4px, 0.8vw, 10px);

  .nav-logout {
    display: none;
  }

  a {
    position: relative;
    display: inline-flex;
    align-items: center;
    min-height: 44px;
    padding: 8px 12px;
    font-family: var(--font-body);
    font-weight: 500;
    font-size: 14.5px;
    color: var(--graphite-70);
    white-space: nowrap;
    isolation: isolate;
    transition: color 200ms var(--ease-clean);

    .nav-label {
      position: relative;
      z-index: 1;
    }

    &::before {
      content: "";
      position: absolute;
      inset: 6px 4px;
      z-index: 0;
      border-radius: 10px;
      background: var(--sun);
      opacity: 0;
      transform: scaleX(0) skewX(-12deg);
      transform-origin: left center;
      transition:
        transform 280ms var(--ease-clean),
        opacity 200ms var(--ease-clean);
    }

    &:hover {
      color: var(--graphite);
    }

    &:hover::before {
      background: var(--sun-soft);
      opacity: 1;
      transform: scaleX(1) skewX(-12deg);
    }

    &.is-active {
      color: var(--graphite);
      font-weight: 600;
    }

    &.is-active::before {
      background: var(--sun);
      opacity: 1;
      transform: scaleX(1) skewX(-12deg);
    }
  }

  @media (max-width: 1023px) {
    display: none;
  }
`;

export const StyledSocials = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;

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
    transition:
      background-color 200ms var(--ease-clean),
      border-color 200ms var(--ease-clean),
      transform 200ms var(--ease-clean);

    &:hover {
      background: var(--sun);
      border-color: var(--sun);
      transform: translateY(-2px);
    }
  }
`;

export const MobileMenuOverlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 1500;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 16px 18px calc(24px + env(safe-area-inset-bottom));
  background: var(--graphite);
  color: var(--foam);
  overflow-y: auto;
  border-top: 4px solid var(--sun);

  .mobile-menu-top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 14px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.12);
  }

  .mobile-menu-brand {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    font-family: var(--font-display);
    font-weight: 800;
    font-size: 18px;
    color: var(--paper);

    img {
      border-radius: 50%;
      border: 1.5px solid var(--sun);
    }

    strong {
      color: var(--sun);
      font-weight: 800;
    }
  }

  .mobile-menu-close {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 46px;
    height: 46px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.08);
    border: 1px solid rgba(255, 255, 255, 0.2);
    color: var(--paper);
    cursor: pointer;
    transition: background-color 180ms var(--ease-clean), color 180ms var(--ease-clean);

    &:hover,
    &:focus-visible {
      background: var(--sun);
      color: var(--graphite);
      border-color: var(--sun);
    }
  }

  .mobile-menu-main {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 22px;
    flex: 1 1 auto;
  }

  .mobile-menu-grid {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 10px;
  }

  .mobile-nav-tile {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 6px;
    min-height: 78px;
    padding: 13px 14px;
    border-radius: 16px;
    background: rgba(255, 255, 255, 0.06);
    border: 1px solid rgba(255, 255, 255, 0.12);
    transition:
      background-color 180ms var(--ease-clean),
      border-color 180ms var(--ease-clean),
      transform 180ms var(--ease-clean);

    &:hover,
    &:focus-visible {
      background: rgba(255, 255, 255, 0.12);
      border-color: rgba(254, 210, 25, 0.65);
    }

    &.is-active {
      background: var(--sun);
      border-color: var(--sun);

      .mobile-tile-title {
        color: var(--graphite);
      }

      .mobile-tile-hint {
        color: rgba(28, 30, 34, 0.78);
      }
    }
  }

  .mobile-tile-title {
    font-family: var(--font-display);
    font-weight: 700;
    font-size: 14px;
    line-height: 1.2;
    letter-spacing: -0.02em;
    color: var(--paper);
  }

  .mobile-tile-hint {
    font-family: var(--font-body);
    font-weight: 500;
    font-size: 12px;
    line-height: 1.25;
    color: rgba(251, 249, 243, 0.64);
  }

  .mobile-menu-bottom {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-top: auto;
    padding-top: 8px;
  }

  .mobile-cta-book {
    width: 100%;
    min-height: 54px;
  }

  .mobile-cta-call {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 9px;
    width: 100%;
    min-height: 52px;
    padding: 12px 18px;
    border-radius: var(--radius-pill);
    background: rgba(255, 255, 255, 0.08);
    border: 1px solid rgba(255, 255, 255, 0.22);
    font-family: var(--font-body);
    font-weight: 700;
    font-size: 15px;
    color: var(--paper);
    transition: background-color 180ms var(--ease-clean), border-color 180ms var(--ease-clean);

    &:hover {
      background: rgba(255, 255, 255, 0.14);
      border-color: var(--sun);
    }
  }

  .mobile-menu-meta {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    padding-top: 8px;
    border-top: 1px solid rgba(255, 255, 255, 0.12);
  }

  .mobile-city-info {
    display: inline-flex;
    align-items: center;
    gap: 7px;
    font-family: var(--font-body);
    font-size: 12.5px;
    color: rgba(251, 249, 243, 0.72);
  }

  .city-dot {
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: var(--sun);
    flex-shrink: 0;
  }

  .mobile-meta-right {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .mobile-socials a {
    width: 44px;
    height: 44px;
    background: rgba(255, 255, 255, 0.08);
    border-color: rgba(255, 255, 255, 0.18);
    color: var(--paper);

    &:hover {
      background: var(--sun);
      border-color: var(--sun);
      color: var(--graphite);
    }
  }

  .mobile-logout-btn {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    min-height: 44px;
    padding: 0 14px;
    border-radius: var(--radius-pill);
    background: rgba(255, 255, 255, 0.08);
    border: 1px solid rgba(255, 255, 255, 0.2);
    color: var(--paper);
    font-weight: 600;
    font-size: 14px;
    cursor: pointer;
  }

  @media (max-width: 345px) {
    .mobile-menu-grid {
      grid-template-columns: 1fr;
    }

    .mobile-nav-tile {
      min-height: 58px;
      flex-direction: row;
      align-items: center;
    }
  }
`;
