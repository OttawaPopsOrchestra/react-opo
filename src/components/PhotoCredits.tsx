import React from "react";
import styled from "styled-components/macro";
import { useTranslation } from "react-i18next";

const PhotoCreditStyles = styled.div`
  position: relative;
  width: 100%;
  margin: 2em 0em;

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
