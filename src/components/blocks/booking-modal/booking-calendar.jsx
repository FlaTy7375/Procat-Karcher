import React, { useState, useEffect } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import Dropdown from "./dropdown";
import { ru } from "date-fns/locale";

const BookingCalendar = ({ onDateSelect, bookedDates, selectedServiceId, resetDate }) => {
  const [selectedDay, setSelectedDay] = useState();

  useEffect(() => {
    if (resetDate || !selectedServiceId) {
      setSelectedDay(undefined);
    }
  }, [selectedServiceId, resetDate]);

  useEffect(() => {
    if (selectedDay && onDateSelect) {
      onDateSelect(selectedDay);
    }
  }, [selectedDay, onDateSelect]);

  const modifiers = {
    booked: bookedDates || [],
  };

  const modifiersStyles = {
    booked: {
      color: "#fff",
      backgroundColor: "#ff6242",
      opacity: 1,
    },
  };

  const minYear = 2024;
  const maxYear = 2050;

  return (
    <div className="booking-calendar--wrapper">
      <h2>Выберите дату на которую хотите забронировать услугу:</h2>
      <DayPicker
        mode="single"
        captionLayout="dropdown"
        navLayout="around"
        selected={selectedDay}
        onSelect={setSelectedDay}
        locale={ru}
        showOutsideDays
        components={{
          Dropdown: Dropdown,
        }}
        disabled={[{ before: new Date() }, ...(bookedDates || [])]}
        modifiers={modifiers}
        modifiersStyles={modifiersStyles}
        fromYear={minYear}
        toYear={maxYear}
      />

      <div className="guide-container">
        <div className="guide-item">
          <span className="item-red" />
          <p>- забронированные даты</p>
        </div>
        <div className="guide-item">
          <span className="item-green" />
          <p>- выбранная дата</p>
        </div>
        <div className="guide-item">
          <span className="item-grey" />
          <p>- свободные даты</p>
        </div>
        <div className="guide-item">
          <span className="item-disabled" />
          <p>- истекшие даты</p>
        </div>
      </div>
      { selectedDay && (
      <p className="calendar-date">
        Дата бронирования: {selectedDay.toLocaleDateString('ru-RU')}
      </p>
      )}
    </div>
  );
};

export default BookingCalendar;