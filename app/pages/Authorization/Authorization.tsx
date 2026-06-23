import { useContext, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { Navigate, useNavigate } from "react-router";
import Button from "~/components/Button";
import Input from "~/components/Input";
import { ModalAuthorizationContext } from "~/context/modalAuthorization";
import { authorizationUser } from "~/service/fetchAuthorization";
import { getUser } from "~/service/fetchUser";

export default function Authorization() {
  const [mounted, setMounted] = useState(false);
  const context = useContext(ModalAuthorizationContext);
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  if (!context) return null;

  const { isOpenModal, setIsOpenModal } = context;

  useEffect(() => {
    setMounted(true);
    if (isOpenModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpenModal]);

  if (!mounted) return null;

  async function userSignIn() {
    await authorizationUser({ login, password });
    const data = await getUser();
    console.log(data);

    if (data) {
      setIsOpenModal(false);
      navigate("/personal");
    }
  }

  return createPortal(
    <dialog open={isOpenModal}>
      <div
        className="bg-[#00000069] w-full h-full fixed z-20"
        onClick={() => setIsOpenModal(false)}
      >
        <div
          className="flex px-25 py-12 flex-col gap-7 fixed items-center w-150 bg-white z-50 top-1/2 left-1/2 translate-[-50%] "
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <button
            className="absolute right-5 top-5 cursor-pointer"
            onClick={() => setIsOpenModal(false)}
          >
            <img src="images/closeModal.svg" alt="закрыть окно" />
          </button>
          <p>Авторизация</p>
          <div className="flex flex-col gap-5 w-full">
            <Input
              placeholder="Ваш e-mail*"
              onChange={(e) => setLogin(e.target.value)}
            ></Input>
            <Input
              placeholder="Ваш пароль*"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            ></Input>
            <div className="flex justify-center">
              <a
                href="/registration"
                className="underline hover:text-[#E0BEA2]"
              >
                Нет аккаунта?
              </a>
            </div>
            <form className="flex justify-center w-full">
              <Button
                variant="brown"
                className="w-full"
                onClick={() => userSignIn()}
              >
                войти
              </Button>
            </form>
          </div>
        </div>
      </div>
    </dialog>,
    document.body,
  );
}
