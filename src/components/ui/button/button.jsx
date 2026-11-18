import React, { forwardRef } from "react";
import { StyledButton } from "./style";

const Button = forwardRef(
  (
    {
      className = "",
      children,
      onClick,
      type = "button",
      disabled = false,
      variant = "primary",
      href,
      style,
      ...rest
    },
    ref
  ) => {
    const resolvedVariant =
      className.includes("technique-info") ||
      className.includes("services-info") ||
      className.includes("card-button")
        ? "outline"
        : variant;

    return (
      <StyledButton
        ref={ref}
        as={href ? "a" : "button"}
        href={href}
        type={href ? undefined : type}
        disabled={href ? undefined : disabled}
        style={style}
        onClick={onClick}
        className={className}
        $variant={resolvedVariant}
        {...rest}
      >
        <span className="btn-foam" aria-hidden="true" />
        <span className="btn-content">{children}</span>
      </StyledButton>
    );
  }
);

export default Button;
