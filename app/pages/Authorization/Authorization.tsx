import { useContext, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import Button from "~/components/Button";
import Input from "~/components/Input";
import { ModalAuthorizationContext } from "~/context/modalAuthorization";

export default function Authorization() {
  const [mounted, setMounted] = useState(false);
  const context = useContext(ModalAuthorizationContext);

  if (!context) return null;

  const { isOpenModal, setIsOpenModal } = context;

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return createPortal(
    <dialog open={isOpenModal}>
      <div className="flex px-25 py-12 flex-col gap-7 fixed items-center w-150 bg-white z-50 top-1/2 left-1/2 translate-[-50%]">
        <button
          className="absolute right-5 top-5 cursor-pointer"
          onClick={() => setIsOpenModal(false)}
        >
          <img src="images/closeModal.svg" alt="закрыть окно" />
        </button>
        <p>Авторизация</p>
        <div className="flex flex-col gap-5 w-full">
          <Input placeholder="Ваш e-mail*"></Input>
          <Input placeholder="Ваш пароль*"></Input>
          <div className="flex justify-between">
            <a href="/" className="underline hover:text-[#E0BEA2]">
              Забыли пароль?
            </a>
            <a href="/" className="underline hover:text-[#E0BEA2]">
              Нет аккаунта?
            </a>
          </div>
          <form className="flex justify-center w-full">
            <Button type="submit" variant="brown" className="w-full">
              войти
            </Button>
          </form>
        </div>
      </div>
    </dialog>,
    document.body,
  );
}
