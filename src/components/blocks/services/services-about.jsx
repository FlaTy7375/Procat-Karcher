import React, { forwardRef, useEffect } from "react";
import Button from "../../ui/button/button";
import { ServicesAboutContainer } from "./style";
import {
  CloseIcon,
  InstagramIcon,
  PhoneIcon,
  TelegramIcon,
} from "../../ui/icons/icons";
import K5Img from "../../../assets/images/karcher-k5-fc.webp";

const ServicesAbout = forwardRef(
  ({ display, hideModal, setBookingClass, setOption }, ref) => {
    const isOpen = display === "modal-show";

    useEffect(() => {
      if (!isOpen) return undefined;
      const handleKeyDown = (event) => {
        if (event.key === "Escape") {
          hideModal();
        }
      };
      document.addEventListener("keydown", handleKeyDown);
      return () => document.removeEventListener("keydown", handleKeyDown);
    }, [isOpen, hideModal]);

    if (!isOpen) return null;

    const handleBookingClick = () => {
      hideModal();
      setOption(3);
      setBookingClass();
    };

    return (
      <ServicesAboutContainer
        className={display}
        ref={ref}
        onClick={hideModal}
        role="dialog"
        aria-modal="true"
        aria-label="Karcher K 5 Full Control — характеристики"
      >
        <div
          className="services-about"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="sheet-head">
            <span className="about-kicker">Мойка высокого давления · 145 бар</span>
            <button
              type="button"
              className="button-close"
              onClick={hideModal}
              aria-label="Закрыть окно"
            >
              <CloseIcon size={20} />
            </button>
          </div>

          <div className="sheet-body">
            <div className="about-top-grid">
              <div className="about-intro">
                <h2 className="about-title">
                  Мойка высокого давления Karcher K&nbsp;5 Full Control
                </h2>
                <p className="about-description">
                  Мощная мойка высокого давления для профессиональной, быстрой и
                  бережной очистки автомобилей. Относится к аппаратам среднего
                  класса, рассчитанным на высокие нагрузки. Полный контроль над
                  каждым аспектом работы: от давления до нанесения химии делает
                  её идеальным инструментом для удаления стойкой грязи, следов
                  насекомых, соли и других загрязнений с кузова, колёс и
                  подвески авто без риска повреждения лакокрасочного покрытия.
                </p>
              </div>

              <div className="image-card">
                <img
                  src={K5Img}
                  alt="Karcher K 5 Full Control"
                  width="960"
                  height="700"
                  loading="lazy"
                  draggable="false"
                />
              </div>
            </div>

            <div className="about-specs-grid">
              <div className="about-block">
                <h3>Технические характеристики</h3>
                <ul>
                  <li>
                    Максимальное рабочее давление: 145&nbsp;бар (20–145&nbsp;бар
                    регулируемое).
                  </li>
                  <li>Номинальная мощность двигателя: 2100&nbsp;Вт (2,1&nbsp;кВт).</li>
                  <li>Длина шланга высокого давления: 8&nbsp;м.</li>
                  <li>Вес: 12,2&nbsp;кг.</li>
                  <li>Габариты (Д × Ш × В): 455 × 360 × 450&nbsp;мм.</li>
                </ul>
              </div>

              <div className="about-block">
                <h3>Преимущества</h3>
                <ul>
                  <li>
                    <strong>Полный контроль и безопасность:</strong> пистолет со
                    светодиодным дисплеем и 4-ступенчатая регулировка давления на
                    струйной трубке Vario Power (SOFT, MEDIUM, HARD, MIX) позволяют
                    подобрать безопасную для краски автомобиля струю.
                  </li>
                  <li>
                    <strong>Мощная и бережная очистка:</strong> производительность
                    500&nbsp;л/ч в сочетании с давлением до 145&nbsp;бар быстро
                    удаляет сложные загрязнения, а режим SOFT гарантирует бережную
                    мойку.
                  </li>
                  <li>
                    <strong>Удобство использования химии:</strong> система Plug ‘n’
                    Clean обеспечивает быструю и чистую смену моющих средств без
                    переливания.
                  </li>
                  <li>
                    <strong>Стойкие загрязнения:</strong> в комплект входит
                    насадка «грязевая фреза» (Dirt Blaster) с быстровращающейся
                    струёй для колёсных арок и нечувствительных поверхностей.
                  </li>
                </ul>
              </div>
            </div>

            <div className="about-container">
              <div className="about-button--wrapper">
                <small>
                  *Если остались вопросы, свяжитесь с нами — всё подскажем.
                </small>
                <Button className="about-button" onClick={handleBookingClick}>
                  Бронировать
                </Button>
              </div>

              <div className="about-socials">
                <h4>Связаться с нами</h4>
                <div className="social-about--list">
                  <a
                    href="https://www.instagram.com/prokat_karcher_stolin?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                  >
                    <InstagramIcon size={20} />
                  </a>
                  <a
                    href="https://t.me/Inna_Evt"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Telegram"
                  >
                    <TelegramIcon size={20} />
                  </a>
                  <a href="tel:+375292781620" aria-label="Позвонить">
                    <PhoneIcon size={20} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ServicesAboutContainer>
    );
  }
);

export default ServicesAbout;
