import { StyledCard } from "./style";

export default function Card({children, className}) {
    return (
        <StyledCard className={className}>{children}</StyledCard>
    )
}