import styled, { css } from "styled-components";

const variantStyles = {
  primary: css`
    background: var(--sun);
    border-color: var(--sun);
    color: var(--graphite);

    .btn-foam {
      background: var(--sun-deep);
    }

    &:hover:not(:disabled) {
      border-color: var(--sun-deep);
      color: var(--graphite);
    }
  `,
  outline: css`
    background: var(--paper);
    border-color: var(--graphite);
    color: var(--graphite);

    .btn-foam {
      background: var(--sun-soft);
    }

    &:hover:not(:disabled) {
      border-color: var(--graphite);
      color: var(--graphite);
    }
  `,
  dark: css`
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
  `,
  ghostLight: css`
    background: transparent;
    border-color: rgba(255, 255, 255, 0.36);
    color: var(--paper);

    .btn-foam {
      background: rgba(255, 255, 255, 0.14);
    }

    &:hover:not(:disabled) {
      border-color: var(--paper);
      color: var(--paper);
    }
  `,
};

export const StyledButton = styled.button`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  min-height: 48px;
  padding: 12px 26px;
  border-width: 2px;
  border-style: solid;
  border-radius: var(--radius-pill);
  font-family: var(--font-body);
  font-weight: 600;
  font-size: 16px;
  line-height: 1.1;
  text-align: center;
  cursor: pointer;
  overflow: hidden;
  isolation: isolate;
  text-decoration: none;
  user-select: none;
  transition:
    transform 200ms var(--ease-clean),
    border-color 250ms var(--ease-clean),
    color 250ms var(--ease-clean),
    background-color 250ms var(--ease-clean);

  ${({ $variant }) => variantStyles[$variant] || variantStyles.primary}

  .btn-foam {
    position: absolute;
    inset: 0;
    z-index: 0;
    border-radius: inherit;
    transform: translateY(104%);
    transition: transform 300ms var(--ease-clean);
    pointer-events: none;
  }

  .btn-content {
    position: relative;
    z-index: 1;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
  }

  svg {
    width: 20px;
    height: 20px;
    flex-shrink: 0;
  }

  &:hover:not(:disabled) .btn-foam {
    transform: translateY(0%);
  }

  &:active:not(:disabled) {
    transform: scale(0.97);
  }

  &:disabled {
    opacity: 0.48;
    cursor: not-allowed;
  }

  &.technique-info,
  &.services-info {
    padding: 0;
    width: 48px;
    min-width: 48px;
    height: 48px;
  }

  @media (max-width: 480px) {
    padding: 12px 20px;
    font-size: 15px;
  }
`;
