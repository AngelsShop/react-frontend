import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { Bounce, toast, ToastContainer } from "react-toastify";
import Button from "~/components/Button";
import Container from "~/components/Container";
import Input from "~/components/Input";
import { createUser } from "~/service/fetchRegistration";

export default function Registration() {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function registrationUser() {
    const res = await createUser({ login, password });
    if (res === 400) {
      const notify = () =>
        toast.error("Пользователь с таким номером уже существует");
      notify();
    }
    if (res === 201) {
      navigate("/personal");
    }
  }

  return (
    <div className="mt-28">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}
        theme="light"
        transition={Bounce}
      />
      <Container>
        <div className="flex flex-col items-center w-150 m-auto gap-7">
          <h2>Регистрация</h2>
          <div className="flex flex-col gap-5 w-full">
            <Input
              placeholder="Ваш номер телефона*"
              onChange={(e) => setLogin(e.target.value)}
            />
            <Input
              type="password"
              placeholder="Ваш пароль*"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <Button
            variant="brown"
            className="w-full"
            onClick={() => registrationUser()}
          >
            Зарегистрироваться
          </Button>
        </div>
      </Container>
    </div>
  );
}
