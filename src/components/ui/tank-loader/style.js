import styled, { keyframes } from "styled-components";

const waterFill = keyframes`
  0% {
    transform: translateY(48px);
  }
  70%, 100% {
    transform: translateY(10px);
  }
`;

export const StyledTankLoader = styled.div`
  display: flex;
  flex-direction: ${({ $compact }) => ($compact ? "row" : "column")};
  align-items: center;
  justify-content: center;
  gap: ${({ $compact }) => ($compact ? "14px" : "12px")};
  padding: ${({ $compact }) => ($compact ? "14px 18px" : "24px 18px")};
  border-radius: 18px;
  background: var(--foam);
  border: 1px solid var(--line);
  text-align: ${({ $compact }) => ($compact ? "left" : "center")};

  .tank-svg-wrap {
    flex-shrink: 0;
  }

  .tank-water-rise {
    animation: ${waterFill} 1.8s var(--ease-clean) infinite;
    transform-box: fill-box;
  }

  .tank-text {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }

  .tank-label {
    font-family: var(--font-display);
    font-weight: 700;
    font-size: 15px;
    color: var(--graphite);
  }

  .tank-wake-note {
    font-family: var(--font-mono);
    font-size: 12px;
    color: var(--graphite-70);
  }
`;
