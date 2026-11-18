import React from "react";
import { StyledSection } from "./style";
import useWipeReveal from "../../../hooks/useWipeReveal";

const SECTION_META_BY_CLASS = {
  "pick-name": { index: "01", tag: "Подбор под задачу" },
  "technique-name": { index: "02", tag: "Прокатные бирки" },
  "how-name": { index: "03", tag: "Как арендовать" },
  "advantages-name": { index: "04", tag: "Сервис и помощь" },
  "comments-name": { index: "05", tag: "Слово клиентам" },
  "services-name": { index: "06", tag: "Высокое давление" },
};

export default function SectionName({
  children,
  className = "",
  number,
  tag,
  tone = "light",
}) {
  const { ref, isRevealed } = useWipeReveal();

  const matchedKey = Object.keys(SECTION_META_BY_CLASS).find((k) =>
    className.includes(k)
  );
  const resolvedIndex =
    number || (matchedKey ? SECTION_META_BY_CLASS[matchedKey].index : "01");
  const resolvedTag =
    tag || (matchedKey ? SECTION_META_BY_CLASS[matchedKey].tag : "ProKarcher");

  return (
    <StyledSection ref={ref} className={className} $tone={tone}>
      <div className="section-meta">
        <span className="section-index">{resolvedIndex}</span>
        <span className="section-slash" aria-hidden="true" />
        <span className="section-tag">{resolvedTag}</span>
      </div>
      <h2 className={`wipe-reveal ${isRevealed ? "is-revealed" : ""}`}>
        {children}
      </h2>
    </StyledSection>
  );
}
