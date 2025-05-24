import React, { useState, useEffect } from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import Dropdown from './dropdown';
import { ru } from 'date-fns/locale';

const BookingCalendar = () => {
  const [selectedDay, setSelectedDay] = useState(); // Для хранения выбранного дня
  const [bookedDates, setBookedDates] = useState([]); // Xранит даты, которые заняты
  const [loading, setLoading] = useState(true); // Для индикации загрузки данных

  useEffect(() => {
    const fetchBookedDates = async () => {
      setLoading(true);
      await new Promise(resolve => setTimeout(resolve, 500));

      const mockBookedDates = [
        new Date(2025, 4, 25),
        new Date(2025, 4, 28),
      ];
      setBookedDates(mockBookedDates);
      setLoading(false);
    };

    fetchBookedDates();
  }, []);

  const modifiers = {
    booked: bookedDates,
  };

  const modifiersStyles = {
    booked: {
      color: '#fff',
      backgroundColor: '#ff6242',
      opacity: 1,
    },
  };

  const minYear = 2024;
  const maxYear = 2050;

  return (
    <div>
      <h2>Выберите дату на которую хотите забронировать услугу:</h2>
      {loading ? (<p>Загрузка доступности...</p>) 
      : (
        <DayPicker
          mode="single" // Режим выбора одного дня
          captionLayout="dropdown" // Выпадающий список месяцев и года
          navLayout="around" // Стрелки навигации по бокам
          selected={selectedDay} // Текущий выбранный день
          onSelect={setSelectedDay} // Обработчик выбора дня
          locale={ru} // Устанавливаем русский язык
          showOutsideDays // Показывать дни предыдущего/следующего месяца
          components={{
            Dropdown: Dropdown, // <--- ИСПОЛЬЗУЕМ ВАШ КАСТОМНЫЙ ДРОПДАУН
          }}
          disabled={[
            { before: new Date() },
            ...bookedDates
          ]}
          modifiers={modifiers} // Применяем модификаторы
          modifiersStyles={modifiersStyles} // Применяем стили для модификаторов (встроенные стили)
          fromYear={minYear}
          toYear={maxYear}
        />
      )}

      <div className='guide-container'>
        <div className='guide-item'>
          <span className='item-red'/>
          <p>- забронированные даты</p>
        </div>
        <div className='guide-item'>
          <span className='item-green'/>
          <p>- выбранная дата</p>
        </div>
        <div className='guide-item'>
          <span className='item-grey'/>
          <p>- свободные даты</p>
        </div>
        <div className='guide-item'>
          <span className='item-disabled'/>
          <p>- истекшие даты</p>
        </div>
      </div>
    </div>
  );
};

export default BookingCalendar;