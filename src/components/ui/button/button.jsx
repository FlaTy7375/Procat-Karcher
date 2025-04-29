import { StyledButton } from "./style";

export default function Button({className, children, ref, onClick}) {
    return <StyledButton onClick={onClick} ref={ref} className={className}>{children}</StyledButton>;
}