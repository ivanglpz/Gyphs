import { useEffect, useState } from "react";
import { IData, IParams, IStateData } from "./types";
import useKey from "./useKey";

const useFetchGifs = ({ method, search, limit }: IParams) => {
  const [data, setData] = useState<IStateData>({} as IStateData);

  useEffect(() => {
    const useFetch = async ({ method, search, limit }: IParams) => {
      const url = `https://api.giphy.com/v1/gifs/${method}?api_key=${useKey()}${
        limit && `&limit=${limit}`
      }${search ? `&q=${search}` : ""}`;

      const resp = await fetch(url);
      const { data }: { data: IData[] } = await resp.json();
      if (data?.length > 0) {
        if (search) {
          setData({ data: data, result: search, mount: true });
        } else {
          setData({ data: data, result: method, mount: true });
        }
      } else {
        setData({ data: data, result: search, mount: false });
      }
    };
    method && useFetch({ method, search, limit });
  }, [method, search, limit]);
  return data;
};
export default useFetchGifs;
