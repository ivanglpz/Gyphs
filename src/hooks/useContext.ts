import { createContext, Dispatch, SetStateAction } from "react";

type IGifData = {
    id: string | number;
    title: string;
    trending_datetime: string;
    images: {
      fixed_height: {
        url: string;
        width: string | number;
      };
    };
    url:string
  };

interface IContext {
    setSavedGif:Dispatch<SetStateAction<IGifData[]>>
    savedGif:IGifData[]
}

const UserContext = createContext<IContext>({} as IContext)

export default UserContext