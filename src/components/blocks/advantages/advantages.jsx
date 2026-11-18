import React from "react";
import { StyledAdvantages } from "./style";
import SectionName from "../../ui/section-name/section-name";
import AdvantagesSlider from "./advantages-slider";

export default function Advantages() {
  return (
    <StyledAdvantages id="advantages">
      <div className="advantages-header-wrap">
        <SectionName
          className="advantages-name"
          number="04"
          tag="Без лишних хлопот"
        >
          Справится каждый
        </SectionName>
      </div>
      <AdvantagesSlider />
    </StyledAdvantages>
  );
}
