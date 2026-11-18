import styled from "styled-components";

export const StyledMobileBar = styled.div`
  display: none;

  @media (max-width: 767px) {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1150;
    display: grid;
    grid-template-columns: 1.25fr 1fr;
    gap: 10px;
    padding: 10px 12px calc(10px + env(safe-area-inset-bottom));
    background: var(--paper);
    border-top: 1px solid var(--line);
    box-shadow: 0 -16px 32px -18px rgba(28, 30, 34, 0.24);
    transform: ${({ $visible }) =>
      $visible ? "translate3d(0, 0, 0)" : "translate3d(0, 110%, 0)"};
    pointer-events: ${({ $visible }) => ($visible ? "auto" : "none")};
    transition: transform 280ms var(--ease-clean);
  }

  .mobile-bar-book,
  .mobile-bar-call {
    width: 100%;
    min-height: 48px;
    padding: 10px 14px;
    font-size: 14px;
  }
`;
