import { useEffect, useState } from "react";
import { IData, IFetch, IGifData } from "../pages/Search";

const useFetch = ({ method, search }: IFetch) => {
  const [dataInfo, setData] = useState<IData>({} as IData);

  const myFetch = async ({ method, search }: IFetch): Promise<void> => {
    const url = `https://api.giphy.com/v1/gifs/${method}?api_key=${
      process.env.NEXT_PUBLIC_API_KEY
    }${search ? `&q=${search}` : ""}`;

    const resp = await fetch(url);
    const { data }: IData = await resp.json();
    
    if (data.length > 0) {
      const newData = data.map((gif: IGifData): IGifData => {
        return {
          id: gif.id,
          title: gif.title,
          trending_datetime: gif.trending_datetime,
          images: {
            fixed_height: {
              url: gif.images.fixed_height.url,
              width: gif.images.fixed_height.width,
            },
          },
          url: gif.url,
        };
      });
      search
        ? setData({ data: newData, result: `Result: ${search}`, mount: true })
        : setData({
            data: newData,
            result: method,
            mount: true,
          });
    } else {
      setData({ ...dataInfo, mount: false });
    }
  };

  useEffect(() => {
    myFetch({ method, search });
  }, [method, search]);
  return dataInfo;
};

export default useFetch;
