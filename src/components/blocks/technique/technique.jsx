import React, { useState, useEffect } from "react"; // Удалили useState
import { StyledTechnique, TechniqueWrapper, CardsWrapper } from "./style"
import TechniqueAbout from "./technique-about"
import SectionName from "../../ui/section-name/section-name"
import Card from "../../ui/card/card"
import Button from "../../ui/button/button"
import { ReactComponent as InfoIcon } from "../../../assets/svg/info.svg"
import { useModal } from "../../app/context-modal";
import { useAuth } from "../../app/AuthContext";
import AuthModal from "../account/auth-modal";

export default function Technique() {
    
    const { isAuthenticated } = useAuth();
    // Удалили локальное состояние isAuthModalOpen
    // const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
    const [btn, setBtn] = useState(false);
    const [isTechniqueAboutVisible, setIsTechniqueAboutVisible] = useState(false);
    const { 
        setBookingClass, 
        setOption, 
        isAuthModalOpen, // Получаем из контекста
        setIsAuthModalOpen // Получаем из контекста
    } = useModal();
    
    // Централизованная логика управления скроллом
    useEffect(() => {
        if (isAuthModalOpen || isTechniqueAboutVisible) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
    }, [isAuthModalOpen, isTechniqueAboutVisible]); 

    const showTechniqueAbout = (btnType) => {
      setBtn(btnType);
      setIsTechniqueAboutVisible(true);
    };

    const hideTechniqueAbout = () => {
      setIsTechniqueAboutVisible(false);
    };

    const openAuthModal = () => {
      setIsAuthModalOpen(true);
    };

    const closeAuthModal = () => {
      setIsAuthModalOpen(false);
    };

    const handleBookingClick = () => {
      if (isAuthenticated) {
        setBookingClass();
      } else {
        setIsAuthModalOpen(true);
      }
    };

    return (
        <>
        <TechniqueAbout
            BtnFirst={btn}
            display={isTechniqueAboutVisible ? "modal-show" : ""}
            hideModal={hideTechniqueAbout}
            setBookingClass={setBookingClass}
            setOption={setOption}
            openAuthModal={openAuthModal}
        />
        <AuthModal isOpen={isAuthModalOpen} onClose={closeAuthModal} />
        <StyledTechnique id="technique">
            <TechniqueWrapper>
            <SectionName className="technique-name">Наша Техника</SectionName>
            <CardsWrapper>
                <Card className="technique-card">
                    <div className="card-wrapper">
                        <h2>Karcher Puzzi 8/1 C</h2>
                        <p>Моющий пылесос – мощный аппарат для профессиональной уборки. Идеально подходит для чистки ковров, мебели и салонов авто.</p>
                        <article>50 руб/сутки</article>
                        <div className="button-wrapper">
                            <Button className="technique-button" onClick={() => {setOption(1); handleBookingClick()}}>Бронировать</Button>
                            <Button className="technique-info" onClick={() => showTechniqueAbout(true)}><InfoIcon/></Button>
                        </div>
                    </div>
                </Card>
                <Card className="technique-card">
                <div className="card-wrapper">
                        <h2>Karcher SC 3 EasyFix</h2>
                        <p>Пароочиститель – аппарат для экологичной уборки, уничтожает бактерии горячим паром. Отлично подходит для полов и мебели.</p>
                        <article>30 руб/сутки</article>
                        <div className="button-wrapper">
                            <Button className="technique-button" onClick={() => {setOption(2); handleBookingClick()}}>Бронировать</Button>
                            <Button className="technique-info" onClick={() => showTechniqueAbout(false)}><InfoIcon/></Button>
                        </div>
                    </div>
                </Card>
            </CardsWrapper>
            </TechniqueWrapper>
        </StyledTechnique>
        </>
    )
}