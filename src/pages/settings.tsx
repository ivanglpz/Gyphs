import styled from "@emotion/styled";
import { FC, useContext } from "react";
import NavMenu from "../components/NavMenu/NavMenu";
import ThemeForm from "../components/ThemeForm/ThemeForm";
import MyContext from "../hooks/useTheme";

const MainApp = styled.main`
  display: flex;
  @media (max-width: 768px) {
    display: flex;
    height: 100vh;
    justify-content: space-between;
    flex-direction: column-reverse;
  }
`;
const MainBody = styled.div`
  margin: 10px 0 0 250px;
  @media (max-width: 768px) {
    margin: 0;
    padding: 20px;
  }
`;

const Settings: FC = () => {
  const { theme, setTheme } = useContext(MyContext);
  return (
    <MainApp>
      <NavMenu />
      <MainBody>
        <h1>Settings</h1>
        <div>
          <h3>Theme</h3>
          <ThemeForm props={{ label: "light", setTheme, theme }} />
          <ThemeForm props={{ label: "dark", setTheme, theme }} />
        </div>
      </MainBody>
    </MainApp>
  );
};

export default Settings;
