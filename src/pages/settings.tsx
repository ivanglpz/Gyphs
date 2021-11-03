import { FC, useContext } from "react";
import NavMenu from "../components/NavMenu/NavMenu";
import ThemeForm from "../components/ThemeForm/ThemeForm";
import MyContext from "../hooks/useTheme";
import * as S from "../styles/pages/SettingsStyle";

const Settings: FC = () => {
  const { theme, setTheme } = useContext(MyContext);
  return (
    <S.MainApp>
      <NavMenu />
      <S.MainBody>
        <h1>Settings</h1>
        <div>
          <h3>Theme</h3>
          <ThemeForm props={{ label: "light", setTheme, theme }} />
          <ThemeForm props={{ label: "dark", setTheme, theme }} />
        </div>
      </S.MainBody>
    </S.MainApp>
  );
};

export default Settings;
