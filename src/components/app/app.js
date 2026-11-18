import React, { useState, useCallback, useEffect } from "react";
import Footer from "../layout/footer/footer";
import Header from "../layout/header/header";
import Page from "../layout/page/page";
import MobileBar from "../ui/mobile-bar/mobile-bar";
import { ModalProvider } from "./context-modal";
import { AuthProvider } from "./AuthContext";

export default function App() {
  const [modal, setModal] = useState("");
  const [option, setOption] = useState(0);
  const [booking, showBooking] = useState("");
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  const isAnyModalOpen =
    modal === "modal-show" || booking === "modal-show" || isAuthModalOpen;

  useEffect(() => {
    if (isAnyModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isAnyModalOpen]);

  const setModalClass = () => {
    if (modal === "") {
      setModal("modal-show");
    }
  };

  const setBookingClass = () => {
    if (booking === "") {
      showBooking("modal-show");
    }
  };

  const hideModal = useCallback(() => {
    setModal("");
    showBooking("");
    setIsAuthModalOpen(false);
  }, []);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        hideModal();
      }
    };

    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [hideModal]);

  return (
    <ModalProvider
      value={{
        modal,
        setModal,
        hideModal,
        setModalClass,
        option,
        setOption,
        booking,
        showBooking,
        setBookingClass,
        isAuthModalOpen,
        setIsAuthModalOpen,
      }}
    >
      <AuthProvider>
        <Header />
        <Page />
        <Footer />
        <MobileBar />
      </AuthProvider>
    </ModalProvider>
  );
}
