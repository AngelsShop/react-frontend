import { createContext, useEffect, useState } from "react";
import { getUser } from "~/service/fetchUser";

type User = {
  id: string;
  phone: string;
  email: string;
  firstName: string;
  lastName: string;
};

type userInfo = {
  user: User;
  setUser: React.Dispatch<React.SetStateAction<User>>;
};

export const UserInfoContext = createContext<userInfo | null>(null);

export function UserInfoProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState({
    id: "",
    phone: "",
    email: "",
    firstName: "",
    lastName: "",
  });

  useEffect(() => {
    const fetchUser = async () => {
      const res = await getUser();
      setUser(res.data);
    };

    fetchUser();
  }, []);

  return (
    <UserInfoContext.Provider value={{ user, setUser }}>
      {children}
    </UserInfoContext.Provider>
  );
}
