import styled from '@emotion/styled';
import { FC, useState } from 'react';
import GifsContent from '../components/GifsContent/GifsContent';
import NavMenu from '../components/NavMenu/NavMenu';
import SearchBar from '../components/SearchBar/SearchBar';
import Loading from '../components/Svg/Loading';
import Tags from '../components/Tags/Tags';
import { IData, IParams, IStateData } from '../hooks/types';
import { colors } from '../styles/colors';
import { StyleGifsContent } from '../styles/components/GifsContent/GifsContentStyle';
export interface IFetch {
  method: string;
  search?: string;
}

export const StyledApp = styled.main`
  display: flex;
  @media (max-width:768px) {
    display: block;

  }
`;

const Gifs = styled.div`
  padding: 40px;
  margin: 0 0 0 210px;
  width: 100%;
  @media(max-width:767px){
    padding: 20px;
    margin: 0px;
    display: flex;
    flex-direction:column;
    align-items: center;
  }
`;
const tags = ["Red Velvet","Queendom", "Maroon 5", "Elton John", "John Legend", "Master Chief"];

const Search: FC = () => {
  const [dataInfo, setData] = useState<IStateData>({} as IStateData);
  const [search, setSearch] = useState<string>("");

  const useFetch = async ({ method, search }: IParams): Promise<void> => {
    const url = `https://api.giphy.com/v1/gifs/${method}?api_key=${process.env.NEXT_PUBLIC_API_KEY
      }${search ? `&q=${search}` : ""}`;

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
              height: gif.images.fixed_height.height
            },
          },
          url: gif.url,
          user: {
            avatar_url: gif?.user?.avatar_url,
            display_name: gif?.user?.display_name,
            username: gif?.user?.username,
            profile_url: gif.user?.profile_url,
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

  const handleTags = (tag: string): void => {
    setSearch(tag);
    useFetch({ method: "search", search: tag });
    setData({ ...dataInfo, mount: false });
  };

  const handleSubmit = (event: { preventDefault: () => void }): void => {
    event.preventDefault();
    if (!search) {
      useFetch({ method: "trending" });
      setData({ ...dataInfo, mount: false });
    } else {
      useFetch({ method: "search", search: search });
      setData({ ...dataInfo, mount: false });
    }
  };
  return (
    <StyledApp>
      <NavMenu />
      <Gifs>
        <nav>
          <SearchBar
            search={search}
            handleSubmit={handleSubmit}
            setSearch={setSearch}
          />
        </nav>
        <div>
          #Tags
          <div>
            {tags.map((tag) => (
                <Tags position={false} key={tag} objs={tag} handleTags={()=>handleTags(tag)} />
              ))}
          </div>
        </div>
        {dataInfo.mount ? (
          <>
            {dataInfo.result && <p>{dataInfo.result}</p>}
            <StyleGifsContent>
              <GifsContent data={dataInfo.data} />
            </StyleGifsContent>
          </>
        ) : (
          <Loading color={{ colorPrimary: colors.capri, colorSecondary: colors.blueBlizzard }} />
        )}
      </Gifs>
    </StyledApp>
  );
};

export default Search;
