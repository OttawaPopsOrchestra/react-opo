import React from "react";
import styled from "styled-components/macro";
import { FONT_SIZE_SMALL, BREAKPOINT_TABTOP } from "../constants/constants";

export const TITLE_HEIGHT = 100;

const BannerStyles = styled.div`
  position: relative;
  text-align: center;
  color: white;

  .title {
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 2vw;
    background-color: black;
    padding: 0 ${TITLE_HEIGHT}px;
    height: ${TITLE_HEIGHT}px;
    line-height: ${TITLE_HEIGHT}px;
    font-weight: 900;
  }

  img {
    object-fit: cover;
    width: 100%;
    height: ${TITLE_HEIGHT * 4}px;
    border-bottom: 10px black solid;
  }

  @media (max-width: ${BREAKPOINT_TABTOP}px) {
    .title {
      font-size: ${FONT_SIZE_SMALL}px;
      padding: 0 ${TITLE_HEIGHT / 4}px;
      height: ${TITLE_HEIGHT / 2}px;
      line-height: ${TITLE_HEIGHT / 2}px;
      font-weight: 700;
      width: 70%;
    }

    img {
      height: ${TITLE_HEIGHT * 2.5}px;
    }
  }
`;

export default function Banner({
  imgPath,
  title,
}: {
  imgPath: string;
  title?: string;
}) {
  return (
    <BannerStyles>
      <img src={imgPath} alt="Concert" />
      {title && <div className="title">{title}</div>}
    </BannerStyles>
  );
}
