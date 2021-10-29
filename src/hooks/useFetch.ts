import { IData, IParams, IStateData } from "./types";

const useFetch = async ({ method, search, limit }: IParams) => {
  const url = `https://api.giphy.com/v1/gifs/${method}?api_key=${
    process.env.NEXT_PUBLIC_API_KEY
  }${limit === "none" ? "" : `&limit=${limit}`}${search ? `&q=${search}` : ""}`;
  console.log(url);

  const resp = await fetch(url);
  const { data }: IStateData = await resp.json();

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
            height: gif.images.fixed_height.height,
          },
        },
        url: gif.url,
        user: {
          avatar_url: gif?.user?.avatar_url,
          display_name: gif?.user?.display_name,
          username: gif?.user?.username,
          profile_url: gif.user?.profile_url,
          description: gif.user?.description,
        },
      };
    });
    if (search) {
      return { data: newData, result: search, mount: true };
    } else {
      return { data: newData, result: method, mount: true };
    }
  } else {
    return { data: data, result: search, mount: false };
  }
};

export default useFetch;
