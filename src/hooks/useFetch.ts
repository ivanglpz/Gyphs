import { IData, IParams, IStateData } from "./types";
import { IGif } from "@giphy/js-types";

const useFetch = async ({ method, search, limit }: IParams) => {
  const url = `https://api.giphy.com/v1/gifs/${method}?api_key=${
    process.env.NEXT_PUBLIC_API_KEY
  }${limit ? "" : `&limit=${limit}`}${search ? `&q=${search}` : ""}`;

  const resp = await fetch(url);
  const { data }: IStateData = await resp.json();
  if (data.length > 0) {
    if (search) {
      return { data: data, result: search, mount: true };
    } else {
      return { data: data, result: method, mount: true };
    }
  } else {
    return { data: data, result: search, mount: false };
  }
};

export default useFetch;
