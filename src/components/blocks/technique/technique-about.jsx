import React, { useEffect, useRef } from "react";
import { TechniqueAboutContainer } from "./style";
import Card from "../../ui/card/card";
import Button from "../../ui/button/button";
import InstLogo from "../../../assets/svg/inst.svg"
import TgLogo from "../../../assets/svg/telegram.svg"
import CallLogo from "../../../assets/svg/call.svg"
import { techniqueInfo } from "../../../mocks/technique-info";
import Technique1 from "../../../assets/images/karcher-puzzi.png"
import Technique2 from "../../../assets/images/karcher-easy-sc3.png"
import { ReactComponent as CloseButton } from "../../../assets/svg/close-button.svg"

export default function TechniqueAbout({ display, setDisplay, BtnFirst, setBookingClass }) {
    const technique1 = techniqueInfo[0];
    
    const modalRef = useRef(null);

    useEffect(() => {
        const handleEscape = (e) => {
        if (e.key === "Escape") {
            hideModal();
        }
        };
        
        window.addEventListener("keydown", handleEscape);
        
        return () => window.removeEventListener("keydown", handleEscape);
    });

    const hideModal = () => {
        setDisplay("");
        document.body.style.overflow = "auto";
    };

  return (
    <TechniqueAboutContainer className={display} ref={modalRef}>
      <Card className="technique-about">
        <button className="button-close" onClick={hideModal}><CloseButton></CloseButton></button>
        {BtnFirst ? (
        <>
        <div>
            <div className="about-block">
                <h2 className="about-title">{technique1.title}</h2>
                <p className="about-description">{technique1.description}</p>
            </div>
            <Card className="image-card"><img src={Technique1} alt="Моющий пылесоc Karcher Puzzi 8/1 C" draggable="false"/></Card>
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
            <Card className="image-card"><img src={Technique2} alt="Моющий пылесоc Karcher SC 3 EasyFix" draggable="false"/></Card>
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
        <Button className="about-button" onClick={() => {hideModal(); setBookingClass()}}>Бронировать</Button>
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
    </TechniqueAboutContainer>
  );
}