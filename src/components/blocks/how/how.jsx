import React, { useEffect, useRef, useState } from "react";
import {
  StyledHow,
  HowContainer,
  HowTimeline,
  HoseTrack,
  StepsList,
  HowCtaBox,
} from "./style";
import SectionName from "../../ui/section-name/section-name";
import Button from "../../ui/button/button";
import { ArrowRightIcon } from "../../ui/icons/icons";
import { useModal } from "../../app/context-modal";

const STEPS = [
  {
    num: "01",
    title: "Выбираешь технику и дату",
    description:
      "Отмечаешь аппарат под задачу и свободный день в календаре прямо на сайте — бронь сразу фиксируется.",
  },
  {
    num: "02",
    title: "Получаешь технику — покажем, как работать, подберём химию",
    description:
      "При выдаче всё включим, объясним на пальцах за пару минут и подберём средство именно под твоё пятно.",
    // TODO(owner): указать детали — самовывоз или доставка, условия залога
    note: "Детали выдачи и условий аренды уточняются при подтверждении.",
  },
  {
    num: "03",
    title: "Моешь",
    description:
      "Спокойно отмываешь диван, ковёр, салон или плитку у себя дома в удобном темпе — мощности хватает с запасом.",
  },
  {
    num: "04",
    title: "Возвращаешь",
    description:
      "Привозишь чистый аппарат обратно после завершения уборки.",
    // TODO(owner): указать точное время возврата (например, до какого часа следующего дня) и формат самовывоза/доставки
    note: "Время возврата — по договорённости при выдаче.",
  },
];

export default function How() {
  const { setOption, setBookingClass } = useModal();
  const sectionRef = useRef(null);
  const timelineRef = useRef(null);
  const clipRectRef = useRef(null);
  const [sprayActive, setSprayActive] = useState(() => {
    if (typeof window === "undefined") return true;
    const reduced =
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const narrow = window.innerWidth < 1024;
    return Boolean(reduced || narrow);
  });
  const [activeStep, setActiveStep] = useState(-1);

  useEffect(() => {
    const sectionEl = sectionRef.current;
    const timelineEl = timelineRef.current;
    const clipRectEl = clipRectRef.current;
    if (!sectionEl || !timelineEl || !clipRectEl || typeof window === "undefined") {
      return undefined;
    }

    const reduced =
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isDesktop = window.innerWidth >= 1024;

    if (reduced || !isDesktop) {
      clipRectEl.setAttribute("height", "410");
      setSprayActive(true);
      setActiveStep(STEPS.length - 1);
      return undefined;
    }

    let isVisible = false;
    let rafId = null;

    const updateProgress = () => {
      rafId = null;
      const tRect = timelineEl.getBoundingClientRect();
      const vh = window.innerHeight || 800;
      // Линия взгляда чуть ниже середины экрана — заливка шланга идёт вровень со взглядом
      const guideY = vh * 0.58;
      const trackSpan = Math.max(1, tRect.height - 40);
      let raw = (guideY - tRect.top) / trackSpan;

      const atPageBottom =
        window.scrollY + vh >= document.documentElement.scrollHeight - 40;
      if (atPageBottom && tRect.top < vh) {
        raw = 1;
      }

      const progress = Math.max(0, Math.min(1, raw));
      clipRectEl.setAttribute("height", (progress * 410).toFixed(1));

      const thresholds = [0.03, 0.3, 0.58, 0.84];
      let reached = -1;
      for (let i = 0; i < thresholds.length; i += 1) {
        if (progress >= thresholds[i]) reached = i;
      }
      setActiveStep(reached);
      setSprayActive(progress >= 0.85);
    };

    const scheduleUpdate = () => {
      if (!isVisible || rafId !== null) return;
      rafId = window.requestAnimationFrame(updateProgress);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        isVisible = Boolean(entries[0]?.isIntersecting);
        if (isVisible) {
          updateProgress();
          window.addEventListener("scroll", scheduleUpdate, { passive: true });
        } else {
          window.removeEventListener("scroll", scheduleUpdate);
          updateProgress();
        }
      },
      { rootMargin: "160px 0px 160px 0px", threshold: 0 }
    );

    observer.observe(sectionEl);
    updateProgress();

    const handleResize = () => {
      if (window.innerWidth < 1024) {
        clipRectEl.setAttribute("height", "410");
        setSprayActive(true);
        setActiveStep(STEPS.length - 1);
      } else {
        updateProgress();
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", handleResize);
      if (rafId !== null) window.cancelAnimationFrame(rafId);
    };
  }, []);

  const handleBookClick = () => {
    setOption(0);
    setBookingClass();
  };

  return (
    <StyledHow id="how" ref={sectionRef}>
      <HowContainer>
        <SectionName className="how-name" number="03" tag="Как арендовать">
          Четыре простых шага
        </SectionName>

        <HowTimeline ref={timelineRef}>
          <HoseTrack aria-hidden="true">
            <svg
              className="hose-svg"
              viewBox="0 0 84 400"
              preserveAspectRatio="none"
            >
              <defs>
                <clipPath id="hose-progress-clip">
                  <rect ref={clipRectRef} x="-30" y="0" width="144" height="0" />
                </clipPath>
              </defs>
              <path
                className="hose-bg-path"
                d="M42,6 C22,95 62,155 42,220 C22,285 62,338 42,398"
                vectorEffect="non-scaling-stroke"
              />
              <path
                className="hose-active-path"
                clipPath="url(#hose-progress-clip)"
                d="M42,6 C22,95 62,155 42,220 C22,285 62,338 42,398"
                vectorEffect="non-scaling-stroke"
              />
            </svg>

            <div className="hose-coupling-end">
              <span className="coupling-ring" />
              <svg
                className="hose-gun-svg"
                width="68"
                height="42"
                viewBox="0 0 68 42"
                fill="none"
              >
                <path
                  d="M6 14h20l3 5H14l-3 13H6l3-13H6v-5z"
                  fill="#1C1E22"
                />
                <rect
                  x="25"
                  y="15.5"
                  width="20"
                  height="4.5"
                  rx="2.2"
                  fill="#FED219"
                  stroke="#1C1E22"
                  strokeWidth="1.5"
                />
                <path
                  d="M47 17.5h15M47 13l13-4M47 22l13 4"
                  stroke="#22B8E6"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </HoseTrack>

          <StepsList>
            {STEPS.map((step, idx) => (
              <li
                key={step.num}
                className={`how-step ${idx <= activeStep ? "is-reached" : ""}`}
              >
                <span className="step-badge">{step.num}</span>
                <div className="step-card">
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                  {step.note && <span className="step-note">{step.note}</span>}
                </div>
              </li>
            ))}
          </StepsList>
        </HowTimeline>

        <HowCtaBox className={sprayActive ? "is-sprayed" : ""}>
          <div className="cta-clean-stripe" aria-hidden="true" />
          <div className="cta-inner">
            <div className="cta-text">
              <span className="cta-mono">Готово к старту</span>
              <h3>Выбери технику и день — остальное покажем при выдаче</h3>
            </div>
            <Button className="how-book-btn" onClick={handleBookClick}>
              <span>Забронировать</span>
              <ArrowRightIcon size={18} />
            </Button>
          </div>
        </HowCtaBox>
      </HowContainer>
    </StyledHow>
  );
}
