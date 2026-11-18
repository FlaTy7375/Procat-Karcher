import React, { useEffect, useState, useRef } from "react";
import HeroRoomImg from "../../../assets/images/hero-puzzi-room.jpg";

const HOTSPOTS = [
  {
    id: "nozzle",
    num: "01",
    title: "Мебельная насадка",
    text: "Подаёт раствор под давлением 1\u00A0бар и сразу вытягивает влагу — диван лишь чуть влажный.",
    x: 33,
    y: 49,
    elbow: "33,49 41,24 53,24",
  },
  {
    id: "dome",
    num: "02",
    title: "Прозрачный купол 7\u00A0л",
    text: "Прямо во время работы видно, сколько тёмной воды и пыли выходит из обивки или ковра.",
    x: 71,
    y: 57,
    elbow: "71,57 71,38",
  },
  {
    id: "switches",
    num: "03",
    title: "Раздельные клавиши",
    text: "Турбина и подача воды включаются отдельно — нажимаются легко, можно даже ногой.",
    x: 84.5,
    y: 58,
    elbow: "84.5,58 84.5,38",
  },
];

export default function HeroShowcase() {
  const manualRef = useRef(false);
  const [activeIdx, setActiveIdx] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    if (typeof window === "undefined") return undefined;

    const handleScroll = () => {
      const y = window.scrollY || 0;
      const span = Math.max(180, Math.min(300, window.innerHeight * 0.35));
      const p = Math.max(0, Math.min(1, y / span));
      setScrollProgress(p);

      if (!manualRef.current) {
        if (p < 0.35) setActiveIdx(0);
        else if (p < 0.7) setActiveIdx(1);
        else setActiveIdx(2);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSelectPin = (idx) => {
    manualRef.current = true;
    setActiveIdx(idx);
  };

  const activeSpot = HOTSPOTS[activeIdx] || HOTSPOTS[0];

  return (
    <div className="hero-bleed-wrap">
      {/* Фирменный жёлтый диагональный срез, рассекающий первый экран без рамок карточек */}
      <div className="bleed-slash-accent" aria-hidden="true" />

      <div className="bleed-viewport">
        <div
          className="bleed-media-anchor"
          style={{
            transform: `translate(-50%, -50%) scale(${(1 + scrollProgress * 0.055).toFixed(4)})`,
          }}
        >
          <img
            src={HeroRoomImg}
            alt="Моющий пылесос Karcher Puzzi 8/1 в светлой гостиной с мебельной насадкой на диване"
            width="1280"
            height="955"
            className="bleed-room-img"
          />

          {/* Чертёжная SVG-выноска прямо поверх сцены от активного узла к стене */}
          <svg
            className="bleed-leader-svg"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polyline
              points={activeSpot.elbow}
              className="leader-line-shadow"
            />
            <polyline
              points={activeSpot.elbow}
              className="leader-line-main"
            />
          </svg>

          {/* Интерактивные точки разбора на реальных деталях аппарата */}
          {HOTSPOTS.map((spot, idx) => {
            const isActive = idx === activeIdx;
            return (
              <button
                key={spot.id}
                type="button"
                className={`spot-pin ${isActive ? "is-active" : ""}`}
                style={{ left: `${spot.x}%`, top: `${spot.y}%` }}
                onClick={() => handleSelectPin(idx)}
                aria-pressed={isActive}
                aria-label={`${spot.num}: ${spot.title}`}
              >
                <span className="spot-pulse" aria-hidden="true" />
                <span className="spot-core">{spot.num}</span>
              </button>
            );
          })}
        </div>

        {/* Типографическая выноска на стене — привязана к видимой области кадра без обрезания справа */}
        <div className="wall-callout wall-callout-desktop" aria-live="polite">
          <div className="callout-eyebrow">
            <span className="callout-num">{activeSpot.num}</span>
            <span className="callout-rule" aria-hidden="true" />
            <div className="callout-tabs" role="tablist" aria-label="Узлы Puzzi 8/1">
              {HOTSPOTS.map((spot, idx) => (
                <button
                  key={spot.id}
                  type="button"
                  role="tab"
                  aria-selected={idx === activeIdx}
                  className={`callout-tab ${idx === activeIdx ? "is-active" : ""}`}
                  onClick={() => handleSelectPin(idx)}
                >
                  {spot.num}
                </button>
              ))}
            </div>
          </div>
          <strong className="callout-title">{activeSpot.title}</strong>
          <p className="callout-desc">{activeSpot.text}</p>
        </div>
      </div>

      {/* Мобильный разбор выноски под широким кадром */}
      <div className="wall-callout wall-callout-mobile" aria-live="polite">
        <div className="callout-eyebrow">
          <span className="callout-num">{activeSpot.num}</span>
          <strong className="callout-title">{activeSpot.title}</strong>
          <div className="callout-tabs" role="tablist" aria-label="Узлы Puzzi 8/1">
            {HOTSPOTS.map((spot, idx) => (
              <button
                key={spot.id}
                type="button"
                role="tab"
                aria-selected={idx === activeIdx}
                className={`callout-tab ${idx === activeIdx ? "is-active" : ""}`}
                onClick={() => handleSelectPin(idx)}
              >
                {spot.num}
              </button>
            ))}
          </div>
        </div>
        <p className="callout-desc">{activeSpot.text}</p>
      </div>
    </div>
  );
}
