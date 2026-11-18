import React from "react";
import { StyledSocials } from "./style";
import { InstagramIcon, TelegramIcon, PhoneIcon } from "../../ui/icons/icons";

export default function Socials({ className = "" }) {
  return (
    <StyledSocials className={className}>
      <a
        href="https://www.instagram.com/prokat_karcher_stolin?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram ProKarcher"
      >
        <InstagramIcon size={20} />
      </a>
      <a
        href="https://t.me/Inna_Evt"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Telegram ProKarcher"
      >
        <TelegramIcon size={20} />
      </a>
      <a
        href="tel:+375292781620"
        aria-label="Позвонить +375 (29) 278-16-20"
      >
        <PhoneIcon size={20} />
      </a>
    </StyledSocials>
  );
}
