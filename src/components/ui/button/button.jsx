import React, { forwardRef } from 'react';
import { StyledButton } from "./style";

const Button = forwardRef(({ className, children, onClick }, ref) => {
    return (
        <StyledButton onClick={onClick} ref={ref} className={className}>
            {children}
        </StyledButton>
    );
});

export default Button;