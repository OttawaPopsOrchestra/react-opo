import React from "react";
import styled from "styled-components/macro";
import { useTranslation } from "react-i18next";
import { BREAKPOINT_MOBILE } from "../constants/constants";

const PhotoCreditStyles = styled.div`
  position: relative;
  width: 100%;
  margin: 2em 0em;
  font-family: "Helvetica", Helvetica, Arial, sans-serif;

  img {
    display: block;
    width: 100%;
    height: auto;
  }

  .credit {
    position: absolute;
    bottom: 33px;
    background: rgb(0, 0, 0);
    background: rgba(0, 0, 0, 0.5); /* Black see-through */
    color: #f1f1f1;
    width: -webkit-fill-available;
    transition: 0.5s ease;
    opacity: 0;
    color: white;
    font-size: 20px;
    padding: 20px;
    text-align: center;
  }

  &:hover .credit {
    opacity: 1;
  }

  @media (max-width: ${BREAKPOINT_MOBILE}px) {
    width: 90vw;
    .credit {
      font-size: 14px;
      padding: 10px;
    }
  }
`;

export default ({ imgPath, credit }: { imgPath: string; credit: string }) => {
  const { t } = useTranslation("Stories");

  return (
    <PhotoCreditStyles>
      <img src={imgPath} width="100%" alt={credit} />
      <div className="credit">
        {t("photoCredits")}
        {credit}
      </div>
    </PhotoCreditStyles>
  );
};
