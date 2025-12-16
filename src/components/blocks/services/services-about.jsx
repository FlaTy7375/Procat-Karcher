import React, { forwardRef } from "react";
import Card from "../../ui/card/card";
import Button from "../../ui/button/button";
import { ServicesAboutContainer } from "./style";
import InstLogo from "../../../assets/svg/inst.svg"
import TgLogo from "../../../assets/svg/telegram.svg"
import CallLogo from "../../../assets/svg/call.svg"
import { ReactComponent as CloseButton } from "../../../assets/svg/close-button.svg"

const ServicesAbout = forwardRef(({ display, hideModal, setBookingClass, setOption}, ref) => {

    const handleBookingClick = () => {
      hideModal()
      setOption(3); 
      setBookingClass();
    }

  return (
    <ServicesAboutContainer className={display} ref={ref}>
      <Card className="services-about">
        <button className="button-close" onClick={hideModal}><CloseButton></CloseButton></button>
        <div className="about-block">
          <h2>Мойка высокого давления Karcher K 5 Full Control</h2>
          <p>
            Мощная мойка высокого давления для профессиональной,
            быстрой и бережной очистки автомобилей. Относится к аппаратам среднего класса,
            рассчитанным на высокие нагрузки. Полный контроль над каждым аспектом работы:
            от давления до нанесения химии делает её идеальным инструментом для удаления стойкой грязи,
            следов насекомых, соли и других загрязнений с кузова, колес и подвески авто без риска повреждения
            лакокрасочного покрытия.
          </p>
        </div>
        <div className="about-block">
          <h2>Технические характеристики:</h2>
          <ul>
            <li>Максимальное рабочее давление: 145 бар (20–145 бар регулируемое).</li>
            <li>Номинальная мощность двигателя: 2100 Вт (2.1 кВт).</li>
            <li>Длина шланга высокого давления: 8 м.</li>
            <li>Вес: 12.2 кг.</li>
            <li>Габариты (Д × Ш × В): 455 × 360 × 450 мм.</li>
          </ul>
        </div>
        <div className="about-block">
          <h2>Преимущества:</h2>
          <ul>
            <li>Полный контроль и безопасность: Пистолет со светодиодным дисплеем и 4-ступенчатая регулировка давления на струйной трубке Vario Power (SOFT, MEDIUM, HARD, MIX) позволяют подобрать идеальную, безопасную для краски автомобиля струю для любой поверхности и загрязнения.</li>
            <li>Мощная и бережная очистка: Высокая производительность 500 л/ч в сочетании с давлением до 145 бар обеспечивает быстрое удаление даже сложных загрязнений, а опция мягкой струи (SOFT) гарантирует бережную мойку.</li>
            <li>Удобство использования химии: Инновационная система Plug ‘n’ Clean обеспечивает быструю и чистую смену моющих средств без переливания, повышая эффективность мойки..</li>
            <li>Эффективная очистка стойких загрязнений: В комплект входит насадка "грязевая фреза" (Dirt Blaster), которая генерирует быстровращающуюся струю для быстрого удаления застарелой грязи с нечувствительных поверхностей вроде колёсных арок.</li>
          </ul>
        </div>
        <div className="about-container">
        <div className="about-button--wrapper">
        <small>*Если остались вопросы, свяжитесь с нами и мы все разъясним.</small>
        <Button className="about-button" onClick={() => {handleBookingClick()}}>Заказать</Button>
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
    </ServicesAboutContainer>
  );
});

export default ServicesAbout;