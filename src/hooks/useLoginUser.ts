import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { IData } from "./userLoggerContext";

interface IFetch {
  authentication: boolean;
  user: {
    id: string | number;
    username: string;
  };
  type: string;
  token: string;
}

export const useLoginUser = ({
  body,
  setUserApp,
}: {
  body: {
    type: string;
    username: string;
    password: string;
  };
  setUserApp: Dispatch<SetStateAction<IData>>;
}) => {
  const [data, setData] = useState<IData>({} as IData);

  useEffect(() => {
    const useFetch = async ({
      type,
      username,
      password,
    }: {
      type: string;
      username: string;
      password: string;
    }) => {
      try {
        const url = `http://localhost:8000/${type}`;
        const res = await fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ username, password }),
        });
        const data: IData = await res.json();
        if (data) {
          setData(data);
          setUserApp(data);
        } else {
          throw new Error("Data not found");
        }
      } catch (error) {
        throw new Error(`${error}`);
      }
    };
    if (body.type && body.username && body.password) {
      useFetch(body);
    }
  }, [body]);
  return data;
};
