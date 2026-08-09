import { useContext, useEffect, useEffectEvent, useState } from "react";
import { useNavigate } from "react-router";
import Button from "~/components/Button";
import Container from "~/components/Container";
import Input from "~/components/Input";
import { UserInfoContext } from "~/context/userInfo";
import { deleteCookie } from "~/service/API";
import { getUser, updateUserInfo } from "~/service/fetchUser";

export default function PersonalInformation() {
  const navigate = useNavigate();
  const context = useContext(UserInfoContext);
  if (!context) return null;

  const { setUser, user } = context;
  const [infoUser, setInfoUser] = useState({
    id: "",
    phone: "",
    email: "",
    firstName: "",
    lastName: "",
  });

  async function handleChangeInfo() {
    const res = await updateUserInfo(infoUser);
    setUser((prev) => ({ ...prev, ...res.data }));
  }

  function handleClose() {
    deleteCookie("access_token");
    navigate("/");
  }

  useEffect(() => {
    setInfoUser((prev) => ({ ...prev, ...user }));
  }, [user]);

  return (
    <div className="flex mt-28">
      <Container>
        <div className="w-full flex flex-col gap-5">
          <div className="w-full flex justify-center border-y">
            <p className="py-4 px-20 bg-[#E0BEA2] text-white max-sm:px-10 max-sm:py-2">
              Личные данные
            </p>
          </div>
          <div className="flex flex-col gap-5">
            <p>Персональные данные</p>
            <div className="flex justify-between gap-5 max-sm:flex-col">
              <Input
                placeholder="Имя"
                onChange={(e) =>
                  setInfoUser((prev) => ({
                    ...prev,
                    firstName: e.target.value,
                  }))
                }
                value={infoUser.firstName}
              ></Input>
              <Input
                placeholder="Фамилия"
                onChange={(e) =>
                  setInfoUser((prev) => ({ ...prev, lastName: e.target.value }))
                }
                value={infoUser.lastName}
              ></Input>
              <Input
                type="email"
                placeholder="Почта"
                onChange={(e) =>
                  setInfoUser((prev) => ({ ...prev, email: e.target.value }))
                }
                value={infoUser.email}
              ></Input>
              <Input
                type="tel"
                placeholder="Номер телефона"
                onChange={(e) =>
                  setInfoUser((prev) => ({ ...prev, phone: e.target.value }))
                }
                value={infoUser.phone}
              ></Input>
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <p>Адрес доставки:</p>
            <div className="flex justify-between gap-5 max-sm:flex-col">
              <Input placeholder="Город"></Input>
              <Input placeholder="Улица"></Input>
            </div>
          </div>
          <div className="flex flex-col w-full gap-5 items-center">
            <Button
              variant="brown"
              className="w-fit px-28 max-sm:px-14"
              onClick={() => handleChangeInfo()}
            >
              ОБНОВИТЬ ИНФОРМАЦИЮ
            </Button>
            <Button
              variant="white"
              className="w-fit px-28 max-sm:px-14"
              onClick={() => handleClose()}
            >
              Выйти
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}
