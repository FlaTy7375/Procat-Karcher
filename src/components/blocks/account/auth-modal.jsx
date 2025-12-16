import React, { useState, useEffect } from 'react';
import { useAuth } from "../../app/AuthContext.jsx";
import {
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalTitle,
  ModalCloseButton,
  ModalBody,
  AuthForm,
  InputGroup,
  InputField,
  AuthButton,
  ToggleText,
  ToggleButton,
  StatusMessage
} from './style.js';

const API_URL = 'https://karcherback-production.up.railway.app';

const AuthModal = ({ isOpen, onClose }) => {
  const { login } = useAuth();
  // По умолчанию сначала показываем регистрацию
  const [isRegister, setIsRegister] = useState(true);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isSuccess, setIsSuccess] = useState(null);
  const [message, setMessage] = useState('');

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => {
        setMessage('');
        setIsSuccess(null);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [message]);

  if (!isOpen) {
    return null;
  }

  const handleToggleForm = () => {
    setIsRegister(!isRegister);
    setFirstName('');
    setLastName('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
    setMessage('');
    setIsSuccess(null);
  };

  const validatePassword = (password) => {
    if (password.length < 6) {
      return 'Пароль должен содержать не менее 6 символов.';
    }

    const hasNumber = /[0-9]/.test(password);
    if (!hasNumber) {
      return 'Пароль должен содержать хотя бы одну цифру.';
    }

    const hasLetter = /[a-zA-Z]/.test(password);
    if (!hasLetter) {
      return 'Пароль должен содержать хотя бы одну букву.';
    }

    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    setIsSuccess(null);

    if (isRegister) {
      if (password !== confirmPassword) {
        setIsSuccess(false);
        setMessage('❌ Пароли не совпадают! Пожалуйста, проверьте и попробуйте снова.');
        return;
      }

      const passwordError = validatePassword(password);
      if (passwordError) {
        setIsSuccess(false);
        setMessage(`❌ Ошибка пароля: ${passwordError}`);
        return;
      }
      
      const userData = {
        first_name: firstName,
        last_name: lastName,
        email: email,
        password: password,
      };

      try {
        const response = await fetch(`${API_URL}/clients`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(userData),
        });

        if (response.ok) {
          const result = await response.json();
          setFirstName('');
          setLastName('');
          setEmail('');
          setPassword('');
          setConfirmPassword('');
          console.log('Регистрация успешна:', result);
          setIsSuccess(true);
          setMessage('✅ Поздравляем! Ваш аккаунт успешно создан.');
        } else {
          const errorData = await response.json();
          console.error('Ошибка регистрации:', errorData);
          setIsSuccess(false);
          setMessage(`❌ Ошибка: ${errorData.error || 'Неизвестная ошибка.'}`);
        }
      } catch (error) {
        console.error('Сетевая ошибка:', error);
        setIsSuccess(false);
        setMessage('❌ Не удалось подключиться к серверу.');
      }
    } else {
      try {
        const response = await fetch(`${API_URL}/login`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email, password }),
        });

        if (response.ok) {
          const result = await response.json();
          console.log('Вход успешен:', result);
          setIsSuccess(true);
          setMessage('✅ Добро пожаловать! Вы успешно вошли в свой аккаунт.');
          login(result.client);
          setTimeout(() => {
            onClose();
          }, 1000);
        } else {
          const errorData = await response.json();
          console.error('Ошибка входа:', errorData);
          setIsSuccess(false);
          setMessage(`❌ Неверный логин или пароль.`);
        }
      } catch (error) {
        console.error('Сетевая ошибка:', error);
        setIsSuccess(false);
        setMessage('❌ Ошибка входа. Не удалось подключиться к серверу.');
      }
    }
  };

  return (
    <ModalOverlay>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <ModalHeader>
          <ModalTitle>{isRegister ? 'Регистрация' : 'Вход'}</ModalTitle>
          <ModalCloseButton onClick={onClose}>&times;</ModalCloseButton>
        </ModalHeader>
        <ModalBody>
          {message && <StatusMessage $isSuccess={isSuccess}>{message}</StatusMessage>}
          
          <AuthForm onSubmit={handleSubmit}>
            {isRegister ? (
              <>
                <InputGroup>
                  <InputField 
                    type="text" 
                    placeholder="Ваше имя" 
                    required 
                    value={firstName} 
                    onChange={(e) => setFirstName(e.target.value)} 
                  />
                </InputGroup>
                <InputGroup>
                  <InputField 
                    type="text"
                    placeholder="Ваша фамилия" 
                    required 
                    value={lastName} 
                    onChange={(e) => setLastName(e.target.value)} 
                  />
                </InputGroup>
                <InputGroup>
                  <InputField 
                    type="email" 
                    name="email"
                    placeholder="Email" 
                    required 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                  />
                </InputGroup>
              </>
            ) :
            <InputGroup>
              <InputField 
                type="email" 
                name="email"
                placeholder="Email" 
                required={!isRegister}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </InputGroup>
            }
            <InputGroup>
              <InputField 
                type="password" 
                placeholder="Пароль" 
                required 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </InputGroup>
            {isRegister && (
              <InputGroup>
                <InputField 
                  type="password" 
                  placeholder="Повторите пароль" 
                  required 
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </InputGroup>
            )}
            <AuthButton type="submit">{isRegister ? 'Зарегистрироваться' : 'Войти'}</AuthButton>
          </AuthForm>
          <ToggleText>
            {isRegister ? <p>Уже есть аккаунт?</p> : <p>Нет аккаунта?</p>}
            <ToggleButton onClick={handleToggleForm}>
              {isRegister ? 'Войти' : 'Зарегистрироваться'}
            </ToggleButton>
          </ToggleText>
        </ModalBody>
      </ModalContent>
    </ModalOverlay>
  );
};

export default AuthModal;