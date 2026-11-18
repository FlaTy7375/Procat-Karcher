import React, { useState, useRef, useEffect, useCallback, useMemo } from "react";
import {
  StyledBooking,
  ResultModalOverlay,
  ResultModalCard,
} from "./style";
import BookingCalendar from "./booking-calendar";
import TankLoader from "../../ui/tank-loader/tank-loader";
import Button from "../../ui/button/button";
import { AlertIcon, CheckIcon, CloseIcon, InfoIcon } from "../../ui/icons/icons";
import { bookingInfo } from "../../../mocks/booking-info";

const API_URL = "https://karcher-back.onrender.com";

const ResultModal = ({ isOpen, onClose, title, message, type = "info", children }) => {
  const modalContentRef = useRef(null);

  useEffect(() => {
    if (!isOpen) return undefined;
    if (modalContentRef.current) {
      modalContentRef.current.scrollTop = 0;
      modalContentRef.current.focus();
    }

    const handleKey = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const renderIcon = () => {
    if (type === "success") return <CheckIcon size={20} />;
    if (type === "error" || type === "warning") return <AlertIcon size={20} />;
    return <InfoIcon size={20} />;
  };

  return (
    <ResultModalOverlay onClick={onClose} role="dialog" aria-modal="true" aria-label={title}>
      <ResultModalCard
        ref={modalContentRef}
        tabIndex={-1}
        $type={type}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="result-head">
          <div className="result-title-wrap">
            <span className="result-badge">{renderIcon()}</span>
            <h3>{title}</h3>
          </div>
          {type !== "loading" && (
            <button
              type="button"
              className="result-close"
              onClick={onClose}
              aria-label="Закрыть"
            >
              <CloseIcon size={20} />
            </button>
          )}
        </div>

        {type === "success" && (
          <div className="result-wipe-banner">
            <CheckIcon size={18} />
            <span>Чисто! Бронь принята</span>
          </div>
        )}

        <div className="result-body">
          {type === "loading" ? (
            <TankLoader label={message || "Заполняем бак…"} />
          ) : (
            <>
              {message && <p className="result-message">{message}</p>}
              {children}
            </>
          )}
        </div>

        {type !== "loading" && (
          <div className="result-footer">
            <Button onClick={onClose}>Закрыть</Button>
          </div>
        )}
      </ResultModalCard>
    </ResultModalOverlay>
  );
};

export default function Booking({ value, setValue }) {
  const [select, setSelect] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [loading, setLoading] = useState(false);
  const dropdownContainerRef = useRef(null);

  const [modal, setModal] = useState({
    isOpen: false,
    title: "",
    message: "",
    type: "info",
    children: null,
  });

  const serviceDailyRules = useMemo(
    () => [
      { id: 1, dailyLimit: 2 },
      { id: 2, dailyLimit: 1 },
      { id: 3, dailyLimit: 1 },
    ],
    []
  );

  const [bookedDates, setBookedDates] = useState([]);

  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    phone: "",
    address: "",
  });

  const [formErrors, setFormErrors] = useState({
    phone: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const showModal = useCallback((title, message, type = "info", children = null) => {
    setModal({
      isOpen: true,
      title,
      message,
      type,
      children,
    });
  }, []);

  const closeModal = useCallback(() => {
    setModal((prev) => ({ ...prev, isOpen: false }));
  }, []);

  const getLocalDate = useCallback((dateString) => {
    const date = new Date(dateString);
    return new Date(date.getFullYear(), date.getMonth(), date.getDate());
  }, []);

  const getDateKey = useCallback((date) => {
    return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(
      date.getDate()
    ).padStart(2, "0")}`;
  }, []);

  const getServiceName = useCallback((serviceId) => {
    return serviceId === 1
      ? "Аренда пылесоса Karcher Puzzi 8/1 C"
      : serviceId === 2
      ? "Аренда пароочистителя Karcher SC 4 Deluxe"
      : serviceId === 3
      ? "Аренда мойки высокого давления"
      : "Выберите услугу";
  }, []);

  const validatePhone = useCallback((phone) => {
    const cleanPhone = phone.replace(/[^\d+]/g, "");

    if (!cleanPhone) {
      return "Номер телефона обязателен";
    }

    if (cleanPhone.startsWith("+375") || cleanPhone.startsWith("375")) {
      const minLength = cleanPhone.startsWith("+") ? 13 : 12;
      if (cleanPhone.length !== minLength) {
        return "Неверный формат. Пример: +375291234567";
      }
      return "";
    }

    if (cleanPhone.startsWith("80") && cleanPhone.length === 11) {
      return "";
    }

    if (cleanPhone.startsWith("+7") || cleanPhone.startsWith("7")) {
      const minLength = cleanPhone.startsWith("+") ? 12 : 11;
      if (cleanPhone.length !== minLength) {
        return "Неверный формат. Пример: +79161234567";
      }
      return "";
    }

    return "Неверный формат номера. Используйте белорусский (+375/80) или российский (+7) формат";
  }, []);

  const handlePhoneChange = useCallback(
    (e) => {
      const { value: phoneVal } = e.target;

      setFormData((prev) => ({ ...prev, phone: phoneVal }));

      if (phoneVal) {
        const error = validatePhone(phoneVal);
        setFormErrors((prev) => ({ ...prev, phone: error }));
      } else {
        setFormErrors((prev) => ({ ...prev, phone: "" }));
      }
    },
    [validatePhone]
  );

  const checkServiceAvailability = useCallback(
    async (serviceId, date = selectedDate) => {
      if (!serviceId) return true;

      const serviceName = getServiceName(serviceId);
      const dateStr = getDateKey(date);

      try {
        const response = await fetch(
          `${API_URL}/check-availability?service_id=${encodeURIComponent(
            serviceName
          )}&date=${dateStr}`
        );
        if (response.ok) {
          const data = await response.json();
          return data.available;
        }
      } catch (error) {
        console.error("Ошибка проверки доступности:", error);
      }

      return true;
    },
    [selectedDate, getServiceName, getDateKey]
  );

  useEffect(() => {
    const loadBookedDates = async () => {
      if (!value) {
        setBookedDates([]);
        return;
      }

      try {
        setLoading(true);
        const serviceName = getServiceName(value);
        const response = await fetch(
          `${API_URL}/bookings?serviceName=${encodeURIComponent(serviceName)}`
        );

        if (response.ok) {
          const bookings = await response.json();

          const bookingsByDate = {};
          bookings.forEach((booking) => {
            const localDate = getLocalDate(booking.booking_date);
            const dateKey = getDateKey(localDate);
            bookingsByDate[dateKey] = (bookingsByDate[dateKey] || 0) + 1;
          });

          const currentServiceRule = serviceDailyRules.find((r) => r.id === value);
          const fullyBookedDates = [];

          Object.keys(bookingsByDate).forEach((dateKey) => {
            if (bookingsByDate[dateKey] >= currentServiceRule.dailyLimit) {
              const [year, month, day] = dateKey.split("-");
              fullyBookedDates.push(new Date(year, month - 1, day));
            }
          });

          setBookedDates(fullyBookedDates);
        }
      } catch (error) {
        console.error("Ошибка загрузки бронирований:", error);
      } finally {
        setLoading(false);
      }
    };

    loadBookedDates();
  }, [value, serviceDailyRules, getServiceName, getLocalDate, getDateKey]);

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        dropdownContainerRef.current &&
        !dropdownContainerRef.current.contains(event.target)
      ) {
        setSelect(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleDateSelect = useCallback((date) => {
    setSelectedDate(date);
  }, []);

  const toggleDropdown = useCallback(() => {
    setSelect((prevSelect) => !prevSelect);
  }, []);

  const handleBookingSubmit = async (e) => {
    e.preventDefault();

    if (value === 3) {
      showModal(
        "Услуга недоступна",
        "Временно невозможно забронировать мойку высокого давления Karcher K 5 Full Control.",
        "warning"
      );
      return;
    }

    if (!value) {
      showModal("Ошибка", "Пожалуйста, выберите услугу", "error");
      return;
    }

    const isAvailable = await checkServiceAvailability(value, selectedDate);
    if (!isAvailable) {
      showModal(
        "Нет свободных мест",
        `На выбранную дату (${selectedDate.toLocaleDateString(
          "ru-RU"
        )}) уже достигнут лимит бронирований. Выберите другую дату.`,
        "warning"
      );
      return;
    }

    if (!formData.name.trim()) {
      showModal("Ошибка", "Пожалуйста, введите имя", "error");
      return;
    }

    if (!formData.surname.trim()) {
      showModal("Ошибка", "Пожалуйста, введите фамилию", "error");
      return;
    }

    if (!formData.phone.trim()) {
      showModal("Ошибка", "Пожалуйста, введите номер телефона", "error");
      return;
    }

    const phoneError = validatePhone(formData.phone);
    if (phoneError) {
      showModal("Ошибка", phoneError, "error");
      return;
    }

    if (!formData.address.trim()) {
      showModal("Ошибка", "Пожалуйста, введите адрес", "error");
      return;
    }

    setIsSubmitting(true);

    try {
      showModal("Создание бронирования", "Заполняем бак…", "loading");

      const cleanPhone = formData.phone.replace(/[^\d+]/g, "");
      const clientResponse = await fetch(`${API_URL}/find-or-create-client`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          first_name: formData.name.trim(),
          last_name: formData.surname.trim(),
          phone_number: cleanPhone,
          address: formData.address.trim(),
        }),
      });

      if (!clientResponse.ok) {
        const errorData = await clientResponse.json();
        throw new Error(
          `Ошибка создания клиента: ${errorData.error || "Неизвестная ошибка"}`
        );
      }

      const clientData = await clientResponse.json();
      const clientId = clientData.client_id;

      const bookingDate = new Date(selectedDate);
      const bookingDateUTC = new Date(
        Date.UTC(
          bookingDate.getFullYear(),
          bookingDate.getMonth(),
          bookingDate.getDate(),
          12,
          0,
          0
        )
      );

      const bookingResponse = await fetch(`${API_URL}/bookings`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          client_id: clientId,
          service_name: getServiceName(value),
          booking_date: bookingDateUTC.toISOString(),
          address: formData.address.trim(),
        }),
      });

      if (!bookingResponse.ok) {
        const errorData = await bookingResponse.json();
        throw new Error(
          `Ошибка бронирования: ${errorData.error || "Неизвестная ошибка"}`
        );
      }

      const bookingData = await bookingResponse.json();

      const currentServiceRule = serviceDailyRules.find((r) => r.id === value);
      const response = await fetch(
        `${API_URL}/bookings?serviceName=${encodeURIComponent(
          getServiceName(value)
        )}`
      );
      if (response.ok) {
        const bookings = await response.json();
        const bookingsByDate = {};
        bookings.forEach((booking) => {
          const localDate = getLocalDate(booking.booking_date);
          const dateKey = getDateKey(localDate);
          bookingsByDate[dateKey] = (bookingsByDate[dateKey] || 0) + 1;
        });

        const fullyBookedDates = [];
        Object.keys(bookingsByDate).forEach((dateKey) => {
          if (bookingsByDate[dateKey] >= currentServiceRule.dailyLimit) {
            const [year, month, day] = dateKey.split("-");
            fullyBookedDates.push(new Date(year, month - 1, day));
          }
        });

        setBookedDates(fullyBookedDates);
      }

      const successContent = (
        <div className="success-ticket">
          <dl className="success-details">
            <div>
              <dt>Услуга</dt>
              <dd>{getServiceName(value)}</dd>
            </div>
            <div>
              <dt>Дата</dt>
              <dd>{selectedDate.toLocaleDateString("ru-RU")}</dd>
            </div>
            <div>
              <dt>ID бронирования</dt>
              <dd>#{bookingData.id}</dd>
            </div>
            <div>
              <dt>Клиент</dt>
              <dd>
                {formData.name} {formData.surname}
              </dd>
            </div>
            <div>
              <dt>Телефон</dt>
              <dd>{formData.phone}</dd>
            </div>
            <div>
              <dt>Адрес</dt>
              <dd>{formData.address}</dd>
            </div>
          </dl>

          <p className="success-note">
            Накануне вечером позвоните по номеру +375(29)278-16-20, чтобы
            подтвердить вашу бронь и договориться о времени передачи моющего
            пылесоса.
          </p>
          <p className="success-note">
            Пылесос забирать по адресу: г. Столин, ул. Дзержинского, д. 5. При
            себе иметь паспорт, подтверждающий вашу личность.
          </p>
        </div>
      );

      setModal({
        isOpen: true,
        title: "Чисто! Бронь принята",
        message: "Бронирование успешно создано!",
        type: "success",
        children: successContent,
      });

      setFormData({ name: "", surname: "", phone: "", address: "" });
      setValue(null);
    } catch (error) {
      console.error("Error creating booking:", error);
      showModal(
        "Ошибка",
        `Ошибка при создании бронирования: ${error.message}`,
        "error"
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value: fieldVal } = e.target;
    setFormData((prev) => ({ ...prev, [name]: fieldVal }));
  };

  const [isAvailableDate, setIsAvailableDate] = useState(true);

  useEffect(() => {
    let active = true;
    const checkDate = async () => {
      if (!value || value === 3) {
        if (active) setIsAvailableDate(false);
        return;
      }
      const available = await checkServiceAvailability(value, selectedDate);
      if (active) setIsAvailableDate(Boolean(available));
    };

    checkDate();
    return () => {
      active = false;
    };
  }, [value, selectedDate, isSubmitting, checkServiceAvailability]);

  const isSubmitDisabled =
    !value || isSubmitting || !!formErrors.phone || value === 3 || !isAvailableDate;

  return (
    <>
      <StyledBooking>
        <form
          className="booking-form"
          onSubmit={handleBookingSubmit}
          autoComplete="on"
        >
          <h2 className="booking-title">Услуга</h2>
          <div className="select-wrapper" ref={dropdownContainerRef}>
            <button
              type="button"
              className="select-trigger"
              onClick={toggleDropdown}
              aria-haspopup="listbox"
              aria-expanded={select}
            >
              <span>{getServiceName(value)}</span>
              <span className="select-arrow" aria-hidden="true">
                {select ? "▲" : "▼"}
              </span>
            </button>
            <ul className={`booking-select ${select ? "options-show" : ""}`} role="listbox">
              <li
                role="option"
                aria-selected={value === 1}
                className={`booking-option ${value === 1 ? "option-active" : ""}`}
                onClick={() => {
                  setValue(1);
                  setSelect(false);
                }}
              >
                Аренда пылесоса Karcher Puzzi 8/1 C
              </li>
              <li
                role="option"
                aria-selected={value === 2}
                className={`booking-option ${value === 2 ? "option-active" : ""}`}
                onClick={() => {
                  setValue(2);
                  setSelect(false);
                }}
              >
                Аренда пароочистителя Karcher SC 4 Deluxe
              </li>
              <li
                role="option"
                aria-selected={value === 3}
                className={`booking-option ${value === 3 ? "option-active" : ""}`}
                onClick={() => {
                  setValue(3);
                  setSelect(false);
                }}
              >
                Аренда мойки высокого давления
              </li>
            </ul>
          </div>

          {loading ? (
            <div className="select-continer">
              <TankLoader compact label="Заполняем бак и проверяем даты…" />
            </div>
          ) : value === 1 ? (
            <div className="select-continer" key={bookingInfo[0].id}>
              {bookingInfo[0].content}
            </div>
          ) : value === 2 ? (
            <div className="select-continer" key={bookingInfo[1].id}>
              {bookingInfo[1].content}
            </div>
          ) : value === 3 ? (
            <div className="select-continer" key={bookingInfo[2].id}>
              {bookingInfo[2].content}
            </div>
          ) : null}

          <BookingCalendar
            onDateSelect={handleDateSelect}
            bookedDates={bookedDates}
            selectedServiceId={value}
          />

          <h2 className="info-title">Ваши данные</h2>
          <div className="info-container">
            <div className="field-group">
              <label className="field-label" htmlFor="booking-name">
                Имя
              </label>
              <input
                id="booking-name"
                className="name-booking"
                placeholder="Например, Алексей"
                name="name"
                autoComplete="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                disabled={isSubmitting}
              />
            </div>

            <div className="field-group">
              <label className="field-label" htmlFor="booking-surname">
                Фамилия
              </label>
              <input
                id="booking-surname"
                className="surname-booking"
                placeholder="Например, Ковалёв"
                name="surname"
                autoComplete="family-name"
                value={formData.surname}
                onChange={handleInputChange}
                required
                disabled={isSubmitting}
              />
            </div>

            <div className="field-group">
              <label className="field-label" htmlFor="booking-phone">
                Телефон
              </label>
              <input
                id="booking-phone"
                type="tel"
                className={`phone-booking ${formErrors.phone ? "is-invalid" : ""}`}
                placeholder="+375 29 123-45-67"
                name="tel"
                autoComplete="tel"
                value={formData.phone}
                onChange={handlePhoneChange}
                required
                disabled={isSubmitting}
              />
              {formErrors.phone && (
                <div className="field-error" role="alert">
                  {formErrors.phone}
                </div>
              )}
            </div>

            <div className="field-group">
              <label className="field-label" htmlFor="booking-address">
                Адрес
              </label>
              <input
                id="booking-address"
                className="address-booking"
                placeholder="Улица, дом (Столин или район)"
                name="address"
                autoComplete="street-address"
                value={formData.address}
                onChange={handleInputChange}
                required
                disabled={isSubmitting}
              />
            </div>
          </div>

          <button
            className="booking-button"
            type="submit"
            disabled={isSubmitDisabled}
          >
            {isSubmitting ? "Создание…" : "Забронировать"}
          </button>
        </form>
      </StyledBooking>

      <ResultModal
        isOpen={modal.isOpen}
        onClose={closeModal}
        title={modal.title}
        message={modal.message}
        type={modal.type}
      >
        {modal.children}
      </ResultModal>
    </>
  );
}
