import { useEffect, useState } from "react";
import Button from "~/components/Button";
import Container from "~/components/Container";
import Input from "~/components/Input";
import { createUser } from "~/service/fetchRegistration";

export default function Registration() {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  async function registrationUser() {
    const token = await createUser({ login, password });
    if (token) {
      // document.cookie = `token=${token.access_token}`;
      // console.log(document.cookie);
    }
  }

  return (
    <div className="mt-28">
      <Container>
        <div className="flex flex-col items-center w-150 m-auto gap-7">
          <h2>Регистрация</h2>
          <div className="flex flex-col gap-5 w-full">
            <Input
              placeholder="Ваш e-mail*"
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
