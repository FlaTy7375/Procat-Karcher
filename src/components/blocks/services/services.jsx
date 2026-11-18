import React, { useState } from "react";
import { StyledServices, ServicesContainer, ServicesGrid } from "./style";
import SectionName from "../../ui/section-name/section-name";
import Button from "../../ui/button/button";
import { InfoIcon } from "../../ui/icons/icons";
import ServicesAbout from "./services-about";
import { useModal } from "../../app/context-modal";
import AuthModal from "../account/auth-modal";
import K5MachineImg from "../../../assets/images/karcher-k5-fc.webp";

const VARIO_MODES = [
  {
    id: "SOFT",
    label: "SOFT",
    pressure: "20–45 бар",
    title: "Мягкая широкая струя",
    hint: "Бережная мойка кузова и деликатных поверхностей без риска для краски.",
    fanPath: "M22,60 L215,10 L215,110 Z",
    lines: ["M22,60 L210,18", "M22,60 L215,40", "M22,60 L215,60", "M22,60 L215,80", "M22,60 L210,102"],
    fill: "rgba(34, 184, 230, 0.22)",
    stroke: "#22B8E6",
    strokeWidth: 2,
    dash: "6 6",
  },
  {
    id: "MEDIUM",
    label: "MEDIUM",
    pressure: "60–100 бар",
    title: "Средний рабочий поток",
    hint: "Быстро смывает дорожную пыль, брызги и следы насекомых.",
    fanPath: "M22,60 L215,24 L215,96 Z",
    lines: ["M22,60 L212,30", "M22,60 L215,45", "M22,60 L215,60", "M22,60 L215,75", "M22,60 L212,90"],
    fill: "rgba(34, 184, 230, 0.3)",
    stroke: "#22B8E6",
    strokeWidth: 2.5,
    dash: "12 6",
  },
  {
    id: "HARD",
    label: "HARD",
    pressure: "120–145 бар",
    title: "Концентрированная жёсткая струя",
    hint: "Сбивает стойкую грязь с колёс, арок, подвески, тротуара и забора.",
    fanPath: "M22,60 L220,42 L220,78 Z",
    lines: ["M22,60 L218,46", "M22,60 L220,60", "M22,60 L218,74"],
    fill: "rgba(254, 210, 25, 0.28)",
    stroke: "#FED219",
    strokeWidth: 3.2,
    dash: "18 5",
  },
  {
    id: "MIX",
    label: "MIX",
    pressure: "Plug ‘n’ Clean",
    title: "Нанесение моющей химии",
    hint: "Ровный поток с раствором из бачка Plug ‘n’ Clean без переливания.",
    fanPath: "M22,60 L210,16 L210,104 Z",
    lines: ["M22,60 L205,24", "M22,60 L208,60", "M22,60 L205,96"],
    fill: "rgba(254, 210, 25, 0.22)",
    stroke: "#FED219",
    strokeWidth: 2.2,
    dash: "4 8",
    bubbles: [
      { cx: 120, cy: 46, r: 4 },
      { cx: 156, cy: 70, r: 5 },
      { cx: 184, cy: 42, r: 3.5 },
      { cx: 140, cy: 58, r: 3 },
      { cx: 190, cy: 78, r: 4.5 },
    ],
  },
];

const K5_SPECS = [
  { value: "8\u00A0м", label: "шланг высокого давления" },
  { value: "12,2\u00A0кг", label: "вес" },
  { value: "500\u00A0л/ч", label: "производительность" },
  { value: "2100\u00A0Вт", label: "мощность (2,1\u00A0кВт)" },
  { value: "Plug ‘n’ Clean", label: "система подачи химии" },
  { value: "Dirt Blaster", label: "грязевая фреза в комплекте" },
];

