import { createContext, Dispatch, SetStateAction } from "react";

export interface IData {
  authentication?: boolean;
  user?: {
    id: string | number;
    username: string;
  };
  type?: string;
  token?: string;
  message?: string;
}

export interface IUser {
  userApp: IData;
  setUserApp: Dispatch<SetStateAction<IData>>;
}

const UserLoggerContext = createContext<IUser>({} as IUser);

export default UserLoggerContext;
