import styled from "styled-components";

export const StyledCard = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: clamp(22px, 3vw, 36px);
  background: var(--paper);
  border: 1px solid var(--line);
  border-radius: var(--radius-card);
  box-shadow: var(--shadow-card);
  color: var(--graphite);
  transition:
    border-color 250ms var(--ease-clean),
    transform 250ms var(--ease-clean);

  @media (max-width: 767px) {
    padding: 20px;
  }
`;
