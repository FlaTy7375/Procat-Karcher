import React, { useState } from "react";
import {
  StyledPick,
  PickContainer,
  SurfaceRail,
  TaskWorkbench,
} from "./style";
import SectionName from "../../ui/section-name/section-name";
import Button from "../../ui/button/button";
import { DropletIcon, InfoIcon } from "../../ui/icons/icons";
import { useModal } from "../../app/context-modal";
import { techniqueInfo } from "../../../mocks/technique-info";
import { beforeAfterItems } from "../../../mocks/before-after";
import BeforeAfter from "../comments/before-after";
import PuzziImg from "../../../assets/images/karcher-puzzi.webp";
import Sc4Img from "../../../assets/images/karcher-sc4-deluxe.webp";
import K5Img from "../../../assets/images/karcher-k5-fc.webp";
import SofaSurfaceImg from "../../../assets/images/surfaces/sofa.webp";
import CarpetSurfaceImg from "../../../assets/images/surfaces/carpet.webp";
import CarInteriorSurfaceImg from "../../../assets/images/surfaces/car-interior.webp";
import KitchenSurfaceImg from "../../../assets/images/surfaces/kitchen.webp";
import BathSurfaceImg from "../../../assets/images/surfaces/bath.webp";
import WindowsSurfaceImg from "../../../assets/images/surfaces/windows.webp";
import CarBodySurfaceImg from "../../../assets/images/surfaces/car-body.webp";

const SURFACE_PHOTOS = {
  sofa: SofaSurfaceImg,
  carpet: CarpetSurfaceImg,
  "car-interior": CarInteriorSurfaceImg,
  kitchen: KitchenSurfaceImg,
  bath: BathSurfaceImg,
  windows: WindowsSurfaceImg,
  "car-body": CarBodySurfaceImg,
};

function SurfaceIcon({ id }) {
  const props = {
    width: 34,
    height: 34,
    viewBox: "0 0 36 36",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.9",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true",
  };

  switch (id) {
    case "sofa":
      return (
        <svg {...props}>
          <path d="M7 17V11.5C7 9.6 8.6 8 10.5 8h15C27.4 8 29 9.6 29 11.5V17" />
          <path d="M5 17h3a2 2 0 0 1 2 2v3h16v-3a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2z" />
          <path d="M7 28v2M29 28v2" />
        </svg>
      );
    case "carpet":
      return (
        <svg {...props}>
          <rect x="6" y="7" width="24" height="22" rx="2.5" />
          <path d="M12 13l6 5 6-5M12 23l6-5 6 5" />
          <path d="M4 11h2M4 18h2M4 25h2M30 11h2M30 18h2M30 25h2" />
        </svg>
      );
    case "car-interior":
      return (
        <svg {...props}>
          <path d="M12 8.5c0-1.4 1.1-2.5 2.5-2.5h3c1.4 0 2.5 1.1 2.5 2.5V12l-1.5 10H12L10.5 12V8.5" />
          <path d="M10 22h16a2.5 2.5 0 0 1 2.5 2.5V28H9.5v-3.5A2.5 2.5 0 0 1 12 22z" />
          <path d="M12.5 30h13" />
        </svg>
      );
    case "kitchen":
      return (
        <svg {...props}>
          <rect x="5" y="6" width="26" height="24" rx="2.5" />
          <path d="M5 14h26M5 22h26M14 6v24M22 6v24" />
        </svg>
      );
    case "bath":
      return (
        <svg {...props}>
          <path d="M9 17V9.5A3.5 3.5 0 0 1 12.5 6h2.5A3 3 0 0 1 18 9v1" />
          <path d="M14 10h8" />
          <path d="M15.5 15v2M18 14v3M20.5 15v2" />
          <path d="M5 22h26v2a6 6 0 0 1-6 6H11a6 6 0 0 1-6-6v-2z" />
        </svg>
      );
    case "windows":
      return (
        <svg {...props}>
          <rect x="6" y="6" width="24" height="24" rx="2" />
          <path d="M18 6v24M6 18h24" />
          <path d="M10 10l4 4M22 10l4 4M10 22l4 4" />
        </svg>
      );
    default:
      return (
        <svg {...props}>
          <circle cx="18" cy="18" r="11" />
          <circle cx="18" cy="18" r="4" />
          <path d="M18 7v7M18 22v7M7 18h7M22 18h7M10.2 10.2l5 5M20.8 20.8l5 5M25.8 10.2l-5 5M15.2 20.8l-5 5" />
        </svg>
      );
  }
}

