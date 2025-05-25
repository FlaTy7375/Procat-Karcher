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
  }, [dropdownRef]);

  const handleOptionClick = (optionValue) => {
    const syntheticEvent = {
      target: {
        value: optionValue.toString(),
      },
    };
    onChange(syntheticEvent);
    setIsOpen(false);
  };

  return (
    <StyledDropdown>
      <div className="dropdown-wrapper" ref={dropdownRef}>
        <div
          className="dropdown-button"
          onClick={() => setIsOpen(!isOpen)}
          role="button"
          aria-haspopup="listbox"
          aria-expanded={isOpen}
          tabIndex={0}
        >
          {selectedOptionLabel || "Выберите..."}
          <span className="dropdown-arrow">{isOpen ? "▲" : "▼"}</span>
        </div>
        {isOpen && (
          <ul className="dropdown-list">
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
