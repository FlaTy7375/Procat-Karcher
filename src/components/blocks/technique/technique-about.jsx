import React, { useEffect } from "react";
import { TechniqueAboutContainer } from "./style";
import Button from "../../ui/button/button";
import {
  CloseIcon,
  InstagramIcon,
  PhoneIcon,
  TelegramIcon,
} from "../../ui/icons/icons";
import { techniqueInfo } from "../../../mocks/technique-info";
import Technique1 from "../../../assets/images/karcher-puzzi.webp";
import Technique2 from "../../../assets/images/karcher-sc4-deluxe.webp";

export default function TechniqueAbout({
  display,
  hideModal,
  BtnFirst,
  setBookingClass,
  setOption,
}) {
  const isOpen = display === "modal-show";
  const activeItem = BtnFirst ? techniqueInfo[0] : techniqueInfo[1];
  const activeImage = BtnFirst ? Technique1 : Technique2;

  useEffect(() => {
    if (!isOpen) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === "Escape" || event.key === "Esc") {
        hideModal();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, hideModal]);

  if (!isOpen) return null;

  const handleBookingClick = () => {
    hideModal();
    setOption(BtnFirst ? 1 : 2);
    setBookingClass();
  };

  return (
    <TechniqueAboutContainer
      className={display}
      onClick={hideModal}
      role="dialog"
      aria-modal="true"
      aria-label={`${activeItem.title} — характеристики`}
    >
      <div
        className="technique-about"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sheet-head">
          <span className="about-kicker">
            {BtnFirst ? "Моющий пылесос · 50\u00A0руб/сутки" : "Пароочиститель · 4\u00A0бар · 50\u00A0руб/сутки"}
          </span>
          <button
            type="button"
            className="button-close"
            onClick={hideModal}
            aria-label="Закрыть окно"
          >
            <CloseIcon size={20} />
          </button>
        </div>

        <div className="sheet-body">
          <div className="about-top-grid">
            <div className="about-intro">
              <h2 className="about-title">{activeItem.title}</h2>
              <p className="about-description">{activeItem.description}</p>
            </div>

            <div className="image-card">
              <img
                src={activeImage}
                alt={activeItem.title}
                width={BtnFirst ? 534 : 960}
                height={BtnFirst ? 463 : 960}
                loading="lazy"
                draggable="false"
              />
            </div>
          </div>

          <div className="about-specs-grid">
            <div className="about-block">
              <h3>Технические характеристики</h3>
              {activeItem.content1}
            </div>
            <div className="about-block">
              <h3>Преимущества</h3>
              {activeItem.content2}
            </div>
          </div>

          <div className="about-container">
            <div className="about-button--wrapper">
              <small>
                *Если остались вопросы, свяжитесь с нами — всё разъясним.
              </small>
              <Button className="about-button" onClick={handleBookingClick}>
                Бронировать
              </Button>
            </div>

            <div className="about-socials">
              <h4>Связаться с нами</h4>
              <div className="social-about--list">
                <a
                  href="https://www.instagram.com/prokat_karcher_stolin?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  <InstagramIcon size={20} />
                </a>
                <a
                  href="https://t.me/Inna_Evt"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Telegram"
                >
                  <TelegramIcon size={20} />
                </a>
                <a href="tel:+375292781620" aria-label="Позвонить">
                  <PhoneIcon size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </TechniqueAboutContainer>
  );
}
