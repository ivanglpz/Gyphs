import { createContext, Dispatch, SetStateAction } from "react";
import { IDetailGif } from "../pages/Search";

interface IContext {
  setDetailGif: Dispatch<SetStateAction<IDetailGif>>;
}

const UserContext = createContext<IContext>({} as IContext);

export default UserContext;