const TASKS = [
  {
    id: "sofa",
    label: "Диван",
    dirtHint: "Пятна и запахи",
    problemTitle: "Въевшиеся пятна, шерсть и запахи в обивке",
    optionId: 1,
    machineName: techniqueInfo[0]?.title || "Karcher Puzzi 8/1 C",
    machineTag: "Моющий пылесос",
    image: PuzziImg,
    imageW: 534,
    imageH: 463,
    price: "50\u00A0руб/сутки",
    specs: [
      { value: "до 18 м²/ч", label: "скорость чистки" },
      { value: "8 л", label: "бак чистой воды" },
      { value: "9,8 кг", label: "лёгкий корпус" },
    ],
    why: "Моющий раствор проникает вглубь обивки, а мощное обратное всасывание сразу вытягивает грязь — диван быстро сохнет.",
    points: [
      "Глубокое проникновение моющего раствора удаляет даже стойкие пятна.",
      "Высокая мощность обратного всасывания сокращает время высыхания поверхностей.",
      "Короткая насадка для мебели облегчает уборку в узких пространствах.",
    ],
  },
  {
    id: "carpet",
    label: "Ковёр",
    dirtHint: "Пыль в ворсе",
    problemTitle: "Свалявшийся ворс, пыль и следы обуви",
    optionId: 1,
    machineName: techniqueInfo[0]?.title || "Karcher Puzzi 8/1 C",
    machineTag: "Моющий пылесос",
    image: PuzziImg,
    imageW: 534,
    imageH: 463,
    price: "50\u00A0руб/сутки",
    specs: [
      { value: "до 18 м²/ч", label: "производительность" },
      { value: "1 бар", label: "давление подачи" },
      { value: "7 л", label: "бак грязной воды" },
    ],
    why: "Вымывает пыль, пятна и запахи из ворса, оставляя минимум влаги, чтобы ковёр высох в тот же день.",
    points: [
      "Производительность: до 18 м²/час, бак для чистой воды 8 л.",
      "Прозрачная крышка бака и насадка для контроля грязной воды.",
      "Высокая мощность обратного всасывания сокращает время высыхания.",
    ],
  },
  {
    id: "car-interior",
    label: "Салон авто",
    dirtHint: "Обивка сидений",
    problemTitle: "Разводы на сиденьях, подлокотниках и в багажнике",
    optionId: 1,
    machineName: techniqueInfo[0]?.title || "Karcher Puzzi 8/1 C",
    machineTag: "Моющий пылесос",
    image: PuzziImg,
    imageW: 534,
    imageH: 463,
    price: "50\u00A0руб/сутки",
    specs: [
      { value: "9,8 кг", label: "удобно носить" },
      { value: "8 л / 7 л", label: "баки для воды" },
      { value: "1200 Вт", label: "мощность" },
    ],
    why: "Компактный корпус и короткая мебельная насадка удобно дотягиваются до сидений, подлокотников и багажника.",
    points: [
      "Короткая насадка для мебели облегчает уборку в узких пространствах.",
      "Лёгкий вес 9,8 кг и удобная ручка для переноски.",
      "Идеально подходит для автомобильных сидений и текстильных поверхностей.",
    ],
  },
  {
    id: "kitchen",
    label: "Кухня и плитка",
    dirtHint: "Жир и нагар",
    problemTitle: "Липкий жир на фартуке, вытяжке и швах плитки",
    optionId: 2,
    machineName: techniqueInfo[1]?.title || "Karcher SC 4 Deluxe",
    machineTag: "Пароочиститель",
    image: Sc4Img,
    imageW: 960,
    imageH: 960,
    price: "50\u00A0руб/сутки",
    specs: [
      { value: "до 4 бар", label: "давление пара" },
      { value: "3 мин", label: "быстрый нагрев" },
      { value: "1,3 л", label: "съёмный бак" },
    ],
    why: "Пар под давлением 4 бар растворяет кухонный жир и налёт без химических средств — безопасно для поверхностей рядом с едой.",
    points: [
      "Давление пара до 4 бар справляется с жиром, пятнами и стойкими загрязнениями.",
      "Три ступени подачи пара для адаптации к разным поверхностям.",
      "Съёмный бак 1,3 л можно пополнять водой прямо в процессе уборки.",
    ],
  },
  {
    id: "bath",
    label: "Ванная и швы",
    dirtHint: "Налёт и швы",
    problemTitle: "Известковый налёт, мыло и потемневшие швы",
    optionId: 2,
    machineName: techniqueInfo[1]?.title || "Karcher SC 4 Deluxe",
    machineTag: "Пароочиститель",
    image: Sc4Img,
    imageW: 960,
    imageH: 960,
    price: "50\u00A0руб/сутки",
    specs: [
      { value: "до 4 бар", label: "горячий пар" },
      { value: "до 130 м²", label: "на одном баке" },
      { value: "2200 Вт", label: "мощность" },
    ],
    why: "Горячий пар гигиенично очищает сантехнику, плитку и межплиточные швы без едкой химии.",
    points: [
      "Высокотемпературный пар устраняет вирусы и бактерии без химических средств.",
      "Богатый набор насадок подходит для сантехники, плитки и швов.",
      "Время нагрева всего 3 минуты, площадь уборки до 130 м² на одном баке.",
    ],
  },
  {
    id: "windows",
    label: "Окна",
    dirtHint: "Стёкла и рамы",
    problemTitle: "Уличная пыль, разводы и грязь в стыках рам",
    optionId: 2,
    machineName: techniqueInfo[1]?.title || "Karcher SC 4 Deluxe",
    machineTag: "Пароочиститель",
    image: Sc4Img,
    imageW: 960,
    imageH: 960,
    price: "50\u00A0руб/сутки",
    specs: [
      { value: "3 ступени", label: "подача пара" },
      { value: "3 мин", label: "нагрев воды" },
      { value: "5,55 кг", label: "вес аппарата" },
    ],
    why: "Равномерный пар размягчает уличную пыль на стёклах и рамах — удобно отмывать без бытовой химии.",
    points: [
      "Насадки из комплекта подходят в том числе для мытья окон и рам.",
      "Три ступени подачи пара для деликатных и сложных участков.",
      "Чистка без химикатов безопасна для детей и аллергиков.",
    ],
  },
  {
    id: "car-body",
    label: "Кузов и колёса",
    dirtHint: "Дорожная грязь",
    problemTitle: "Налёт трассы, соль на дисках и засохшая грязь в арках",
    optionId: 3,
    machineName: "Karcher K 5 Full Control",
    machineTag: "Мойка высокого давления",
    image: K5Img,
    imageW: 960,
    imageH: 700,
    // TODO(owner): указать цену проката или условия для Karcher K 5 Full Control
    price: "Цена: уточняйте",
    specs: [
      { value: "20–145 бар", label: "давление струи" },
      { value: "500 л/ч", label: "подача воды" },
      { value: "8 м", label: "шланг в комплекте" },
    ],
    why: "Давление регулируется от бережного режима SOFT до 145 бар — смывает соль, насекомых и грязь с арок, не повреждая краску.",
    points: [
      "Регулировка давления 20–145 бар (режимы SOFT, MEDIUM, HARD, MIX).",
      "Производительность 500 л/ч и шланг высокого давления длиной 8 м.",
      "В комплекте насадка «грязевая фреза» (Dirt Blaster) и система Plug ‘n’ Clean.",
    ],
  },
];

