/* eslint-disable react-hooks/exhaustive-deps */
import Link from "next/link";
import { useRouter } from "next/router";
import { FC, useContext, useEffect, useLayoutEffect, useState } from "react";
import FormLogin from "../components/FormLogin/FormLogin";
import GHead from "../components/Head/Head";
import Symbol from "../components/Svg/NavBarIcons";
import { useLoginUser } from "../hooks/useLoginUser";
import userLoggerContext, { IData } from "../hooks/userLoggerContext";
import { colors } from "../styles/colors";
import * as S from "../styles/pages/LoginStyle";
import { IBody, IUser } from "../types/types";

const Login: FC = () => {
  const [user, setUser] = useState<IUser>({} as IUser);
  const [mount, setMount] = useState<boolean>(false);
  const [body, setBody] = useState<IBody>({} as IBody);
  const [message, setMessage] = useState<string>("");
  const router = useRouter();

  const { setUserApp } = useContext(userLoggerContext);

  const handleChange = (event: { target: { name: string; value: string } }) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };
  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    if (mount === true && user.username && user.password) {
      setMessage("");
      setBody({ ...user, type: "sign" });
    } else {
      setMessage("");
      setBody({ ...user, type: "login" });
    }
  };
  const handleMount = () => {
    setMount(!mount);
    setBody({} as IBody);
    setUser({} as IUser);
    setMessage("");
  };

  const login = useLoginUser({ body });

  useEffect(() => {
    login.message && setMessage(login.message);
    setUserApp(login);
    setTimeout(() => {
      login.authentication && router.replace("/Home");
    }, 500);
  }, [login]);

  useLayoutEffect(() => {
    const { authentication }: IData = JSON.parse(
      localStorage.getItem("@user") || "{}"
    );
    authentication && router.replace("/Home");
  }, []);

  return (
    <>
      <GHead title="Gyphs | Login" />
      <S.LoginStyle>
        <S.LoginBody>
          <FormLogin
            title={mount ? "Sign Up" : "Sign In"}
            handleSubmit={handleSubmit}
            handleChange={handleChange}
            user={user}
          />
          {message && <p> {message}</p>}

          <p>
            {mount ? "You have an account?" : "Don´t have an accout"}
            <span>
              <S.ButtonRegister onClick={handleMount}>
                {mount ? "Sign In" : "Sign Up"}
              </S.ButtonRegister>
            </span>{" "}
          </p>
          <Link href="/">
            <a>
              <Symbol
                color={colors.blue}
                size={{ width: "58px", height: "58px" }}
              />
            </a>
          </Link>
        </S.LoginBody>
        <S.BackgroundSymbol>
          <Symbol color={"white"} size={{ width: "120px", height: "120px" }} />
        </S.BackgroundSymbol>
      </S.LoginStyle>
    </>
  );
};

export default Login;
