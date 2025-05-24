import styled from "styled-components";

export const StyledBookingModal = styled.div`

    //СТИЛИ ПАКЕТА BOOKING
    .rdp-root { 
        margin-top: 20px;
        --rdp-accent-color: green;
        --rdp-day-height: 84px;
        --rdp-day-width: 84px;
        --rdp-day_button-height: 84px;
        --rdp-day_button-width: 84px;
        --rdp-day_button-border-radius: 100%;
    }

    .rdp-root[data-nav-layout="around"] .rdp-button_previous {
        z-index: 3;
        left: 50px;
        top: 20px;
    }

    .rdp-root[data-nav-layout="around"] .rdp-button_next {
        right: 50px;
        top: 20px;
    }

    .rdp-button_previous svg {
        width: 36px;
        height: 36px;
        padding: 5px;
        border: 1px solid #fff;
        border-radius: 50%;
    }

    .rdp-button_next svg {
        width: 36px;
        height: 36px;
        padding: 5px;
        border: 1px solid #fff;
        border-radius: 50%;
    }
    
    .rdp-chevron {
        fill: #fff;
    }

    .rdp-month_caption {
        height: 80px;
        align-items: center;
        font-weight: 400;
    }

    .rdp-dropdowns {
        display: flex;
        justify-content: space-between;
        width: 230px;
        height: auto;
        gap: 0;
    }

    .rdp-dropdowns .rdp-dropdown_root {
        font-weight: 400;
        border-radius: 10px;
        border: 1px solid #fff;
    }

    .rdp-dropdowns .rdp-dropdown_root .rdp-caption_label {
        padding: 10px;
    }

    .rdp-months {
        padding: 20px;
        max-width: 100%;
        width: 100%;
        --rdp-cell-size: 40px; /* Размер ячейки дня */
        --rdp-background-color:rgb(195, 129, 129); /* Фон календаря */
        --rdp-color: #333; /* Цвет текста по умолчанию */
        --rdp-outline: 2px solid #555; /* Обводка при фокусе */
        --rdp-outline-offset: -2px; /* Смещение обводки */
        background-color:rgb(66, 66, 65);
        border-radius: 8px;
    }

    .rdp-day {
        padding: 0;
        height: 120px;
        background-color: rgb(95, 92, 92);
        border-radius: 0;
        font-size: 18px;
        cursor: pointer;
    }

    .rdp-day:hover {
        opacity: 0.6;
    }

    .rdp-disabled {
        color: rgba(255, 255, 255, 0.42);
        background-color: rgb(44, 44, 44);
    }

    .rdp-month_grid {
        border-collapse: unset;
    }

    .rdp-month {
        width: 100%;
    }

    .rdp-month table {
        width: 100%;
    }

    .rdp-day_button {
        height: 100%;
        width: 100%;
    }
    
    .rdp-today {
        color: #fff;
    }

    .rdp-today:not(.rdp-outside) {
        color: #fff;
    }

    .rdp-disabled.rdp-outside {
        opacity: 0.5;
    }

    .rdp-outside {
        opacity: 1;
    }

    .rdp-selected {
        background-color: rgb(64, 197, 75);
    }

    .rdp-selected .rdp-day_button {
        border: none;
    }

    // Мои стили
    display: none;

    &.modal-show {
        display: block;
        position: fixed;
        left: 50%;
        transform: translate(-50%, 0);
        z-index: 3;
        top: 0px;
        padding: 40px 0;
        width: 100%;
        height: 100%;
        overflow: auto;
        background-color: rgba(0, 0, 0, 0.4);
    }

    .booking-card {
        position: relative;
        height: 100%;
        overflow: auto;
        border-radius: 20px;
        padding: 60px 80px 60px 80px;
        width: calc(100% - 100px);
        max-width: 1180px;
        margin: 0 auto;
        background-color: rgb(44, 44, 44);
    }

    .guide-container {
        margin-top: 20px;
        display: flex;
        flex-wrap: wrap;
        gap: 30px;
        font-size: 18px;
    }

    .guide-item {
        display: flex;
        align-items: center;
        gap: 10px;
    }

    .item-red {
        width: 20px;
        height: 20px;
        background-color: #ff6242;
    }

    .item-grey {
        width: 20px;
        height: 20px;
        background-color: rgb(95, 92, 92);
    }

    .item-green {
        width: 20px;
        height: 20px;
        background-color: rgb(64, 197, 75);
    }

    .item-disabled {
        width: 20px;
        height: 20px;
        background-color: rgb(61, 60, 60);
    }

    .button-close {
        position: absolute;
        right: 40px;
        top: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 50px;
        height: 50px;
        background-color: transparent;
        border: 2px solid #fff;
        border-radius: 10px;
        stroke: #fff;
        cursor: pointer;
    }

    .button-close:hover {
        background-color: #fff;
        stroke: #000;
        opacity: 0.75;
    }
`

