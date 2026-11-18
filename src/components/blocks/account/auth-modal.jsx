import React, { useState, useEffect } from "react";
import { useAuth } from "../../app/AuthContext.jsx";
import { AlertIcon, CheckIcon, CloseIcon } from "../../ui/icons/icons.jsx";
import TankLoader from "../../ui/tank-loader/tank-loader.jsx";
import {
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalTitle,
  ModalCloseButton,
  ModalBody,
  AuthForm,
  InputGroup,
  InputLabel,
  InputField,
  AuthButton,
  ToggleText,
  ToggleButton,
  StatusMessage,
} from "./style.js";

const API_URL = "https://karcher-back.onrender.com";

const AuthModal = ({ isOpen, onClose }) => {
  const { login } = useAuth();
  const [isRegister, setIsRegister] = useState(true);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isSuccess, setIsSuccess] = useState(null);
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => {
        setMessage("");
        setIsSuccess(null);
      }, 5000);

      return () => clearTimeout(timer);
    }
    return undefined;
  }, [message]);

  if (!isOpen) return null;

  const handleToggleForm = () => {
    setIsRegister(!isRegister);
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    setMessage("");
    setIsSuccess(null);
  };

  const validatePassword = (pwd) => {
    if (pwd.length < 6) {
      return "Пароль должен содержать не менее 6 символов.";
    }
    if (!/[0-9]/.test(pwd)) {
      return "Пароль должен содержать хотя бы одну цифру.";
    }
    if (!/[a-zA-Z]/.test(pwd)) {
      return "Пароль должен содержать хотя бы одну букву.";
    }
    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setIsSuccess(null);

    if (isRegister) {
      if (password !== confirmPassword) {
        setIsSuccess(false);
        setMessage(
          "Пароли не совпадают! Пожалуйста, проверьте и попробуйте снова."
        );
        return;
      }

      const passwordError = validatePassword(password);
      if (passwordError) {
        setIsSuccess(false);
        setMessage(`Ошибка пароля: ${passwordError}`);
        return;
      }

      const userData = {
        first_name: firstName,
        last_name: lastName,
        email,
        password,
      };

      setSubmitting(true);
      try {
        const response = await fetch(`${API_URL}/clients`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userData),
        });

        if (response.ok) {
          await response.json();
          setFirstName("");
          setLastName("");
          setEmail("");
          setPassword("");
          setConfirmPassword("");
          setIsSuccess(true);
          setMessage("Поздравляем! Ваш аккаунт успешно создан.");
        } else {
          const errorData = await response.json();
          setIsSuccess(false);
          setMessage(`Ошибка: ${errorData.error || "Неизвестная ошибка."}`);
        }
      } catch (error) {
        console.error("Сетевая ошибка:", error);
        setIsSuccess(false);
        setMessage("Не удалось подключиться к серверу.");
      } finally {
        setSubmitting(false);
      }
    } else {
      setSubmitting(true);
      try {
        const response = await fetch(`${API_URL}/login`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        });

        if (response.ok) {
          const result = await response.json();
          setIsSuccess(true);
          setMessage("Добро пожаловать! Вы успешно вошли в свой аккаунт.");
          login(result.client);
          setTimeout(() => {
            onClose();
          }, 1000);
        } else {
          setIsSuccess(false);
          setMessage("Неверный логин или пароль.");
        }
      } catch (error) {
        console.error("Сетевая ошибка:", error);
        setIsSuccess(false);
        setMessage("Ошибка входа. Не удалось подключиться к серверу.");
      } finally {
        setSubmitting(false);
      }
    }
  };

  return (
    <ModalOverlay
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={isRegister ? "Регистрация" : "Вход"}
    >
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <ModalHeader>
          <ModalTitle>{isRegister ? "Регистрация" : "Вход"}</ModalTitle>
          <ModalCloseButton
            type="button"
            onClick={onClose}
            aria-label="Закрыть окно авторизации"
          >
            <CloseIcon size={20} />
          </ModalCloseButton>
        </ModalHeader>

        <ModalBody>
          {message && (
            <StatusMessage $isSuccess={isSuccess} role="status">
              {isSuccess ? <CheckIcon size={18} /> : <AlertIcon size={18} />}
              <span>{message}</span>
            </StatusMessage>
          )}

          {submitting && (
            <div style={{ marginBottom: "16px" }}>
              <TankLoader
                compact
                label={isRegister ? "Создаём аккаунт…" : "Входим в аккаунт…"}
              />
            </div>
          )}

          <AuthForm onSubmit={handleSubmit}>
            {isRegister ? (
              <>
                <InputGroup>
                  <InputLabel htmlFor="auth-first-name">Имя</InputLabel>
                  <InputField
                    id="auth-first-name"
                    type="text"
                    placeholder="Например, Анна"
                    required
                    disabled={submitting}
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </InputGroup>
                <InputGroup>
                  <InputLabel htmlFor="auth-last-name">Фамилия</InputLabel>
                  <InputField
                    id="auth-last-name"
                    type="text"
                    placeholder="Например, Петрова"
                    required
                    disabled={submitting}
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </InputGroup>
                <InputGroup>
                  <InputLabel htmlFor="auth-email-reg">Email</InputLabel>
                  <InputField
                    id="auth-email-reg"
                    type="email"
                    name="email"
                    placeholder="name@example.com"
                    required
                    disabled={submitting}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </InputGroup>
              </>
            ) : (
              <InputGroup>
                <InputLabel htmlFor="auth-email-login">Email</InputLabel>
                <InputField
                  id="auth-email-login"
                  type="email"
                  name="email"
                  placeholder="name@example.com"
                  required={!isRegister}
                  disabled={submitting}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </InputGroup>
            )}

            <InputGroup>
              <InputLabel htmlFor="auth-password">Пароль</InputLabel>
              <InputField
                id="auth-password"
                type="password"
                placeholder="Минимум 6 символов, буква и цифра"
                required
                disabled={submitting}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </InputGroup>

            {isRegister && (
              <InputGroup>
                <InputLabel htmlFor="auth-password-confirm">
                  Повторите пароль
                </InputLabel>
                <InputField
                  id="auth-password-confirm"
                  type="password"
                  placeholder="Повторите пароль"
                  required
                  disabled={submitting}
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </InputGroup>
            )}

            <AuthButton type="submit" disabled={submitting}>
              {isRegister ? "Зарегистрироваться" : "Войти"}
            </AuthButton>
          </AuthForm>

          <ToggleText>
            <span>{isRegister ? "Уже есть аккаунт?" : "Нет аккаунта?"}</span>
            <ToggleButton type="button" onClick={handleToggleForm}>
              {isRegister ? "Войти" : "Зарегистрироваться"}
            </ToggleButton>
          </ToggleText>
        </ModalBody>
      </ModalContent>
    </ModalOverlay>
  );
};

export default AuthModal;
