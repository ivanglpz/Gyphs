import { FC, useContext } from "react";
import * as S from "../../styles/components/NavMenu/NavMenuStyle";
import Link from "next/link";
import { colors } from "../../styles/colors";
import MyContext from "../../hooks/useTheme";
import Symbol, { HomeIcon, SearchIcon, SettingsIcon } from "../Svg/NavBarIcons";

const NavMenu: FC = () => {
  const { theme } = useContext(MyContext);

  return (
    <S.StyledMenu theme={theme}>
      <S.MenuNavBar>
        <Link href="/">
          <a>
            <Symbol
              color={colors.blue}
              size={{ width: "40px", height: "40px" }}
            />
            <h1> Gyphs</h1>
          </a>
        </Link>
      </S.MenuNavBar>
      <S.MenuOpts theme={theme}>
        <ul>
          <li>
            <Link href="/Home" passHref>
              <a>
                <HomeIcon
                  theme={theme}
                  color={colors.blackRaisin}
                  size="30px"
                />
                <p>Home</p>
              </a>
            </Link>
          </li>
          <li>
            <Link href="/Search">
              <a>
                <SearchIcon
                  theme={theme}
                  color={colors.blackRaisin}
                  size="30px"
                />
                <p>Search</p>
              </a>
            </Link>
          </li>
          <li>
            <Link href="/settings">
              <a>
                <SettingsIcon
                  theme={theme}
                  color={colors.blackRaisin}
                  size="30px"
                />
                <p>Settings</p>
              </a>
            </Link>
          </li>
        </ul>
      </S.MenuOpts>
    </S.StyledMenu>
  );
};

export default NavMenu;
