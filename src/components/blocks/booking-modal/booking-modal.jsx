import React, { useState } from "react";
import { StyledBookingModal } from "./style";
import Card from "../../ui/card/card";
import Booking from "./booking";
import { ReactComponent as CloseButton } from "../../../assets/svg/close-button.svg"

export default function BookingModal() {
    const [modal, setModal] = useState("");

    const hideModal = () => {
        setModal("");
        document.body.style.overflow = "auto";
    };

    return (
        <StyledBookingModal className="modal-show">
            <Card className="booking-card">
                <button className="button-close" onClick={hideModal}><CloseButton></CloseButton></button>
                <Booking></Booking>
            </Card>
        </StyledBookingModal>
    )
}