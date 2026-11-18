import React from "react";
import { StyledBookingModal } from "./style";
import Booking from "./booking";
import { CloseIcon } from "../../ui/icons/icons";
import { useModal } from "../../app/context-modal";

export default function BookingModal() {
  const { option, setOption, hideModal, booking } = useModal();
  const isOpen = booking === "modal-show";

  if (!isOpen) return null;

  return (
    <StyledBookingModal
      className={booking}
      onClick={hideModal}
      role="dialog"
      aria-modal="true"
      aria-label="Бронирование техники"
    >
      <div className="booking-card" onClick={(e) => e.stopPropagation()}>
        <div className="booking-sheet-head">
          <span className="booking-sheet-kicker">ProKarcher · Бронь техники</span>
          <button
            type="button"
            className="button-close"
            onClick={hideModal}
            aria-label="Закрыть окно бронирования"
          >
            <CloseIcon size={20} />
          </button>
        </div>
        <div className="booking-sheet-body">
          <Booking value={option} setValue={setOption} />
        </div>
      </div>
    </StyledBookingModal>
  );
}
