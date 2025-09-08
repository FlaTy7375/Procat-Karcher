import React, { useState, forwardRef } from "react";
import Card from "../../ui/card/card";
import Button from "../../ui/button/button";
import { ServicesAboutContainer } from "./style";
import InstLogo from "../../../assets/svg/inst.svg"
import TgLogo from "../../../assets/svg/telegram.svg"
import CallLogo from "../../../assets/svg/call.svg"
import { ReactComponent as CloseButton } from "../../../assets/svg/close-button.svg"
import { useAuth } from "../../app/AuthContext";
import AuthModal from "../account/auth-modal";

const ServicesAbout = forwardRef(({ display, hideModal, setBookingClass, setOption}, ref) => {

    const { isAuthenticated } = useAuth();
    const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

    const handleBookingClick = () => {
      if (isAuthenticated) {
        hideModal()
        setOption(3); 
        setBookingClass();
      } else {
        // Если пользователь не авторизован, показываем модальное окно регистрации/входа
        setIsAuthModalOpen(true);
      }
    }
  
    const closeAuthModal = () => {
      setIsAuthModalOpen(false);
    };

  return (
    <ServicesAboutContainer className={display} ref={ref}>
      <AuthModal isOpen={isAuthModalOpen} onClose={closeAuthModal}></AuthModal>
      <Card className="services-about">
        <button className="button-close" onClick={hideModal}><CloseButton></CloseButton></button>
        <div className="about-block">
          <h2>Уборка и чистка автомобилей</h2>
          <p>
            Мы предлагаем профессиональную уборку автомобилей любых размеров – от
            небольших легковых машин до вместительных бусов. Используем только
            проверенную технику Karcher и безопасные чистящие средства, чтобы ваш
            автомобиль сиял чистотой как снаружи, так и внутри.
          </p>
        </div>
        <div className="about-block">
          <h2>Что мы делаем?</h2>
          <ul>
            <li>Тщательная мойка кузова с использованием аппаратов высокого давления – убираем грязь, пыль и следы насекомых без вреда для краски.</li>
            <li>Химчистка салона: чистим сиденья, коврики, потолок и багажник, удаляем пятна и запахи.</li>
            <li>Уборка труднодоступных мест – щелей, вентиляционных отверстий, под сиденьями.</li>
            <li>Чистка стекол и зеркал для идеальной видимости.</li>
            <li>Обработка пластиковых деталей салона для защиты и блеска.</li>
          </ul>
        </div>
        <div className="about-block">
          <h2>Сколько стоит?</h2>
          <ul>
            <article>Цена указана минимальная, лучше уточнять по телефону:</article>
            <li>Легковые машины: 90 BYN.</li>
            <li>Кроссоверы и внедорожники: 130 BYN.</li>
            <li>Минивэны: 160 BYN.</li>
            <li>Бусы: 180-240 BYN.</li>
          </ul>
        </div>
        <div className="about-container">
        <div className="about-button--wrapper">
        <small>*Если остались вопросы, свяжитесь с нами и мы все разъясним.</small>
        <Button className="about-button" onClick={() => {handleBookingClick()}}>Заказать</Button>
        </div>
        <div className="about-socials">
          <h2>Связаться с нами</h2>
          <div className="social-about--list">
              <a href="https://www.instagram.com/prokat_karcher_stolin?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer"><img src={InstLogo} alt="inst-logo" width="48" height="48"/></a>
              <a href="https://t.me/Inna_Evt" target="_blank" rel="noopener noreferrer"><img src={TgLogo} alt="telegram-logo" width="48" height="48"/></a>
              <a href="tel:+375292781620" target="_blank" rel="noopener noreferrer"><img src={CallLogo} alt="phone-logo" width="48" height="48"/></a>
          </div>
        </div>
        </div>
      </Card>
    </ServicesAboutContainer>
  );
});

export default ServicesAbout;