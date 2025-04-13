import { ReactComponent as Border } from "../../../assets/svg/section-border.svg"
import { StyledSection } from "./style"

export default function SectionName({children, className}) {
    return (
    <StyledSection className={className}>
    <Border className="left-border"/>
    <h1>{children}</h1>
    <Border className="right-border"/>
    </StyledSection>
    )
}