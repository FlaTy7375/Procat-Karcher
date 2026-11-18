import styled, { keyframes } from "styled-components";

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

const calWipe = keyframes`
  from {
    clip-path: inset(0 100% 0 0);
  }
  to {
    clip-path: inset(0 0 0 0);
  }
`;

export const StyledBookingModal = styled.div`
  position: fixed;
  inset: 0;
  z-index: 2300;
  padding: 24px 16px;
  width: 100%;
  height: 100%;
  overflow-y: auto;
  background: rgba(28, 30, 34, 0.56);
  display: flex;
  align-items: flex-start;
  justify-content: center;

  .booking-card {
    position: relative;
    width: min(960px, 100%);
    margin: 0 auto;
    background: var(--paper);
    border: 1px solid var(--line);
    border-radius: var(--radius-card-lg);
    box-shadow: var(--shadow-card);
    color: var(--graphite);
    overflow: hidden;
    animation: ${modalRise} 260ms var(--ease-clean);
  }

  .booking-sheet-head {
    position: sticky;
    top: 0;
    z-index: 8;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    padding: 16px 24px;
    background: var(--foam);
    border-bottom: 1px solid var(--line);
  }

  .booking-sheet-kicker {
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

  .booking-sheet-body {
    padding: clamp(20px, 3.4vw, 36px);
  }

  /* Календарь react-day-picker v9 через classNames */
  .booking-calendar--wrapper {
    position: relative;
    margin-top: 24px;
  }

  .calendar-heading {
    margin-bottom: 14px;
  }

  .cal-root {
    --rdp-accent-color: var(--sun);
    --rdp-today-color: var(--graphite);
    --rdp-disabled-opacity: 1;
    --rdp-selected-border: 0px solid transparent;
    --rdp-day-height: 54px;
    --rdp-day-width: auto;
    --rdp-day_button-height: 100%;
    --rdp-day_button-width: 100%;
    --rdp-day_button-border-radius: 12px;
    --rdp-day_button-border: none;
    --rdp-nav_button-width: 44px;
    --rdp-nav_button-height: 44px;
    width: 100%;
  }

  .cal-months {
    width: 100%;
    max-width: 100% !important;
    padding: 18px;
    border-radius: var(--radius-card);
    background: var(--paper);
    border: 1px solid var(--line);
  }

  .cal-month {
    width: 100%;
  }

  .cal-caption {
    min-height: 54px;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-inline-start: 48px !important;
    margin-inline-end: 48px !important;
    margin-bottom: 12px;
  }

  .cal-dropdowns {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 8px;
  }

  .cal-nav-btn {
    width: 44px;
    height: 44px;
    border-radius: 50%;
    background: var(--foam);
    border: 1px solid var(--line);
    color: var(--graphite);
    display: inline-flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    z-index: 4;
    transition: background-color 200ms var(--ease-clean);

    &:hover:not(:disabled) {
      background: var(--sun);
      border-color: var(--sun);
    }
  }

  .cal-prev {
    left: 0 !important;
    top: 4px !important;
  }

  .cal-next {
    right: 0 !important;
    top: 4px !important;
  }

  .rdp-chevron {
    fill: var(--graphite);
  }

  .cal-grid {
    width: 100%;
    table-layout: fixed;
    border-collapse: separate !important;
    border-spacing: 5px;
  }

  .cal-weekday {
    font-family: var(--font-mono);
    font-size: 11.5px;
    font-weight: 500;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    color: var(--graphite-70);
    padding: 6px 0;
  }

  /* Свободный день — --foam */
  .cal-day {
    position: relative;
    height: 58px;
    padding: 0;
    border-radius: 12px;
    background: var(--foam);
    border: 1px solid var(--line);
    color: var(--graphite);
    font-family: var(--font-body);
    font-weight: 500;
    font-size: 15px;
    transition:
      background-color 180ms var(--ease-clean),
      border-color 180ms var(--ease-clean);
  }

  .cal-day-btn {
    position: relative;
    width: 100%;
    height: 100%;
    border-radius: 12px;
    border: none;
    background: transparent;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2px;
    font-weight: inherit;
    color: inherit;
    overflow: hidden;
    isolation: isolate;
  }

  .cal-day:hover:not(.cal-disabled):not(.cal-selected) {
    background: var(--sun-soft);
    border-color: var(--sun-deep);
  }

  /* Сегодня — графитное кольцо */
  .cal-today:not(.cal-outside) {
    color: var(--graphite);
    box-shadow: inset 0 0 0 2px var(--graphite);
    font-weight: 700;
  }

  /* Выбранный день — жёлтый с анимацией протирки */
  .cal-selected {
    border-color: var(--graphite) !important;
    background: transparent !important;
    color: var(--graphite) !important;
    font-size: inherit;
    font-weight: 800;

    .cal-day-btn {
      background: var(--sun);
      animation: ${calWipe} 320ms var(--ease-clean);
    }
  }

  /* Истекшие / недоступные дни */
  .cal-disabled:not(.cal-booked) {
    background: #f2efe7;
    color: rgba(80, 84, 92, 0.45);
    border-color: transparent;
    cursor: not-allowed;
  }

  .cal-outside {
    opacity: 0.45;
  }

  /* Занятый день — приглушён + диагональная штриховка + штамп ЗАНЯТО */
  .cal-booked {
    background: repeating-linear-gradient(
      -45deg,
      rgba(28, 30, 34, 0.08) 0 4px,
      #f2efe7 4px 10px
    ) !important;
    border-color: rgba(214, 69, 69, 0.35) !important;
    color: var(--graphite-70) !important;
    opacity: 0.85 !important;
    cursor: not-allowed;

    .cal-day-btn::after {
      content: "ЗАНЯТО";
      display: inline-block;
      padding: 1px 4px;
      border-radius: 4px;
      background: rgba(214, 69, 69, 0.14);
      border: 1px solid var(--err);
      color: var(--err);
      font-family: var(--font-mono);
      font-size: 8px;
      font-weight: 500;
      letter-spacing: 0.04em;
      line-height: 1.1;
    }
  }

  .guide-container {
    margin-top: 16px;
    display: flex;
    flex-wrap: wrap;
    gap: 14px 20px;
    font-size: 13.5px;
    color: var(--graphite-70);
  }

  .guide-item {
    display: inline-flex;
    align-items: center;
    gap: 8px;
  }

  .legend-swatch {
    width: 18px;
    height: 18px;
    border-radius: 6px;
    flex-shrink: 0;
  }

  .legend-booked {
    background: repeating-linear-gradient(
      -45deg,
      rgba(28, 30, 34, 0.14) 0 3px,
      #f2efe7 3px 6px
    );
    border: 1px solid var(--err);
  }

  .legend-selected {
    background: var(--sun);
    border: 1px solid var(--graphite);
  }

  .legend-free {
    background: var(--foam);
    border: 1px solid var(--line);
  }

  .legend-today {
    background: var(--paper);
    border: 2px solid var(--graphite);
  }

  .legend-past {
    background: #f2efe7;
    border: 1px solid var(--line);
    opacity: 0.6;
  }

  .calendar-date {
    margin-top: 14px;
    display: inline-flex;
    padding: 6px 14px;
    border-radius: var(--radius-pill);
    background: var(--sun-soft);
    border: 1px solid var(--sun-deep);
    font-family: var(--font-mono);
    font-size: 13px;
    font-weight: 500;
    color: var(--graphite);
  }

  @media (max-width: 767px) {
    padding: 0;
    align-items: flex-end;

    .booking-card {
      border-radius: var(--radius-card) var(--radius-card) 0 0;
      max-height: 94vh;
      overflow-y: auto;
      animation: ${sheetSlideUp} 280ms var(--ease-clean);
    }

    .cal-months {
      padding: 12px 8px;
    }

    .cal-grid {
      border-spacing: 3px;
    }

    .cal-day {
      height: 48px;
      font-size: 13px;
    }

    .cal-booked .cal-day-btn::after {
      font-size: 6.5px;
      padding: 1px 2px;
    }
  }
`;

