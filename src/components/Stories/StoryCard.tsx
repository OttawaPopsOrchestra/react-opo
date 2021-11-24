import React from "react";
import styled from "styled-components/macro";
import { secondaryPurple } from "../../constants/colors";
import { FONT_SIZE_SMALL, BREAKPOINT_TABTOP } from "../../constants/constants";
import { useTranslation } from "react-i18next";
import { getCurrentLanguage } from "../TopBar/LanguageSelector";
import ActionButtonPurple from "../Buttons/ActionButtonPurple";

const StoryCardStyles = styled.div`
  display: flex;
  padding: 2em 0;

  .storyImage {
    width: 400px !important;

    img {
      border-radius: 10px;
      width: 400px;
    }
  }

  .storyInfo {
    padding-left: 3em;
    font-size: ${FONT_SIZE_SMALL}px;

    .storyTitle {
      color: ${secondaryPurple};
      text-transform: uppercase;
      font-weight: 900;
      font-size: ${FONT_SIZE_SMALL + 2}px;
      padding: 0.5em 0 1em;
    }

    .preview,
    .date {
      padding-bottom: 1em;
    }
  }

  @media (max-width: ${BREAKPOINT_TABTOP}px) {
    flex-direction: column;
    justify-content: center;
    align-content: center;
    text-align: center;

    .storyImage {
      margin: 0 auto;
      width: 100% !important;

      img {
        width: 100% !important;
      }
    }

    .storyInfo {
      padding-left: 0;
      width: 85vw;
      margin: 0 auto;
    }
  }
`;

export type StoryCardProps = {
  imgPath: string;
  title: string;
  preview: string;
  author: string;
  translate?: string;
  date: string;
  readMore: string;
};

export default function StoryCard({
  imgPath,
  title,
  preview,
  author,
  translate,
  date,
  readMore,
}: StoryCardProps) {
  const { t } = useTranslation(["Stories", "Concerts"]);
  const isFrench = getCurrentLanguage() === "fr";

  return (
    <StoryCardStyles>
      <div className="storyImage">
        <img src={imgPath} alt={title} />
      </div>
      <div className="storyInfo">
        <div className="storyTitle">{title}</div>
        <div className="preview">{preview}</div>
        <div className="author">
          <b>{t("written")}</b>
          {author}
        </div>
        {isFrench && translate && (
          <div className="translate">
            <b>{t("translated")}</b>
            {translate}
          </div>
        )}
        <div className="date">
          <b>{t("published")}</b>
          {date}
        </div>
        <ActionButtonPurple link={readMore || ""} name={t("readMore")} />
      </div>
    </StoryCardStyles>
  );
}
