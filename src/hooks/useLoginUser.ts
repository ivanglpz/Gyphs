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
}: {
  body: {
    type: string;
    username: string;
    password: string;
  };
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
        const url = `https://gyphs.herokuapp.com/${type}`;
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
        } else {
          setData({ authentication: false, type: "logger", token: "false" });
          throw new Error("Data not found");
        }
      } catch (error) {
        throw new Error(`${error}`);
      }
    };
    body.type && useFetch(body);
  }, [body]);
  return data;
};
