import React from "react";
import {
  StyledMain,
  HeroContainer,
  HeroLeft,
  HeroRight,
  HeroTitle,
} from "./style";
import Button from "../../ui/button/button";
import { ArrowDownIcon } from "../../ui/icons/icons";
import { useModal } from "../../app/context-modal";
import AuthModal from "../account/auth-modal";
import HeroShowcase from "./hero-showcase";
import MarqueeRibbon from "./marquee-ribbon";

const HERO_FACTS = [
  { main: "50\u00A0руб", sub: "за сутки проката" },
  { main: "Инструктаж", sub: "покажем при выдаче" },
  { main: "Химия с собой", sub: "подберём под пятно" },
];

export default function Main() {
  const {
    setBookingClass,
    setOption,
    isAuthModalOpen,
    setIsAuthModalOpen,
  } = useModal();

  const handleBookingClick = () => {
    setOption(0);
    setBookingClass();
  };

  const handlePickScroll = (e) => {
    const target =
      document.getElementById("pick") || document.getElementById("technique");
    if (target) {
      e.preventDefault();
      const reduced =
        typeof window !== "undefined" &&
        window.matchMedia &&
        window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      target.scrollIntoView({ behavior: reduced ? "auto" : "smooth" });
    }
  };

  return (
    <>
      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
      />

      <StyledMain id="main">
        <div className="hero-bg-layer" aria-hidden="true">
          <div className="hero-bg-beam" />
        </div>

        <HeroContainer>
          <HeroLeft>
            <div className="hero-kicker">
              <span className="kicker-mark" aria-hidden="true" />
              <span className="hero-tag">Прокат техники Karcher · Столин</span>
            </div>

            <HeroTitle>
              <span className="title-dirty">Грязь&nbsp;—</span>
              <br />
              <span className="title-accent">не&nbsp;приговор.</span>
            </HeroTitle>

            <p className="hero-subtitle">
              Возьми Karcher напрокат на сутки&nbsp;— 50&nbsp;руб. Покажем, как
              пользоваться, и подберём химию. Покупать мойку ради одного
              дивана не нужно.
            </p>

            <div className="hero-actions">
              <Button className="hero-book-btn" onClick={handleBookingClick}>
                Забронировать
              </Button>

              <Button
                className="hero-pick-btn"
                variant="outline"
                href="#pick"
                onClick={handlePickScroll}
              >
                <span>Что будем мыть?</span>
                <ArrowDownIcon size={18} />
              </Button>
            </div>

            <dl className="hero-facts-strip" aria-label="Условия проката">
              {HERO_FACTS.map((fact) => (
                <div key={fact.main} className="hero-fact">
                  <dt>{fact.sub}</dt>
                  <dd>{fact.main}</dd>
                </div>
              ))}
            </dl>
          </HeroLeft>

          <HeroRight>
            <HeroShowcase />
          </HeroRight>
        </HeroContainer>
      </StyledMain>

      <MarqueeRibbon />
    </>
  );
}
