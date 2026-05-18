import { createContext, useState } from "react";

type modalAuthorizationProps = {
  isOpenModal: boolean;
  setIsOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
};

export const ModalAuthorizationContext =
  createContext<modalAuthorizationProps | null>(null);

export function ModalAuthorizationProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isOpenModal, setIsOpenModal] = useState(false);
  return (
    <ModalAuthorizationContext.Provider value={{ isOpenModal, setIsOpenModal }}>
      {children}
    </ModalAuthorizationContext.Provider>
  );
}
