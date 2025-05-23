import { StyledBookingModal } from "./style";
import Card from "../../ui/card/card";
import BookingCalendarComponent from "./booking";

export default function BookingModal() {
    return (
        <StyledBookingModal className="">
            <Card className="booking-card">
                <BookingCalendarComponent></BookingCalendarComponent>
            </Card>
        </StyledBookingModal>
    )
}