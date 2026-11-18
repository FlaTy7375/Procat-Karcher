import React, { useEffect, useState } from "react";
import { StyledMobileBar } from "./style";
import Button from "../button/button";
import { PhoneIcon } from "../icons/icons";
import { useModal } from "../../app/context-modal";

export default function MobileBar() {
  const { setOption, setBookingClass } = useModal();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const heroEl = document.getElementById("main");
    if (!heroEl || typeof IntersectionObserver === "undefined") {
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          // Показываем нижнюю панель после прохождения hero
          const passedHero =
            !entry.isIntersecting && entry.boundingClientRect.top < 0;
          setVisible(passedHero);
        }
      },
      { threshold: 0.02 }
    );

    observer.observe(heroEl);
    return () => observer.disconnect();
  }, []);

  const handleBookClick = () => {
    setOption(0);
    setBookingClass();
  };

  return (
    <StyledMobileBar $visible={visible} aria-hidden={!visible}>
      <Button
        className="mobile-bar-book"
        onClick={handleBookClick}
        tabIndex={visible ? 0 : -1}
      >
        Бронировать
      </Button>
      <Button
        className="mobile-bar-call"
        variant="outline"
        href="tel:+375292781620"
        tabIndex={visible ? 0 : -1}
      >
        <PhoneIcon size={18} />
        <span>Позвонить</span>
      </Button>
    </StyledMobileBar>
  );
}
