import React, { FC, useContext, useState } from "react";
import Image from "next/image";
import * as S from "../../styles/components/GifDetail/GifDetailStyle";
import Gif from "../Gif/Gif";
import socialMedia from "./data.json";
import { IGifDetails } from "./types";
import MyContext from "../../hooks/useTheme";
import { colors } from "../../styles/colors";

interface IAttribute {
  name: string;
  social: string;
  url: string;
  urlTitle: string;
}

const GifDetail: FC<IGifDetails> = ({ props, setDetailGif }) => {
  const { theme } = useContext(MyContext);

  const handleUrl = (props: IAttribute) => {
    switch (props.name) {
      case "whatsapp":
        window.location.href = `${props.social}${props.urlTitle} ${props.url}`;
        break;
      case "twitter":
        window.location.href = `${props.social}${props.url}&text=${props.urlTitle}`;
        break;

      case "facebook":
        window.location.href = `${props.social}${props.url}`;
        break;

      default:
        break;
    }
  };
  return (
    <S.MainDetails>
      <S.Card theme={theme}>
        <S.CardNav>
          <h2>Details</h2>
          <button
            style={{
              cursor: "pointer",
              background: "transparent",
              border: "none",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            onClick={() => setDetailGif({ mount: false, props: {} })}
          >
            <svg
              width="30"
              height="31"
              viewBox="0 0 30 31"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.5 15.75L24 25.5M5 25.5L14.5 15.75L5 25.5ZM24 6L14.4982 15.75L24 6ZM14.4982 15.75L5 6L14.4982 15.75Z"
                stroke={theme === "light" ? colors.blackRaisin : "white"}
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </S.CardNav>
        <div>
          <Gif gif={{ title: props.title, images: props.images }} />
          <div style={{ margin: "10px 0" }}>
            {socialMedia.map((social) => (
              <button
                formTarget="blank"
                onClick={() =>
                  handleUrl({
                    name: social.name,
                    social: social.url,
                    url: props.url,
                    urlTitle: props.title,
                  })
                }
              >
                <Image
                  key={social.id}
                  src={`/socialMedia/${social.name}.svg`}
                  alt={social.name}
                  width={35}
                  height={35}
                />
              </button>
            ))}
          </div>
          <h3>{props.title}</h3>
        </div>
        {props.user?.username && (
          <div style={{ display: "flex" }}>
            <img
              style={{
                width: "50px",
                height: "50px",
                background: "transparent",
                borderRadius: "10px",
              }}
              src={props.user.avatar_url}
              alt={props.user.display_name}
            />
            <div style={{ margin: "0px" }}>
              <h4 style={{ margin: "0px" }}>
                {props?.user?.display_name?.slice(0, 25)}
              </h4>
              <p style={{ margin: "0px" }}>
                {props?.user?.description?.slice(0, 25)}
              </p>
            </div>
          </div>
        )}
      </S.Card>
    </S.MainDetails>
  );
};

export default GifDetail;
