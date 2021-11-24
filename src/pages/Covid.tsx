import React from "react";
import styled from "styled-components/macro";
import { useTranslation } from "react-i18next";
import { lighterGrey, primaryMaroon } from "../constants/colors";
import {
  FONT_SIZE_SMALL,
  FONT_SIZE_MEDIUM,
  FONT_SIZE_EXTRA_LARGE,
  BREAKPOINT_MOBILE,
} from "../constants/constants";

const CovidStyles = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .header {
    display: flex;
    justify-content: center;
    align-items: center;

    font-size: ${FONT_SIZE_EXTRA_LARGE}px;
    font-weight: 700;
    background-color: ${lighterGrey};

    width: 100%;
    text-align: center;
    height: 5em;
  }

  .content {
    padding: 1em 10em 5em;

    .subHeader {
      font-size: ${FONT_SIZE_MEDIUM}px;
      font-weight: 700;
      color: ${primaryMaroon};
      padding-top: 1em;
    }

    p,
    li {
      font-size: ${FONT_SIZE_SMALL}px;
    }

    a {
      color: ${primaryMaroon};
      text-decoration: none;
    }

    iframe {
      display: flex;
      margin: 0 auto;
      width: 560px;
      height: 340px;
    }
  }

  @media (max-width: ${BREAKPOINT_MOBILE}px) {
    .content {
      padding: 0;
      width: 90%;
    }
    iframe {
      width: 100% !important;
    }
  }
`;

export default function Covid() {
  const { t } = useTranslation("Covid");

  return (
    <CovidStyles>
      <div className="header">{t("title")}</div>
      <div className="content">
        <b>
          <p style={{ fontSize: "22px" }}>{t("p1")}</p>
        </b>
        <p>{t("p2")}</p>

        <p>
          {t("p3")}
          <a href="/2019-2020/videogamesymphony">{t("p3_vgs")}</a>
          {t("p3_2")}
          <a href="/2019-2020/popsonbroadway">{t("p3_pob")}</a>
          {t("p3_3")}
        </p>

        <p>{t("p4")}</p>

        <div className="subHeader">{t("refund")}</div>
        <p>
          {t("refund-1")}
          <a href="mailto:Nicolas.alain@ottawa.ca">nicolas.alain@ottawa.ca</a>
          {t("refund-2")}
        </p>

        <div className="subHeader">{t("meridian")}</div>
        <p>{t("phone")}</p>
        <p>{t("toll")}</p>

        <div className="subHeader">{t("additional")}</div>
        <p>{t("add_1")}</p>
        <ul>
          <li>{t("li_1")}</li>
          <li>{t("li_2")}</li>
          <li>{t("li_3")}</li>
        </ul>

        <p>
          {t("moreInfo")}
          <a href={t("link")}>{t("linkName")}</a>
          {t("moreInfo_2")}
        </p>

        <p>{t("final")}</p>
        <b>
          <p>{t("sincerely")}</p>
          <p>{t("team")}</p>
        </b>

        <iframe title="Covid-19" src={t("video")}></iframe>
      </div>
    </CovidStyles>
  );
}
