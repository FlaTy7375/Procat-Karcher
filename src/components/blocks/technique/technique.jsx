import { StyledTechnique } from "./style"
import { TechniqueWrapper } from "./style"
import SectionName from "../../ui/section-name/section-name"

export default function Technique() {
    return (
        <StyledTechnique>
            <TechniqueWrapper>
            <SectionName className="technique-name">Наша Техника</SectionName>
            </TechniqueWrapper>
        </StyledTechnique>
    )
}