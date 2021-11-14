import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Navigation } from "swiper";
import { SwiperSlide } from "swiper/react";
import about from "../assets/information.json";
import Gif from "../components/Gif/Gif";
import GHead from "../components/Head/Head";
import Symbol from "../components/Svg/NavBarIcons";
import { IStateData } from "../hooks/types";
import useFetchGifs from "../hooks/useFetchGifs";
import { colors } from "../styles/colors";
import * as S from "../styles/pages/IndexStyle";
import { IAbout } from "../types/types";

const Index = () => {
  const [{ data }, setData] = useState<IStateData>({} as IStateData);
  const useDataGif = useFetchGifs({ method: "trending", limit: 30 });
  useEffect(() => {
    setData(useDataGif);
  }, [useDataGif]);

  return (
    <main>
      <GHead title="Gyphs" />
      <S.NavStyle>
        <Symbol color={colors.blue} size={{ width: "56px", height: "56px" }} />
        <h1>Gyphs</h1>
      </S.NavStyle>
      <S.HomeBox>
        <S.Home>
          <h2>Find your favorites gifs and have fun</h2>
          <p>find all kinds of gifs, and share it with your friends.</p>
          <Link href="/Login" passHref>
            <S.ButtonLink>Start</S.ButtonLink>
          </Link>
        </S.Home>
        <S.HomeSlider>
          <S.HomeSwiper
            className="mySwiper"
            modules={[Navigation]}
            navigation
            spaceBetween={2}
            slidesPerView={2}
          >
            {data?.map((gif) => (
              <SwiperSlide key={gif.id}>
                <Gif gif={{ title: gif.title, images: gif.images }} />
              </SwiperSlide>
            ))}
          </S.HomeSwiper>
        </S.HomeSlider>
      </S.HomeBox>
      <S.AboutBox>
        {about.map((info: IAbout) => (
          <S.About key={info.id}>
            <h3>{info.title}</h3>
            <p>{info.text}</p>
            <Image
              src={`/svg/${info.url}`}
              alt={info.title}
              height={64.29}
              width={46.68}
            />
          </S.About>
        ))}
      </S.AboutBox>
      <S.FooterBox>
        <Image
          src="/profile/Whil-border.png"
          alt="WhilGithub"
          height={183}
          width={250}
        />
        <h4>Powered by Whil</h4>
        <p>All rights reserved 2021</p>
      </S.FooterBox>
    </main>
  );
};

export default Index;
