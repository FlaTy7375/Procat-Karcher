import React, { useCallback, useRef, useState } from "react";
import { StyledBeforeAfter } from "./before-after-style";

function BeforeAfterCard({ item }) {
  const [pos, setPos] = useState(50);
  const [dragging, setDragging] = useState(false);
  const stageRef = useRef(null);

  const updateFromClientX = useCallback((clientX) => {
    const stage = stageRef.current;
    if (!stage) return;
    const rect = stage.getBoundingClientRect();
    const pct = ((clientX - rect.left) / (rect.width || 1)) * 100;
    setPos(Math.max(0, Math.min(100, Math.round(pct))));
  }, []);

  const handlePointerDown = (e) => {
    setDragging(true);
    updateFromClientX(e.clientX);
    if (e.currentTarget.setPointerCapture) {
      e.currentTarget.setPointerCapture(e.pointerId);
    }
  };

  const handlePointerMove = (e) => {
    if (!dragging) return;
    updateFromClientX(e.clientX);
  };

  const handlePointerUp = () => {
    setDragging(false);
  };

  const handleKeyDown = (e) => {
    const step = e.shiftKey ? 10 : 4;
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      setPos((p) => Math.max(0, p - step));
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      setPos((p) => Math.min(100, p + step));
    } else if (e.key === "Home") {
      e.preventDefault();
      setPos(0);
    } else if (e.key === "End") {
      e.preventDefault();
      setPos(100);
    }
  };

  return (
    <StyledBeforeAfter>
      <div className="ba-header">
        <span className="ba-title">{item.title}</span>
        {item.machine && <span className="ba-machine">{item.machine}</span>}
      </div>

      <div
        ref={stageRef}
        className="ba-stage"
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
      >
        <img
          src={item.afterSrc}
          alt={item.afterAlt || `${item.title} после уборки`}
          className="ba-img"
          loading="lazy"
          width="640"
          height="400"
          draggable={false}
        />

        <div
          className="ba-before-wrap"
          style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
        >
          <img
            src={item.beforeSrc}
            alt={item.beforeAlt || `${item.title} до уборки`}
            className="ba-img"
            loading="lazy"
            width="640"
            height="400"
            draggable={false}
          />
        </div>

        <span className="ba-badge ba-badge--before">ДО</span>
        <span className="ba-badge ba-badge--after">ПОСЛЕ</span>

        <div
          className="ba-squeegee"
          style={{ left: `${pos}%` }}
        >
          <div
            className="ba-handle"
            role="slider"
            tabIndex={0}
            aria-label={`Сравнение до и после: ${item.title}`}
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={pos}
            onKeyDown={handleKeyDown}
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M8 7l-4 5 4 5" />
              <path d="M16 7l4 5-4 5" />
            </svg>
          </div>
        </div>
      </div>
    </StyledBeforeAfter>
  );
}

export default function BeforeAfter({ items = [] }) {
  if (!items || items.length === 0) {
    return null;
  }

  return (
    <>
      {items.map((item) => (
        <BeforeAfterCard key={item.id} item={item} />
      ))}
    </>
  );
}
