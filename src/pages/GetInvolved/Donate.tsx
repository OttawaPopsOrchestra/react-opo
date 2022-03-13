import { useTranslation } from "react-i18next";
import styled from "styled-components";
import ActionButtonOutline from "../../components/Buttons/ActionButtonOutline";

export default function Donate() {
  const { t } = useTranslation(["Donate", "Concerts"]);

  return (
    <DonateStyles>
      <div className="content">
        <div className="title">{t("header")}</div>
        <div className="preview">{t("preview")}</div>
        <ActionButtonOutline link={"/support-us"} name={t("readMore")} />
      </div>
    </DonateStyles>
  );
}

const DonateStyles = styled.div`
  background-image: url("img/getInvolved/donate/DonationsBanner10.png");
  background-size: 100% 100%;
  color: white;
  height: 450px;
  padding: 30px;
  margin: 50px;

  .content {
    padding: 2em;
    font-family: "Quicksand";

    .title {
      font-size: 32px;
      font-weight: bold;
    }

    .preview {
      padding: 1em 0 2em;
      width: 50%;
      font-size: 20px;
    }

    button {
      padding: 1em 2em;
    }
  }
`;
