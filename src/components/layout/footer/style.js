import styled from "styled-components";

export const StyledFooter = styled.footer`
  position: relative;
  width: 100%;
  background: var(--graphite);
  color: var(--paper);
  overflow: hidden;

  .footer-top-stripe {
    width: 100%;
    height: 14px;
    background: repeating-linear-gradient(
      -12deg,
      var(--sun) 0 32px,
      #2a2d33 32px 46px
    );
  }
`;

export const FooterWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: var(--container-max);
  margin: 0 auto;
  padding: clamp(48px, 6vw, 84px) var(--container-pad) clamp(28px, 4vw, 44px);
  display: flex;
  flex-direction: column;
  gap: clamp(32px, 4.5vw, 52px);

  .footer-dispatch {
    display: grid;
    grid-template-columns: minmax(0, 1.25fr) minmax(290px, 0.75fr);
    gap: clamp(24px, 4vw, 48px);
    align-items: center;
    padding-bottom: clamp(28px, 4vw, 44px);
    border-bottom: 1px solid rgba(255, 255, 255, 0.14);
  }

  .footer-headline-wrap {
    display: flex;
    flex-direction: column;
    gap: 12px;
    min-width: 0;
  }

  .footer-kicker {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    font-family: var(--font-body);
    font-weight: 600;
    font-size: 14px;
    color: var(--sun);

    &::before {
      content: "";
      width: 18px;
      height: 5px;
      background: var(--sun);
      transform: skewX(-12deg);
    }
  }

  .footer-big-title {
    font-family: var(--font-display);
    font-weight: 800;
    font-size: clamp(36px, 6.2vw, 92px);
    line-height: 1;
    letter-spacing: -0.02em;
    color: var(--paper);
    max-width: 100%;
    overflow-wrap: break-word;
  }

  .footer-title-accent {
    position: relative;
    display: inline-block;
    z-index: 1;
    color: var(--sun);
  }

  /* Правая жёлтая карточка быстрой брони в футере */
  .footer-quick-pass {
    display: flex;
    flex-direction: column;
    gap: 14px;
    padding: clamp(20px, 2.5vw, 28px);
    border-radius: var(--radius-card);
    background: var(--sun);
    color: var(--graphite);
    border: 2px solid var(--paper);
    transform: rotate(-1deg);
    box-shadow: 0 22px 36px -22px rgba(0, 0, 0, 0.55);
  }

  .quick-pass-top {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    gap: 12px;
    padding-bottom: 10px;
    border-bottom: 1.5px dashed rgba(28, 30, 34, 0.35);
  }

  .quick-pass-label {
    font-family: var(--font-body);
    font-weight: 600;
    font-size: 13.5px;
    color: rgba(28, 30, 34, 0.8);
  }

  .quick-pass-price {
    font-family: var(--font-display);
    font-weight: 800;
    font-size: 26px;
    line-height: 1;
    color: var(--graphite);
  }

  .quick-pass-desc {
    font-size: 14.5px;
    line-height: 1.45;
    color: var(--graphite);
  }

  .quick-pass-actions {
    display: flex;
    margin-top: 2px;
  }

  .footer-book-btn {
    width: 100%;
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

  .footer-grid {
    display: grid;
    grid-template-columns: 1.15fr 0.85fr 1fr;
    gap: clamp(24px, 4vw, 44px);
    align-items: start;
  }

  .footer-brand-col,
  .footer-nav-col,
  .footer-contacts-col {
    display: flex;
    flex-direction: column;
    gap: 16px;
    min-width: 0;
  }

  .footer-logo {
    display: inline-flex;
    align-items: center;
    gap: 12px;

    img {
      width: 46px;
      height: 46px;
      border-radius: 50%;
    }
  }

  .footer-brand-name {
    font-family: var(--font-display);
    font-weight: 800;
    font-size: 24px;
    letter-spacing: -0.02em;
    color: var(--paper);

    span {
      color: var(--sun);
    }
  }

  .footer-desc {
    font-size: 15.5px;
    line-height: 1.55;
    color: rgba(255, 255, 255, 0.78);
    max-width: 380px;
  }

  .footer-location-card {
    display: flex;
    align-items: flex-start;
    gap: 10px;
    padding: 12px 14px;
    border-radius: 14px;
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.12);
    color: var(--sun);

    svg {
      flex-shrink: 0;
      margin-top: 2px;
    }
  }

  .footer-location-meta {
    display: flex;
    flex-direction: column;
    gap: 3px;
    font-family: var(--font-body);
    font-size: 13px;
    color: rgba(255, 255, 255, 0.7);

    strong {
      font-weight: 600;
      color: var(--paper);
      font-size: 13.5px;
    }
  }

  .footer-col-label {
    font-family: var(--font-body);
    font-weight: 600;
    font-size: 13.5px;
    color: rgba(255, 255, 255, 0.65);
  }

  .footer-nav-list {
    display: grid;
    grid-template-columns: 1fr;
    gap: 8px;

    a {
      display: inline-flex;
      align-items: center;
      min-height: 34px;
      font-size: 15.5px;
      font-weight: 500;
      color: rgba(255, 255, 255, 0.88);
      transition: color 200ms var(--ease-clean), transform 200ms var(--ease-clean);

      &:hover,
      &:focus-visible {
        color: var(--sun);
        transform: translateX(4px);
      }
    }
  }

  .footer-contact-buttons {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
  }

  .footer-contact-btn {
    min-height: 48px;
  }

  .footer-phone-tile {
    grid-column: 1 / -1;
    display: flex;
    align-items: center;
    gap: 12px;
    min-height: 58px;
    padding: 12px 16px;
    border-radius: 16px;
    background: #25282e;
    border: 1.5px solid rgba(254, 210, 25, 0.45);
    color: var(--paper);
    transition:
      border-color 200ms var(--ease-clean),
      background-color 200ms var(--ease-clean);

    &:hover,
    &:focus-visible {
      border-color: var(--sun);
      background: #2b2f37;
    }
  }

  .phone-tile-icon {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 38px;
    height: 38px;
    border-radius: 50%;
    background: var(--sun);
    color: var(--graphite);
    flex-shrink: 0;
  }

  .phone-tile-copy {
    display: flex;
    flex-direction: column;
    min-width: 0;

    small {
      font-size: 12px;
      color: rgba(255, 255, 255, 0.65);
    }

    strong {
      font-family: var(--font-display);
      font-weight: 700;
      font-size: 15px;
      color: var(--paper);
      line-height: 1.25;
    }
  }

  .footer-watermark {
    font-family: var(--font-display);
    font-weight: 800;
    font-size: clamp(36px, 11vw, 152px);
    line-height: 0.85;
    letter-spacing: -0.04em;
    color: rgba(255, 255, 255, 0.04);
    text-align: center;
    user-select: none;
    pointer-events: none;
    margin-bottom: -18px;
  }

  .footer-bottom {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    padding-top: 22px;
    border-top: 1px solid rgba(255, 255, 255, 0.14);
  }

  .footer-copyright {
    font-family: var(--font-mono);
    font-size: 12.5px;
    letter-spacing: 0.06em;
    color: rgba(255, 255, 255, 0.64);
  }

  .footer-footnote {
    font-size: 13px;
    color: rgba(255, 255, 255, 0.56);
  }

  @media (max-width: 1023px) {
    .footer-dispatch {
      grid-template-columns: 1fr;
    }

    .footer-quick-pass {
      transform: none;
    }

    .footer-grid {
      grid-template-columns: 1fr 1fr;
    }

    .footer-contacts-col {
      grid-column: 1 / -1;
    }
  }

  @media (max-width: 767px) {
    padding-bottom: 92px;

    .footer-grid {
      grid-template-columns: 1fr;
      gap: 28px;
    }

    .footer-nav-list {
      grid-template-columns: 1fr 1fr;
    }

    .footer-contact-buttons {
      grid-template-columns: 1fr;
    }

    .footer-big-title {
      font-size: clamp(32px, 10.5vw, 56px);
    }
  }

  @media (max-width: 380px) {
    .footer-nav-list {
      grid-template-columns: 1fr;
    }
  }
`;
