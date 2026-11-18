import React, { useEffect, useState } from "react";
import { StyledTankLoader } from "./style";

export default function TankLoader({
  label = "Заполняем бак…",
  compact = false,
  className = "",
}) {
  const [isWaking, setIsWaking] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setIsWaking(true);
    }, 4000);

    return () => window.clearTimeout(timer);
  }, []);

  return (
    <StyledTankLoader
      className={className}
      $compact={compact}
      role="status"
      aria-live="polite"
    >
      <div className="tank-svg-wrap" aria-hidden="true">
        <svg width="64" height="72" viewBox="0 0 64 72" fill="none">
          <defs>
            <clipPath id="tankBodyClip">
              <rect x="11" y="16" width="42" height="48" rx="10" />
            </clipPath>
          </defs>

          {/* Крышка и горловина бака */}
          <rect
            x="22"
            y="6"
            width="20"
            height="10"
            rx="4"
            fill="#FED219"
            stroke="#1C1E22"
            strokeWidth="2"
          />

          {/* Внутренняя вода */}
          <g clipPath="url(#tankBodyClip)">
            <rect x="11" y="16" width="42" height="48" fill="#FBF9F3" />
            <g className="tank-water-rise">
              <path
                d="M0 10 Q16 4 32 10 T64 10 T96 10 L96 70 L0 70 Z"
                fill="#22B8E6"
                fillOpacity="0.82"
              />
              <circle cx="24" cy="24" r="2.2" fill="#FFFFFF" fillOpacity="0.7" />
              <circle cx="39" cy="30" r="1.6" fill="#FFFFFF" fillOpacity="0.7" />
              <circle cx="31" cy="18" r="1.4" fill="#FFFFFF" fillOpacity="0.7" />
            </g>
          </g>

          {/* Корпус и шкала уровня */}
          <rect
            x="11"
            y="16"
            width="42"
            height="48"
            rx="10"
            stroke="#1C1E22"
            strokeWidth="2.2"
          />
          <path
            d="M17 30h7M17 40h10M17 50h7"
            stroke="#1C1E22"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </div>

      <div className="tank-text">
        <strong className="tank-label">{label}</strong>
        {isWaking && (
          <span className="tank-wake-note">
            Сервер просыпается, ещё секунду…
          </span>
        )}
      </div>
    </StyledTankLoader>
  );
}
