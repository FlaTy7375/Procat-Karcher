import styled from "styled-components";

export const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  padding: calc(12px + env(safe-area-inset-top, 0px)) var(--container-pad) 0;
  z-index: 1200;
  pointer-events: none;
  transform: translate3d(0, 0, 0);
  backface-visibility: hidden;

  @media (max-width: 767px) {
    padding: calc(8px + env(safe-area-inset-top, 0px)) 12px 0;
  }
`;

export const StyledWrapper = styled.div`
  pointer-events: auto;
  width: 100%;
  max-width: var(--container-max);
  min-height: 62px;
  margin: 0 auto;
  padding: 8px 9px;
  display: flex;
  align-items: center;
  background: var(--paper);
  border: 1px solid var(--line);
  border-radius: var(--radius-pill);
  box-shadow: ${({ $scrolled }) =>
    $scrolled
      ? "var(--shadow-card)"
      : "0 12px 28px -18px rgba(28, 30, 34, 0.16)"};
  transition:
    box-shadow 250ms var(--ease-clean),
    border-color 250ms var(--ease-clean);

  @media (max-width: 767px) {
    min-height: 58px;
    padding: 6px 7px;
  }
`;
