import React, { useState } from "react";
import "../../styles.css";
import Footer from "../layout/footer/footer";
import Header from "../layout/header/header";
import Page from "../layout/page/page";
import { ModalProvider } from "./context-modal";


export default function App() {
    const [modal, setModal] = useState("");
    const [option, setOption] = useState(0);
    const [booking, showBooking] = useState("");

    const setModalClass = () => {
        if (modal === "") {
            setModal("modal-show");
            document.body.style.overflow = "hidden";
        }
    };

    const setBookingClass = () => {
        if (booking === "") {
            showBooking("modal-show");
            document.body.style.overflow = "hidden";
        }
    };
    return (
      <>
      <ModalProvider value={{ modal, setModal, setModalClass, option, setOption, booking, showBooking, setBookingClass }}>
      <Header></Header>
      <Page></Page>
      <Footer></Footer>
      </ModalProvider>
      </>
    );
  }
  