import React, { useState, useEffect, useRef } from "react";
import { StyledDropdown } from "./style";

export default function Dropdown({ options, value, onChange }) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const selectedOptionLabel = options.find(
    (option) => option.value.toString() === value?.toString()
  )?.label;

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleOptionClick = (optionValue) => {
    const syntheticEvent = {
      target: {
        value: optionValue.toString(),
      },
    };
    onChange(syntheticEvent);
    setIsOpen(false);
  };

  const handleTriggerKeyDown = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setIsOpen((prev) => !prev);
    } else if (e.key === "Escape") {
      setIsOpen(false);
    }
  };

  return (
    <StyledDropdown>
      <div className="dropdown-wrapper" ref={dropdownRef}>
        <button
          type="button"
          className="dropdown-button"
          onClick={() => setIsOpen(!isOpen)}
          onKeyDown={handleTriggerKeyDown}
          aria-haspopup="listbox"
          aria-expanded={isOpen}
        >
          <span>{selectedOptionLabel || "Выберите..."}</span>
          <span className="dropdown-arrow" aria-hidden="true">
            {isOpen ? "▲" : "▼"}
          </span>
        </button>
        {isOpen && (
          <ul className="dropdown-list" role="listbox">
            {options.map((option) => (
              <li
                className={`dropdown-option ${
                  option.value.toString() === value?.toString()
                    ? "selected"
                    : ""
                } ${option.disabled ? "disabled" : ""}`}
                key={option.value}
                onClick={
                  option.disabled ? null : () => handleOptionClick(option.value)
                }
                role="option"
                aria-selected={option.value.toString() === value?.toString()}
                tabIndex={option.disabled ? -1 : 0}
                onKeyDown={(e) => {
                  if (!option.disabled && (e.key === "Enter" || e.key === " ")) {
                    e.preventDefault();
                    handleOptionClick(option.value);
                  }
                }}
              >
                {option.label}
              </li>
            ))}
          </ul>
        )}
      </div>
    </StyledDropdown>
  );
}
