import React, { useState, useRef, useEffect } from "react";
import { StyledBooking } from "./style";
import BookingCalendar from "./booking-calendar";

export default function Booking() {
    const [select, setSelect] = useState(false);
    const dropdownContainerRef = useRef(null); 

    useEffect(() => {
        function handleClickOutside(event) {
            if (dropdownContainerRef.current && !dropdownContainerRef.current.contains(event.target)) {
                setSelect(false);
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [dropdownContainerRef]);

    const toggleDropdown = () => {
        setSelect(prevSelect => !prevSelect);
    };

    const handleOptionClick = (option) => {
        console.log("Выбрана опция:", option);
        setSelect(false);
    };

    return (
        <StyledBooking>
            <form className="booking-form">
                <h2 className="booking-title">Услуга: </h2>
                <div className="select-wrapper" ref={dropdownContainerRef}>
                    <div className="select-trigger" onClick={toggleDropdown}>
                        <span className="select-arrow">{select ? '▲' : '▼'}</span>
                    </div>
                    <ul className={`booking-select ${select ? 'options-show' : ''}`}>
                        <li className="booking-option" onClick={() => handleOptionClick('Аренда пылесоса Karcher Puzzi 8/1 C')}>Аренда пылесоса Karcher Puzzi 8/1 C</li>
                        <li className="booking-option" onClick={() => handleOptionClick('Аренда пароочистителя Karcher SC 3 EasyFix')}>Аренда пароочистителя Karcher SC 3 EasyFix</li>
                        <li className="booking-option" onClick={() => handleOptionClick('Заказать уборку автомобиля')}>Заказать уборку автомобиля</li>
                    </ul>
                </div>
                <BookingCalendar></BookingCalendar>
                <h2 className="info-title">Заполните форму:</h2>
                <div className="info-container">
                    <input className="name-booking" placeholder="Имя"/>
                    <input className="surname-booking" placeholder="Фамилия"/>
                    <input className="phone-booking" placeholder="Номер телефона"/>
                </div>
                <button className="booking-button">Забронировать</button>
            </form>
        </StyledBooking>
    )
}