import React from "react";
import styled, { keyframes } from "styled-components";
import Button from "../../ui/button/button";
import { CloseIcon } from "../../ui/icons/icons";

const modalRise = keyframes`
  from {
    opacity: 0;
    transform: translateY(14px);
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

const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(28, 30, 34, 0.56);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2600;
  padding: 20px;

  @media (max-width: 767px) {
    padding: 0;
    align-items: flex-end;
  }
`;

const AlertModalContainer = styled.div`
  background: var(--paper);
  width: 100%;
  max-width: 420px;
  border-radius: var(--radius-card-lg);
  border: 1px solid var(--line);
  box-shadow: var(--shadow-card);
  overflow: hidden;
  color: var(--graphite);
  animation: ${modalRise} 240ms var(--ease-clean);

  @media (max-width: 767px) {
    max-width: 100%;
    border-radius: var(--radius-card) var(--radius-card) 0 0;
    animation: ${sheetSlideUp} 260ms var(--ease-clean);
  }
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  padding: 18px 22px;
  border-bottom: 1px solid var(--line);
  background: var(--foam);
`;

const ModalTitle = styled.h3`
  margin: 0;
  font-family: var(--font-display);
  font-size: 18px;
  font-weight: 800;
  color: ${({ $type }) =>
    $type === "error"
      ? "var(--err)"
      : $type === "confirm"
      ? "var(--ok)"
      : "var(--graphite)"};
`;

const CloseBtn = styled.button`
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

  &:hover {
    background: var(--sun);
    border-color: var(--sun);
  }
`;

const ModalBody = styled.div`
  padding: 22px;
  text-align: center;
`;

const ModalMessage = styled.p`
  margin: 0 0 20px 0;
  font-size: 16px;
  line-height: 1.55;
  color: var(--graphite-70);
`;

const ModalActions = styled.div`
  display: flex;
  gap: 12px;
  justify-content: center;
`;

export default function AlertModal({
  isOpen,
  onClose,
  title = "Уведомление",
  message,
  type = "info",
}) {
  if (!isOpen) return null;

  return (
    <ModalOverlay onClick={onClose} role="dialog" aria-modal="true" aria-label={title}>
      <AlertModalContainer onClick={(e) => e.stopPropagation()}>
        <ModalHeader>
          <ModalTitle $type={type}>{title}</ModalTitle>
          <CloseBtn type="button" onClick={onClose} aria-label="Закрыть">
            <CloseIcon size={20} />
          </CloseBtn>
        </ModalHeader>
        <ModalBody>
          <ModalMessage>{message}</ModalMessage>
          <ModalActions>
            <Button
              variant={type === "info" ? "primary" : "outline"}
              onClick={onClose}
            >
              {type === "info" ? "ОК" : "Закрыть"}
            </Button>
          </ModalActions>
        </ModalBody>
      </AlertModalContainer>
    </ModalOverlay>
  );
}
