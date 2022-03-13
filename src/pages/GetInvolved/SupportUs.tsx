import { Grid } from "@mui/material";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import ActionButton from "../../components/Buttons/ActionButton";
import { primaryMaroon } from "../../constants/colors";

export default function SupportUs() {
  const { t } = useTranslation(["Donate", "Concerts"]);

  return (
    <SupportUsStyles container spacing={5}>
      <Grid item xs={12} md={6}>
        <img
          src="img/getInvolved/donate/donate.jpg"
          width="100%"
          alt="Donate"
        ></img>
      </Grid>
      <Grid item xs={12} md={6} className="body">
        <p>
          <b>{t("p1")}</b>
        </p>
        <p>{t("p2")}</p>
        <p>{t("p3", { postProcess: "markdown-jsx" })}</p>
        <ActionButton link={t("link")} name={t("header")} />
      </Grid>
    </SupportUsStyles>
  );
}

const SupportUsStyles = styled(Grid)`
  font-family: "Quicksand";
  margin-top: 0;
  padding: 50px 80px 5em;

  img {
    border-radius: 20px;
    width: 100%;
  }

  .body {
    padding: 4em;
    font-size: 20px;
  }

  a {
    color: ${primaryMaroon};
    text-decoration: none;
    font-weight: bold;
  }

  button {
    margin-top: 1em;
    padding: 1em 2em;
  }
`;
