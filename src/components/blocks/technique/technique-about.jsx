import React, { useEffect } from "react";
import { TechniqueAboutContainer } from "./style";
import Card from "../../ui/card/card";
import Button from "../../ui/button/button";
import InstLogo from "../../../assets/svg/inst.svg";
import TgLogo from "../../../assets/svg/telegram.svg";
import CallLogo from "../../../assets/svg/call.svg";
import { techniqueInfo } from "../../../mocks/technique-info";
import Technique1 from "../../../assets/images/karcher-puzzi.png";
import Technique2 from "../../../assets/images/karcher-sc4-deluxe.png";
import { ReactComponent as CloseButton } from "../../../assets/svg/close-button.svg";

export default function TechniqueAbout({
  display,
  hideModal,
  BtnFirst,
  setBookingClass,
  setOption,
}) {
  const technique1 = techniqueInfo[0];

  useEffect(() => {
    // Функция для обработки нажатий клавиш
    const handleKeyDown = (event) => {
      // Проверяем, является ли нажатая клавиша 'Escape'
      if (event.key === 'Escape' || event.key === 'Esc') {
        hideModal();
      }
    };

    // Добавляем обработчик событий на документ, только если модальное окно открыто
    if (display === 'modal-show') {
      document.addEventListener('keydown', handleKeyDown);
    }

    // Возвращаем функцию очистки
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [display, hideModal]); // Перезапускаем эффект, когда меняются display или hideModal

  const handleBookingClick = () => {
    hideModal();
    setBookingClass();
  };

  return (
    <>
      <TechniqueAboutContainer className={display}>
        <Card className="technique-about">
          <button className="button-close" onClick={hideModal}>
            <CloseButton />
          </button>
          {BtnFirst ? (
            <>
              <div>
                <div className="about-block">
                  <h2 className="about-title">{technique1.title}</h2>
                  <p className="about-description">{technique1.description}</p>
                </div>
                <Card className="image-card">
                  <img
                    src={Technique1}
                    alt="Моющий пылесоc Karcher Puzzi 8/1 C"
                    draggable="false"
                  />
                </Card>
                <div className="about-block">
                  <h2 className="about-title">Технические характеристики:</h2>
                  {technique1.content1}
                </div>
                <div className="about-block">
                  <h2 className="about-title">Преимущества:</h2>
                  {technique1.content2}
                </div>
              </div>
            </>
          ) : (
            <>
              <div>
                <div className="about-block">
                  <h2 className="about-title">{techniqueInfo[1].title}</h2>
                  <p className="about-description">{techniqueInfo[1].description}</p>
                </div>
                <Card className="image-card">
                  <img
                    src={Technique2}
                    alt="Моющий пылесоc Karcher SC 3 EasyFix"
                    draggable="false"
                  />
                </Card>
                <div className="about-block">
                  <h2 className="about-title">Технические характеристики:</h2>
                  {techniqueInfo[1].content1}
                </div>
                <div className="about-block">
                  <h2 className="about-title">Преимущества:</h2>
                  {techniqueInfo[1].content2}
                </div>
              </div>
            </>
          )}

          <div className="about-container">
            <div className="about-button--wrapper">
              <small>*Если остались вопросы, свяжитесь с нами и мы все разъясним.</small>
              <Button
                className="about-button"
                onClick={() => {
                  BtnFirst ? setOption(1) : setOption(2);
                  handleBookingClick();
                }}
              >
                Бронировать
              </Button>
            </div>
            <div className="about-socials">
              <h2>Связаться с нами</h2>
              <div className="social-about--list">
                <a
                  href="https://www.instagram.com/prokat_karcher_stolin?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={InstLogo} alt="inst-logo" width="48" height="48" />
                </a>
                <a href="https://t.me/Inna_Evt" target="_blank" rel="noopener noreferrer">
                  <img src={TgLogo} alt="telegram-logo" width="48" height="48" />
                </a>
                <a href="tel:+375292781620" target="_blank" rel="noopener noreferrer">
                  <img src={CallLogo} alt="phone-logo" width="48" height="48" />
                </a>
              </div>
            </div>
          </div>
        </Card>
      </TechniqueAboutContainer>
    </>
  );
}