export const StyledBooking = styled.div`
    h1, h2 {
        font-size: 28px;
        font-weight: 600;
    }

    .booking-title {
        margin-bottom: 20px;
    }

    .select-wrapper {
        position: relative;
        font-size: 18px;
        width: 60%;
    }

    .select-trigger {
        cursor: pointer;
        margin-bottom: 100px;
        width: 100%;
        height: 60px;
        color: #fff;
        background-color: rgb(95, 92, 92);
        padding: 10px;
        border: none;
        border-radius: 10px;
        border: 1px solid #ccc;
    }

    .select-trigger:hover {
        border-color: rgb(63, 63, 63);
        box-shadow: 0 0 0 2px rgb(92, 92, 92);
    }

    .select-trigger:active {
        border-color: rgb(63, 63, 63);
        box-shadow: 0 0 0 2px rgb(92, 92, 92);
    }

    .select-arrow {
        position: absolute;
        right: 20px;
        top: 20px;
    }

    .booking-select {
        display: none;
        position: absolute;
        top: 62px;
        left: 0;
        height: 180px;
        width: 100%;
        border-radius: 10px;
        background-color: rgb(95, 92, 92);
        z-index: 10;
        border: 1px solid #ccc;
    }

    .booking-select.options-show {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
    }

    .booking-select .booking-option {
        display: flex;
        align-items: center;
        padding: 10px;
        height: 33.3%;
        width: 100%;
        border-radius: 10px;
        background-color: rgb(95, 92, 92);
    }

    .booking-option:hover {
        background-color: rgb(64, 64, 64);
    }
    
    .info-title {
        margin: 20px 0px;
        margin-top: 100px;
    }

    .info-container {
        display: flex;
        flex-direction: column;
        gap: 20px;
    }

    .info-container input {
        width: 60%;
        height: 60px;
        border: none;
        border-radius: 10px;
        border-radius: 10px;
        border: 1px solid #ccc;
        padding: 0 20px;
        font-size: 18px;
        background-color: rgb(95, 92, 92);
    }

    .info-container input:hover {
        border-color: rgb(63, 63, 63);
        box-shadow: 0 0 0 2px rgb(92, 92, 92);
    }

    .info-container input::placeholder { color: #fff; }
    .info-container input::-webkit-input-placeholder { color: #fff; }
    .info-container input::-moz-placeholder { color: #fff; }
    .info-container input:-moz-placeholder { color: #fff; }
    .info-container input:-ms-input-placeholder { color: #fff; }

    .booking-button {
        margin-top: 30px;
        width: 260px;
        height: 60px;
        border: none;
        border-radius: 10px;
        background-color: rgb(255, 255, 255);
        color: #000;
        font-size: 24px;
        cursor: pointer;
    }

    .booking-button:hover {
        background-color: rgb(184, 184, 184);
    }
`

export const StyledDropdown = styled.div`
    .dropdown-wrapper {
        position: relative;
        display: inline-block;
        margin: 0 5px;
        min-width: 120px;
    }

    .dropdown-button {
        background-color: rgb(95, 92, 92);
        border: 1px solid #ccc;
        border-radius: 4px;
        padding: 8px 12px;
        font-size: 18px;
        cursor: pointer;
        display: flex;
        justify-content: space-between;
        align-items: center;
        transition: border-color 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
    }

    .dropdown-button:hover {
        border-color: rgb(63, 63, 63);
        box-shadow: 0 0 0 2px rgb(92, 92, 92);
    }

    .dropdown-button[aria-expanded="true"] {
        border-color: rgb(63, 63, 63);
        box-shadow: 0 0 0 2px rgb(92, 92, 92);
    }

    .dropdown-arrow {
        margin-left: 10px;
        font-size: 0.8em;
        color: #fff;
    }

    .dropdown-list {
        position: absolute;
        top: 100%;
        left: 0;
        right: 0;
        background-color: rgb(95, 92, 92);
        border: 1px solid #ccc;
        border-radius: 4px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        list-style: none;
        padding: 0;
        margin: 5px 0 0 0;
        max-height: 200px;
        overflow-y: auto;
        z-index: 10;
    }

    .dropdown-option {
        padding: 10px 12px;
        cursor: pointer;
        transition: background-color 0.15s ease-in-out;
    }

    .dropdown-option:hover {
        background-color:rgb(74, 73, 73);
    }

    .dropdown-option.selected {
        background-color:rgb(55, 55, 54);
        color: white;
        font-weight: bold;
    }

    .dropdown-option.disabled {
        color:rgb(55, 53, 53);
        cursor: not-allowed;
        background-color: #f7f7f7;
    }
`