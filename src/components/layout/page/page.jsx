import React, { useEffect, useState, useCallback } from "react";
import { StyledPage } from "./style";
import Main from "../../blocks/main/main";
import Pick from "../../blocks/pick/pick";
import Technique from "../../blocks/technique/technique";
import TechniqueAbout from "../../blocks/technique/technique-about";
import How from "../../blocks/how/how";
import Advantages from "../../blocks/advantages/advantages";
import Comments from "../../blocks/comments/comments";
import Services from "../../blocks/services/services";
import BookingModal from "../../blocks/booking-modal/booking-modal";
import { useModal } from "../../app/context-modal";

export default function Page() {
  const { setBookingClass, setOption, modal, booking, isAuthModalOpen } =
    useModal();
  const [techniqueAbout, setTechniqueAbout] = useState({
    isOpen: false,
    btnFirst: true,
  });

  useEffect(() => {
    if (techniqueAbout.isOpen) {
      document.body.style.overflow = "hidden";
    } else if (
      modal !== "modal-show" &&
      booking !== "modal-show" &&
      !isAuthModalOpen
    ) {
      document.body.style.overflow = "";
    }
  }, [techniqueAbout.isOpen, modal, booking, isAuthModalOpen]);

  const openTechniqueAbout = useCallback((isFirst) => {
    setTechniqueAbout({ isOpen: true, btnFirst: Boolean(isFirst) });
  }, []);

  const closeTechniqueAbout = useCallback(() => {
    setTechniqueAbout((prev) => ({ ...prev, isOpen: false }));
  }, []);

  return (
    <StyledPage>
      <BookingModal />
      <TechniqueAbout
        BtnFirst={techniqueAbout.btnFirst}
        display={techniqueAbout.isOpen ? "modal-show" : ""}
        hideModal={closeTechniqueAbout}
        setBookingClass={setBookingClass}
        setOption={setOption}
      />
      <Main />
      <Pick onOpenTechniqueAbout={openTechniqueAbout} />
      <Technique onOpenTechniqueAbout={openTechniqueAbout} />
      <How />
      <Advantages />
      <Comments />
      <Services />
    </StyledPage>
  );
}
