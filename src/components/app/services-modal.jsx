import { createContext, useContext } from "react";

const ModalContext = createContext();

export const ModalProvider = ModalContext.Provider;

export const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("useModal must be used within a ModalProvider");
  }
  return context;
};