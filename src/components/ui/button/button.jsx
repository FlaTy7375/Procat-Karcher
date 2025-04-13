import { StyledButton } from "./style";

export default function Button({className, children}) {
    return <StyledButton className={className}>{children}</StyledButton>;
}