export const StyledBooking = styled.div`
  h2 {
    font-family: var(--font-display);
    font-size: clamp(18px, 2vw, 22px);
    font-weight: 800;
    color: var(--graphite);
  }

  .booking-title {
    margin-bottom: 12px;
  }

  .select-wrapper {
    position: relative;
    width: min(560px, 100%);
    margin-bottom: 20px;
  }

  .select-trigger {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    width: 100%;
    min-height: 56px;
    padding: 12px 18px;
    border-radius: 16px;
    background: var(--foam);
    border: 1.5px solid var(--graphite);
    color: var(--graphite);
    font-family: var(--font-body);
    font-weight: 600;
    font-size: 16px;
    text-align: left;
    cursor: pointer;
    transition: background-color 200ms var(--ease-clean);

    &:hover {
      background: var(--sun-soft);
    }
  }

  .select-arrow {
    font-size: 12px;
    color: var(--graphite-70);
  }

  .booking-select {
    display: none;
    position: absolute;
    top: calc(100% + 6px);
    left: 0;
    width: 100%;
    background: var(--paper);
    border: 1px solid var(--line);
    border-radius: 16px;
    box-shadow: var(--shadow-card);
    z-index: 20;
    overflow: hidden;
  }

  .booking-select.options-show {
    display: flex;
    flex-direction: column;
  }

  .booking-select .booking-option {
    display: flex;
    align-items: center;
    min-height: 48px;
    padding: 12px 18px;
    font-size: 15.5px;
    cursor: pointer;
    transition: background-color 180ms var(--ease-clean);

    &:hover {
      background: var(--sun-soft);
    }

    &.option-active {
      background: var(--sun);
      color: var(--graphite);
      font-weight: 600;
    }
  }

  .select-continer {
    margin-bottom: 12px;
  }

  .select-card {
    display: grid;
    grid-template-columns: 180px 1fr;
    align-items: center;
    gap: 20px;
    width: 100%;
    padding: 18px 20px;
    background: var(--foam);
    border: 1px solid var(--line);
    border-radius: var(--radius-card);
    box-shadow: none;

    @media (max-width: 640px) {
      grid-template-columns: 1fr;
    }
  }

  .select-img-wrap {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 12px;
    border-radius: 18px;
    background: var(--paper);
    border: 1px solid var(--line);
  }

  .select-img {
    width: 100%;
    max-width: 150px;
    height: auto;
    object-fit: contain;
  }

  .card-wrapper {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .select-title {
    font-family: var(--font-display);
    font-size: 20px;
    font-weight: 800;
    color: var(--graphite);
  }

  .select-description {
    font-size: 15px;
    line-height: 1.5;
    color: var(--graphite-70);
  }

  .info-title {
    margin: 28px 0 14px;
  }

  .info-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 16px;

    @media (max-width: 767px) {
      grid-template-columns: 1fr;
    }
  }

  .field-group {
    display: flex;
    flex-direction: column;
    gap: 6px;
  }

  .field-label {
    font-family: var(--font-mono);
    font-weight: 500;
    font-size: 12px;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    color: var(--graphite-70);
  }

  .info-container input {
    width: 100%;
    height: 56px;
    padding: 0 16px;
    border-radius: 14px;
    border: 1px solid var(--line);
    background: var(--foam);
    color: var(--graphite);
    font-size: 16px;
    transition:
      border-color 200ms var(--ease-clean),
      box-shadow 200ms var(--ease-clean);

    &::placeholder {
      color: var(--dust);
    }

    &:focus {
      outline: none;
      border-color: var(--aqua);
      box-shadow: 0 0 0 3px rgba(34, 184, 230, 0.35);
      background: var(--paper);
    }

    &.is-invalid {
      border-color: var(--err);
    }
  }

  .field-error {
    font-size: 12.5px;
    line-height: 1.35;
    color: var(--err);
  }

  .booking-button {
    margin-top: 24px;
    min-width: 240px;
    min-height: 52px;
    padding: 12px 28px;
    border: 2px solid var(--sun);
    border-radius: var(--radius-pill);
    background: var(--sun);
    color: var(--graphite);
    font-family: var(--font-body);
    font-weight: 600;
    font-size: 16px;
    cursor: pointer;
    transition:
      background-color 220ms var(--ease-clean),
      transform 180ms var(--ease-clean),
      opacity 200ms var(--ease-clean);

    &:hover:not(:disabled) {
      background: var(--sun-deep);
      border-color: var(--sun-deep);
    }

    &:active:not(:disabled) {
      transform: scale(0.97);
    }

    &:disabled {
      opacity: 0.45;
      cursor: not-allowed;
    }

    @media (max-width: 480px) {
      width: 100%;
    }
  }
`;

