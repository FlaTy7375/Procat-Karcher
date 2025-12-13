import React from 'react';
import { StyledMain } from "./style";
import { Title } from "./style";
import { StyledMainWrapper } from "./style";
import { MainInfo } from "./style";
import Button from "../../ui/button/button";
import Card from "../../ui/card/card";
import { CardWrapper } from "./style";
import { useModal } from "../../app/context-modal";
import { useAuth } from "../../app/AuthContext";
import AuthModal from "../account/auth-modal";

// Функция для получения аватара с двумя буквами из имени
const getAvatarFromName = (name) => {
  if (!name) return '';
  
  const words = name.split(' ');
  if (words.length >= 2) {
    return `https://ui-avatars.com/api/?name=${encodeURIComponent(words[0].charAt(0) + words[1].charAt(0))}&background=random&size=64`;
  } else {
    const initials = name.length >= 2 ? name.substring(0, 2) : name;
    return `https://ui-avatars.com/api/?name=${encodeURIComponent(initials)}&background=random&size=64`;
  }
};

export default function Main() {
  const { 
    setModalClass, 
    setBookingClass, 
    setOption,
    isAuthModalOpen,
    setIsAuthModalOpen
  } = useModal();
  const { isAuthenticated } = useAuth();
  
  const handleBookingClick = () => {
    if (isAuthenticated) {
      setOption(0); 
      setBookingClass();
    } else {
      setIsAuthModalOpen(true);
    }
  }

  const closeAuthModal = () => {
    setIsAuthModalOpen(false);
  };
  
  // Данные статического комментария
  const staticComment = {
    author_name: "Алёна Пашкевич",
    comment_text: "Брала пылесос и честно не думала, что он так прекрасно справится с загрязнениями, отмыли все диваны и ковры, рекомендую!",
    rating: 5
  };
  
  const avatarUrl = getAvatarFromName(staticComment.author_name);
  
  return (
    <StyledMain id="main">
      <AuthModal isOpen={isAuthModalOpen} onClose={closeAuthModal}></AuthModal>
      <StyledMainWrapper>
        <div className="main-container">
          <MainInfo>
            <Title>Прокат Karcher</Title>
            <p>
              Прокат моющей техники Karcher в Столине – арендуйте мощное
              оборудование для идеальной чистоты. Удобно, быстро и по доступной
              цене!
            </p>
            <Button className="main-button" onClick={() => {handleBookingClick()}}>Бронировать</Button>
          </MainInfo>
          <Card className="main-comment">
            <div className="comment-wrapper">
              <div className="comment-author">
                <img 
                  src={avatarUrl} 
                  alt="avatar" 
                  width="64" 
                  height="64" 
                  onError={(e) => {
                    e.target.onerror = null;
                    // Fallback на генерацию из имени в случае ошибки
                    e.target.src = getAvatarFromName(staticComment.author_name);
                  }}
                />
                <div className="author-info">
                  <h2>{staticComment.author_name}</h2>
                  <div className="rating">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <span 
                        key={`star-${star}`}
                        style={{ 
                          color: star <= staticComment.rating ? '#FFD700' : '#DDD',
                        }}
                      >
                        ★
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <p className="comment-text">
                {staticComment.comment_text}
              </p>
            </div>
          </Card>
        </div>
        <Card className="main-card">
          <CardWrapper>
            <p>Доп. Услуги</p>
            <h2>Karcher K 5 Full Control</h2>
            <Button className="card-button" onClick={setModalClass}>Подробнее</Button>
          </CardWrapper>
        </Card>
      </StyledMainWrapper>
    </StyledMain>
  );
}