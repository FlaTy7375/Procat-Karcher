import React, { useState } from "react";
import { StyledFooter, FooterWrapper } from "./style";
import Button from "../../ui/button/button";
import Logo from "../../../assets/images/logo.webp";
import {
  InstagramIcon,
  TelegramIcon,
  PhoneIcon,
  ArrowRightIcon,
} from "../../ui/icons/icons";
import { useModal } from "../../app/context-modal";
import { useAuth } from "../../app/AuthContext";
import AuthModal from "../../blocks/account/auth-modal";
import useWipeReveal from "../../../hooks/useWipeReveal";

const FOOTER_LINKS = [
  { href: "#main", label: "Главная" },
  { href: "#pick", label: "Что мыть" },
  { href: "#technique", label: "Техника в прокате" },
  { href: "#how", label: "Как арендовать" },
  { href: "#comments", label: "Отзывы" },
  { href: "#services", label: "Мойка K 5" },
];

export default function Footer() {
  const { setBookingClass, setOption } = useModal();
  const { isAuthenticated } = useAuth();
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const { ref: titleRef, isRevealed: isTitleRevealed } = useWipeReveal();

  const currentYear = new Date().getFullYear();

  const handleBookingClick = () => {
    if (isAuthenticated) {
      setOption(0);
      setBookingClass();
    } else {
      setIsAuthModalOpen(true);
    }
  };

  const closeAuthModal = () => {
    setIsAuthModalOpen(false);
  };

  return (
    <StyledFooter>
      <div className="footer-top-stripe" aria-hidden="true" />
      <AuthModal isOpen={isAuthModalOpen} onClose={closeAuthModal} />

      <FooterWrapper>
        <div className="footer-dispatch">
          <div className="footer-headline-wrap" ref={titleRef}>
            <span className="footer-kicker">ProKarcher · Столин</span>
            <h2
              className={`footer-big-title wipe-reveal ${
                isTitleRevealed ? "is-revealed" : ""
              }`}
            >
              Твой ход{" "}
              <span className="footer-title-accent">к&nbsp;чистоте</span>
            </h2>
          </div>

          <div className="footer-quick-pass">
            <div className="quick-pass-top">
              <span className="quick-pass-label">Прокат на сутки</span>
              <span className="quick-pass-price">50&nbsp;руб</span>
            </div>
            <p className="quick-pass-desc">
              Puzzi 8/1 C или SC 4 Deluxe — выбирай свободную дату и забирай в
              работу.
            </p>
            <div className="quick-pass-actions">
              <Button className="footer-book-btn" onClick={handleBookingClick}>
                <span>Бронировать</span>
                <ArrowRightIcon size={18} />
              </Button>
            </div>
          </div>
        </div>

        <div className="footer-grid">
          <div className="footer-brand-col">
            <div className="footer-logo">
              <img
                src={Logo}
                alt="Логотип ProKarcher"
                width="48"
                height="48"
                loading="lazy"
              />
              <span className="footer-brand-name">
                Pro<span>Karcher</span>
              </span>
            </div>

            <p className="footer-desc">
              Прокат моющей техники Karcher в Столине. Инструктаж при выдаче,
              подбор химии под задачу и профессиональная химчистка.
            </p>

            {/* TODO(owner): указать точный адрес пункта выдачи (в подтверждении брони указан г. Столин, ул. Дзержинского, д. 5) и график работы */}
            <div className="footer-location-card">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M12 21s-7-5.5-7-11.5a7 7 0 0 1 14 0C19 15.5 12 21 12 21z" />
                <circle cx="12" cy="9.5" r="2.5" />
              </svg>
              <div className="footer-location-meta">
                <strong>г. Столин и Столинский район</strong>
                <span>Выдача и график работы — уточняйте при записи</span>
              </div>
            </div>
          </div>

          <nav className="footer-nav-col" aria-label="Навигация в подвале">
            <span className="footer-col-label">Разделы</span>
            <ul className="footer-nav-list">
              {FOOTER_LINKS.map((link) => (
                <li key={link.href}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="footer-contacts-col">
            <span className="footer-col-label">Связаться с нами</span>
            <div className="footer-contact-buttons">
              <Button
                className="footer-contact-btn"
                variant="ghostLight"
                href="https://t.me/Inna_Evt"
                target="_blank"
                rel="noopener noreferrer"
              >
                <TelegramIcon size={20} />
                <span>Telegram</span>
              </Button>

              <Button
                className="footer-contact-btn"
                variant="ghostLight"
                href="https://www.instagram.com/prokat_karcher_stolin?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                target="_blank"
                rel="noopener noreferrer"
              >
                <InstagramIcon size={20} />
                <span>Instagram</span>
              </Button>

              <a
                className="footer-phone-tile"
                href="tel:+375292781620"
              >
                <span className="phone-tile-icon">
                  <PhoneIcon size={20} />
                </span>
                <span className="phone-tile-copy">
                  <small>Позвонить напрямую</small>
                  <strong>+375 (29) 278-16-20</strong>
                </span>
              </a>
            </div>
          </div>
        </div>

        <div className="footer-watermark" aria-hidden="true">
          PROKARCHER
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">© ProKarcher, Столин, {currentYear}</p>
          <span className="footer-footnote">
            Прокат Puzzi 8/1 C · SC 4 Deluxe · K 5 Full Control
          </span>
        </div>
      </FooterWrapper>
    </StyledFooter>
  );
}
