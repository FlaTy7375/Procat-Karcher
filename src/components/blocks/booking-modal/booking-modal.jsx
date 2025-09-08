import React from "react";
import { StyledBookingModal } from "./style";
import Card from "../../ui/card/card";
import Booking from "./booking";
import { ReactComponent as CloseButton } from "../../../assets/svg/close-button.svg";
import { useModal } from "../../app/context-modal";

export default function BookingModal() {
  const { option, setOption, hideModal, booking } = useModal();

  return (
    <StyledBookingModal className={booking}>
      <Card className="booking-card">
        <button className="button-close" onClick={hideModal}>
          <CloseButton></CloseButton>
        </button>
        <Booking value={option} setValue={setOption}></Booking>
      </Card>
    </StyledBookingModal>
  );
}
