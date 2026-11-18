import styled from "styled-components";

export const StyledSection = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  width: 100%;
  margin-bottom: clamp(28px, 4vw, 44px);

  .section-meta {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    line-height: 1;
  }

  .section-index {
    font-family: var(--font-display);
    font-weight: 800;
    font-size: 14px;
    letter-spacing: -0.02em;
    color: ${({ $tone }) =>
      $tone === "dark" ? "var(--sun)" : "var(--graphite)"};
  }

  .section-slash {
    width: 24px;
    height: 6px;
    background: var(--sun);
    transform: skewX(-18deg);
    flex-shrink: 0;
  }

  .section-tag {
    font-family: var(--font-body);
    font-weight: 600;
    font-size: 14px;
    letter-spacing: 0.01em;
    color: ${({ $tone }) =>
      $tone === "dark" ? "rgba(255, 255, 255, 0.72)" : "var(--graphite-70)"};
  }

  h2 {
    position: relative;
    font-family: var(--font-display);
    font-weight: 800;
    font-size: clamp(30px, 4.2vw, 56px);
    line-height: 1.05;
    letter-spacing: -0.02em;
    color: ${({ $tone }) =>
      $tone === "dark" ? "var(--paper)" : "var(--graphite)"};
    overflow-wrap: break-word;
    max-width: 100%;
  }

  @media (max-width: 767px) {
    gap: 8px;
    margin-bottom: 24px;
  }
`;
