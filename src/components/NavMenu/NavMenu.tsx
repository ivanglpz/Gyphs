import { FC } from "react";
import * as S from "../../styles/components/NavMenu/NavMenuStyle";
import Link from "next/link";


const NavMenu: FC = () => {
  return (
    <S.StyledMenu>
      <S.MenuNavBar>
        <svg
          width="40"
          height="40"
          viewBox="0 0 37 37"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0)">
            <path
              d="M2.04224 16.3425L20.427 34.7273L34.7273 20.427L22.981 8.68069V12.7682L30.6413 20.4286L20.4285 30.6413L6.12979 16.3425L9.70409 12.7682L9.70256 8.68222L2.04224 16.3425ZM10.2143 8.17051L16.3425 14.2988L22.4708 8.17051L20.4285 6.12827L18.3848 8.17204L16.3425 6.1298L14.3003 8.17204L12.2565 6.12827"
              fill="#3246D3"
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
        <h1> Gyphs</h1>
      </S.MenuNavBar>
      <S.MenuOpts>
      <ul>
          <li>
            <Link href="/" passHref>
              <a>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    // stroke="#2C2C2C"
                   fill="#2C2C2C"
                   d="M5 22H19C19.5304 22 20.0391 21.7893 20.4142 21.4142C20.7893 21.0391 21 20.5304 21 20V11C21.0008 10.8684 20.9755 10.7379 20.9258 10.6161C20.876 10.4943 20.8027 10.3834 20.71 10.29L12.71 2.29C12.5226 2.10375 12.2692 1.99921 12.005 1.99921C11.7408 1.99921 11.4874 2.10375 11.3 2.29L3.3 10.29C3.20551 10.3826 3.13034 10.4931 3.07885 10.6149C3.02735 10.7368 3.00055 10.8677 3 11V20C3 20.5304 3.21071 21.0391 3.58579 21.4142C3.96086 21.7893 4.46957 22 5 22ZM10 20V15H14V20H10ZM5 11.41L12 4.41L19 11.41V20H16V15C16 14.4696 15.7893 13.9609 15.4142 13.5858C15.0391 13.2107 14.5304 13 14 13H10C9.46957 13 8.96086 13.2107 8.58579 13.5858C8.21071 13.9609 8 14.4696 8 15V20H5V11.41Z"
                  />
                </svg>
                <p>Home</p>
              </a>
            </Link>
          </li>
          <li>
            <Link href="/Saved">
              <a>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7 3C4.239 3 2 5.216 2 7.95C2 10.157 2.875 15.395 11.488 20.69C11.6423 20.7839 11.8194 20.8335 12 20.8335C12.1806 20.8335 12.3577 20.7839 12.512 20.69C21.125 15.395 22 10.157 22 7.95C22 5.216 19.761 3 17 3C14.239 3 12 6 12 6C12 6 9.761 3 7 3Z"
                    stroke="#2C2C2C"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <p>Saved</p>
              </a>
            </Link>
          </li>
          <li>
            <Link href="/settings">
              <a>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.75 1.5V4.5L8.25 5.25L6 3L3 6L5.25 8.25L4.5 9.75H1.5V14.25H4.5L5.25 15.75L3 18L6 21L8.25 18.75L9.75 19.5V22.5H14.25V19.5L15.75 18.75L18 21L21 18L18.75 15.75L19.5 14.25H22.5V9.75H19.5L18.75 8.25L21 6L18 3L15.75 5.25L14.25 4.5V1.5H9.75Z"
                    stroke="#2C2C2C"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
                    stroke="#2C2C2C"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <p>Settings</p>
              </a>
            </Link>
          </li>
        </ul>
      </S.MenuOpts>
    </S.StyledMenu>
  );
};

export default NavMenu;
