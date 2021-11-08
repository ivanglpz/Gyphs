import { createContext, Dispatch, SetStateAction } from "react";
export interface Theme {
  theme: string;
  setTheme: Dispatch<SetStateAction<string>>;
}

const ThemeContext = createContext<Theme>({} as Theme);

export default ThemeContext;
