import React, { useRef } from "react";
import { StyledServices } from "./style";
import SectionName from "../../ui/section-name/section-name";
import Card from "../../ui/card/card";
import Button from "../../ui/button/button";
import { ReactComponent as InfoIcon } from "../../../assets/svg/info.svg";
import ServicesAbout from "./services-about";
import { useModal } from "../../app/context-modal";

export default function Services() {
  const btnModalRef = useRef(null);
  const { modal, setModal, setModalClass, setBookingClass } = useModal();

  return (
    <>
      <ServicesAbout ref={btnModalRef} display={modal} setDisplay={setModal} setBookingClass={setBookingClass}/>
      <StyledServices id="services">
        <SectionName className="services-name">
          <span className="full-name">Дополнительные</span>
          <span className="short-name">Доп.</span> услуги
        </SectionName>
        <Card className="services-card">
          <div className="services-wrapper">
            <h2 className="services-title">Уборка и чистка авто!</h2>
            <p>
              Верните своему авто идеальную чистоту с техникой Karcher! Мы
              предлагаем профессиональную химчистку салона и мойку кузова для
              автомобилей всех размеров – от компактных легковых машин до
              просторных бусов.
              <br />
              <br />
              Наши сотрудники используют мощные моющие пылесосы и пароочистители
              Karcher, чтобы удалить даже самые стойкие загрязнения, сохранив
              материалы в отличном состоянии. Уточните стоимость для вашего авто
              и наслаждайтесь чистотой без лишних хлопот!
            </p>
            <div className="button-wrapper">
              <Button className="services-button" onClick={setBookingClass}>Заказать</Button>
              <Button ref={btnModalRef} className="services-info" onClick={setModalClass}>
                <InfoIcon />
              </Button>
            </div>
          </div>
        </Card>
      </StyledServices>
    </>
  );
}