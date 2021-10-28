import React, { Dispatch, FC, SetStateAction } from "react";
import { IData } from "../../hooks/types";
import { IDetailGif } from "../../pages/Search";
import Gif from "../Gif/Gif";
import styled from '@emotion/styled'

interface Props {
    props: IData;
    setDetailGif: Dispatch<SetStateAction<IDetailGif>>;
}

const socialMedia = ["url", "whatsapp", "twitter", "insta", "facebook"]

const MainDetails = styled.main`
    background-color: rgba(0,0,0,0.5);
    height: 100%;
    width:100%;
    position:absolute;
    z-index:1;
    display: flex;
    justify-content: flex-end;

    `
const Card = styled.div`
    display: flex;
    flex-direction: column;
    background:white;
    width: 400px;
    padding:20px;
    @media (max-width:425px){
        width: 100%;
        border-radius:  10px 10px 0 0 ;
        margin: 100px 0 0 0;
    }
`

const CardNav = styled.div`
    display: flex;
    justify-content: space-between;
    align-items:center;
`
const handleCopy = (url: string) => {
    navigator.clipboard.writeText(url)
}
const GifDetail: FC<Props> = ({ props, setDetailGif }) => {
    return (
        <MainDetails>
            <Card>
                <CardNav>
                    <h2>Details</h2>
                    <button style={{ cursor: "pointer", background: "transparent", border: "none", display: "flex", justifyContent: "center", alignItems: "center" }} onClick={() => setDetailGif({ mount: false, props: {} })}>
                        <svg width="30" height="31" viewBox="0 0 30 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14.5 15.75L24 25.5M5 25.5L14.5 15.75L5 25.5ZM24 6L14.4982 15.75L24 6ZM14.4982 15.75L5 6L14.4982 15.75Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </button>
                </CardNav>
                <div>
                    <Gif gif={{ title: props.title, images: props.images }} />
                    <div style={{ margin: "10px 0" }}>
                        {socialMedia.map(media => (
                            <button onClick={() => handleCopy(props.url)} style={{ "cursor": "pointer", "border": "none", "background": "none", margin: "0 10px 0 0" }}>
                                <img key={media} src={`/socialMedia/${media}.svg`} alt={media} />
                            </button>
                        ))}
                    </div>
                    <h3>{props.title}</h3>
                </div>
                {props.user?.username &&
                    <div style={{ display: "flex" }}>
                        <img style={{ width: "50px", height: "50px", background: "transparent" }} src={props.user.avatar_url} alt={props.user.display_name} />
                        <h4>{props.user.display_name}</h4>
                        <p>{props.user.description}</p>
                    </div>
                }
            </Card>
        </MainDetails>
    );
};

export default GifDetail;
