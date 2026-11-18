import styled from "styled-components";

export const StyledHeader = styled.header`
  position: sticky;
  top: 12px;
  left: 0;
  right: 0;
  width: 100%;
  padding: 12px var(--container-pad) 0;
  z-index: 1200;
  pointer-events: none;

  @media (max-width: 767px) {
    top: 8px;
    padding: 8px 12px 0;
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
