import { createContext, Dispatch, SetStateAction } from "react";
// import { IDetailGif } from "../pages/Search";
import { IDataGif } from "../types/types";
interface IContext {
  setDetailGif: Dispatch<SetStateAction<IDataGif>>;
}

const UserContext = createContext<IContext>({} as IContext);

export default UserContext;
