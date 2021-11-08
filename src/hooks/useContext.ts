import { createContext, Dispatch, SetStateAction } from "react";
import { IFormGif } from "../types/types";
interface IContext {
  setDetailGif: Dispatch<SetStateAction<IFormGif>>;
}

const UserContext = createContext<IContext>({} as IContext);

export default UserContext;
