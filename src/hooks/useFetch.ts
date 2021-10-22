import { useEffect, useState } from "react";
import { IData, IParams, IStateData } from "./types";

const useFetch = ({ method, search }: IParams) => {
  const [dataInfo, setData] = useState<IStateData>({} as IStateData);

  const myFetch = async ({ method, search }: IParams): Promise<void> => {
    const url = `https://api.giphy.com/v1/gifs/${method}?api_key=${
      process.env.NEXT_PUBLIC_API_KEY
    }${search ? `&q=${search}` : ""}`;

    const resp = await fetch(url);
    const { data }: IStateData = await resp.json();
    console.log(data);
    
    if (data.length > 0) {
      const newData = data.map((gif: IData): IData => {
        return {
          id: gif.id,
          title: gif.title,
          trending_datetime: gif.trending_datetime,
          images: {
            fixed_height: {
              url: gif.images.fixed_height.url,
              width: gif.images.fixed_height.width,
              height: gif.images.fixed_height.height
            },
          },
          url: gif.url,
          user:{
            avatar_url:gif?.user?.avatar_url,
            display_name:gif?.user?.display_name,
            username:gif?.user?.username,
            profile_url : gif.user?.profile_url,
            description: gif.user?.description
          }
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
