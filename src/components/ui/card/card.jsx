import React, { forwardRef } from "react";
import { StyledCard } from "./style";

const Card = forwardRef(
  ({ children, className, tilt: _tilt, onClick, style, ...rest }, ref) => {
    return (
      <StyledCard
        ref={ref}
        className={className}
        onClick={onClick}
        style={style}
        {...rest}
      >
        {children}
      </StyledCard>
    );
  }
);

export default Card;
