import React, { useState, useRef, useEffect } from "react";
import { StyledBooking } from "./style";
import BookingCalendar from "./booking-calendar";
import { bookingInfo } from "../../../mocks/booking-info";

export default function Booking({value, setValue}) {
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

    return (
        <StyledBooking>
            <form className="booking-form">
                <h2 className="booking-title">Услуга: </h2>
                <div className="select-wrapper" ref={dropdownContainerRef}>
                    <div className="select-trigger" onClick={toggleDropdown}>
                        { 
                            value === 1 ? "Аренда пылесоса Karcher Puzzi 8/1 C" :
                            value === 2 ? "Аренда пароочистителя Karcher SC 3 EasyFix" :
                            value === 3 ? "Заказать уборку автомобиля" :
                            "Выберите услугу"
                        }
                        <span className="select-arrow">{select ? '▲' : '▼'}</span>
                    </div>
                    <ul className={`booking-select ${select ? 'options-show' : ''}`}>
                        <li className={`booking-option ${value === 1 ? 'option-active' : ''}`} onClick={() => {setValue(1); setSelect(false)}}>Аренда пылесоса Karcher Puzzi 8/1 C</li>
                        <li className={`booking-option ${value === 2 ? 'option-active' : ''}`} onClick={() => {setValue(2); setSelect(false)}}>Аренда пароочистителя Karcher SC 3 EasyFix</li>
                        <li className={`booking-option ${value === 3 ? 'option-active' : ''}`} onClick={() => {setValue(3); setSelect(false)}}>Заказать уборку автомобиля</li>
                    </ul>
                </div>
                {
                    value === 1 ? <div className="select-continer" key={bookingInfo[0].id}>{bookingInfo[0].content}</div> :
                    value === 2 ? <div className="select-continer" key={bookingInfo[1].id}>{bookingInfo[1].content}</div> :
                    value === 3 ? <div className="select-continer" key={bookingInfo[2].id}>{bookingInfo[2].content}</div> :
                    ""
                }
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