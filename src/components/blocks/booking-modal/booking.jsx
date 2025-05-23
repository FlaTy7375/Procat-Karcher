import React, { useState, useEffect } from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
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

  return (
    <div>
      <h2>Календарь бронирования</h2>
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
          disabled={[
            // Можно отключить прошедшие даты
            { before: new Date() },
            // Можно отключить конкретные даты, если они забронированы и не должны быть выбраны
            ...bookedDates
          ]}
          modifiers={modifiers} // Применяем модификаторы
          modifiersStyles={modifiersStyles} // Применяем стили для модификаторов (встроенные стили)
          // Или вы можете добавить класс 'rdp-day_booked' и стилизовать его в вашем CSS
          // classNames={{
          //   day_booked: 'my-booked-day-class', // Название вашего CSS класса
          // }}
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