import React, { useEffect, useState } from "react";
import { StyledTechnique, TechniqueWrapper, CardsWrapper, TagCard } from "./style";
import SectionName from "../../ui/section-name/section-name";
import Button from "../../ui/button/button";
import { InfoIcon } from "../../ui/icons/icons";
import { useModal } from "../../app/context-modal";
import { techniqueInfo } from "../../../mocks/technique-info";
import PuzziImg from "../../../assets/images/karcher-puzzi.webp";
import Sc4Img from "../../../assets/images/karcher-sc4-deluxe.webp";

const API_URL = "https://karcher-back.onrender.com";

const MACHINES = [
  {
    id: 1,
    optionId: 1,
    btnFirst: true,
    serviceName: "Аренда пылесоса Karcher Puzzi 8/1 C",
    tagHeader: "№ 01 · Моющий пылесос",
    title: techniqueInfo[0]?.title || "Karcher Puzzi 8/1 C",
    description:
      "Для влажной чистки диванов, ковров и салонов авто. Минимум остаточной влаги — всё быстро сохнет.",
    metrics: [
      { value: "1200\u00A0Вт", label: "мощность" },
      { value: "8\u00A0л", label: "бак воды" },
      { value: "9,8\u00A0кг", label: "вес" },
    ],
    price: "50\u00A0руб/сутки",
    image: PuzziImg,
    imageW: 534,
    imageH: 463,
  },
  {
    id: 2,
    optionId: 2,
    btnFirst: false,
    serviceName: "Аренда пароочистителя Karcher SC 4 Deluxe",
    tagHeader: "№ 02 · Пароочиститель",
    title: techniqueInfo[1]?.title || "Karcher SC 4 Deluxe",
    description:
      "Гигиеничная чистка полов, плитки, кухни, швов и окон паром без химии. Долив воды без пауз.",
    metrics: [
      { value: "2200\u00A0Вт", label: "мощность" },
      { value: "4\u00A0бар", label: "давление" },
      { value: "5,55\u00A0кг", label: "вес" },
    ],
    price: "50\u00A0руб/сутки",
    image: Sc4Img,
    imageW: 960,
    imageH: 960,
  },
];

function getTodayKey() {
  const now = new Date();
  const y = now.getFullYear();
  const m = String(now.getMonth() + 1).padStart(2, "0");
  const d = String(now.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}

export default function Technique({ onOpenTechniqueAbout }) {
  const { setBookingClass, setOption } = useModal();
  const [availability, setAvailability] = useState({});

  useEffect(() => {
    const controller = new AbortController();
    const timeoutId = window.setTimeout(() => controller.abort(), 6000);
    const today = getTodayKey();

    Promise.all(
      MACHINES.map(async (m) => {
        try {
          const url = `${API_URL}/check-availability?service_id=${encodeURIComponent(
            m.serviceName
          )}&date=${today}`;
          const res = await fetch(url, { signal: controller.signal });
          if (!res.ok) return [m.id, false];
          const data = await res.json();
          return [m.id, Boolean(data?.available)];
        } catch {
          return [m.id, false];
        }
      })
    )
      .then((entries) => {
        if (!controller.signal.aborted) {
          setAvailability(Object.fromEntries(entries));
        }
      })
      .catch(() => {});

    return () => {
      window.clearTimeout(timeoutId);
      controller.abort();
    };
  }, []);

  const handleBook = (optionId) => {
    setOption(optionId);
    setBookingClass();
  };

  return (
    <StyledTechnique id="technique">
      <TechniqueWrapper>
        <SectionName
          className="technique-name"
          number="02"
          tag="В наличии в Столине"
        >
          Техника в прокате
        </SectionName>

        <CardsWrapper>
          {MACHINES.map((machine) => (
            <TagCard key={machine.id}>
              <span className="tag-cord" aria-hidden="true" />
              <div className="tag-surface">
                <div className="tag-eyelet-row" aria-hidden="true">
                  <span className="tag-eyelet" />
                </div>

                <div className="tag-body">
                <div className="tag-top-row">
                  <span className="tag-mono-head">{machine.tagHeader}</span>
                  {availability[machine.id] === true && (
                    <span className="tag-free-badge">Свободно сегодня</span>
                  )}
                </div>

                <div className="tag-visual">
                  <div className="tag-clean-circle" aria-hidden="true" />
                  <img
                    src={machine.image}
                    alt={machine.title}
                    width={machine.imageW}
                    height={machine.imageH}
                    loading="lazy"
                    draggable={false}
                  />
                  <span className="tag-price-sticker">{machine.price}</span>
                </div>

                <div className="tag-info">
                  <h3>{machine.title}</h3>
                  <p>{machine.description}</p>
                </div>

                <dl className="tag-metrics">
                  {machine.metrics.map((metric) => (
                    <div key={metric.label} className="tag-metric-item">
                      <dt>{metric.label}</dt>
                      <dd>{metric.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>

              <div className="tag-perforation" aria-hidden="true">
                <span className="perf-notch perf-notch--left" />
                <span className="perf-line" />
                <span className="perf-notch perf-notch--right" />
              </div>

              <div className="tag-footer">
                <Button
                  className="tag-book-btn"
                  onClick={() => handleBook(machine.optionId)}
                >
                  Бронировать
                </Button>
                <Button
                  className="tag-specs-btn"
                  variant="outline"
                  onClick={() =>
                    onOpenTechniqueAbout && onOpenTechniqueAbout(machine.btnFirst)
                  }
                >
                  <InfoIcon size={18} />
                  <span>Характеристики</span>
                </Button>
              </div>
              </div>
            </TagCard>
          ))}
        </CardsWrapper>
      </TechniqueWrapper>
    </StyledTechnique>
  );
}