export default function Pick({ onOpenTechniqueAbout }) {
  const [selectedId, setSelectedId] = useState(TASKS[0].id);
  const { setOption, setBookingClass, setModalClass } = useModal();

  const activeIndex = Math.max(
    0,
    TASKS.findIndex((t) => t.id === selectedId)
  );
  const activeTask = TASKS[activeIndex] || TASKS[0];
  const taskBeforeAfter = beforeAfterItems.filter(
    (item) => item.taskId === activeTask.id
  );

  const handleBook = () => {
    setOption(activeTask.optionId);
    setBookingClass();
  };

  const handleSpecs = () => {
    if (activeTask.optionId === 3) {
      setModalClass();
    } else if (onOpenTechniqueAbout) {
      onOpenTechniqueAbout(activeTask.optionId === 1);
    }
  };

  return (
    <StyledPick id="pick">
      <PickContainer>
        <SectionName className="pick-name" number="01" tag="Подбор под задачу">
          Что будем мыть?
        </SectionName>

        <SurfaceRail role="tablist" aria-label="Выберите задачу уборки">
          {TASKS.map((task, idx) => {
            const isSelected = task.id === activeTask.id;
            return (
              <button
                key={task.id}
                type="button"
                role="tab"
                aria-selected={isSelected}
                className={`surface-tile ${isSelected ? "is-active" : ""}`}
                onClick={() => setSelectedId(task.id)}
              >
                <span className="tile-wipe" aria-hidden="true" />
                <span className="tile-dust" aria-hidden="true" />
                <span className="tile-top">
                  <span className="tile-num">0{idx + 1}</span>
                  <span className="tile-icon">
                    <SurfaceIcon id={task.id} />
                  </span>
                </span>
                <span className="tile-bottom">
                  <strong className="tile-title">{task.label}</strong>
                  <span className="tile-hint">{task.dirtHint}</span>
                </span>
              </button>
            );
          })}
        </SurfaceRail>

        <TaskWorkbench aria-live="polite">
          <div key={activeTask.id} className="workbench-inner">
            {/* Левая половина — что отмываем ("грязная" зона) */}
            <div className="stage-before">
              {SURFACE_PHOTOS[activeTask.id] && (
                <img
                  src={SURFACE_PHOTOS[activeTask.id]}
                  alt=""
                  aria-hidden="true"
                  className="before-bg-photo"
                  loading="lazy"
                  draggable={false}
                />
              )}
              <div className="before-scrim" aria-hidden="true" />
              <div className="before-pattern" aria-hidden="true" />
              <div className="before-head">
                <span className="before-badge">
                  Задача 0{activeIndex + 1} · {activeTask.label}
                </span>
                <span className="before-icon-badge" aria-hidden="true">
                  <SurfaceIcon id={activeTask.id} />
                </span>
              </div>

              <div className="before-copy">
                <h3 className="before-title">{activeTask.problemTitle}</h3>
                <p className="before-why">{activeTask.why}</p>
              </div>

              <dl className="before-specs">
                {activeTask.specs.map((spec) => (
                  <div key={spec.label} className="spec-cell">
                    <dt>{spec.label}</dt>
                    <dd>{spec.value}</dd>
                  </div>
                ))}
              </dl>
            </div>

            {/* Правая половина — чистый результат и прокатная бирка */}
            <div className="stage-after">
              <div className="after-head">
                <div className="after-model-group">
                  <span className="after-role">{activeTask.machineTag}</span>
                  <h3 className="after-machine">{activeTask.machineName}</h3>
                </div>

                <div className="after-price-tag">
                  <span className="tag-rivet" aria-hidden="true" />
                  <span className="tag-price">{activeTask.price}</span>
                </div>
              </div>

              <div className="after-body">
                <div className="after-photo-stage">
                  <div className="after-stripe" aria-hidden="true" />
                  <img
                    src={activeTask.image}
                    alt={activeTask.machineName}
                    width={activeTask.imageW}
                    height={activeTask.imageH}
                    loading="lazy"
                    draggable={false}
                  />
                </div>

                <ol className="after-points">
                  {activeTask.points.map((point, i) => (
                    <li key={point}>
                      <span className="point-num">0{i + 1}</span>
                      <span className="point-text">{point}</span>
                    </li>
                  ))}
                </ol>
              </div>

              <div className="after-footer">
                <div className="after-chem-note">
                  <DropletIcon size={17} />
                  <span>Инструктаж при выдаче · химию подберём под задачу</span>
                </div>

                <div className="after-actions">
                  <Button className="pick-book-btn" onClick={handleBook}>
                    Бронировать
                  </Button>
                  <Button
                    className="pick-specs-btn"
                    variant="outline"
                    onClick={handleSpecs}
                  >
                    <InfoIcon size={18} />
                    <span>Характеристики</span>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </TaskWorkbench>

        {taskBeforeAfter.length > 0 && (
          <div className="pick-before-after">
            <BeforeAfter items={taskBeforeAfter} />
          </div>
        )}
      </PickContainer>
    </StyledPick>
  );
}
