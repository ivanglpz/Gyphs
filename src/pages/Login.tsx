import Link from "next/link";
import { FC, useContext, useEffect, useState } from "react";
import FormLogin from "../components/FormLogin/FormLogin";
import Symbol from "../components/Svg/NavBarIcons";
import { useLoginUser } from "../hooks/useLoginUser";
import userLoggerContext from "../hooks/userLoggerContext";
import { colors } from "../styles/colors";
import * as S from "../styles/pages/LoginStyle";

export interface IUser {
  username: string;
  password: string;
}

interface IBody {
  type: string;
  username: string;
  password: string;
}
const Login: FC = () => {
  const [user, setUser] = useState<IUser>({} as IUser);
  const [mount, setMount] = useState(false);
  const [body, setBody] = useState<IBody>({} as IBody);

  const { setUserApp } = useContext(userLoggerContext);

  const handleChange = (event: { target: { name: string; value: string } }) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };
  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    if (mount === true && user.username && user.password) {
      setBody({
        type: "sign",
        username: user.username,
        password: user.password,
      });
    } else {
      setBody({
        type: "login",
        username: user.username,
        password: user.password,
      });
    }
  };
  const handleMount = () => {
    setMount(!mount);
    setBody({ type: "", username: "", password: "" });
    setUser({ username: "", password: "" } as IUser);
  };

  const login = useLoginUser({ body });
  useEffect(() => {
    setUserApp(login);
  }, [login]);

  return (
    <S.LoginStyle>
      <S.LoginBody>
        <FormLogin
          title={mount ? "SignUp" : "SignIn"}
          handleSubmit={handleSubmit}
          handleChange={handleChange}
          user={user}
        />

        <p>
          {mount ? "You have an account?" : "Don´t have an accout"}
          <span>
            <S.ButtonRegister onClick={handleMount}>
              {mount ? "SignIn" : "SignUp"}
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
  );
};

export default Login;
