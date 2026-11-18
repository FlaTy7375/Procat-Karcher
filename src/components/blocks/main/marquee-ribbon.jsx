import React from "react";
import { StyledMarquee } from "./style";
import { SparkleIcon } from "../../ui/icons/icons";

const ITEMS = [
  "ДИВАН",
  "КОВЁР",
  "САЛОН АВТО",
  "ПЛИТКА",
  "ШВЫ",
  "ОКНА",
  "КУЗОВ",
  "КОЛЁСА",
];

function RibbonGroup({ ariaHidden = false }) {
  return (
    <div className="marquee-group" aria-hidden={ariaHidden}>
      {ITEMS.map((item) => (
        <span key={item} className="marquee-item">
          <span>{item}</span>
          <SparkleIcon size={14} className="marquee-spark" />
        </span>
      ))}
    </div>
  );
}

export default function MarqueeRibbon() {
  return (
    <StyledMarquee aria-label="Что можно отмыть">
      <div className="marquee-band">
        <div className="marquee-track">
          <RibbonGroup />
          <RibbonGroup ariaHidden />
          <RibbonGroup ariaHidden />
        </div>
      </div>
    </StyledMarquee>
  );
}
