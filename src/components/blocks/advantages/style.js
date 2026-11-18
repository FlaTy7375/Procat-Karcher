import styled from "styled-components";

export const StyledAdvantages = styled.section`
  position: relative;
  width: 100%;
  padding: clamp(56px, 7vw, 96px) var(--container-pad);
  background: var(--foam);
  color: var(--graphite);
  overflow-x: hidden;
  scroll-margin-top: 96px;

  .advantages-header-wrap {
    width: 100%;
    max-width: var(--container-max);
    margin: 0 auto;
  }

  .advantages-bento {
    width: 100%;
    max-width: var(--container-max);
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1.04fr 0.96fr;
    grid-template-rows: auto auto;
    gap: 24px;
    align-items: stretch;
  }

  .adv-card {
    position: relative;
    display: flex;
    flex-direction: column;
    border-radius: var(--radius-card);
    box-shadow: var(--shadow-card);
    overflow: hidden;
  }

  .adv-card-head {
    position: relative;
    z-index: 2;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
  }

  .adv-tag {
    font-family: var(--font-body);
    font-weight: 600;
    font-size: 13.5px;
    color: var(--graphite-70);
  }

  .adv-text-col {
    display: flex;
    flex-direction: column;
    gap: 8px;

    h3 {
      font-family: var(--font-display);
      font-weight: 800;
      font-size: clamp(22px, 2.1vw, 29px);
      line-height: 1.1;
      letter-spacing: -0.02em;
      color: var(--graphite);
    }

    p {
      font-size: 16px;
      line-height: 1.55;
      color: var(--graphite-70);
    }
  }

  /* 1. ЛЕВАЯ КАРТОЧКА — Постер мастерской + тёмный цоколь */
  .adv-mascot {
    grid-column: 1 / 2;
    grid-row: 1 / 3;
    justify-content: space-between;
    background: var(--paper);
    border: 1.5px solid var(--line);
  }

  .adv-mascot-stage {
    position: relative;
    flex: 1 1 auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 18px;
    padding: clamp(22px, 2.8vw, 32px) clamp(22px, 2.8vw, 32px) 0;
    background: linear-gradient(180deg, var(--foam) 0%, #f1ece0 100%);
    overflow: hidden;
  }

  .mascot-beam {
    position: absolute;
    inset: -12% 14% -20% 18%;
    background: var(--sun);
    transform: rotate(-12deg);
    border-radius: 32px;
    z-index: 0;
  }

  .adv-mascot-visual {
    position: relative;
    z-index: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    gap: 14px;
    margin-top: auto;
  }

  .speech-bubble {
    position: relative;
    max-width: 340px;
    padding: 12px 16px;
    border-radius: 16px;
    background: var(--paper);
    border: 1.5px solid var(--graphite);
    font-size: 14.5px;
    font-weight: 600;
    line-height: 1.38;
    color: var(--graphite);
    text-align: center;
    box-shadow: 0 8px 18px -12px rgba(28, 30, 34, 0.25);

    &::after {
      content: "";
      position: absolute;
      bottom: -8px;
      left: 50%;
      width: 13px;
      height: 13px;
      background: var(--paper);
      border-right: 1.5px solid var(--graphite);
      border-bottom: 1.5px solid var(--graphite);
      transform: translateX(-50%) rotate(45deg);
    }
  }

  .mascot-img {
    width: clamp(190px, 20vw, 250px);
    height: auto;
    object-fit: contain;
    pointer-events: none;
  }

  .adv-mascot-footer {
    position: relative;
    z-index: 2;
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding: clamp(22px, 2.8vw, 30px);
    background: var(--graphite);
    color: var(--foam);
    border-top: 3px solid var(--sun);
  }

  .adv-text-col--light {
    h3 {
      color: var(--foam);
    }

    p {
      color: rgba(251, 249, 243, 0.8);
    }
  }

  .mascot-checks {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;

    span {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      padding: 6px 12px;
      border-radius: 8px;
      background: rgba(255, 255, 255, 0.08);
      border: 1px solid rgba(254, 210, 25, 0.35);
      font-family: var(--font-body);
      font-weight: 600;
      font-size: 13px;
      color: var(--sun);

      &::before {
        content: "";
        width: 6px;
        height: 6px;
        border-radius: 50%;
        background: var(--sun);
      }
    }
  }

  /* 2. ПРАВАЯ ВЕРХНЯЯ — Тёплая карточка подбора химии в единой палитре */
  .adv-chemistry {
    grid-column: 2 / 3;
    grid-row: 1 / 2;
    padding: clamp(22px, 2.8vw, 32px);
    background: var(--paper);
    border: 1.5px solid var(--line);
  }

  .adv-chem-grid {
    display: grid;
    grid-template-columns: 1fr 142px;
    gap: 20px;
    align-items: center;
    height: 100%;
  }

  .adv-chem-copy {
    display: flex;
    flex-direction: column;
    gap: 12px;
    min-width: 0;
  }

  .chem-fit-row {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
    margin-top: 4px;

    span {
      padding: 5px 11px;
      border-radius: 8px;
      background: var(--foam);
      border: 1px solid var(--line);
      font-family: var(--font-body);
      font-weight: 600;
      font-size: 12.5px;
      color: var(--graphite);
    }
  }

  .adv-chem-stage {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 176px;
    padding: 14px;
    border-radius: 20px;
    background: var(--foam);
    border: 1px solid var(--line);
    overflow: hidden;

    img {
      position: relative;
      z-index: 1;
      width: 100%;
      height: 100%;
      object-fit: contain;
      pointer-events: none;
    }
  }

  .chem-stage-stripe {
    position: absolute;
    inset: 18% -18%;
    background: var(--sun);
    transform: rotate(-12deg);
    z-index: 0;
  }

  /* 3. ПРАВАЯ НИЖНЯЯ — Яркий отрывной жёлтый талон */
  .adv-coupon {
    grid-column: 2 / 3;
    grid-row: 2 / 3;
    gap: 16px;
    padding: clamp(22px, 2.8vw, 32px);
    background: var(--sun);
    border: 2px dashed var(--graphite);
    color: var(--graphite);
  }

  .adv-tag--coupon {
    color: var(--graphite);
    opacity: 0.85;
  }

  .coupon-notch {
    position: absolute;
    top: 50%;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background: var(--foam);
    border: 2px dashed var(--graphite);
    transform: translateY(-50%);
    z-index: 2;
  }

  .coupon-notch--left {
    left: -14px;
  }

  .coupon-notch--right {
    right: -14px;
  }

  .coupon-discount {
    display: inline-flex;
    align-items: center;
    padding: 7px 14px;
    border-radius: 10px;
    background: var(--graphite);
    border: 2px solid var(--graphite);
    transform: rotate(2.5deg);
    font-family: var(--font-display);
    font-weight: 800;
    font-size: clamp(20px, 2.2vw, 28px);
    line-height: 1;
    color: var(--sun);
    box-shadow: 0 8px 16px -10px rgba(28, 30, 34, 0.4);
  }

  .adv-coupon-body {
    display: flex;
    align-items: center;
    gap: 18px;
  }

  .coupon-badge-wrap {
    width: 112px;
    height: 112px;
    border-radius: 20px;
    background: var(--paper);
    border: 1.5px solid var(--graphite);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
    flex-shrink: 0;
    transform: rotate(-3deg);

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
      pointer-events: none;
    }
  }

  .adv-text-col--coupon {
    h3 {
      color: var(--graphite);
    }

    p {
      color: rgba(28, 30, 34, 0.88);
    }
  }

  .coupon-bonus-strip {
    display: inline-flex;
    align-self: flex-start;
    margin-top: 2px;
    padding: 8px 12px;
    border-radius: 10px;
    background: var(--paper);
    border: 1.5px solid var(--graphite);
    font-family: var(--font-body);
    font-weight: 600;
    font-size: 13px;
    line-height: 1.35;
    color: var(--graphite);
  }

  @media (max-width: 1023px) {
    .advantages-bento {
      grid-template-columns: 1fr 1fr;
    }

    .adv-mascot {
      grid-column: 1 / -1;
      grid-row: auto;
    }

    .adv-chemistry,
    .adv-coupon {
      grid-column: auto;
      grid-row: auto;
    }

    .adv-chem-grid {
      grid-template-columns: 1fr;
    }

    .adv-coupon-body {
      flex-direction: column;
      align-items: flex-start;
    }
  }

  @media (max-width: 767px) {
    padding: 44px 16px 56px;

    .advantages-bento {
      grid-template-columns: 1fr;
      gap: 16px;
    }

    .adv-card {
      border-radius: 20px;
    }

    .adv-text-col {
      gap: 6px;

      h3 {
        font-size: 20px;
      }

      p {
        font-size: 14.5px;
        line-height: 1.48;
      }
    }

    /* Компактная постерная карточка без растягивания на весь экран телефона */
    .adv-mascot-stage {
      padding: 18px 18px 0;
      gap: 12px;
    }

    .adv-mascot-visual {
      gap: 10px;
    }

    .speech-bubble {
      max-width: 280px;
      padding: 10px 12px;
      font-size: 13px;
      border-radius: 14px;
    }

    .mascot-img {
      width: 132px;
    }

    .adv-mascot-footer {
      padding: 18px;
      gap: 12px;
    }

    .mascot-checks span {
      padding: 5px 10px;
      font-size: 12px;
    }

    /* На телефоне иллюстрация химии компактно справа от текста */
    .adv-chemistry {
      padding: 18px;
    }

    .adv-chem-grid {
      grid-template-columns: minmax(0, 1fr) 92px;
      gap: 14px;
      align-items: center;
    }

    .adv-chem-stage {
      height: 124px;
      padding: 8px;
      border-radius: 14px;
    }

    .chem-fit-row span {
      padding: 4px 9px;
      font-size: 12px;
    }

    /* Талон на отзыв со штрихом и бейджем сбоку */
    .adv-coupon {
      padding: 18px;
      gap: 12px;
    }

    .coupon-discount {
      font-size: 18px;
      padding: 5px 11px;
    }

    .adv-coupon-body {
      flex-direction: row;
      align-items: flex-start;
      gap: 14px;
    }

    .coupon-badge-wrap {
      width: 72px;
      height: 72px;
      padding: 6px;
      border-radius: 14px;
    }

    .coupon-bonus-strip {
      font-size: 12.5px;
      padding: 7px 10px;
    }

    .coupon-notch {
      width: 20px;
      height: 20px;
    }

    .coupon-notch--left {
      left: -12px;
    }

    .coupon-notch--right {
      right: -12px;
    }
  }

  @media (max-width: 355px) {
    .adv-chem-grid {
      grid-template-columns: 1fr;
    }

    .adv-chem-stage {
      height: 110px;
    }

    .adv-coupon-body {
      flex-direction: column;
    }
  }
`;
