import { createContext, Dispatch, SetStateAction, useState } from 'react'
// import { ITheme } from "../pages/_app";

export interface Theme {
  theme: string
  setTheme: Dispatch<SetStateAction<string>>
}

const MyContext = createContext<Theme>({} as Theme)

export default MyContext
