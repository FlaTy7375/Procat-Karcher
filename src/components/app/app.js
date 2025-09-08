import React, { useState, useCallback, useEffect } from "react";
import "../../styles.css";
import Footer from "../layout/footer/footer";
import Header from "../layout/header/header";
import Page from "../layout/page/page";
import { ModalProvider } from "./context-modal";
import { AuthProvider } from "./AuthContext";


export default function App() {
    const [modal, setModal] = useState("");
    const [option, setOption] = useState(0);
    const [booking, showBooking] = useState("");
    const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

    useEffect(() => {
        if (modal === "modal-show" || booking === "modal-show" || isAuthModalOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
    }, [modal, booking, isAuthModalOpen]);

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
        <>
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
            setIsAuthModalOpen
        }}
        >
        <AuthProvider>
        <Header></Header>
        <Page></Page>
        <Footer></Footer>
        </AuthProvider>
        </ModalProvider>
        </>
    );
  }
  