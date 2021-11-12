/* eslint-disable react-hooks/exhaustive-deps */
import { useRouter } from "next/router";
import { FC, useContext, useLayoutEffect } from "react";
import GHead from "../components/Head/Head";
import NavMenu from "../components/NavMenu/NavMenu";
import ThemeForm from "../components/ThemeForm/ThemeForm";
import UserLoggerContext from "../hooks/userLoggerContext";
import MyContext from "../hooks/useTheme";
import * as S from "../styles/pages/SettingsStyle";
import { IUser } from "../types/types";

const Settings: FC = () => {
  const { theme, setTheme } = useContext(MyContext);
  const router = useRouter();
  const { userApp, setUserApp } = useContext(UserLoggerContext);

  const handlelogOut = () => {
    router.replace("/Login");
    setUserApp({});
    localStorage.removeItem("@user");
  };

  useLayoutEffect(() => {
    const { authentication }: IUser = JSON.parse(
      localStorage.getItem("@user") || "{}"
    );
    !authentication && router.replace("/");
  }, []);

  return (
    <>
      <GHead title="Gyphs | Settings" />
      <S.MainApp>
        <NavMenu />
        <S.MainBody>
          <h1>Settings</h1>
          <div>
            <h2>{userApp.user?.username}</h2>
          </div>
          <div>
            <h3>Theme</h3>
            <ul>
              <li>
                <ThemeForm props={{ label: "light", setTheme, theme }} />
              </li>
              <li>
                <ThemeForm props={{ label: "dark", setTheme, theme }} />
              </li>
            </ul>
          </div>
          <div>
            <S.ButtonLogOut theme={theme} onClick={handlelogOut}>
              <b>Log out</b>
            </S.ButtonLogOut>
          </div>
        </S.MainBody>
      </S.MainApp>
    </>
  );
};

export default Settings;
