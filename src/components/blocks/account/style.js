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

export const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(28, 30, 34, 0.56);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2500;
  padding: 16px;
  overflow-y: auto;

  @media (max-width: 767px) {
    padding: 0;
    align-items: flex-end;
  }
`;

export const ModalContent = styled.div`
  background: var(--paper);
  border: 1px solid var(--line);
  border-radius: var(--radius-card-lg);
  box-shadow: var(--shadow-card);
  width: 100%;
  max-width: 460px;
  max-height: 92vh;
  overflow-y: auto;
  position: relative;
  color: var(--graphite);
  animation: ${modalRise} 260ms var(--ease-clean);

  @media (max-width: 767px) {
    max-width: 100%;
    border-radius: var(--radius-card) var(--radius-card) 0 0;
    animation: ${sheetSlideUp} 280ms var(--ease-clean);
  }
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  padding: 18px 24px;
  background: var(--foam);
  border-bottom: 1px solid var(--line);
`;

export const ModalTitle = styled.h2`
  font-family: var(--font-display);
  color: var(--graphite);
  margin: 0;
  font-size: 22px;
  font-weight: 800;
`;

export const ModalCloseButton = styled.button`
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
  transition: background-color 200ms var(--ease-clean);

  &:hover {
    background: var(--sun);
    border-color: var(--sun);
  }
`;

export const ModalBody = styled.div`
  padding: 22px 24px 26px;
`;

export const AuthForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const InputLabel = styled.label`
  font-family: var(--font-body);
  font-weight: 600;
  font-size: 14px;
  letter-spacing: 0;
  color: var(--graphite);
`;

export const InputField = styled.input`
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

  &:disabled {
    opacity: 0.6;
  }
`;

export const AuthButton = styled.button`
  min-height: 52px;
  margin-top: 6px;
  padding: 12px 24px;
  border: 2px solid var(--sun);
  border-radius: var(--radius-pill);
  background: var(--sun);
  color: var(--graphite);
  font-family: var(--font-body);
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition:
    background-color 220ms var(--ease-clean),
    transform 180ms var(--ease-clean);

  &:hover:not(:disabled) {
    background: var(--sun-deep);
    border-color: var(--sun-deep);
  }

  &:active:not(:disabled) {
    transform: scale(0.97);
  }

  &:disabled {
    opacity: 0.55;
    cursor: not-allowed;
  }
`;

export const ToggleText = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 8px;
  color: var(--graphite-70);
  font-size: 15px;
  text-align: center;
  margin-top: 18px;
`;

export const ToggleButton = styled.button`
  background: transparent;
  border: none;
  color: var(--graphite);
  cursor: pointer;
  font-weight: 600;
  font-size: 15px;
  text-decoration: underline;
  text-decoration-color: var(--sun-deep);
  text-underline-offset: 4px;
  padding: 6px 4px;
  min-height: 44px;

  &:hover {
    color: var(--graphite-70);
  }
`;

export const StatusMessage = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 10px;
  color: ${(props) => (props.$isSuccess ? "#1f7442" : "var(--err)")};
  font-size: 15px;
  font-weight: 500;
  line-height: 1.4;
  margin: 0 0 18px 0;
  padding: 12px 14px;
  border-radius: 14px;
  background-color: ${(props) =>
    props.$isSuccess ? "rgba(46, 158, 91, 0.12)" : "rgba(214, 69, 69, 0.1)"};
  border: 1px solid
    ${(props) => (props.$isSuccess ? "var(--ok)" : "var(--err)")};

  svg {
    flex-shrink: 0;
    margin-top: 2px;
  }
`;
