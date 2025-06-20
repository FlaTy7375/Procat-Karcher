import { StyledPage } from "./style"

import Main from "../../blocks/main/main"
import Technique from "../../blocks/technique/technique"
import Advantages from "../../blocks/advantages/advantages"
import Comments from "../../blocks/comments/comments"
import Services from "../../blocks/services/services"
import BookingModal from "../../blocks/booking-modal/booking-modal";

export default function Page() {
    return (
        <StyledPage>
            <BookingModal></BookingModal>
            <Main></Main>
            <Technique></Technique>
            <Advantages></Advantages>
            <Comments></Comments>
            <Services></Services>
        </StyledPage>
    )
}