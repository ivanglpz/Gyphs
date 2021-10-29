import { FC, useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";
import { colors } from "../styles/colors";
import Link from "next/link";
import { SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import { IStateData } from "../hooks/types";
import Gif from "../components/Gif/Gif";
import about from "../assets/information.json";
import { IAbout } from "../types/types";
import Image from "next/image";
import Head from "next/head";
import * as S from '../styles/pages/IndexStyle'

interface Props { }

const index: FC = (props: Props) => {
  const [data, setData] = useState<IStateData>({} as IStateData);

  useEffect(() => {
    useFetch({ method: "trending" }).then((data) => setData(data));
  }, []);
  return (
    <main>
      <Head>
        <title>Gyphs</title>
      </Head>
      <S.NavStyle>
        <svg
          width="47.34"
          height="58"
          viewBox="0 0 37 37"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0)">
            <path
              d="M2.04224 16.3425L20.427 34.7273L34.7273 20.427L22.981 8.68069V12.7682L30.6413 20.4286L20.4285 30.6413L6.12979 16.3425L9.70409 12.7682L9.70256 8.68222L2.04224 16.3425ZM10.2143 8.17051L16.3425 14.2988L22.4708 8.17051L20.4285 6.12827L18.3848 8.17204L16.3425 6.1298L14.3003 8.17204L12.2565 6.12827"
              fill={`${colors.newBlue}`}
            />
          </g>
          <defs>
            <clipPath id="clip0">
              <rect
                width="26"
                height="26"
                fill="white"
                transform="translate(0 18.3848) rotate(-45)"
              />
            </clipPath>
          </defs>
        </svg>
        <h1>Gyphs</h1>
      </S.NavStyle>
      <S.HomeBox>
        <S.Home>
          <h2>Find your favorites gifs and have fun</h2>
          <p>find all kinds of gifs, and share it with your friends.</p>
          <Link href={"/Home"}>
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
            {data?.data?.map((gif) => (
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

export default index;
