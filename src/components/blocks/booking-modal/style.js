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
        /* box-shadow: 0 4px 12px rgba(255, 255, 255, 0.4); */
    }

    .rdp-day {
        background-color: rgb(95, 92, 92);
        border-radius: 0;
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
    
    .rdp-weekday, .rdp-day {
        font-size: 18px;
        padding: 20px;
    }

    .rdp-day_button {
        margin: 0 auto;
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
`