import { createContext, useContext, useState } from "react";
interface IModalProvider {
  children: JSX.Element;
}

const ModalContext = createContext<{
  openModal: boolean;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
}>({
  openModal: false,
  setOpenModal: () => null,
});

const ModalProvider = ({ children }: IModalProvider) => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <ModalContext.Provider value={{ openModal, setOpenModal }}>
      {children}
    </ModalContext.Provider>
  );
};

const useModal = () => useContext(ModalContext);
export { useModal, ModalProvider };
