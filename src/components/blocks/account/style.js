import styled from 'styled-components';

// --- Цветовая палитра ---
const colors = {
  // Базовые цвета
  darkGray: 'rgb(82, 82, 82);', // Очень темный фон
  mediumGray: 'rgb(44, 44, 44);', // Чуть светлее для элементов
  lightGray: '#A9A9A9', // Для вспомогательного текста
  white: '#FFFFFF',

  // Желтый акцент Karcher
  karcherYellow: '#FFD700',
  karcherYellowLight: '#FFEB3B',
  karcherYellowDark: '#FFC107',

  // Тени
  shadowColor: 'rgba(0, 0, 0, 0.4)',
};

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
`;

export const ModalContent = styled.div`
  background: ${colors.mediumGray};
  border-radius: 12px;
  padding: 30px;
  width: 90%;
  max-width: 420px;
  box-shadow: 0 10px 30px ${colors.shadowColor};
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: -50px;
    left: -50px;
    width: 150px;
    height: 150px;
    background: radial-gradient(circle, rgba(255,215,0,0.15) 0%, transparent 70%);
    border-radius: 50%;
    filter: blur(30px);
    z-index: -1;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -70px;
    right: -70px;
    width: 200px;
    height: 200px;
    background: radial-gradient(circle, rgba(255,215,0,0.1) 0%, transparent 70%);
    border-radius: 50%;
    filter: blur(40px);
    z-index: -1;
  }
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 25px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  padding-bottom: 12px;
`;

export const ModalTitle = styled.h2`
  color: ${colors.karcherYellow};
  margin: 0;
  font-size: 36px;
  font-weight: 700;

  @media (max-width: 767px) {
    font-size: 24px;
  }
`;

export const ModalCloseButton = styled.button`
  background: none;
  border: none;
  color: ${colors.lightGray};
  font-size: 2.5em;
  cursor: pointer;
  padding: 0;
  line-height: 1;

  &:hover {
    color: ${colors.white};
  }
`;

export const ModalBody = styled.div`
  /* Дополнительные стили для тела модального окна */
`;

export const AuthForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 18px;
`;

export const InputGroup = styled.div`
  position: relative;
`;

export const InputField = styled.input`
  width: 100%;
  padding: 14px 18px;
  border: 1px solid ${colors.white};
  border-radius: 8px;
  background: ${colors.darkGray};
  color: ${colors.white};
  font-size: 18px;
  outline: none;
  transition: border-color 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease;

  &::placeholder {
    color: ${colors.white};
  }

  &:focus {
    border-color: ${colors.karcherYellow};
    background-color: ${colors.mediumGray};
    box-shadow: 0 0 0 3px rgba(255, 215, 0, 0.4);
  }

  @media (max-width: 767px) {
    font-size: 14px;
  }
`;

export const AuthButton = styled.button`
  background: linear-gradient(45deg, ${colors.karcherYellowLight} 0%, ${colors.karcherYellow} 100%);
  color: ${colors.darkGray};
  border: none;
  border-radius: 8px;
  padding: 14px 25px;
  font-size: 20px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 5px 15px rgba(255, 215, 0, 0.3);
  text-transform: uppercase;

  &:hover {
    background: linear-gradient(45deg, ${colors.karcherYellow} 0%, ${colors.karcherYellowDark} 100%);
    box-shadow: 0 8px 20px rgba(255, 215, 0, 0.4);
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
    box-shadow: 0 3px 10px rgba(255, 215, 0, 0.2);
  }

  @media (max-width: 767px) {
    font-size: 14px;
  }
`;

export const ToggleText = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  color: ${colors.lightGray};
  font-size: 18px;
  text-align: center;
  margin-top: 25px;

  @media (max-width: 767px) {
    p {
        font-size: 14px;
    }
  }
`;

export const ToggleButton = styled.span`
  color: ${colors.karcherYellow};
  cursor: pointer;
  font-weight: bold;
  margin-left: 6px;
  text-decoration: none;
  border-bottom: 2px solid ${colors.karcherYellow};
  padding-bottom: 2px;
  transition: all 0.3s ease;

  &:hover {
    color: ${colors.white};
    border-color: ${colors.white};
  }

  @media (max-width: 767px) {
    font-size: 14px;
  }
`;

const statusColors = {
  success: '#4CAF50', // Зеленый для успеха
  error: '#F44336', // Красный для ошибок
};

export const StatusMessage = styled.p`
  color: ${props => props.$isSuccess ? statusColors.success : statusColors.error};
  font-size: 18px;
  font-weight: 600;
  text-align: center;
  margin: 20px 0;
  padding: 15px;
  border-radius: 8px;
  background-color: ${props => props.$isSuccess ? 'rgba(76, 175, 80, 0.1)' : 'rgba(244, 67, 54, 0.1)'};
  border: 1px solid ${props => props.$isSuccess ? statusColors.success : statusColors.error};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  @media (max-width: 767px) {
    font-size: 14px;
    padding: 10px;
  }
`;