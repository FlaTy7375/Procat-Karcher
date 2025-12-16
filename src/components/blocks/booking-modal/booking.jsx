import React, { useState, useRef, useEffect, useLayoutEffect, useCallback, useMemo } from "react";
import { StyledBooking } from "./style";
import BookingCalendar from "./booking-calendar";
import { bookingInfo } from "../../../mocks/booking-info";

const API_URL = 'https://karcher-back.onrender.com';

const Modal = ({ isOpen, onClose, title, message, type = "info", children }) => {
  const [hoverClose, setHoverClose] = useState(false);
  const [hoverButton, setHoverButton] = useState(false);
  const modalContentRef = useRef(null); 

  useLayoutEffect(() => { 
      if (isOpen && modalContentRef.current) {
          modalContentRef.current.scrollTop = 0;
          modalContentRef.current.focus(); 
      }
      
      if (isOpen) {
          const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;
          document.body.style.paddingRight = scrollBarWidth > 0 ? `${scrollBarWidth}px` : '';
          document.body.classList.add('modal-open');
      } else {
          document.body.classList.remove('modal-open');
          setTimeout(() => {
              document.body.style.paddingRight = '';
          }, 300);
      }

      return () => {
          document.body.classList.remove('modal-open');
          document.body.style.paddingRight = '';
      };
  }, [isOpen]);

  if (!isOpen) return null;

  const getTypeStyles = () => {
    switch (type) {
      case "success":
        return {
          borderColor: "#4CAF50",
          icon: "✅",
          titleColor: "#2E7D32"
        };
      case "error":
        return {
          borderColor: "#f44336",
          icon: "❌",
          titleColor: "#c62828"
        };
      case "warning":
        return {
          borderColor: "#ff9800",
          icon: "⚠️",
          titleColor: "#ef6c00"
        };
      case "info":
      default:
        return {
          borderColor: "#2196F3",
          icon: "ℹ️",
          titleColor: "#1565c0"
        };
    }
  };

  const styles = getTypeStyles();

  return (
    <div style={{
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      zIndex: 1000,
      width: "100%", 
      height: "100%",
    }} onClick={onClose}>
      <style>{`
        .modal-open {
          overflow: hidden !important;
        }
        @keyframes modalAppear {
          from {
            opacity: 0;
            transform: translateY(-20px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
      `}</style>

      <div 
        ref={modalContentRef} 
        tabIndex="-1"
        style={{
          backgroundColor: "#1a1a1a",
          color: "#fff",
          borderRadius: "12px",
          padding: "25px",
          maxWidth: "450px",
          width: "90%",
          border: `3px solid ${styles.borderColor}`,
          boxShadow: "0 20px 50px rgba(0, 0, 0, 0.7)",
          position: "relative",
          animation: "modalAppear 0.3s ease-out",
          maxHeight: "90vh", 
          overflowY: "auto",
          outline: 'none',
        }} 
        onClick={(e) => e.stopPropagation()}
      >
        
        <button 
          onClick={onClose}
          onMouseEnter={() => setHoverClose(true)}
          onMouseLeave={() => setHoverClose(false)}
          style={{
            position: "absolute",
            top: "10px",
            right: "15px",
            background: "none",
            border: "none",
            color: hoverClose ? "#ffffff" : "#ffd700",
            fontSize: "28px",
            cursor: "pointer",
            fontWeight: "bold",
            width: "36px",
            height: "36px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "50%",
            transition: "all 0.3s ease",
            backgroundColor: hoverClose ? "rgba(255, 215, 0, 0.2)" : "transparent"
          }}
        >
          ×
        </button>
        
        <div style={{
          display: "flex",
          alignItems: "center",
          marginBottom: "15px",
          borderBottom: `2px solid ${styles.borderColor}`,
          paddingBottom: "10px"
        }}>
          <span style={{ fontSize: "28px", marginRight: "10px" }}>{styles.icon}</span>
          <h3 style={{
            margin: 0,
            color: "#ffd700",
            fontSize: "22px",
            fontWeight: "bold",
            letterSpacing: "0.5px"
          }}>
            {title}
          </h3>
        </div>
        
        <div style={{
          margin: "20px 0",
          fontSize: "16px",
          lineHeight: "1.6",
          color: "#e0e0e0"
        }}>
          {message && <p style={{ margin: "0 0 15px 0" }}>{message}</p>}
          {children}
        </div>
        
        <div style={{
          display: "flex",
          justifyContent: "flex-end",
          marginTop: "25px",
          gap: "10px"
        }}>
          <button
            onClick={onClose}
            onMouseEnter={() => setHoverButton(true)}
            onMouseLeave={() => setHoverButton(false)}
            style={{
              backgroundColor: hoverButton ? "#ffed4e" : "#ffd700",
              color: "#000",
              border: "none",
              padding: "12px 28px",
              borderRadius: "8px",
              fontWeight: "bold",
              cursor: "pointer",
              fontSize: "16px",
              transition: "all 0.3s ease",
              transform: hoverButton ? "translateY(-2px)" : "translateY(0)",
              boxShadow: hoverButton ? "0 6px 20px rgba(255, 215, 0, 0.3)" : "0 4px 12px rgba(255, 215, 0, 0.2)"
            }}
          >
            Закрыть
          </button>
        </div>
      </div>
    </div>
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
    children: null 
  });

  const serviceDailyRules = useMemo(() => [
    { id: 1, dailyLimit: 2 },
    { id: 2, dailyLimit: 1 },
    { id: 3, dailyLimit: 1 }
  ], []);
  
  const [bookedDates, setBookedDates] = useState([]);
 
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    phone: '',
    address: ''
  });

  const [formErrors, setFormErrors] = useState({
    phone: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const showModal = useCallback((title, message, type = "info", children = null) => {
    setModal({
      isOpen: true,
      title,
      message,
      type,
      children
    });
  }, []);

  const closeModal = useCallback(() => {
    setModal(prev => ({ ...prev, isOpen: false }));
  }, []);

  const getLocalDate = useCallback((dateString) => {
    const date = new Date(dateString);
    return new Date(date.getFullYear(), date.getMonth(), date.getDate());
  }, []);

  const getDateKey = useCallback((date) => {
    return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
  }, []);

  const getServiceName = useCallback((serviceId) => {
    return serviceId === 1 ? "Аренда пылесоса Karcher Puzzi 8/1 C" : 
           serviceId === 2 ? "Аренда пароочистителя Karcher SC 4 Deluxe" : 
           serviceId === 3 ? "Аренда мойки высокого давления" : 
           "Выберите услугу";
  }, []);

  const validatePhone = useCallback((phone) => {
    const cleanPhone = phone.replace(/[^\d+]/g, '');
    
    if (!cleanPhone) {
      return "Номер телефона обязателен";
    }
    
    if (cleanPhone.startsWith('+375') || cleanPhone.startsWith('375')) {
      const minLength = cleanPhone.startsWith('+') ? 13 : 12;
      if (cleanPhone.length !== minLength) {
        return "Неверный формат. Пример: +375291234567";
      }
      return "";
    }
    
    if (cleanPhone.startsWith('80') && cleanPhone.length === 11) {
      return "";
    }
    
    if (cleanPhone.startsWith('+7') || cleanPhone.startsWith('7')) {
      const minLength = cleanPhone.startsWith('+') ? 12 : 11;
      if (cleanPhone.length !== minLength) {
        return "Неверный формат. Пример: +79161234567";
      }
      return "";
    }
    
    return "Неверный формат номера. Используйте белорусский (+375/80) или российский (+7) формат";
  }, []);

  const handlePhoneChange = useCallback((e) => {
    const { value } = e.target;
    
    setFormData(prev => ({ ...prev, phone: value }));
    
    if (value) {
      const error = validatePhone(value);
      setFormErrors(prev => ({ ...prev, phone: error }));
    } else {
      setFormErrors(prev => ({ ...prev, phone: '' }));
    }
  }, [validatePhone]);

  const checkServiceAvailability = useCallback(async (serviceId, date = selectedDate) => {
    if (!serviceId) return true;
    
    const serviceName = getServiceName(serviceId);
    const dateStr = getDateKey(date);
    
    try {
      const response = await fetch(`${API_URL}/check-availability?service_id=${encodeURIComponent(serviceName)}&date=${dateStr}`);
      if (response.ok) {
        const data = await response.json();
        return data.available;
      }
    } catch (error) {
      console.error('Ошибка проверки доступности:', error);
    }
    
    return true;
  }, [selectedDate, getServiceName, getDateKey]);

  useEffect(() => {
    const loadBookedDates = async () => {
      if (!value) {
        setBookedDates([]);
        return;
      }
      
      try {
        setLoading(true);
        const serviceName = getServiceName(value);
        const response = await fetch(`${API_URL}/bookings?serviceName=${encodeURIComponent(serviceName)}`);
        
        if (response.ok) {
          const bookings = await response.json();
          
          const bookingsByDate = {};
          bookings.forEach(booking => {
            const localDate = getLocalDate(booking.booking_date);
            const dateKey = getDateKey(localDate);
            bookingsByDate[dateKey] = (bookingsByDate[dateKey] || 0) + 1;
          });
          
          const currentServiceRule = serviceDailyRules.find(r => r.id === value);
          const fullyBookedDates = [];
          
          Object.keys(bookingsByDate).forEach(dateKey => {
            if (bookingsByDate[dateKey] >= currentServiceRule.dailyLimit) {
              const [year, month, day] = dateKey.split('-');
              fullyBookedDates.push(new Date(year, month - 1, day));
            }
          });
          
          setBookedDates(fullyBookedDates);
        }
      } catch (error) {
        console.error('Ошибка загрузки бронирований:', error);
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
  }, [dropdownContainerRef]);

  const handleDateSelect = useCallback((date) => {
    setSelectedDate(date);
  }, []);

  const toggleDropdown = useCallback(() => {
    setSelect((prevSelect) => !prevSelect);
  }, []);

  const handleBookingSubmit = async (e) => {
    e.preventDefault();
    
    if (value === 3) {
      showModal("Услуга недоступна", "Временно невозможно забронировать мойку высокого давления Karcher K 5 Full Control.", "warning");
      return;
    }
    
    if (!value) {
      showModal("Ошибка", "Пожалуйста, выберите услугу", "error");
      return;
    }
    
    const isAvailable = await checkServiceAvailability(value, selectedDate);
    if (!isAvailable) {
      showModal(
        "Нет свободных места", 
        `На выбранную дату (${selectedDate.toLocaleDateString('ru-RU')}) уже достигнут лимит бронирований. Выберите другую дату.`, 
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
      showModal("Создание бронирования", "Идет создание бронирования...", "info");
      
      const cleanPhone = formData.phone.replace(/[^\d+]/g, '');
      const clientResponse = await fetch(`${API_URL}/find-or-create-client`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          first_name: formData.name.trim(),
          last_name: formData.surname.trim(),
          phone_number: cleanPhone
        })
      });
      
      if (!clientResponse.ok) {
        const errorData = await clientResponse.json();
        throw new Error(`Ошибка создания клиента: ${errorData.error || 'Неизвестная ошибка'}`);
      }
      
      const clientData = await clientResponse.json();
      const clientId = clientData.client_id;
      
      const bookingDate = new Date(selectedDate);
      const bookingDateUTC = new Date(Date.UTC(
        bookingDate.getFullYear(),
        bookingDate.getMonth(),
        bookingDate.getDate(),
        12, 0, 0
      ));
      
      const bookingResponse = await fetch(`${API_URL}/bookings`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          client_id: clientId,
          service_name: getServiceName(value),
          booking_date: bookingDateUTC.toISOString()
        })
      });
      
      if (!bookingResponse.ok) {
        const errorData = await bookingResponse.json();
        throw new Error(`Ошибка бронирования: ${errorData.error || 'Неизвестная ошибка'}`);
      }
      
      const bookingData = await bookingResponse.json();
      
      const currentServiceRule = serviceDailyRules.find(r => r.id === value);
      const response = await fetch(`${API_URL}/bookings?serviceName=${encodeURIComponent(getServiceName(value))}`);
      if (response.ok) {
        const bookings = await response.json();
        const bookingsByDate = {};
        bookings.forEach(booking => {
          const localDate = getLocalDate(booking.booking_date);
          const dateKey = getDateKey(localDate);
          bookingsByDate[dateKey] = (bookingsByDate[dateKey] || 0) + 1;
        });
        
        const fullyBookedDates = [];
        Object.keys(bookingsByDate).forEach(dateKey => {
          if (bookingsByDate[dateKey] >= currentServiceRule.dailyLimit) {
            const [year, month, day] = dateKey.split('-');
            fullyBookedDates.push(new Date(year, month - 1, day));
          }
        });
        
        setBookedDates(fullyBookedDates);
      }
      
      const successContent = (
        <div>
          <p style={{ marginBottom: "10px" }}>
            <strong>Услуга:</strong> {getServiceName(value)}
          </p>
          <p style={{ marginBottom: "10px" }}>
            <strong>Дата:</strong> {selectedDate.toLocaleDateString('ru-RU')}
          </p>
          <p style={{ marginBottom: "10px" }}>
            <strong>ID бронирования:</strong> {bookingData.id}
          </p>
          <p style={{ marginBottom: "10px" }}>
            <strong>Клиент:</strong> {formData.name} {formData.surname}
          </p>
          <p style={{ marginBottom: "10px" }}>
            <strong>Телефон:</strong> {formData.phone}
          </p>
          <p style={{ marginBottom: "10px" }}>
            <strong>Адрес:</strong> {formData.address}
          </p>
          <p style={{ marginBottom: "10px" }}>
            Накануне вечером позвоните по номеру +375(29)278-16-20, чтобы подтвердить вашу бронь и договориться о времени передачи моющего пылесоса.
          </p>
          <p>
            Пылесос забирать по адресу: г. Столин, ул. Дзержинского, д. 5. При себе иметь паспорт, подтверждающий вашу личность.
          </p>
        </div>
      );
      
      setModal({
        isOpen: true,
        title: "Успешно!",
        message: "Бронирование успешно создано!",
        type: "success",
        children: successContent
      });
      
      setFormData({ name: '', surname: '', phone: '', address: '' });
      setValue(null);
      
    } catch (error) {
      console.error('❌ Error creating booking:', error);
      showModal("Ошибка", `Ошибка при создании бронирования: ${error.message}`, "error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const getButtonStyle = useCallback(async () => {
    if (value === 3) {
      return {
        cursor: 'not-allowed',
        opacity: 0.3, 
      };
    }
    
    if (!value || isSubmitting || formErrors.phone) {
      return {
        cursor: 'not-allowed',
        opacity: 0.7
      };
    }

    const isAvailable = await checkServiceAvailability(value, selectedDate);
    
    if (isAvailable) {
      return {
        cursor: 'pointer',
        opacity: isSubmitting ? 0.7 : 1
      };
    } else {
      return {
        cursor: 'not-allowed',
        opacity: 0.7
      };
    }
  }, [value, selectedDate, isSubmitting, checkServiceAvailability, formErrors.phone]);

  const [buttonStyle, setButtonStyle] = useState({
    cursor: 'not-allowed',
    opacity: 0.7
  });

  useEffect(() => {
    const updateButtonStyle = async () => {
      const style = await getButtonStyle();
      setButtonStyle(style);
    };
    
    updateButtonStyle();
  }, [value, selectedDate, isSubmitting, getButtonStyle]);

  return (
    <>
      <StyledBooking>
        <form className="booking-form" onSubmit={handleBookingSubmit} autoComplete="on">
          <h2 className="booking-title">Услуга: </h2>
          <div className="select-wrapper" ref={dropdownContainerRef}>
            <div className="select-trigger" onClick={toggleDropdown}>
              {getServiceName(value)}
              <span className="select-arrow">{select ? "▲" : "▼"}</span>
            </div>
            <ul className={`booking-select ${select ? "options-show" : ""}`}>
              <li
                className={`booking-option ${value === 1 ? "option-active" : ""}`}
                onClick={() => {
                  setValue(1);
                  setSelect(false);
                }}
              >
                Аренда пылесоса Karcher Puzzi 8/1 C
              </li>
              <li
                className={`booking-option ${value === 2 ? "option-active" : ""}`}
                onClick={() => {
                  setValue(2);
                  setSelect(false);
                }}
              >
                Аренда пароочистителя Karcher SC 4 Deluxe
              </li>
              <li
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
              <p>Загрузка данных...</p>
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
          ) : (
            ""
          )}
          
          <BookingCalendar 
            onDateSelect={handleDateSelect}
            bookedDates={bookedDates}
          />
          
          <h2 className="info-title">Заполните форму:</h2>
          <div className="info-container">
            <input 
              className="name-booking" 
              placeholder="Имя" 
              name="name"
              autoComplete="name"
              value={formData.name}
              onChange={handleInputChange}
              required
              disabled={isSubmitting}
            />
            <input 
              className="surname-booking" 
              placeholder="Фамилия" 
              name="surname"
              autoComplete="family-name"
              value={formData.surname}
              onChange={handleInputChange}
              required
              disabled={isSubmitting}
            />
            <div style={{ position: 'relative', width: '100%' }}>
              <input 
                type="tel"
                className="phone-booking" 
                placeholder="Номер телефона" 
                name="tel"
                autoComplete="tel"
                value={formData.phone}
                onChange={handlePhoneChange}
                required
                disabled={isSubmitting}
                style={{
                  borderColor: formErrors.phone ? '#f44336' : '',
                }}
              />
              {formErrors.phone && (
                <div style={{
                  position: 'absolute',
                  bottom: '-20px',
                  left: '0',
                  color: '#f44336',
                  fontSize: '12px',
                  marginTop: '4px'
                }}>
                  {formErrors.phone}
                </div>
              )}
            </div>
            <input 
              className="address-booking" 
              placeholder="Адрес" 
              name="address"
              autoComplete="street-address"
              value={formData.address}
              onChange={handleInputChange}
              required
              disabled={isSubmitting}
            />
          </div>
          
          <button 
            className="booking-button" 
            type="submit"
            disabled={!value || isSubmitting || !!formErrors.phone || value === 3}
            style={buttonStyle}
          >
            {isSubmitting ? 'Создание...' : 'Забронировать'}
          </button>
        </form>
      </StyledBooking>
      
      <Modal
        isOpen={modal.isOpen}
        onClose={closeModal}
        title={modal.title}
        message={modal.message}
        type={modal.type}
      >
        {modal.children}
      </Modal>
    </>
  );
}