export const StyledDropdown = styled.div`
  .dropdown-wrapper {
    position: relative;
    display: inline-block;
    min-width: 92px;
  }

  .dropdown-button {
    width: 100%;
    min-height: 44px;
    padding: 8px 10px;
    border-radius: 12px;
    background: var(--foam);
    border: 1px solid var(--line);
    color: var(--graphite);
    font-family: var(--font-body);
    font-weight: 600;
    font-size: 14px;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 6px;

    &:hover {
      border-color: var(--graphite);
    }
  }

  @media (max-width: 480px) {
    .dropdown-wrapper {
      min-width: 0;
    }

    .dropdown-button {
      padding: 6px 8px;
      font-size: 13px;
    }
  }

  .dropdown-arrow {
    font-size: 10px;
    color: var(--graphite-70);
  }

  .dropdown-list {
    position: absolute;
    top: calc(100% + 4px);
    left: 0;
    right: 0;
    background: var(--paper);
    border: 1px solid var(--line);
    border-radius: 14px;
    box-shadow: var(--shadow-card);
    max-height: 220px;
    overflow-y: auto;
    z-index: 30;
  }

  .dropdown-option {
    padding: 9px 12px;
    font-size: 14px;
    cursor: pointer;
    color: var(--graphite);

    &:hover {
      background: var(--sun-soft);
    }

    &.selected {
      background: var(--sun);
      font-weight: 700;
    }
  }
`;

