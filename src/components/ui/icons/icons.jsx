import React from "react";

const baseSvgProps = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": "true",
};

export function InstagramIcon({ size = 20, ...props }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...baseSvgProps} {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function TelegramIcon({ size = 20, ...props }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...baseSvgProps} {...props}>
      <path d="M21 4L3 11.2l6.2 2.4L18 7.5l-5.6 7.4L17.4 19 21 4z" />
      <path d="M9.2 13.6L10 19l2.4-2.5" />
    </svg>
  );
}

export function PhoneIcon({ size = 20, ...props }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...baseSvgProps} {...props}>
      <path d="M6.5 3.5h3.2l1.6 4.1-2 1.8a14.5 14.5 0 005.3 5.3l1.8-2 4.1 1.6v3.2a2 2 0 01-2.1 2C9.8 19.1 4.9 14.2 4.5 5.6a2 2 0 012-2.1z" />
    </svg>
  );
}

export function MenuIcon({ size = 22, ...props }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...baseSvgProps} {...props}>
      <path d="M4 7h16" />
      <path d="M4 12h16" />
      <path d="M4 17h12" />
    </svg>
  );
}

export function CloseIcon({ size = 22, ...props }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...baseSvgProps} {...props}>
      <path d="M6 6l12 12" />
      <path d="M18 6L6 18" />
    </svg>
  );
}

export function InfoIcon({ size = 20, ...props }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...baseSvgProps} {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 11v5" />
      <circle cx="12" cy="8" r="0.8" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function LogoutIcon({ size = 20, ...props }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...baseSvgProps} {...props}>
      <path d="M10 4H6a2 2 0 00-2 2v12a2 2 0 002 2h4" />
      <path d="M15 8l4 4-4 4" />
      <path d="M9 12h10" />
    </svg>
  );
}

export function SparkleIcon({ size = 16, ...props }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      stroke="none"
      aria-hidden="true"
      {...props}
    >
      <path d="M12 2c.6 5.1 4.9 9.4 10 10-5.1.6-9.4 4.9-10 10-.6-5.1-4.9-9.4-10-10 5.1-.6 9.4-4.9 10-10z" />
    </svg>
  );
}

export function SprayGunIcon({ size = 20, ...props }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...baseSvgProps} {...props}>
      <path d="M3 9h10l2 3H8l-2 7H3.5L5 12H3V9z" />
      <path d="M13 10.5h4" />
      <path d="M18 8l3-2" />
      <path d="M18 11h4" />
      <path d="M18 14l3 2" />
    </svg>
  );
}

export function CheckIcon({ size = 18, ...props }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...baseSvgProps} {...props}>
      <path d="M5 13l4 4L19 7" />
    </svg>
  );
}

export function AlertIcon({ size = 18, ...props }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...baseSvgProps} {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 8v5" />
      <circle cx="12" cy="16.5" r="0.8" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function ArrowDownIcon({ size = 18, ...props }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...baseSvgProps} {...props}>
      <path d="M12 5v14" />
      <path d="M6 13l6 6 6-6" />
    </svg>
  );
}

export function ArrowRightIcon({ size = 18, ...props }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...baseSvgProps} {...props}>
      <path d="M5 12h14" />
      <path d="M13 6l6 6-6 6" />
    </svg>
  );
}

export function DropletIcon({ size = 18, ...props }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...baseSvgProps} {...props}>
      <path d="M12 3.5c3.8 4.7 6 8 6 11a6 6 0 11-12 0c0-3 2.2-6.3 6-11z" />
    </svg>
  );
}
