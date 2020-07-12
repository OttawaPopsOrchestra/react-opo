import React from "react";
import styled from "styled-components/macro";
import { useTranslation } from "react-i18next";
import { secondaryPurple } from "../../constants/colors";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import ActionButtonPurple from "../Buttons/ActionButtonPurple";
import MusicNoteIcon from "@material-ui/icons/MusicNote";
import {
  FONT_SIZE_SMALL,
  FONT_SIZE_MEDIUM,
  BREAKPOINT_MOBILE,
} from "../../constants/constants";

const StorySingleStyles = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0em auto;
  width: 100%;
  max-width: 64rem;
  font-family: FuturaPTMedium, "Trebuchet MS", Arial, sans-serif !important;

  .title {
    padding-top: 1em;
    color: ${secondaryPurple};
    font-size: 2em;
    text-align: center;
    font-weight: 700;
  }

  .intro {
    font-weight: 400;
    margin-bottom: 2em;
    font-size: ${FONT_SIZE_SMALL}px;
  }

  .info {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin-bottom: 1rem;

    .MuiSvgIcon-root {
      background-color: lightgrey;
      padding: 10px;
      border-radius: 50%;
      color: grey;
      margin: 0 5px;
    }
  }

  img {
    width: 100%;
    padding-bottom: 2em;
  }

  .listenButton {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  button {
    width: 50%;
    margin: 0 auto 1em;
  }

  .content {
    font-size: ${FONT_SIZE_SMALL - 2}px;
    font-family: "Helvetica", Helvetica, Arial, sans-serif;

    a {
      color: ${secondaryPurple};
      text-decoration: none;
    }

    .header {
      color: ${secondaryPurple};
      padding: 1em 0 0.5em;
      font-weight: 700;
      font-size: ${FONT_SIZE_MEDIUM}px;
    }
  }

  @media (max-width: ${BREAKPOINT_MOBILE}px) {
    width: 90vw;

    button {
      width: 100%;
    }
  }
`;

type StorySingleProps = {
  title: string;
  date: string;
  author: string;
  intro?: string;
  imgPath: any;
  content: any;
};

export default ({
  title,
  date,
  author,
  intro,
  imgPath,
  content,
}: StorySingleProps) => {
  const { t } = useTranslation("Stories");
  return (
    <StorySingleStyles>
      <div className="title">{title}</div>
      <div className="info">
        {date}
        <PersonOutlineIcon />
        {author}
      </div>
      {intro && <div className="intro">{intro}</div>}
      {typeof imgPath === "string" ? (
        <img src={imgPath} alt={title} />
      ) : (
        imgPath
      )}
      <ActionButtonPurple
        link="#playlist"
        name={
          <div className="listenButton">
            {t("listen")}
            <MusicNoteIcon />
          </div>
        }
      />
      <div className="content">{content()}</div>
      {/* TODO SETUP NEWSLETTER LINK WHEN DONE IN FOOTER */}
      {/* <div className="newsletter"></div> */}
    </StorySingleStyles>
  );
};
