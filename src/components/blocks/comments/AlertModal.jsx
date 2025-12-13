import React from 'react';
import styled from 'styled-components';

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2000;
  padding: 20px;
  backdrop-filter: blur(5px);
`;

const AlertModalContainer = styled.div`
  background: #1a1a1a;
  border-radius: 20px;
  width: 100%;
  max-width: 400px;
  padding: 0;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
  overflow: hidden;
  border: 2px solid #ffd700;
  animation: slideIn 0.3s ease;
  
  @keyframes slideIn {
    from {
      opacity: 0;
      transform: translateY(-20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 25px;
  border-bottom: 2px solid #333;
  background: #222;
`;

const ModalTitle = styled.h3`
  margin: 0;
  font-size: 20px;
  font-weight: 600;
  color: #ffd700;
`;

const ModalBody = styled.div`
  padding: 25px;
  text-align: center;
`;

const ModalMessage = styled.p`
  margin: 0 0 20px 0;
  font-size: 16px;
  line-height: 1.5;
  color: #e0e0e0;
`;

const ModalActions = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center;
`;

const ModalButton = styled.button`
  padding: 10px 25px;
  font-size: 14px;
  font-weight: 600;
  border-radius: 8px;
  cursor: pointer;
  border: none;
  transition: all 0.3s ease;
  min-width: 100px;
  
  &.primary {
    background: #ffd700;
    color: #000;
    border: 2px solid #ffd700;
    
    &:hover {
      background: #ffed4e;
      border-color: #ffed4e;
      transform: translateY(-2px);
    }
  }
  
  &.secondary {
    background: transparent;
    color: #999;
    border: 2px solid #444;
    
    &:hover {
      background: #333;
      color: #fff;
      border-color: #666;
      transform: translateY(-2px);
    }
  }
  
  &.danger {
    background: #dc3545;
    color: white;
    border: 2px solid #dc3545;
    
    &:hover {
      background: #c82333;
      border-color: #c82333;
      transform: translateY(-2px);
      box-shadow: 0 6px 20px rgba(220, 53, 69, 0.3);
    }
  }
`;

export default function AlertModal({ 
  isOpen, 
  onClose, 
  title = "Уведомление", 
  message, 
  type = "info", 
  onConfirm 
}) {
  if (!isOpen) return null;

  const getButtons = () => {
    switch (type) {
      case "confirm":
        return (
          <>
            <ModalButton className="secondary" onClick={onClose}>
              Закрыть
            </ModalButton>
          </>
        );
      case "error":
        return (
          <ModalButton className="danger" onClick={onClose}>
            Закрыть
          </ModalButton>
        );
      default:
        return (
          <ModalButton className="primary" onClick={onClose}>
            ОК
          </ModalButton>
        );
    }
  };

  return (
    <ModalOverlay onClick={onClose}>
      <AlertModalContainer onClick={(e) => e.stopPropagation()}>
        <ModalHeader>
          <ModalTitle>{title}</ModalTitle>
        </ModalHeader>
        <ModalBody>
          <ModalMessage>{message}</ModalMessage>
          <ModalActions>
            {getButtons()}
          </ModalActions>
        </ModalBody>
      </AlertModalContainer>
    </ModalOverlay>
  );
}