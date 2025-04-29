import React, { useState } from "react";
import { StyledPage } from "./style"
import { ModalProvider } from "../../app/services-modal";
import Main from "../../blocks/main/main"
import Technique from "../../blocks/technique/technique"
import Advantages from "../../blocks/advantages/advantages"
import Comments from "../../blocks/comments/comments"
import Services from "../../blocks/services/services"

export default function Page() {
    const [modal, setModal] = useState("");

    const setModalClass = () => {
    if (modal === "") {
        setModal("modal-show");
        document.body.style.overflow = "hidden";
    }
    };

    return (
        <StyledPage>
            <ModalProvider value={{ modal, setModal, setModalClass }}>
            <Main></Main>
            <Technique></Technique>
            <Advantages></Advantages>
            <Comments></Comments>
            <Services></Services>
            </ModalProvider>
        </StyledPage>
    )
}