export const ResultModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 2600;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background: rgba(28, 30, 34, 0.56);

  @media (max-width: 767px) {
    padding: 0;
    align-items: flex-end;
  }
`;

export const ResultModalCard = styled.div`
  width: 100%;
  max-width: 480px;
  max-height: 90vh;
  overflow-y: auto;
  background: var(--paper);
  border: 1px solid var(--line);
  border-radius: var(--radius-card-lg);
  box-shadow: var(--shadow-card);
  color: var(--graphite);
  outline: none;
  animation: ${modalRise} 240ms var(--ease-clean);

  .result-head {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    padding: 18px 22px;
    background: var(--foam);
    border-bottom: 1px solid var(--line);
  }

  .result-title-wrap {
    display: flex;
    align-items: center;
    gap: 10px;

    h3 {
      margin: 0;
      font-family: var(--font-display);
      font-weight: 800;
      font-size: 18px;
      color: var(--graphite);
    }
  }

  .result-badge {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 34px;
    height: 34px;
    border-radius: 50%;
    background: ${({ $type }) =>
      $type === "success"
        ? "rgba(46, 158, 91, 0.14)"
        : $type === "error"
        ? "rgba(214, 69, 69, 0.14)"
        : "var(--sun-soft)"};
    color: ${({ $type }) =>
      $type === "success"
        ? "var(--ok)"
        : $type === "error"
        ? "var(--err)"
        : "var(--graphite)"};
    flex-shrink: 0;
  }

  .result-close {
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

  .result-wipe-banner {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    padding: 10px 18px;
    background: var(--sun);
    color: var(--graphite);
    font-family: var(--font-mono);
    font-weight: 500;
    font-size: 13px;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    animation: ${calWipe} 480ms var(--ease-clean);
  }

  .result-body {
    padding: 20px 22px;
    display: flex;
    flex-direction: column;
    gap: 14px;
  }

  .result-message {
    font-size: 16px;
    line-height: 1.5;
    color: var(--graphite);
  }

  .success-ticket {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  .success-details {
    display: grid;
    grid-template-columns: 1fr;
    gap: 8px;
    padding: 14px 16px;
    border-radius: 16px;
    background: var(--foam);
    border: 1px dashed var(--graphite);

    div {
      display: flex;
      justify-content: space-between;
      gap: 12px;
      font-size: 14.5px;
      border-bottom: 1px solid var(--line);
      padding-bottom: 6px;

      &:last-child {
        border-bottom: none;
        padding-bottom: 0;
      }
    }

    dt {
      color: var(--graphite-70);
    }

    dd {
      font-weight: 600;
      color: var(--graphite);
      text-align: right;
    }
  }

  .success-note {
    font-size: 14px;
    line-height: 1.5;
    color: var(--graphite-70);
  }

  .result-footer {
    display: flex;
    justify-content: flex-end;
    padding: 0 22px 20px;
  }

  @media (max-width: 767px) {
    max-width: 100%;
    border-radius: var(--radius-card) var(--radius-card) 0 0;
    animation: ${sheetSlideUp} 260ms var(--ease-clean);

    .result-footer button {
      width: 100%;
    }
  }
`;
