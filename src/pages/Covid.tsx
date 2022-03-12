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

export default function Covid() {
  const { t } = useTranslation("Covid");

  return (
    <CovidStyles>
      <div></div>
      <div className="header">{t("title")}</div>
      <div className="content">
        <i>{t("updated")}</i>
        <b>
          <p style={{ fontSize: "22px" }}>{t("p1")}</p>
        </b>
        <p>{t("p2", { postProcess: "markdown-jsx" })}</p>
        <p>{t("p3")}</p>
        <p>{t("p4", { postProcess: "markdown-jsx" })}</p>

        <div className="dates">
          <div className="subHeader">{t("dates")}</div>
          <ul>
            <li>{t("dates-1", { postProcess: "markdown-jsx" })}</li>
            <li>{t("dates-2", { postProcess: "markdown-jsx" })}</li>
          </ul>
          <p>{t("dates-p", { postProcess: "markdown-jsx" })}</p>
        </div>

        <div className="subHeader">{t("refund")}</div>
        <p>{t("refund-1", { postProcess: "markdown-jsx" })}</p>

        <div className="subHeader">{t("meridian")}</div>
        <p>{t("phone")}</p>
        <p>{t("toll")}</p>

        <div className="subHeader">{t("additional")}</div>
        <p>{t("add_1", { postProcess: "markdown-jsx" })}</p>
        <ul>
          <li>{t("li_1")}</li>
          <li>{t("li_2")}</li>
          <li>{t("li_3")}</li>
        </ul>

        <p>{t("p5", { postProcess: "markdown-jsx" })}</p>
        <b>
          <p>{t("sincerely")}</p>
          <p>{t("team")}</p>
        </b>
      </div>
    </CovidStyles>
  );
}

const CovidStyles = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: "Quicksand";

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
    padding: 1em 0 5em;
    width: 60%;

    .subHeader {
      font-size: ${FONT_SIZE_MEDIUM}px;
      font-weight: 700;
      color: ${primaryMaroon};
      padding-top: 1em;
    }

    .dates {
      color: #920503;
      background-color: #efefef;
      margin: 0 auto;

      padding: 2em;
      border-radius: 25px;
      width: 90%;
      margin: 2em auto;
      box-shadow: 15px 15px rgba(191, 191, 191, 0.8);
    }

    p,
    li {
      font-size: ${FONT_SIZE_SMALL}px;
    }

    a {
      color: ${primaryMaroon};
      text-decoration: none;
    }
  }

  @media (max-width: ${BREAKPOINT_MOBILE}px) {
    .content {
      padding: 1em 0 0;
      width: 90%;

      .dates {
        padding: 1.5em;
        width: 85%;
        margin: 1em auto;
        box-shadow: 5px 5px rgba(191, 191, 191, 0.8);
      }
    }
  }
`;