export default function Services() {
  const {
    modal,
    hideModal,
    setModalClass,
    setBookingClass,
    setOption,
    isAuthModalOpen,
  } = useModal();

  const [activeModeId, setActiveModeId] = useState("HARD");
  const activeMode =
    VARIO_MODES.find((m) => m.id === activeModeId) || VARIO_MODES[2];

  const handleBookingClick = () => {
    setOption(3);
    setBookingClass();
  };

  return (
    <>
      <ServicesAbout
        display={modal}
        hideModal={hideModal}
        setBookingClass={setBookingClass}
        setOption={setOption}
      />
      <AuthModal isOpen={isAuthModalOpen} onClose={hideModal} />

      <StyledServices id="services">
        <ServicesContainer>
          <SectionName
            className="services-name"
            number="06"
            tag="Дополнительные услуги"
            tone="dark"
          >
            Мойка высокого давления
          </SectionName>

          <ServicesGrid>
            {/* Левая колонка: гигантское давление + переключатель режимов Vario Power */}
            <div className="services-left">
              <div className="pressure-hero">
                <div className="pressure-number">145&nbsp;бар</div>
                <span className="pressure-sub">
                  Регулируемое 20–145&nbsp;бар · Karcher K&nbsp;5 Full Control
                </span>
              </div>

              <div className="vario-box">
                <div className="vario-head">
                  <span className="vario-kicker">Режимы трубки Vario Power</span>
                  <span className="vario-pressure">{activeMode.pressure}</span>
                </div>

                <div
                  className="vario-tabs"
                  role="tablist"
                  aria-label="Режимы давления Vario Power"
                >
                  {VARIO_MODES.map((m) => {
                    const isActive = m.id === activeMode.id;
                    return (
                      <button
                        key={m.id}
                        type="button"
                        role="tab"
                        aria-selected={isActive}
                        className={`vario-tab ${isActive ? "is-active" : ""}`}
                        onClick={() => setActiveModeId(m.id)}
                      >
                        {m.label}
                      </button>
                    );
                  })}
                </div>

                <div className="vario-visualizer" aria-live="polite">
                  <svg
                    key={activeMode.id}
                    className="vario-svg"
                    viewBox="0 0 230 120"
                    aria-hidden="true"
                  >
                    {/* Сопло */}
                    <rect
                      x="4"
                      y="52"
                      width="18"
                      height="16"
                      rx="3"
                      fill="#FED219"
                    />
                    {/* Конус веера */}
                    <path
                      className="fan-cone"
                      d={activeMode.fanPath}
                      fill={activeMode.fill}
                    />
                    {activeMode.lines.map((d, i) => (
                      <path
                        key={i}
                        className="fan-stream"
                        d={d}
                        stroke={activeMode.stroke}
                        strokeWidth={activeMode.strokeWidth}
                        strokeDasharray={activeMode.dash}
                        strokeLinecap="round"
                      />
                    ))}
                    {activeMode.bubbles &&
                      activeMode.bubbles.map((b, i) => (
                        <circle
                          key={i}
                          className="fan-bubble"
                          cx={b.cx}
                          cy={b.cy}
                          r={b.r}
                          fill="#FFFFFF"
                          fillOpacity="0.82"
                        />
                      ))}
                  </svg>

                  <div className="vario-desc">
                    <strong>{activeMode.title}</strong>
                    <p>{activeMode.hint}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Правая колонка: фото K5 + ключевые характеристики + кнопки */}
            <div className="services-right">
              <div className="k5-stage">
                <div className="k5-clean-stripe" aria-hidden="true" />
                <img
                  src={K5MachineImg}
                  alt="Мойка высокого давления Karcher K 5 Full Control"
                  width="960"
                  height="700"
                  loading="lazy"
                  draggable={false}
                />
                {/* TODO(owner): указать цену или тариф для Karcher K 5 Full Control */}
                <span className="k5-price-tag">Цена: уточняйте</span>
              </div>

              <div className="k5-info">
                <h3>Karcher K&nbsp;5 Full Control</h3>
                <p>
                  Мощная мойка среднего класса для быстрой и бережной очистки
                  кузова, колёс и подвески авто от стойкой грязи, соли и следов
                  насекомых без риска повредить покрытие.
                </p>

                <dl className="k5-specs-grid">
                  {K5_SPECS.map((spec) => (
                    <div key={spec.label} className="k5-spec-item">
                      <dt>{spec.label}</dt>
                      <dd>{spec.value}</dd>
                    </div>
                  ))}
                </dl>

                <div className="services-actions">
                  <Button
                    className="services-book-btn"
                    onClick={handleBookingClick}
                  >
                    Бронировать
                  </Button>
                  <Button
                    className="services-more-btn"
                    variant="ghostLight"
                    onClick={setModalClass}
                  >
                    <InfoIcon size={18} />
                    <span>Подробнее</span>
                  </Button>
                </div>
              </div>
            </div>
          </ServicesGrid>
        </ServicesContainer>
      </StyledServices>
    </>
  );
}
