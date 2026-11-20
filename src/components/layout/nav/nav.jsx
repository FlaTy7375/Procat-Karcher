import React, { useState, useEffect, useCallback } from "react";
import { createPortal } from "react-dom";
import { StyledNav, MobileMenuOverlay } from "./style";
import Socials from "./socials";
import MainHeaderNav, { NAV_ITEMS } from "./main-nav";
import Button from "../../ui/button/button";
import Logo from "../../../assets/images/logo.webp";
import { useAuth } from "../../app/AuthContext.jsx";
import { useModal } from "../../app/context-modal.jsx";
import {
  CloseIcon,
  LogoutIcon,
  MenuIcon,
  PhoneIcon,
} from "../../ui/icons/icons";

const MOBILE_ITEM_HINTS = {
  main: "Puzzi 8/1 C",
  pick: "Диван, авто, плитка",
  technique: "Цены 50\u00A0руб/сут",
  how: "Залог и выдача",
  comments: "Фото до / после",
  services: "Мойка K\u00A05 Full",
};

function detectCurrentSectionId() {
  if (typeof window === "undefined") return "main";
  const mid = window.innerHeight * 0.35;
  let best = "main";
  for (const item of NAV_ITEMS) {
    const el = document.getElementById(item.id);
    if (!el) continue;
    const rect = el.getBoundingClientRect();
    if (rect.top <= mid && rect.bottom > 80) {
      best = item.id;
    }
  }
  return best;
}

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileActiveId, setMobileActiveId] = useState("main");
  const { isAuthenticated, user, logout } = useAuth();
  const { setOption, setBookingClass } = useModal();

  const closeMenu = useCallback(() => {
    setMenuOpen(false);
  }, []);

  const toggleMenu = () => {
    setMenuOpen((prev) => {
      const next = !prev;
      if (next) {
        setMobileActiveId(detectCurrentSectionId());
      }
      return next;
    });
  };

  useEffect(() => {
    if (!menuOpen) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        closeMenu();
      }
    };

    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        closeMenu();
      }
    };

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleKeyDown);
    window.addEventListener("resize", handleResize);

    return () => {
      document.body.style.overflow = prevOverflow;
      document.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("resize", handleResize);
    };
  }, [menuOpen, closeMenu]);

  const handleBookClick = () => {
    closeMenu();
    setOption(0);
    setBookingClass();
  };

  const handleMobileLinkClick = (e, id) => {
    setMobileActiveId(id);
    const target = document.getElementById(id);
    if (target) {
      e.preventDefault();
      const reducedMotion =
        typeof window !== "undefined" &&
        window.matchMedia &&
        window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      document.body.style.overflow = "";
      closeMenu();
      window.requestAnimationFrame(() => {
        target.scrollIntoView({ behavior: reducedMotion ? "auto" : "smooth" });
      });
    } else {
      closeMenu();
    }
  };

  const userInitials = user?.first_name
    ? `${user.first_name.charAt(0)}${user.last_name ? user.last_name.charAt(0) : ""}`.toUpperCase()
    : "ВЫ";

  return (
    <>
      <StyledNav aria-label="Основная навигация">
        <div className="logo-wrapper">
          <a href="#main" className="logo-link" aria-label="ProKarcher — на главную">
            <span className="logo-coin" aria-hidden="true">
              <span className="logo-coin-inner">
                <span className="logo-coin-face logo-coin-front">
                  <img src={Logo} alt="" width="44" height="44" />
                </span>
                <span className="logo-coin-face logo-coin-back">50 р.</span>
              </span>
            </span>
            <span className="logo-brand">
              Pro<span>Karcher</span>
            </span>
          </a>
        </div>

        <MainHeaderNav />

        <div className="nav-actions">
          <Socials className="desktop-socials" />

          {isAuthenticated && (
            <div className="unlog-wrapper">
              <span className="unlog-avatar" title="Вы авторизованы">
                {userInitials}
              </span>
              <button
                type="button"
                className="unlog-button"
                onClick={logout}
                aria-label="Выйти из аккаунта"
              >
                <LogoutIcon size={18} />
              </button>
            </div>
          )}

          <Button className="header-book-btn" onClick={handleBookClick}>
            Бронировать
          </Button>

          <button
            type="button"
            className="menu-button"
            onClick={toggleMenu}
            aria-label={menuOpen ? "Закрыть меню" : "Открыть меню"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <CloseIcon size={22} /> : <MenuIcon size={22} />}
          </button>
        </div>
      </StyledNav>

      {menuOpen &&
        typeof document !== "undefined" &&
        createPortal(
          <MobileMenuOverlay role="dialog" aria-modal="true" aria-label="Мобильное меню">
            <div className="mobile-menu-top">
              <a
                href="#main"
                className="mobile-menu-brand"
                onClick={(e) => handleMobileLinkClick(e, "main")}
              >
                <img src={Logo} alt="" width="40" height="40" />
                <span>
                  Pro<strong>Karcher</strong>
                </span>
              </a>

              <button
                type="button"
                className="mobile-menu-close"
                onClick={closeMenu}
                aria-label="Закрыть меню"
              >
                <CloseIcon size={22} />
              </button>
            </div>

            <div className="mobile-menu-main">
              <nav className="mobile-menu-grid" aria-label="Навигация по разделам">
                {NAV_ITEMS.map((item) => {
                  const isActive = mobileActiveId === item.id;
                  return (
                    <a
                      key={item.href}
                      href={item.href}
                      className={`mobile-nav-tile ${isActive ? "is-active" : ""}`}
                      onClick={(e) => handleMobileLinkClick(e, item.id)}
                    >
                      <span className="mobile-tile-title">{item.label}</span>
                      <span className="mobile-tile-hint">
                        {MOBILE_ITEM_HINTS[item.id] || ""}
                      </span>
                    </a>
                  );
                })}
              </nav>

              <div className="mobile-menu-bottom">
                <Button className="mobile-cta-book" onClick={handleBookClick}>
                  Бронировать · 50&nbsp;руб/сутки
                </Button>

                <a
                  className="mobile-cta-call"
                  href="tel:+375292781620"
                  onClick={closeMenu}
                >
                  <PhoneIcon size={19} />
                  <span>+375 (29) 278-16-20</span>
                </a>

                <div className="mobile-menu-meta">
                  <div className="mobile-city-info">
                    <span className="city-dot" aria-hidden="true" />
                    <span>Столин · самовывоз и инструктаж</span>
                  </div>

                  <div className="mobile-meta-right">
                    <Socials className="mobile-socials" />
                    {isAuthenticated && (
                      <button
                        type="button"
                        className="mobile-logout-btn"
                        onClick={() => {
                          logout();
                          closeMenu();
                        }}
                      >
                        <LogoutIcon size={18} />
                        <span>Выйти</span>
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </MobileMenuOverlay>,
          document.body
        )}
    </>
  );
}
