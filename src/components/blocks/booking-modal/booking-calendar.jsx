import React, { useState, useEffect } from "react";
import { DayPicker, getDefaultClassNames } from "react-day-picker";
import "react-day-picker/dist/style.css";
import Dropdown from "./dropdown";
import { ru } from "date-fns/locale";

const BookingCalendar = ({
  onDateSelect,
  bookedDates,
  selectedServiceId,
  resetDate,
}) => {
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

  const defaultClassNames = getDefaultClassNames();

  const minYear = 2024;
  const maxYear = 2050;

  return (
    <div className="booking-calendar--wrapper">
      <h2 className="calendar-heading">
        Выберите дату, на которую хотите забронировать технику:
      </h2>

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
        modifiersClassNames={{
          booked: "cal-booked",
        }}
        classNames={{
          root: `${defaultClassNames.root} cal-root`,
          months: `${defaultClassNames.months} cal-months`,
          month: `${defaultClassNames.month} cal-month`,
          month_caption: `${defaultClassNames.month_caption} cal-caption`,
          dropdowns: `${defaultClassNames.dropdowns} cal-dropdowns`,
          button_previous: `${defaultClassNames.button_previous} cal-nav-btn cal-prev`,
          button_next: `${defaultClassNames.button_next} cal-nav-btn cal-next`,
          month_grid: `${defaultClassNames.month_grid} cal-grid`,
          weekdays: `${defaultClassNames.weekdays} cal-weekdays`,
          weekday: `${defaultClassNames.weekday} cal-weekday`,
          day: `${defaultClassNames.day} cal-day`,
          day_button: `${defaultClassNames.day_button} cal-day-btn`,
          today: `${defaultClassNames.today} cal-today`,
          selected: `${defaultClassNames.selected} cal-selected`,
          disabled: `${defaultClassNames.disabled} cal-disabled`,
          outside: `${defaultClassNames.outside} cal-outside`,
        }}
        startMonth={new Date(minYear, 0)}
        endMonth={new Date(maxYear, 11)}
      />

      <div className="guide-container">
        <div className="guide-item">
          <span className="legend-swatch legend-booked" />
          <span>Занято</span>
        </div>
        <div className="guide-item">
          <span className="legend-swatch legend-selected" />
          <span>Выбрано</span>
        </div>
        <div className="guide-item">
          <span className="legend-swatch legend-free" />
          <span>Свободно</span>
        </div>
        <div className="guide-item">
          <span className="legend-swatch legend-today" />
          <span>Сегодня</span>
        </div>
        <div className="guide-item">
          <span className="legend-swatch legend-past" />
          <span>Прошедшие</span>
        </div>
      </div>

      {selectedDay && (
        <p className="calendar-date">
          Дата бронирования: {selectedDay.toLocaleDateString("ru-RU")}
        </p>
      )}
    </div>
  );
};

export default BookingCalendar;
