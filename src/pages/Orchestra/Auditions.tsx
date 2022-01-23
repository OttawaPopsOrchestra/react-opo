import { useTranslation } from "react-i18next";
import styled from "styled-components/macro";
import Banner from "../../components/Banner";
import ActionButton from "../../components/Buttons/ActionButton";
import { lightGrey, primaryMaroon } from "../../constants/colors";
import { FONT_SIZE_SMALL } from "../../constants/constants";

const AuditionStyles = styled.div`
  background-color: ${lightGrey};
  font-family: "Quicksand", sans-serif;

  a {
    color: ${primaryMaroon};
    text-decoration: none;
  }

  .content {
    display: flex;
    flex-direction: column;
    width: 80%;
    margin: 0 auto;
    padding: 5em 0;
    font-size: ${FONT_SIZE_SMALL}px;
  }

  .focusAndRegister {
    display: grid;
    grid-template-columns: 70% 20%;
    grid-column-gap: 2em;
    padding-bottom: 2em;

    .focus {
      font-size: ${FONT_SIZE_SMALL + 2}px;
      font-weight: 700;
      border: 2px solid ${primaryMaroon};
      color: ${primaryMaroon};
      padding: 1em;
      border-radius: 25px;
      text-align: center;
      box-shadow: 10px 10px 8px grey;
    }

    button {
      background-color: white;
    }
  }
`;

export default function Auditions() {
  const { t } = useTranslation("Auditions");

  return (
    <>
      <Banner imgPath="img/Auditions.jpg" title={t("title")} />
      <AuditionStyles>
        <div className="content">
          <div className="focusAndRegister">
            <div className="focus">{t("p1")}</div>
            <ActionButton name={t("regHere")} link="" />
          </div>
          <p>{t("p2")}</p>
          <p>{t("p3")}</p>
          <p>{t("p4", { postProcess: "markdown-jsx" })}</p>
          <hr />
          <b>
            <p>{t("p5")}</p>
          </b>
        </div>
      </AuditionStyles>
    </>
  );
}
