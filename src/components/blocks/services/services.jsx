import React from "react";
import { StyledServices } from "./style";
import SectionName from "../../ui/section-name/section-name";
import Card from "../../ui/card/card";
import Button from "../../ui/button/button";
import { ReactComponent as InfoIcon } from "../../../assets/svg/info.svg";
import ServicesAbout from "./services-about";
import { useModal } from "../../app/context-modal";
import { useAuth } from "../../app/AuthContext";
import AuthModal from "../account/auth-modal";

export default function Services() {
  const { 
    modal, 
    hideModal, 
    setModalClass, 
    setBookingClass, 
    setOption,
    isAuthModalOpen,
    setIsAuthModalOpen
  } = useModal();
  const { isAuthenticated } = useAuth();

  const handleBookingClick = () => {
    if (isAuthenticated) {
      setOption(3); 
      setBookingClass();
    } else {
      setIsAuthModalOpen(true);
    }
  }

  return (
    <>
      <ServicesAbout display={modal} hideModal={hideModal} setBookingClass={setBookingClass} setOption={setOption}/>
      <AuthModal isOpen={isAuthModalOpen} onClose={hideModal}></AuthModal>
      <StyledServices id="services">
        <SectionName className="services-name">
          <span className="full-name">Дополнительные</span>
          <span className="short-name">Доп.</span> услуги
        </SectionName>
        <Card className="services-card">
          <div className="services-wrapper">
            <h2 className="services-title">Karcher K 5 Full Control</h2>
            <p>
              Мощная мойка высокого давления для профессиональной, быстрой и бережной очистки автомобилей.
              Относится к аппаратам среднего класса, рассчитанным на высокие нагрузки. 
              <br />
              <br />
              Полный контроль над каждым аспектом работы: от давления до нанесения химии делает её идеальным
              инструментом для удаления стойкой грязи, следов насекомых, соли и других загрязнений с кузова,
              колес и подвески авто без риска повреждения лакокрасочного покрытия.
            </p>
            <div className="button-wrapper">
              <Button className="services-button" onClick={() => {handleBookingClick()}}>Бронировать</Button>
              <Button className="services-info" onClick={setModalClass}>
                <InfoIcon />
              </Button>
            </div>
          </div>
        </Card>
      </StyledServices>
    </>
  );
}