import { useTranslation } from "react-i18next";
import styled from "styled-components/macro";
import { lighterGrey, primaryMaroon } from "../../constants/colors";
import { BREAKPOINT_MOBILE } from "../../constants/constants";

export default function JoinOurBoard() {
  const { t } = useTranslation("JoinOurBoard");

  return (
    <JoinOurBoardStyles>
      <div className="header">{t("header")}</div>
      <p>{t("p1")}</p>
      <p>{t("p2")}</p>
      <p>{t("p3")}</p>
      <div className="assets">
        <div className="assetHeader">{t("asset")}</div>
        <ul>
          <li>{t("li1")}</li>
          <li>{t("li2")}</li>
          <li>{t("li3")}</li>
          <li>{t("li4")}</li>
          <li>{t("li5")}</li>
        </ul>
      </div>
      <p>{t("p4", { postProcess: "markdown-jsx" })}</p>
    </JoinOurBoardStyles>
  );
}

const JoinOurBoardStyles = styled.div`
  font-family: "Quicksand";
  width: 60%;
  margin: 0 auto;
  padding: 4em 0;
  font-size: 20px;

  .header {
    color: ${primaryMaroon};
    font-size: 36px;
    font-weight: bold;
  }

  a {
    color: ${primaryMaroon};
    text-decoration: none;
    font-weight: bold;
  }

  .assets {
    background-color: ${lighterGrey};
    padding: 2em 2em 1em;
    border-radius: 25px;
    width: 80%;
    margin: 2em auto;
    box-shadow: 15px 15px rgba(191, 191, 191, 0.8);

    .assetHeader {
      color: ${primaryMaroon};
      font-size: 24px;
    }
  }

  @media (max-width: ${BREAKPOINT_MOBILE}px) {
    width: 85%;
    padding: 2em 0;
    font-size: 18px;

    .assets {
      width: 75%;
      box-shadow: 10px 10px rgba(191, 191, 191, 0.8);

      .assetHeader {
        font-size: 20px;
      }
    }
  }
`;
